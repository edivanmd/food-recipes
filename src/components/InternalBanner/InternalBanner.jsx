import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';

import './style.css';


const InternalBanner = ({ title, image }) => {


  return (
    <Container style={{backgroundImage: `url(${image})`}} className='internalBanner'>
      <Row>
        <h2>{title}</h2>
      </Row>
    </Container>
  )
}

export default InternalBanner