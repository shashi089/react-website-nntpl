import React from 'react';
import { Container, Image } from 'react-bootstrap';
import {
  police,
  leecooper,
  uspolo,
  blade,
  imperial,
} from '../assets/TopBrands';
import './topbrands.css';

const TopBrands = () => {
  return (
    <div className='topBrands py-5'>
      <Container>
        <h2 className='py-5 text-center'>TOP BRANDS</h2>
        <div className='d-flex justify-content-around align-items-center'>
          <div className='image-container'>
            <div className='sub-container'>
              <Image className='image' src={police}></Image>
            </div>
            <h6>Police</h6>
          </div>
          <div className='image-container'>
            <div className='sub-container'>
              <Image className='image' src={leecooper}></Image>
            </div>

            <h6>Lee Cooper</h6>
          </div>
          <div className='image-container'>
            <div className='sub-container'>
              <Image className='image' src={uspolo}></Image>
            </div>
            <h6>U. S. Polo</h6>
          </div>
          <div className='image-container'>
            <div className='sub-container'>
              <Image className='image' src={blade}></Image>
            </div>
            <h6>Blade</h6>
          </div>
          <div className='image-container'>
            <div className='sub-container'>
              <Image className='image' src={imperial}></Image>
            </div>
            <h6>Imperial</h6>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBrands;
