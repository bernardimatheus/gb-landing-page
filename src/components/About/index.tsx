import React from 'react';

import { Container, ImageContainer } from './styles';

import bggb from '../../assets/bggb.jpg';

const About: React.FC = () => {
  return (
    <Container id="about">
      <div>
        <h2>Sobre</h2>
        <p>
          Gabriela Branco é graduada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica do Paraná (2019). Possui curso de <i>Interior Design</i> pelo Istituto Marangoni, na Itália. É apaixonada por design de interiores, sustentabilidade e representação gráfica.
        </p>
        <br/>
        <p>
          O Studio GB é um escritório de arquitetura, situado em Curitiba, desenvolve projetos arquitetônicos e de interiores, tanto residenciais como comerciais. Cada projeto é desenvolvido de forma única e pensado para cada um dos moradores. Somos especializados em transformar espaços que reflitam a identidade de cada um de nossos clientes.
        </p>
      </div>
      <ImageContainer>
        <img src={bggb} alt="bggb"/>
      </ImageContainer>
    </Container>
  )
}

export default About;
