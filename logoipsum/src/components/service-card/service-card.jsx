import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const ServiceCard = ({href, src, alt, text}) => {
  return (
    <div className={styles.cardWrapper}>
        <Link className={styles.card} to={href}>
          <img className={styles.image} src={src} alt={alt} />
          <p className={styles.text}>{text}</p>
        </Link>
    </div>
  )
}

export default ServiceCard