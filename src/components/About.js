import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import square from '../assets/square.svg';

const About = () => {
  return (
    <div id='aboutmain' className='py-5'>
      <div id='about'>
        <div className='main-container py-5'>
          <Container>
            <h1 className='text-center'>
              ABOUT
              <span> US</span>
            </h1>
            <Row className='justify-content-center mt-5 about-info text-center'>
              <Col lg='9' md='9'>
                Founded in the year 2020 as a retail outlet in the city of alain
                UAE, Time to remaind watches aims to provide its customers
                watches with timeless designs and unparalleled customer service.
                in a market field with imposters time to remaind watches stands
                tall as an unimitable original player who ensures the best
                quality watches and designs while providing world-class repair
                services at the same time. a great team, an exclusive range of
                elegant and world-class watch collections, we always stand
                apart. Classical or modernist, we have a style that suits you.
              </Col>
            </Row>
          </Container>
        </div>
        <Image className='image' src={square}></Image>
      </div>
      <div className='sub-container1 my-5 py-5'>
        <Container className='d-flex justify-content-between flex-wrap'>
          <div className='box-container-1'>
            <h2 className='text-center text-white'>MISSION</h2>

            <p>
              Our mission is to ensure best qulity watches, Designs and repair
              services for our customers all around the world. we want to be
              known as a credible player who provides highest standards of
              customer satisfaction every single time.
            </p>
          </div>
          <div className='box-container-1'>
            <h2 className='text-center text-white'>VISION</h2>

            <p>
              Our vision to launch outlets all over the UAE and world in coming
              years. we want the world to wear our watches as a symbol of pride
              and comfort. we want to grow as a global leader proving highest
              standard of quality and design
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
