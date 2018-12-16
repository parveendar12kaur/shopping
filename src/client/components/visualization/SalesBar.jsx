import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  AppBar:{
    width: '60%'
  },
  ToolBar: {
    paddingLeft: '40px'
  },
  AlignText: {
    textAlign: 'center'
  }
};

function SalesBar(props) {
  const { 
    classes,
    sales2017,
    sales2016,
    yoySales } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static" color="default">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Category YoY Growth
            </Typography>
            <Toolbar className={classes.ToolBar}>
              <Typography variant="h8" color="inherit" className={classes.AlignText}>
                Top Sale 2017
                <Typography variant="h6" color="inherit">
                    {sales2017}
                </Typography>
              </Typography>
            </Toolbar>


            <Toolbar className={classes.ToolBar}>
              <Typography variant="h8" color="inherit" className={classes.AlignText}>
                Top Sale 2016
                <Typography variant="h6" color="inherit">
                    {sales2016}
                </Typography>
              </Typography>
              
            </Toolbar>
            <Toolbar className={classes.ToolBar}>
              <Typography variant="h8" color="inherit" className={classes.AlignText}>
                YoY Sales
                <Typography variant="h6" color="inherit">
                    {yoySales}
                </Typography>
              </Typography>
            </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SalesBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SalesBar);
