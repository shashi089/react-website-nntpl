import React from 'react';
import './Product.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import watch1 from '../assets/TopBrands/blaze.jpeg';
import watch2 from '../assets/TopBrands/imperial.jpg';
import watch3 from '../assets/TopBrands/leecooper.jpeg';
import watch4 from '../assets/TopBrands/policemen.jpeg';
import watch5 from '../assets/TopBrands/uspolo.jpeg';
import watch6 from '../assets/casio/casio-ex403-eqb-800db-1adr-edifice.webp';
import watch7 from '../assets/naviforce/624510cb85783.png';
import watch8 from '../assets/sveston/Lala360_Cam001M3_1c20b4f7-2295-47eb-acee-97ebe3f3d9d0_600x.webp';
import watch9 from '../assets/casio/edifice-ed475-efs-s550db-1avudf-edifice.webp';
import watch10 from '../assets/sveston/SV-7425_Cam001M4_1b543194-8186-479c-ba1a-ec67e04c8517_600x.webp';
import { Container, Image } from 'react-bootstrap';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const Products = () => {
  const images = [
    {
      id: 1,
      image: watch6,
      name: 'Casio',
    },
    {
      id: 2,
      image: watch7,
      name: 'Naviforce',
    },
    {
      id: 3,
      image: watch8,
      name: 'Sweston',
    },
    {
      id: 4,
      image: watch1,
      name: 'Blade',
    },
    {
      id: 5,
      image: watch10,
      name: 'Sweston',
    },
    {
      id: 6,
      image: watch9,
      name: 'Casio',
    },
    {
      id: 7,
      image: watch2,
      name: 'Imperial',
    },
    {
      id: 8,
      image: watch3,
      name: 'Lee Cooper',
    },
    {
      id: 9,
      image: watch4,
      name: 'Police',
    },
    {
      id: 10,
      image: watch5,
      name: 'U. S. Polo',
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
  return (
    <div className='my-5 py-5'>
      <Container id='products' className='pt-3'>
        <h1 className='text-center py-5 '>PRODUCTS</h1>
        <div className='carousel'>
          <Slider
            autoplay={false}
            autoplaySpeed={2000}
            dots={true}
            infinite={false}
            slidesToShow={4}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
          >
            {images.map((val) => {
              return (
                <div className='image-container2' key={val.id}>
                  <Image className='image' src={val.image} alt='' />
                  <h5>{val.name}</h5>
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
