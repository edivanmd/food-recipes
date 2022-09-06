import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom' 
import { Col, Image, Row, Spinner } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { InternalBanner } from '../components';

 import './style.css';

const RecipeDetails = () => {
  
  const [details, setDetails] = useState({});
  let { idCode, idName } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDetails(idCode);
  },[idCode]);

  const fetchDetails = async (code) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${code}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const dataDetails = await data.json();
    setDetails(dataDetails);
    console.log(dataDetails, "oii");
    setIsLoading(false);
  }

  return (
    <div className='recipeDetails'>

      {
      isLoading
      ? <div className='d-flex align-items-center justify-content-center pt-5'>
          <Spinner animation="border" variant="success" className='' />
        </div> 
      : <>
          <InternalBanner title='Recipe Details' />
          <h2 className='mb-4'>{details.title}</h2>
          <Row>
            <Col>
              <Image fluid rounded src={details.image} alt="My Recipe" className='mb-3' />
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </Col>

            <Col>
              <Tabs defaultActiveKey="home" className="mb-3">

                <Tab eventKey="home" title="Ingredients">
                    <ul>
                      {details?.extendedIngredients?.map(ingredient => (
                        <li key={ingredient?.id}>{ingredient?.original}</li>
                        ))}
                    </ul>
                </Tab>

                <Tab eventKey="profile" title="Instructions">
                  <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </Tab>

              </Tabs>
            </Col>
          </Row>
        </>
      }

    </div>
  )
}

export default RecipeDetails