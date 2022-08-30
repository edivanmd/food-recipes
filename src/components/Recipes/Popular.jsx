import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import RecipeItem from "./RecipeItem/RecipeItem";



const popular = [
  {
    id: 1,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Greek Salad",
    description: "Awesome salad.",
    link: "#"
  },
  {
    id: 2,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  },
  {
    id: 3,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  },
  {
    id: 4,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  },
  {
    id: 5,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  },
  {
    id: 6,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  },
  {
    id: 7,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    title: "Fish and Chips",
    description: "Delicious recipe.",
    link: "#"
  }
]

const Popular = () => {

  // const [popular, setPopular] = useState([]);
  const [isError, setIsError] = useState(false);


  // useEffect(() => {
  //   getPopular();
  // }, []);

  // const getPopular = async () => {
  //    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
  //    const data = await api.json();
  //    console.log(data.message)

  //    if( data.status === 'failure' ) {
  //       setIsError(true)
  //    } else {
  //       setPopular(data.recipes);
  //    }
  // }

  const AlertMessage = () => (
    <Alert variant="danger" style={{ marginTop: '2rem' }} className="text-center">
      {console.log('yyy')}
        <Alert.Heading>Sorry, you got an error!</Alert.Heading>
          <p> Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.</p>
    </Alert>
  );

  return (
    <>
      {
        isError 
        ? <AlertMessage />
        : <Container>
            <h2>Popular Recipes</h2>
            <Row>
              {popular.map((recipe) => (
                <RecipeItem recipe={recipe}/>
              ))}
            </Row>
          </Container>
      }
    </>
  )
}

export default Popular