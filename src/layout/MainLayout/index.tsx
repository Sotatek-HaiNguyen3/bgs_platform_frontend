import React from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  components?: any;
}
export default function Component({ components }: Props) {
  return (
    <>
      <div className="main-menu">
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          |
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
