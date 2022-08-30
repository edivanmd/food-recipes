import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const RecipeItem = ({ recipe }) => {
  return (
    <>
      <Col sm={6} md={4} lg={3} className='mb-5'>
        <Card key={recipe.id}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>    
      </Col>
    </>
  )
}

export default RecipeItem