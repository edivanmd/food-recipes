import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import { RecipeItem, AlertMessage, InternalBanner } from "../components";
import { motion, useScroll } from "framer-motion";

const Popular = () => {

  const [popular, setPopular] = useState([]);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      console.log(data);
      
      if( data.status === 'failure' ) {
        setIsError(true)
      } else {
        console.log(data)
        setPopular(data.recipes);
        localStorage.setItem('popular', JSON.stringify(data.recipes));
      }
    }

  }

  return (
    <>
      {
        isError 
        ? <AlertMessage />
        : <motion.div className="popular"
            animate={{opacity: 1}}
            initial={{opacity:0}}
            exit={{opacity:0}}
            duration={{duration:2}}
          >
            {location.pathname === '/popular' && <InternalBanner title='Popular' />}
            <h2>Popular Recipes</h2>
            <Row>
              {popular.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id}/>
              ))}
            </Row>
          </motion.div>
      }
    </>
  )
}

export default Popular