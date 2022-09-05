import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import { Col, Image, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { InternalBanner } from '../components';

const RecipeDetails = () => {
  
  const [details, setDetails] = useState({});
  let { idCode, idName } = useParams();

  useEffect(() => {
    fetchDetails(idCode);
  },[idCode]);

  const fetchDetails = async (code) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${code}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const dataDetails = await data.json();
    setDetails(dataDetails);
    console.log(dataDetails);
  }

  return (
    <div className='recipeDetails'>
      <InternalBanner title='Recipe Details' />
      <h2>{details.title}</h2>
      <Row>
        <Col>
          <Image fluid rounded src={details.image} alt="My Recipe" />
        </Col>

        <Col>
          <Tabs defaultActiveKey="profile" className="mb-3">

            <Tab eventKey="home" title="Ingredients">

            </Tab>

            <Tab eventKey="profile" title="Instructions">

            </Tab>

          </Tabs>
        </Col>
      </Row>
    </div>
  )
}

export default RecipeDetails