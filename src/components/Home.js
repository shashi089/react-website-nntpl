import React from 'react';
import './Home.css';
// import { Carousel } from 'react-bootstrap';
import bg2 from '../assets/Daniel Klien.jpg';

import bg4 from '../assets/leecooper.jpg';
import bg1 from '../assets/products/LEECOPER BANNER.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const Home = () => {
  const images = [
    {
      id: 1,
      image: bg2,
    },
    {
      id: 2,
      image: bg4,
    },
    {
      id: 3,
      image: bg1,
    },
  ];
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowLeft style={{ color: '#ff6565', fontSize: '25px' }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowRight style={{ color: '#ff6565', fontSize: '25px' }} />
      </div>
    );
  };
  const carouselProperties = {
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    slidesToShow: 1,

    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div>
      <section className='home_section' id='home'>
        <div className='header_height'>
          {/* <Carousel>
            <Carousel.Item>
              <img className='d-block w-100' src={bg1} alt='' />
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
          </Carousel> */}

          <div className='carousel2'>
            <Slider {...carouselProperties}>
              {images.map((val) => {
                return (
                  <div className='image-container' key={val.id}>
                    <Image className='brand-image' src={val.image} alt='' />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
