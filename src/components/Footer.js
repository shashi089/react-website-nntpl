import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import Clock from './Clock';
import './Footer.css';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import waves from '../assets/waves.svg';
import location from '../assets/location.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import logo from '../assets/blade/Timeslogo.jpeg';
import qrcode from '../assets/qrcode.png';

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <Image className='footer-image' src={waves} alt='' />
      <div className='footer-container'>
        <Container className='mt-2'>
          <Row className='justify-content-around'>
            <Col lg={2} md={2} sm={2}>
              <Clock />
            </Col>
            <Col lg={3} md={3} sm={3}>
              <h5 className='footerHeading'>Useful Links</h5>
              <div className='footerParagraph'>Home</div>
              <div className='footerParagraph'>About</div>
              <div className='footerParagraph'>Products</div>
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
                  rel='noreferrer'
                >
                  <img src={instagram} alt='' />
                </a>
              </div>
              <div className='footerParagraph'>
                <a
                  href='https://www.facebook.com/people/Time-To-Remind-Watches-2020/100049129043387/'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <img src={facebook} alt='' />
                </a>
              </div>
            </Col>
          </Row>
          <Row className='mt-3 address justify-content-start'>
            <Col lg={3} md={3} sm={3}>
              <Image className='logo-image' src={logo}></Image>
            </Col>
            <Col lg={5} md={5} sm={5}>
              <Row className='pt-2'>
                <Col lg='1' md='1' sm='1' className='image-container4'>
                  <img src={location} alt='' />
                </Col>
                <Col className='info' lg='9' md='9' sm='9'>
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
            </Col>
            <Col lg='2' md='2' sm='2' className='qr-container'>
              <img className='image' src={qrcode} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footer-content pt-5'>
        <Container className='d-flex align-items-center justify-content-between flex-wrap pt-5 footer-content-container'>
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
