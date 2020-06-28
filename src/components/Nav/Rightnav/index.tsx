import React from 'react';
import { Container, Ul } from './styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface IRightNav {
  open: boolean
}

const Rightnav: React.FC<IRightNav> = ({ open }) => {
  return (
    <Ul open={open}>
      <AnchorLink href="#projects"><li>PROJETOS</li></AnchorLink>
      <AnchorLink href="#about"><li>SOBRE</li></AnchorLink>
      <AnchorLink href="#contact"><li>CONTATO</li></AnchorLink>
    </Ul>
  )
}

export default Rightnav;
