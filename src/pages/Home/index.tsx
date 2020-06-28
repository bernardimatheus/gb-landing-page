import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Nav/Navbar';
import Slider from '../../components/Slider';
import About from '../../components/About';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <About />
      <Contact />
    </Container>
  )
};

export default Home;
