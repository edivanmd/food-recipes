import React from 'react';
import { SearchBar, Sliders } from '../components';
import { Popular, Vegetarian } from './';
import { motion } from 'framer-motion';



const Home = () => {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      duration={{duration:2}}
    >
      <Sliders />   
      <SearchBar />
      <Vegetarian />
      <Popular />
    </motion.div>
  )
}

export default Home