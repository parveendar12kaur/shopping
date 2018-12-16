import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import BOFilters from '../../filters/BusinessOverviewFilters';
import Visualization from '../../visualization/visualization';


function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
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
    borderBottom: "#3d6cc8"
  },
  tabIndicator: {
    backgroundColor: "#3d6cc8"
  },
});

const bgColor = {
  backgroundColor: "#f2f2f2",
  color: '#3d6cc8',
  boxShadow: 'none',
  borderTop: 'solid',
  borderBottom: 'solid',
  borderWidth: 'thin',
  borderColor: '#dfe0df'
};

const tabWidth = {
  width: '70%',
  color: "#3d6cc8"
};

class SimpleTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <AppBar style={bgColor} position="static">
          <Tabs indicatorColor="primary" value={value} onChange={this.handleChange}>
            <Tab style={tabWidth} label="Business Overview"/>
            <Tab style={tabWidth} label="Visualization"/>
          </Tabs>
        </AppBar>
        {value === 0 &&
        <TabContainer>
          <br/>
          <h3>Search Criteria</h3>
          <br/>
          <br/>
          <BOFilters/>
          
        </TabContainer>
        }
        {value === 1 &&
        <TabContainer>
          <br/>
          <br/>
          <Visualization />
        </TabContainer>
        }
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(SimpleTabs));