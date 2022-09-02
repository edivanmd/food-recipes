import React from 'react';
import { Sliders } from '../components';
import { Popular, Vegetarian } from './';



const Home = () => {
  return (
    <>
      <Sliders />   
      <Vegetarian />
      <Popular />
    </>
  )
}

export default Home