import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import group from '../assests/group.jpg';
import { CSSTransition } from 'react-transition-group';

const About = () => {
  return (
    <div id='aboutmain' xyz='fade up'>
      <CSSTransition apper={500}>
        <Container>
          <Row className='about'>
            <Col className='about-image' lg='6' md='6' sm='6'>
              <img src={group} alt='' />
            </Col>
            <Col className='about-text'>
              <h4 className='text-center'>About Us</h4>

              <p className='pt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque dignissimos accusantium hic saepe aut voluptates
                pariatur. Itaque accusantium repellendus facilis sed architecto
                quo officiis, dolore molestias ab illum ad recusandae.
              </p>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </div>
  );
};

export default About;
