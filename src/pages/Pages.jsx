import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import { Home, Cuisine, Popular, Vegetarian, Searched } from './';



const Pages = () => {
  return (
    <Container className='mt-5'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:idParam' element={<Cuisine />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/vegetarian' element={<Vegetarian />} />
          <Route path='/searched/:idSearch' element={<Searched />} />
      </Routes>
    </Container>
  )
}

export default Pages