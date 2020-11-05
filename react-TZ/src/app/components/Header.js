import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <HomeIcon color="action" fontSize="large" />
    </Toolbar>
  </AppBar>
);
