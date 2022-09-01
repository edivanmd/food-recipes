import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import { Cuisine, Popular, Vegetarian} from '../components';



const Pages = () => {
  return (
    <Container className='mt-5'>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:idParam' element={<Cuisine />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/vegetarian' element={<Vegetarian />} />
      </Routes>
    </Container>
  )
}

export default Pages