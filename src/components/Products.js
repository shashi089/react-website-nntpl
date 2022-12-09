import React from 'react';
import './Product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import casio2 from '../assets/casio/casio-ex403-eqb-800db-1adr-edifice.webp';
import watch7 from '../assets/naviforce/624510cb85783.png';
import watch9 from '../assets/casio/edifice-ed475-efs-s550db-1avudf-edifice.webp';

import {
  uspolo,
  seiko,
  citizen,
  cruiser,
  omax,
  spectrum,
  naviforce,
  fastrack,
  fitron,
  danielklein,
  titan,
  blade,
  fossil,
} from '../assets/products';

import { Container, Image } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const Products = () => {
  const images = [
    {
      id: 1,
      image: casio2,
      name: 'Casio',
    },

    {
      id: 2,
      image: citizen,
      name: 'Citizen',
    },
    {
      id: 3,
      image: cruiser,
      name: 'Cruiser',
    },
    {
      id: 4,
      image: omax,
      name: 'Omax',
    },
    {
      id: 5,
      image: spectrum,
      name: 'Spectrum',
    },

    {
      id: 6,
      image: watch7,
      name: 'Naviforce',
    },
    {
      id: 7,
      image: fitron,
      name: 'Fitron',
    },
    {
      id: 8,
      image: titan,
      name: 'Titan',
    },
    {
      id: 9,
      image: fastrack,
      name: 'Fastrack',
    },
    {
      id: 10,
      image: danielklein,
      name: 'Daniel klein',
    },
    {
      id: 11,
      image: uspolo,
      name: 'U.S. Polo',
    },
    {
      id: 12,
      image: fossil,
      name: 'Fossil',
    },

    {
      id: 13,
      image: seiko,
      name: 'Seiko',
    },

    {
      id: 14,
      image: blade,
      name: 'Blade',
    },
    {
      id: 15,
      image: watch9,
      name: 'Casio',
    },
    {
      id: 16,
      image: naviforce,
      name: 'Naviforce',
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
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
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
          slidesToShow: 1.2,
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
    <div className='my-5 py-5'>
      <Container id='products' className='pt-5'>
        <h1 className='text-center py-5 '>PRODUCTS</h1>
        <div className='carousel'>
          <Slider {...carouselProperties}>
            {images.map((val) => {
              return (
                <div className='image-container2' key={val.id}>
                  <Image className='image' src={val.image} alt='' />
                  <h5 className='pt-2'>{val.name}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Products;
