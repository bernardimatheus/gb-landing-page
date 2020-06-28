import React from 'react';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { Container, Background, GrayBackground, ContactContainer, ContactImageContainer } from './styles';

import { isMobile } from 'react-device-detect';
import contactImage from '../../assets/vaso01.jpg';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      {
        isMobile && <Background />
      }
      {
        isMobile && <GrayBackground />
      }
      <ContactContainer>
        <div>
          <h3>Solicite seu orçamento</h3>
        </div>
        <div>
          <span>
            <p>arq.studiogb@gmail.com </p>
            <FiMail size={16}/>
          </span>
          <span>
            <p>Curitiba, Paraná, Brasil </p>
            <FiMapPin size={16}/>
          </span>
          <span>
            <a href="tel:+5541996698932"> +55 41 99669-8932</a>
            <FiPhoneCall size={16}/>
          </span>
        </div>
      </ContactContainer>
      {
        !isMobile &&
        <ContactImageContainer>
          <img src={contactImage} alt="Contact Image"/>
        </ContactImageContainer>
      }
    </Container>
  );
}

export default Contact;
