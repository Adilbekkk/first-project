import React from 'react';
import {Link } from 'react-router-dom'
 // Import your CSS file for styling
import styles from "./Components.module.css";

const Navbar = () => {
  return (
    
    <nav>
    <ul >
      <li className={styles.li} >
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/our-story">Our Story</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
    </ul>
    <div className={styles.Joindiv}>
      <div className={styles.fixed}>
    <a  className={styles.join} href="/join">Join</a>
      </div>  
    </div>
  </nav>
 
  );
};

export default Navbar;
