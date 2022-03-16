import React from 'react';
import { ToastContainer } from 'react-toastify';

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      closeOnClick
      newestOnTop
      pauseOnHover
      className="toast-custom"
    />
  );
};

export default CustomToastContainer;
