import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion'


const RecipeItem = ({ recipe }) => {
  return (
    <>
      <Col 
        as={motion.div} 
        sm={6} md={4} lg={3} 
        className='mb-4 d-flex align-items-stretch' 
        animate={{opacity: 1}}
        initial={{opacity:0}}
        exit={{opacity:0}}
        duration={{duration:2}}
      >
        <Card key={recipe.id}>
            <Card.Img variant='top' src={recipe.image} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{recipe.title}</Card.Title>
                <Button as={Link} to={'/recipe-details/' + recipe.id + '/' + recipe.title.replace(/ /g, '-')} size='sm' variant='success'>More</Button>
            </Card.Body>
        </Card>    
      </Col>
    </>
  )
}

export default RecipeItem