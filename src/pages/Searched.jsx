import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import Row from 'react-bootstrap/Row';
import { RecipeItem, InternalBanner, SearchBar } from "../components";
import { motion } from 'framer-motion';

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let { idSearched } = useParams();

  useEffect(() => {
    getSearched(idSearched)
  },[idSearched]);

  const getSearched = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=5`);
    const data = await api.json();
    setSearchedRecipes(data.results);
  }


  return (
    <motion.div
      className='searched'
      animate={{opacity: 1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      duration={{duration:0.5}}
    > 
      <InternalBanner title='Searched' />
      <SearchBar />
      <h2>Results for {idSearched}</h2>
      <Row>
        {searchedRecipes.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.id}/>
        ))}
      </Row>
    </motion.div>
  )
}

export default Searched