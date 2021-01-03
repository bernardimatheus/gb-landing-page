import React from "react";
import SliderComponent from "react-slick";
import { Container } from "./styles";

import img1 from "../../assets/cozinha02.jpg";
import img2 from "../../assets/banheiro_01.jpg";
import img3 from "../../assets/quarto_03.jpg";
import img4 from "../../assets/banheiro_suite.jpg";
import img5 from "../../assets/sala_home_office.jpg";

import img7 from "../../assets/sala_1102_2.jpg";

const images = [img1, img2, img3, img4, img5, img7];

const Slider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container id="projects">
      <SliderComponent {...settings}>
        {images.map((image) => (
          <div>
            <img src={image} />
          </div>
        ))}
      </SliderComponent>
    </Container>
  );
};

export default Slider;
