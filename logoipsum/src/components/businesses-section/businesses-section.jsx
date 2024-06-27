import React, { useState } from 'react';
import styles from './styles.module.scss';
import Container from '../container/container';
import BusinessCard from '../business-card/business-card';
import uniqid from 'uniqid';
import businessesData from './businesses-data';

const BusinessesSection = () => {
  const [businesses, setBusinesses] = useState(businessesData);
  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <h2 className={styles.title}>Popular businesses</h2>
        <div className={styles.section}>
          {businesses && businesses.map(business =>
            <BusinessCard
              key={uniqid()}
              src={business.imageUrl}
              alt={business.serviceName}
              serviceCategory={business.category}
              serviceName={business.serviceName}
              personName={business.personName}
              address={business.address}
            />
          )}
        </div>
      </Container>
    </section>
  )
}

export default BusinessesSection