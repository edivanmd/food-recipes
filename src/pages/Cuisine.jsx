import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import { RecipeItem, InternalBanner } from "../components";
import { motion } from 'framer-motion';

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let { idParam } = useParams();

  useEffect(() => {
    getCuisine(idParam)
  },[idParam]);


  // const getCuisine = async (name) => {
  //   const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=5`);
  //   const data = await api.json();
  //   setCuisine(data.results)
  // }


  const getCuisine = async (name) => {
    const check = localStorage.getItem(idParam);
    
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=5`);
      const data = await api.json();
      localStorage.setItem(idParam, JSON.stringify(data.results));
      setCuisine(data.results);
    }

  }

  return (
    <Container>

      <h2>{idParam} Cuisine</h2>
      <Row>
        {cuisine.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id} hasLink={false}/>
        ))}
      </Row>
    </Container>
  )
}

export default Cuisine