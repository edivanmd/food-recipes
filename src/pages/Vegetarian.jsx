import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import { RecipeItem, AlertMessage, InternalBanner } from "../components"
import { motion } from "framer-motion";

const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    const check = localStorage.getItem('vegetarian');
    
    if (check) {
      setVegetarian(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`);
      const data = await api.json();

      if( data.status === 'failure' ) {
         setIsError(true)
      } else {
        localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
      }
    }

  }

  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      duration={{duration:2}}
    >
      {
        isError 
        ? <AlertMessage />
        : <div className="vegetarian">
            { 
              location.pathname === '/vegetarian' && <InternalBanner title='Vegetarian' />
            }
            <h2>Vegetarian Recipes</h2>
            <Row>
              {vegetarian.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id} hasLink={true}/>
              ))}
            </Row>
          </div>
      }
    </motion.div>
  )
}

export default Vegetarian