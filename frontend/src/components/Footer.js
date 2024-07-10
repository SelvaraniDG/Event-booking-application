import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; {new Date().getFullYear()} Evently. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;