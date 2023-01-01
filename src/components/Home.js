import React from 'react';
import './Home.css';
// import { Carousel } from 'react-bootstrap';
import bg2 from '../assets/bg6.jpeg';
import bg3 from '../assets/intro-banner.jpg';
import bg4 from '../assets/leecooper.jpg';
import bg1 from '../assets/products/LEECOPER BANNER.jpg';
import bg5 from '../assets/bg5.jpeg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const Home = () => {
  const images = [
    {
      id: 1,
      image: bg4,
    },
    {
      id: 2,
      image: bg5,
    },
    {
      id: 3,
      image: bg1,
    },
    {
      id: 4,
      image: bg3,
    },
    {
      id: 5,
      image: bg2,
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
    autoplaySpeed: 2000,
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
