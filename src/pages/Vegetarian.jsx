import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import { RecipeItem, AlertMessage } from "../components";

const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);
  const [isError, setIsError] = useState(false);

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
      localStorage.setItem('vegetarian', JSON.stringify(data.recipes));

      if( data.status === 'failure' ) {
         setIsError(true)
      } else {
       console.log(data)
         setVegetarian(data.recipes);
      }
    }

  }

  return (
    <>
      {
        isError 
        ? <AlertMessage />
        : <Container>
            <h2>Vegetarian Recipes</h2>
            <Row>
              {vegetarian.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id}/>
              ))}
            </Row>
          </Container>
      }
    </>
  )
}

export default Vegetarian