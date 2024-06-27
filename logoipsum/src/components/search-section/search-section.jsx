import React, { useState } from 'react';
import Container from '../container/container';
import CathegoryCard from '../service-card/service-card';
import servicesData from './services-data';
import uniqid from 'uniqid';
import styles from './styles.module.scss';

import SearchIcon from '../../assets/search-icon.png';


const SearchSection = () => {
  const [services, setServices] = useState(servicesData);
  const [inputText, setInputText] = useState('');

  const handleClick = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  }

  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <section className={styles.section}>
          <h1 className={styles.title}>Find Home <span>Service/Repair</span> Near You</h1>
          <h2 className={styles.subtitle}>Explore Best Home Service & Repair near you</h2>
          <div className={styles.searchBox}>
            <input
              className={styles.input}
              id='serviceName'
              type='text'
              placeholder='Search'
              value={inputText}
              onChange={handleClick}
            />
            <button className={styles.button}>
              <img src={SearchIcon} alt="search icon" />
            </button>
          </div>
          <section className={styles.servicesSection}>
            {services && services.map(service => 
              <CathegoryCard
                key={uniqid()}
                href={service.link}
                src={service.url}
                alt={service.name}
                text={service.text}
              />
            )}
          </section>
        </section>
      </Container>
    </div>
  )
}

export default SearchSection