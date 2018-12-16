import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MarginSalesGrowth from './MarginSalesGrowth';
import SalesShareGrowth from './SalesShareGrowth';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabs extends React.Component {
  

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.handleScroll = this.handleScroll.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.state = {
      value: 0
    };
  }

  componentDidMount(){
    console.log(document);
    this.setState({value : 0});
  }

  componentDidUpdate(){
    console.log(document);
    var element = document.querySelector("#scrollableTabs header div");
    element.lastElementChild.lastElementChild.onclick = this.scrollRight;
  }

  scrollRight(){
    this.setState({ value: 5 });
    var element = document.querySelector("#scrollableTabs header div");
    setTimeout(() => {
      element.lastElementChild.firstElementChild.onclick = this.scrollLeft;
    }, 500);
  }

  scrollLeft(){
    this.setState({ value: 0 });
  }

  handleChange(event, value) {
    this.setState({ value });
  };

  handleScroll(event){
    /*if(event.target){
      var scrollDiff = event.target.scrollWidth - event.target.clientWidth;
      var scrollLeft = event.target.scrollLeft;
      if(scrollLeft === 0){
        this.setState({value: 0});
      }else if(this.state.value !== 4 && scrollLeft === scrollDiff){
        this.setState({value: 5});
      }  
    }*/
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div id="scrollableTabs">
      <div className={classes.root}>
        <AppBar  position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="SALES SHARE VS MARGIN" />
            <Tab label="CATEGORY OVERVIEW" />
            <Tab label="ITEM COST VS SKU COUNT PARETO FOR 2017" />
            <Tab label="SALES SHARE VS SALES GROWTH" />
            <Tab label="MARGIN GROWTH VS SALES GROWTH" />
            <Tab label="UNIT GROWTH VS SALES GROWTH" />
            <Tab label="SHARE OR FORMAT" />
            <Tab label="ITEM LEVEL SALES COMPARISON" />
            <Tab label="PROFIT VS LINEAR SPACE" />
            <div style={{minWidth: '300px'}}></div>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Load SALES SHARE VS MARGIN Module</TabContainer>}
        {value === 1 && <TabContainer>Load CATEGORY OVERVIEW module</TabContainer>}
        {value === 2 && <TabContainer>ITEM COST VS SKU COUNT PARETO FOR 2017</TabContainer>}
        {value === 3 && <SalesShareGrowth />}
        {value === 4 && <MarginSalesGrowth />}
        {value === 5 && <TabContainer>UNIT GROWTH VS SALES GROWTH</TabContainer>}
        {value === 6 && <TabContainer>SHARE OR FORMAT</TabContainer>}
        {value === 7 && <TabContainer>ITEM LEVEL SALES COMPARISON</TabContainer>}
        {value === 8 && <TabContainer>PROFIT VS LINEAR SPACE</TabContainer>}

      </div>
    </div>
    );
  }
}

ScrollableTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabs);