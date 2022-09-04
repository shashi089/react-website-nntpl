import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Footer.css';
import { instagram, facebook, linkedIn, twitter } from '../assests';

const Footer = () => {
  return (
    <div className='footer-container '>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <h5 className='aboutHeading'>Comapny</h5>
            <div className='aboutParagraph'>About us</div>
            <div className='aboutParagraph'>Investors</div>
            <div className='aboutParagraph'>Press Release</div>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <h5 className='aboutHeading'>Services</h5>
            <div className='aboutParagraph'>Web Development</div>
            <div className='aboutParagraph'>Mobile App Development</div>
            <div className='aboutParagraph'>Software Development</div>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <h5 className='aboutHeading'>Our Products</h5>
            <div className='aboutParagraph'>CRM</div>
            <div className='aboutParagraph'>E-commenrece</div>
            <div className='aboutParagraph'>Tours and Travels application</div>
          </Col>
        </Row>
      </Container>
      {/* <Container className='mt-4 mb-4'>
        <Row>
          <Col lg={2} md={2} sm={2}>
            NNTPL
          </Col>
          <Col lg={10} md={10} sm={10}>
            <h6>Registered Office:</h6>
            <p>
              Plot 17, Suhag Colony, Bagalkot Road, Bijapur, Karnataka, India-
              586101
            </p>
          </Col>
        </Row>
      </Container> */}
      <div className='footer-content'>
        <Container className='d-flex align-items-center justify-content-between'>
          <div className='text-white'>
            Copyright © 2022 Next Nest Technologies Pvt Ltd - All rights
            reserved
          </div>
          <div>
            <img src={instagram} alt='' />
            <img src={facebook} alt='' />
            <img src={twitter} alt='' />
            <img src={linkedIn} alt='' />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
