import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Footer.css';
import { instagram, facebook, linkedIn, twitter } from '../assests';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col lg={3} md={3} sm={3}>
            <h4 className='footerHeading'>Comapny</h4>
            <div className='footerParagraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, fugit tenetur alias sed quasi reiciendis illo error,
              nihil ab eum sunt perferendis ratione explicabo nobis nemo, quas
              recusandae voluptas. Omnis.
              
            </div>
          </Col>
          <Col lg={2} md={2} sm={2}>
            <h5 className='footerHeading'>Useful Links</h5>
            <div className='footerParagraph'>Home</div>
            <div className='footerParagraph'>About</div>
            <div className='footerParagraph'>Services</div>
            <div className='footerParagraph'>Careers</div>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <h5 className='footerHeading'>Services</h5>
            <div className='footerParagraph'>Web Design</div>
            <div className='footerParagraph'>Web Development</div>
            <div className='footerParagraph'>Mobile App Development</div>
            <div className='footerParagraph'>Software Development</div>
          </Col>
          <Col lg={3} md={3} sm={3}>
            <h5 className='footerHeading'>Our Products</h5>
            <div className='footerParagraph'>CRM</div>
            <div className='footerParagraph'>E-commenrece</div>
            <div className='footerParagraph'>Tours and Travels application</div>
          </Col>
        </Row>
      </Container>

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
