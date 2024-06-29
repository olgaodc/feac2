import React, { useState } from 'react';
import styles from './styles.module.scss';
import BusinessCard from '../business-card/business-card';
import { v4 as uuidv4 } from 'uuid';
import businessesData from '../../data/businesses-data';

const BusinessesSection = () => {
  const [businesses, setBusinesses] = useState(businessesData);
  return (
    <div className={styles.section}>
      {businesses && businesses.map(business =>
        <BusinessCard
          key={uuidv4()}
          src={business.imageUrl}
          alt={business.serviceName}
          serviceCategory={business.category}
          serviceName={business.serviceName}
          personName={business.personName}
          address={business.address}
        />
      )}
    </div>
  )
}

export default BusinessesSection