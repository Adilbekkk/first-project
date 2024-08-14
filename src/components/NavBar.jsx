import React from "react";
import { Link } from "react-router-dom";
// Import your CSS file for styling
import styles from "./Components.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.a}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/our-story" className={styles.a}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/careers" className={styles.a}>
            Careers
          </Link>
        </li>
      </ul>
      <div className={styles.Joindiv}>
        <div className={styles.fixed}>
          <a style={{ zIndex: "2" }} className={styles.join} href="/join">
            Join
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
