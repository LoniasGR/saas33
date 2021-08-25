import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    textAlign: 'center',
    width: '100%',
    height: '6%',
    bottom: 0,
    left: 0,
    color: 'white',
    backgroundColor: '#3f51b5',
  },
  text: {
    position: 'relative',
    top: '30%',
    textAlign: 'center',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography className={classes.text}>This is the footer!</Typography>
    </footer>
  );
}
export default Footer;
