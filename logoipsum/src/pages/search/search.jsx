import React from 'react';
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
        <div>
          <Sidebar />
        </div>
      </Container>
    </>
  )
}

export default SearchPage