import React from 'react';
import './OurBrands.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Casio,
  DaneilKlien,
  police,
  uspolo,
  leecooper,
  imperial,
  fitron,
  naviforce,
} from '../assets/logo';
import { Container, Image } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const OurBrands = () => {
  const images = [
    {
      id: 1,
      image: Casio,
    },
    {
      id: 2,
      image: naviforce,
    },
    {
      id: 3,
      image: uspolo,
    },

    {
      id: 4,
      image: police,
    },
    {
      id: 5,
      image: imperial,
    },
    {
      id: 6,
      image: leecooper,
    },
    {
      id: 7,
      image: DaneilKlien,
    },
    {
      id: 8,
      image: fitron,
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
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 326,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1.25,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.45,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.25,
        },
      },
    ],
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className='brands mb-5'>
      <Container>
        <h1 className='text-center py-5 '>OUR BRANDS</h1>
        <div className='carousel1'>
          <Slider {...carouselProperties}>
            {images.map((val) => {
              return (
                <div className='image-container3' key={val.id}>
                  <Image className='brand-image' src={val.image} alt='' />
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurBrands;
