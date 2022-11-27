import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';

const Home = () => {
  return (
    <div>
      <section className='home_section' id='home'>
        <div className='header_height'>
          <Carousel>
            <Carousel.Item>
              <img className='d-block w-100' src={bg3} alt='' />
              <Carousel.Caption>
                <h1 className='headerColor '>
                  WELCOME TO THE WORLD OF <span>TIME TO REMIND WATCHES!</span>
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg2} alt='' />
              <Carousel.Caption>
                <h1 className='headerColor '>
                  WELCOME TO THE WORLD OF <span>TIME TO REMIND WATCHES!</span>
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg4} alt='' />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg2} alt='' />
              <Carousel.Caption>
                <h1 className='headerColor '>
                  WELCOME TO THE WORLD OF <span>TIME TO REMIND WATCHES!</span>
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={bg2} alt='' />
              <Carousel.Caption>
                <h1 className='headerColor '>
                  WELCOME TO THE WORLD OF <span>TIME TO REMIND WATCHES!</span>
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;
