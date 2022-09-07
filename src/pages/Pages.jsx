import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home, Cuisine, Popular, Vegetarian, Searched, RecipeDetails } from './';
import { AnimatePresence } from 'framer-motion';

import './style.css';

const Pages = () => {
  const location = useLocation();
  return (
    <Container>
        <AnimatePresence wait>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/vegetarian' element={<Vegetarian />} />
            <Route path='/cuisine/:idParam' element={<Cuisine />} />
            <Route path='/searched/:idSearched' element={<Searched />} />
            <Route path='/recipe-details/:idCode/:idName' element={<RecipeDetails />} />
        </Routes>
    </AnimatePresence>
      </Container>
  )
}

export default Pages