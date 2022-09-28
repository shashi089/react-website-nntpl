import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import web from '../assests/laptop.svg';
import mobile from '../assests/mobile.svg';
import crm from '../assests/crm.svg';

const Home = () => {
  return (
    <div>
      <section className='home_section' id='home'>
        <div className='header_height sec_bg d-flex align-items-center'>
          <div className='container'>
            <div className='col-12 col-md-9 col-lg-6 pt-5 pb-5'>
              <h1 className='headerColor'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className='text-white lead'>
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
              <button className='btn btn-lg col-lg-4 col-6 btn_custom btn_shadow'>
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id='services'>
        <Container className=' mt-5 mb-5 pt-5 pb-5'>
          <div className='mb-4 text-center'>
            <p className='display-6 mb-1 '>What we do...</p>
            <p className='text-muted'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <Row className='d-flex align-items-center justify-content-evenly mt-5 ourwork'>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={crm} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>
                  Software <br />
                  Development
                </h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Col>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={mobile} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>Mobile App Development</h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Col>
            <Col className='col-md-4 col-lg-3 text-center'>
              <div className='box_border position-relative rounded pt-5 pb-3 px-3'>
                <div className='icons'>
                  <img src={web} alt='' />
                </div>
                <h5 className='mb-2 mt-4'>Web Design and Development</h5>
                <p className='text-muted text-left text-xl-center text-lg-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
