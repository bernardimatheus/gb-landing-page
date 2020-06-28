import React from 'react';
import SliderComponent from 'react-slick';
import { Container } from './styles';

import img1 from '../../assets/cozinha02.png';
import img2 from '../../assets/banheiro_01.jpg';
import img3 from '../../assets/quarto_03.jpeg';
import img4 from '../../assets/banheiro_suite.png';
import img5 from '../../assets/sala_home_office.jpg';
import img6 from '../../assets/sala1102_1.jpg';
import img7 from '../../assets/sala1102_2.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const Slider: React.FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <Container id="projects">
      <SliderComponent {...settings}>
        {
          images.map(image => (
            <div>
              <img src={image}/>
            </div>
          ))
        }
      </SliderComponent>
    </Container>
  )
}

export default Slider;
