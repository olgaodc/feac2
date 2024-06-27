import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../navigation/router';

const ServiceCard = ({ src, serviceName }) => {
  return (
    <Link className={styles.card} to={`${routes.SEARCH_CATEGORY.url(serviceName)}`}>
      <img className={styles.image} src={src} alt={`${serviceName} icon`} />
      <p className={styles.text}>{serviceName}</p>
    </Link>
  )
}

export default ServiceCard