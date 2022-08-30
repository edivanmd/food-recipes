import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import RecipeItem from "./RecipeItem/RecipeItem";


const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
     const data = await api.json();
     setPopular(data.recipes);
     console.log(data)
  }

  return (
    <Container>
      <Row>
        {popular.map((recipe) => (
            <RecipeItem recipe={recipe} />
        ))}
      </Row>
    </Container>
  )
}

export default Popular