import React from 'react';
import styles from './styles.module.scss';
import Navbar from '../../components/navbar/navbar';
import Container from '../../components/container/container';
import Sidebar from '../../components/sidebar/sidebar';
// import { useParams } from 'react-router-dom';


const SearchPage = () => {
  // const { category } = useParams();
  return (
    <>
      <Navbar />
      <Container>
        <div className={styles.content}>
          <Sidebar />
        </div>
      </Container>
    </>
  )
}

export default SearchPage