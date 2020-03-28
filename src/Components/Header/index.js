import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import styles from './header.module.css';
import Button from '@material-ui/core/Button';

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.headerContainer}>
      <Router>
        <div>
          <nav className={styles.headerContent}>
              <div className={styles.headerItem}>
                <Button onClick={() => history.push('/')}>HOME</Button>
              </div>
              <div className={styles.headerItem}>
                <Button onClick={() => history.push('/register')}>REGISTER</Button>
              </div>
              <div className={styles.headerItem}>
                <Button onClick={() => history.push('/login')}>LOGIN</Button>
              </div>
              {/* <div className={styles.headerItem}>
                <Button onClick={() => history.push('/contact_us')}>CONTACT US</Button>
              </div> */}
          </nav>
        </div>
      </Router>
    </div>
  )
};

export default Header;