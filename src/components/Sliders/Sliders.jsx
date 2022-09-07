import { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import SlidersData from './SlidersData';

import './sliders.css';
import { Button } from "react-bootstrap";

function Sliders() {

  // const [popularSlider, setPopularSlider] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);
  
  // const getPopular = () => {
  //   const recipes = localStorage.getItem('popular');
  //   setPopularSlider(JSON.parse(recipes).slice(0,3));
  //   // console.log(popularSlider)
  // }

  return (
    <Carousel>
      {SlidersData.map((SliderData) => (
        <Carousel.Item key={SliderData.id}>
            <Image className="d-block w-100" src={SliderData.image} alt="slide"/>
            <Carousel.Caption>
            <h3>{SliderData.title}</h3>
            <Button as={Link} to={'/recipe-details/' + SliderData.id + '/' + SliderData.title.replace(/ /g, '-')} className="btn btn-success">More</Button>
            </Carousel.Caption>
        </Carousel.Item>
      ))};
    </Carousel>
  );
}

export default Sliders;