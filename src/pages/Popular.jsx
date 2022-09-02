import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import { RecipeItem, AlertMessage, InternalBanner } from "../components";

import ImageBanner from '../assets/banner_internal_popular.jpeg';


// const popular = [
//   {
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Popular"
//   },
//   {
//     id: 2,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   },
//   {
//     id: 3,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   },
//   {
//     id: 4,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   },
//   {
//     id: 5,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   },
//   {
//     id: 6,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   },
//   {
//     id: 7,
//     image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
//     title: "Fish and Chips",
//     description: "Delicious recipe.",
//     link: "#"
//   }
// ]

const Popular = () => {

  const [popular, setPopular] = useState([]);
  const [isError, setIsError] = useState(false);

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
        : <Container>
            <InternalBanner title='Popular' image={ImageBanner} />
            <h2>Popular Recipes</h2>
            <Row>
              {popular.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id} hasLink={true}/>
              ))}
            </Row>
          </Container>
      }
    </>
  )
}

export default Popular