import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import { Home, Cuisine, Popular, Vegetarian, Searched, RecipeDetails } from './';

import './style.css';

const Pages = () => {
  return (
    <Container className=''>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/vegetarian' element={<Vegetarian />} />
          <Route path='/cuisine/:idParam' element={<Cuisine />} />
          <Route path='/searched/:idSearched' element={<Searched />} />
          <Route path='/recipe-details/:idCode/:idName' element={<RecipeDetails />} />
      </Routes>
    </Container>
  )
}

export default Pages