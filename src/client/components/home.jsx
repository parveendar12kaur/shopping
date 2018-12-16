import React from "react";
import "../styles/normalize.css";
import "../styles/raleway.css";
import general from '../styles/general.css';

import Layout from "./commonComponents/appLayout/Layout";
import Footer from "./commonComponents/footer/Footer";

import {connect} from "react-redux";
import PropTypes from "prop-types";

import 'typeface-roboto';
import BusinessOverviewFilters from "./filters/BusinessOverviewFilters";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={general.grayBackgroud}>
        <div>
          <div>
            <Layout/>
          </div>
          <div>
            {this.props.children}
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

Home.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Home);
