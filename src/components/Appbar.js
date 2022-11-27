import React, { useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import './appbar.css';
import logo from '../assets/blade/Timeslogo.jpeg';

const Appbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        className={colorChange ? 'navbar-colorChange' : 'navbar'}
      >
        <Container>
          <Navbar.Brand href='#home'>
            {colorChange ? (
              <>
                TIME TO REMIND <span className='sub-title'>watches</span>{' '}
              </>
            ) : (
              <Image className='logo-image' src={logo}></Image>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#aboutmain'>About</Nav.Link>
              <Nav.Link href='#products'>Products</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
