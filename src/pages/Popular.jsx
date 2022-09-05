import { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { useLocation } from "react-router-dom";
import { RecipeItem, AlertMessage, InternalBanner } from "../components";

const Popular = () => {

  const [popular, setPopular] = useState([]);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

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
      localStorage.setItem('popular', JSON.stringify(data.recipes));

      if( data.status === 'failure' ) {
         setIsError(true)
      } else {
       console.log(data)
         setPopular(data.recipes);
      }
    }

  }

  return (
    <>
      {
        isError 
        ? <AlertMessage />
        : <div className="popular">
            { 
              location.pathname === '/popular' && <InternalBanner title='Popular' />
            }
            <h2>Popular Recipes</h2>
            <Row>
              {popular.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id} hasLink={true}/>
              ))}
            </Row>
          </div>
      }
    </>
  )
}

export default Popular