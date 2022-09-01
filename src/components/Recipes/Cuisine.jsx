import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import RecipeItem from "./RecipeItem/RecipeItem";
import { motion } from 'framer-motion';

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let { idParam } = useParams();

  useEffect(() => {
    getCuisine(idParam)
    console.log(idParam);
  },[idParam]);


  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=5`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  }

  return (
    <Container>
      <h2>{idParam} Cuisine</h2>
      <Row>
        {/* {cuisine.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id}/>
        ))} */}
      </Row>
    </Container>
  )
}

export default Cuisine