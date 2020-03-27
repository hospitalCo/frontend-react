import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Router>
        <div>
          <nav className={styles.headerContent}>
              <div>
                <Link className={styles.headerItem} to="/">Home</Link>
              </div>
              <div>
                <Link className={styles.headerItem} to="/register">Register</Link>
              </div>
              <div>
                <Link className={styles.headerItem} to="/login">Login</Link>
              </div>
              <div>
                <Link className={styles.headerItem} to="/contact_us">Contact Us</Link>
              </div>
          </nav>
        </div>
      </Router>
    </div>
  )
};

export default Header;