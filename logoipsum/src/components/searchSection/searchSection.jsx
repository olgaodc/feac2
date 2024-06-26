import React, { useState } from 'react';
import Container from '../container/container';
import CathegoryCard from '../cathegoryCard/cathegoryCard';
import uniqid from 'uniqid';
import styles from './styles.module.scss';

import SearchIcon from '../../assets/search-icon.png';
import TruckIcon from '../../assets/truck-icon.png';
import RepairIcon from '../../assets/repair-icon.png';
import PlumbingIcon from '../../assets/plumbing-icon.png';
import CleaningIcon from '../../assets/cleaning-icon.png';
import PaintingIcon from '../../assets/painting-icon.png';
import ElectricIcon from '../../assets/electric-icon.png';

const data = [
  {
    name: 'truck icon',
    text: 'Shifting',
    url: `${TruckIcon}`,
    link: '/',
  },
  {
    name: 'repair icon',
    text: 'Repair',
    url: `${RepairIcon}`,
    link: '/',
  }, 
  {
    name: 'plumbing icon',
    text: 'Plumbing',
    url: `${PlumbingIcon}`,
    link: '/',
  }, 
  {
    name: 'cleaning icon',
    text: 'Cleaning',
    url: `${CleaningIcon}`,
    link: '/',
  }, 
  {
    name: 'painting icon',
    text: 'Painting',
    url: `${PaintingIcon}`,
    link: '/',
  },
  {
    name: 'electric icon',
    text: 'Electric',
    url: `${ElectricIcon}`,
    link: '/',
  },

]

const SearchSection = () => {
  const [cathegories, setCathegories] = useState(data);
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
              type='text'
              placeholder='Search'
              value={inputText}
              onChange={handleClick}
            />
            <button className={styles.button}>
              <img src={SearchIcon} alt="search icon" />
            </button>
          </div>
          <section className={styles.cathegoriesSection}>
            {cathegories && cathegories.map(cathegory => 
              <CathegoryCard
                key={uniqid()}
                href={cathegory.link}
                src={cathegory.url}
                alt={cathegory.name}
                text={cathegory.text}
              />
            )}
          </section>
        </section>
      </Container>
    </div>
  )
}

export default SearchSection