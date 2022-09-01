import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const RecipeItem = ({ recipe }) => {
  return (
    <>
      <Col sm={6} md={4} lg={3} className='mb-4 d-flex align-items-stretch'>
        <Card key={recipe.id}>
            <Card.Img variant='top' src={recipe.image} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title>{recipe.title}</Card.Title>
                <Button href={recipe.spoonacularSourceUrl} size='sm' variant='success'>More</Button>
            </Card.Body>
        </Card>    
      </Col>
    </>
  )
}

export default RecipeItem