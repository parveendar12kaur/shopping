import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import ScrollableTabs  from "./ScrollableTabs";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class visualization extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableTabs />
    );
  }
}


export default visualization;