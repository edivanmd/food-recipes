import Carousel from 'react-bootstrap/Carousel';
import SlidersData from './SlidersData';

import './sliders.css';

function Sliders() {
  return (
    <Carousel>
      {SlidersData.map((SliderData) => (
        <Carousel.Item key={SliderData.id}>
            <img className="d-block w-100" src={SliderData.image} alt="slide"/>
            <Carousel.Caption>
            <h3>{SliderData.title}</h3>
            <p>{SliderData.description}</p>
            <a href={SliderData.link} class="btn btn-outline-success">More</a>

            </Carousel.Caption>
        </Carousel.Item>
      ))};
    </Carousel>
  );
}

export default Sliders;