import Header from 'components/common/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Component() {
  return (
    <div className="main-content">
      <Header />
      <div className="body-content">
        <Outlet />
      </div>
    </div>
  );
}
