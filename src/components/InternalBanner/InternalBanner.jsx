import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";

import './style.css';


const InternalBanner = ({ title }) => {


  return (
    <Container className='internalBanner'>
      <Row>
        <h2>{title}</h2>
      </Row>
    </Container>
  )
}

export default InternalBanner