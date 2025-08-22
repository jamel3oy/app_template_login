"use client"
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AppLoader = () => {
  const open = true
  return (
    <div className="app-loader">
      <Backdrop
        sx={(theme) => ({
          color: '#fff',
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
      >
        <CircularProgress color="inherit" />
      {/* <div className="loader-spin">
        <span className="crema-dot crema-dot-spin">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div> */}
      </Backdrop>
    </div>
  );
};

export default AppLoader;
