import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import Row from 'react-bootstrap/Row';
import { RecipeItem, InternalBanner } from "../components";
import { motion } from 'framer-motion';

const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let { idParam } = useParams();

  useEffect(() => {
    getCuisine(idParam)
  },[idParam]);

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
    <motion.div 
      className={idParam.replace(/ /g, '')}
      animate={{opacity: 1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      duration={{duration:2}}
    >
      <InternalBanner title={idParam} />
      <h2>{idParam} Cuisine</h2>
      <Row>
        {cuisine.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id} hasLink={true}/>
        ))}
      </Row>
    </motion.div>
  )
}

export default Cuisine