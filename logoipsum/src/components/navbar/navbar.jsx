import React from 'react';
import styles from './styles.module.scss';
import Container from '../container/container';
import LogoImage from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <nav className={styles.navbar}>
          <div className={styles.navbarList}>
            <a href='/' className={styles.listItem}>
              <img className={styles.logoImage} src={LogoImage} alt="logo" />
            </a>
            <a href='/' className={styles.listItem}>Home</a>
            <a href='/' className={styles.listItem}>Services</a>
            <a href='/' className={styles.listItem}>About Us</a>            
          </div>
          <button className={styles.button}>Login / Sign Up</button>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar