import React from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-container">
        <h1>BGS</h1>
      </div>
      <nav className="nav">
        <ul className="links">
          <li>
            <Link to="/dashboard">My dashboard</Link>
          </li>
          <li>
            <Link to="/video-store">Video store</Link>
          </li>
          <li>
            <Link to="/bounty-board">Bounty board</Link>
          </li>
          <li>
            <Link to="/job-board">Job board</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <Button title="Sign up" onClick={() => navigate("/register")} />
        <Button
          title="Login"
          onClick={() => navigate("/login")}
          icon={<FaUser />}
        />
      </div>
    </header>
  );
};

export default Header;
