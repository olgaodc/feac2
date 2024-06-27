import React from 'react';
import styles from './styles.module.scss';
import PrimaryButton from '../primary-button/primary-button';

const BusinessCard = ({ src, alt, serviceCategory, serviceName, personName, address }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt={alt} />
      <div className={styles.cardInfo}>
        <span className={styles.category}>{serviceCategory}</span>
        <h3 className={styles.serviceName}>{serviceName}</h3>
        <p className={styles.personName}>{personName}</p>
        <p className={styles.address}>{address}</p>
        <PrimaryButton 
          buttonName='Book now'
        />
      </div>
    </div>
  )
}

export default BusinessCard