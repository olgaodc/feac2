import React from 'react';
import Navbar from '../components/navbar/navbar';
import SearchSection from '../components/search-section/search-section';
import BusinessesSection from '../components/businesses-section/businesses-section';

const HomePage = () => {
  return (
    <>
    <Navbar />
    <SearchSection />
    <BusinessesSection />
    </>
  )
}

export default HomePage