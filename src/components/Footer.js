import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Clock from './Clock';
import './Footer.css';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import waves from '../assets/waves.svg';

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <Image className='footer-image' src={waves} alt='' />
      <div className='footer-container'>
        <Container className='mt-5'>
          <Row className='justify-content-around'>
            <Col lg={3} md={3} sm={3}>
              <Clock />
            </Col>
            <Col lg={3} md={3} sm={3}>
              <h5 className='footerHeading'>Useful Links</h5>
              <div className='footerParagraph'>Home</div>
              <div className='footerParagraph'>About</div>
              <div className='footerParagraph'>Products</div>
              <div className='footerParagraph'>Contact Us</div>
            </Col>
            <Col lg={3} md={3} sm={3}>
              <h5 className='footerHeading'>Categories</h5>
              <div className='footerParagraph'>Watches</div>
              <div className='footerParagraph'>Watch Accessories</div>
              <div className='footerParagraph'>Clock</div>
            </Col>
            <Col lg={3} md={3} sm={3}>
              <h5 className='footerHeading'>Social Media</h5>
              <div className='footerParagraph'>
                <a
                  href='https://www.instagram.com/time_to_remind_watches/'
                  target='_blank'
                >
                  <img src={instagram} alt='' />
                </a>
              </div>
              <div className='footerParagraph'>
                <a
                  href='https://www.facebook.com/people/Time-To-Remind-Watches-2020/100049129043387/'
                  target='_blank'
                >
                  {' '}
                  <img src={facebook} alt='' />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-content'>
        <Container className='d-flex align-items-center justify-content-between'>
          <div className='text-white'>
            Copyright © 2022 Time To Remain Watches - All rights reserved
          </div>
          <div className='text-white'>
            Designed By &hearts; Next Nest Technologies Pvt. Ltd.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
