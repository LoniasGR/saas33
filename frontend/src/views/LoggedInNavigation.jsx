import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  navItem: {
    marginRight: theme.spacing(2),
    color: 'white',
    fontSize: 16,
  },
  rightSide: {
    marginLeft: 0,
    position: 'relative',
  },
  navButton: {
    textTransform: 'none',
  },
}));

function LoggedInNav(props) {
  const {
    userName, handleSignOut,
  } = props;
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Grid container justifyContent="space-between" spacing={10}>
          <Grid item>
            <Button color="inherit" className={clsx(classes.navItem, classes.navButton)} component={RouterLink} to="/" underline="none">Home</Button>
          </Grid>
          <Grid item>
            <Typography className={clsx(classes.navItem)} variant="inherit">{`Welcome, ${userName}`}</Typography>
            <Button color="inherit" className={clsx(classes.navItem, classes.rightSide, classes.navButton)} component={RouterLink} to="/profile" underline="none">Profile</Button>
            <Button color="inherit" className={clsx(classes.navItem, classes.rightSide, classes.navButton)} component={RouterLink} to="/ask-question" underline="none">Ask a Question</Button>
            <Button color="inherit" className={clsx(classes.navItem, classes.rightSide, classes.navButton)} component={RouterLink} to="/" replace onClick={handleSignOut} underline="none">Sign Out</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

LoggedInNav.propTypes = {
  userName: PropTypes.string,
  handleSignOut: PropTypes.func,
};

LoggedInNav.defaultProps = {
  userName: 'None',
  handleSignOut: null,
};

export default LoggedInNav;
