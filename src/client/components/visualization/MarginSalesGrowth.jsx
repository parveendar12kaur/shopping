import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SalesBar from "./SalesBar";

let am4core = null;
let am4charts = null;
let am4themesAnimated = null;
if (process.browser) {
  am4core = require("@amcharts/amcharts4/core");
  am4charts = require("@amcharts/amcharts4/charts");
  am4themesAnimated = require("@amcharts/amcharts4/themes/animated");
  am4core.useTheme(am4themesAnimated.default);
  am4core.options.commercialLicense = true;
}

import chartData from "./data.json";

class MarginSalesGrowth extends PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  drawChart() {
    const chart = am4core.create("marginsalesdiv", am4charts.XYChart);

    chart.data = chartData.data;

    /*chart.colors.list = [
      am4core.color("#4C78A9"),
      am4core.color("#F48E13")
    ];*/

    const valueAxisX = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxisX.title.text = "Total Sales";
    valueAxisX.min = 0;
    valueAxisX.max = 700;
    valueAxisX.strictMinMax = true;
    valueAxisX.renderer.grid.template.disabled = true;
    valueAxisX.renderer.line.strokeOpacity = 1;
    valueAxisX.renderer.line.strokeWidth = 1;
    valueAxisX.renderer.labels.template.adapter.add("text", (text) => `$${text}M`);

    const valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxisY.title.text = "Net Profit %";
    valueAxisY.min = 4;
    valueAxisY.max = 20;
    valueAxisY.strictMinMax = true;
    valueAxisY.renderer.gridContainer.disabled = true;
    valueAxisY.renderer.line.strokeOpacity = 1;
    valueAxisY.renderer.line.strokeWidth = 1;
    valueAxisY.renderer.labels.template.adapter.add("text", (text) => `${text}%`);

    function createSeries(field,  name, color) {
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueX = field;
      series.dataFields.valueY = name;
      series.dataFields.value = field;
      series.strokeOpacity = 0;
      series.strokeWidth = 3;

      const bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.fill = am4core.color(color);
      bullet.circle.stroke = am4core.color(color);
      bullet.tooltipText = `Parent Vendor Name: [bold]{name}[/] \n Year: [bold]${field}[/] \n Total Sales: [bold]$ {valueX}M[/] \n Final Margin: [bold]{valueY}%[/]` ;

      const labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{name}";
      labelBullet.label.dy = 30;

      series.heatRules.push({ target: bullet.circle, min: 10, max: 20, property: "radius" });
    }

    chartData.year.map((record, index) => {
      createSeries(record.value, `${record.value}margin`, record.color);
    })

    this.chart = chart;
  }

  render () {

    return (
      <div>
        <br />
        <br />
        <SalesBar sales2017="3,456,768,768" sales2016="2,345,654,345" yoySales="12.5%" />
        <div id="marginsalesdiv"  style={{ width: "95%", height: "500px" }} />;
      </div>
      
    );
  }
}

MarginSalesGrowth.propTypes = {

};

MarginSalesGrowth.defaultProps = {
  
}

export default MarginSalesGrowth;
