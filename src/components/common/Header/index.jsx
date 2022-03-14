import React from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1>BGS</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
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
      <div className={styles.actions}>
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
