import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import Filter from "./filter";
import {getDepartment, getYear, getCategory, getVendor, resetFilter} from "../../actions";
import { FILTER_UPDATE, FILTER_DISABLE, FILTER_RESET } from '../../dictionary'

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

class SimpleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.applyCriteria = this.applyCriteria.bind(this);
  }

  componentDidMount(){
    this.initializeData();
  }

  initializeData(){
    const {dispatch} = this.props;
    dispatch(getDepartment());
    dispatch(getVendor());
    dispatch(getYear());
  }

  applyCriteria(e){
    const {dispatch} = this.props;
    dispatch(resetFilter());
  }

  render() {
    const {classes, department, category, vendor, year, onFilterChange } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <Filter classes={classes} filterData={department} onFilterChange={onFilterChange} />
        <Filter classes={classes} filterData={category} onFilterChange={onFilterChange} />
        <Filter classes={classes} filterData={vendor} onFilterChange={onFilterChange} />
        <Filter classes={classes} filterData={year} onFilterChange={onFilterChange} />
        <Button variant="contained" color="primary" onClick={e => this.applyCriteria(e)}>Apply Criteria</Button>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const department = state.filter.dept;
  const category = state.filter.cat;
  const vendor = state.filter.vendor;
  const year = state.filter.year;
  return {
    department : department,
    category: category,
    vendor:  vendor,
    year: year
  };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onFilterChange: (filterId, value) => {
            if(filterId === 'dept'){
              dispatch(getCategory({departmentId: value}))  
              dispatch({type: FILTER_DISABLE, context: 'vendor'})
            }
            if(filterId === 'vendor'){
              dispatch({type: FILTER_DISABLE})
            }
            dispatch({type: FILTER_UPDATE, context: filterId, value:value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SimpleSelect));