import React from 'react';
import { SearchBar, Sliders } from '../components';
import { Popular, Vegetarian } from './';



const Home = () => {
  return (
    <>
      <Sliders />   
      <SearchBar />
      <Vegetarian />
      <Popular />
    </>
  )
}

export default Home