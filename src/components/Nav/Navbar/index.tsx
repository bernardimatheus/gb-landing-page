import React from 'react';
import Burger from '../Burger';
import { Nav } from './styles';
import logo from '../../../assets/logo_studio.png';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} width="150" alt=""/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;
