import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import COGS_Logo from '../assets/logo.png';
import PersonIcon from '@material-ui/icons/AccountCircle'
import {Link} from 'react-router';

import general from '../../../styles/general.css';

const styles = {
  root: {
    width: '100%',
  },
  menuButton: {
    marginLeft: -10,
    marginRight: 10,
  },
};

const blueColor = {
  backgroundColor: "#017ACD",
  width: '100%',
  position: "static"
};

const logo = {
  height: 35,
  marginBottom: -10,
};

const profileIcon = {
  paddingLeft: 10,
};


function DenseAppBar() {
  return (
    <div style={styles}>
      <AppBar style={blueColor}>
        <Toolbar>
          <div className={general.flexSpaceBetween}>
            <div>
              &nbsp;
              <span>Walmart&nbsp;</span>
              <Link to="/">
                <img src={COGS_Logo} style={logo}/>
              </Link>
              &nbsp; COGS INTERNATIONAL
            </div>
            <div className={general.flexCenter}>
              <div>
                Rob Price
              </div>
              <div>
                <PersonIcon style={profileIcon}/>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(DenseAppBar);
