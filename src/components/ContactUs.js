import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo/CompanyLogo.jpg';
import './ContactUs.css';
import location from '../assets/location.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';

const ContactUs = () => {
  return (
    <div id='contact' className='my-5 py-5'>
      <Container className='py-5'>
        <h1 className='main-title text-center'>
          FIND <span> US AT</span>
        </h1>
        <div className='d-flex justify-content-center flex-wrap'>
          <div className='box-container-2 text-center'>
            <Image className='image' src={logo} />
          </div>
          <div className='box-container-2 pt-5 '>
            <Row className='pt-2'>
              <Col lg='1' md='1' sm='1' className='image-container4'>
                <img src={location} alt='' />
              </Col>
              <Col className='info'>
                <div>
                  <span> LULU HYPERMART</span> Sanay, AL ain, UAE. <br></br>{' '}
                  <span>LULU HYPERMART </span> Al Kuwaitat AL ain, UAE.
                </div>
              </Col>
            </Row>
            <Row className='pt-2'>
              <Col lg='1' md='1' sm='1' className='image-container4'>
                <img src={phone} alt='' />
              </Col>
              <Col cols='10' lg='10' md='10' sm='10' className='info'>
                <div>9090909090</div>
              </Col>
            </Row>
            <Row className='pt-2'>
              <Col lg='1' md='1' className='image-container4'>
                <img src={mail} alt='' />
              </Col>
              <Col className='info'>
                <div>timetoremindwatches2020@gmail.com</div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
