import React from 'react';
import styles from './styles.module.scss';
import Container from '../container/container';
import LogoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.navbarList}>
            <Link to='/' className={styles.listItem}>
              <img className={styles.logoImage} src={LogoImage} alt="logo" />
            </Link>
            <Link to='/' className={styles.listItem}>Home</Link>
            <Link to='/' className={styles.listItem}>Services</Link>
            <Link to='/' className={styles.listItem}>About Us</Link>            
          </div>
          <button className={styles.button}>Login / Sign Up</button>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar