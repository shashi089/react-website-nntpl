import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Contact.css';
import location from '../assests/location.svg';
import phone from '../assests/phone.svg';
import mail from '../assests/mail.svg';

const Contact = () => {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Row className='form-container'>
          <Col className='sub-container1 pt-5 pb-5'>
            <h4 className='text-center pb-5'>Get in touch</h4>
            <Form className='ps-5 pe-5'>
              <Row>
                <Col>
                  <Form.Group className='mb-3'>
                    <Form.Control type='text' placeholder='First Name' />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3'>
                    <Form.Control type='text' placeholder='Last Name' />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className='mb-3'>
                <Form.Control type='email' placeholder='Email' />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Message'
                  as='textarea'
                  rows={5}
                />
              </Form.Group>
              <div className='text-center'>
                <Button variant='primary' type='submit' className='ps-5 pe-5'>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col className='sub-container2 pt-5 pb-5'>
            <h4 className='text-center pb-5'>Contact Us</h4>
            <div className='addrress-container'>
              <Row className='pt-2'>
                <Col lg='1' md='1' className='image-container'>
                  <img src={location} alt='' />
                </Col>
                <Col className='info'>
                  <div>
                    <strong> Address :</strong> Plot 17, Suhag Colony, Bagalkot
                    Road, Bijapur, Karnataka, India- 586101
                  </div>
                </Col>
              </Row>
              <Row className='pt-2'>
                <Col lg='1' md='1' className='image-container'>
                  <img src={phone} alt='' />
                </Col>
                <Col className='info'>
                  <div>
                    <strong> Phone :</strong> 9900990099
                  </div>
                </Col>
              </Row>
              <Row className='pt-2'>
                <Col lg='1' md='1' className='image-container'>
                  <img src={mail} alt='' />
                </Col>
                <Col className='info'>
                  <div>
                    <strong> Email :</strong> nntpl@gmail.com
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
