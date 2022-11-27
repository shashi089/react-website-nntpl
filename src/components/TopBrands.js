import React from "react";
import { Container, Image } from "react-bootstrap";
import {
  police,
  leecooper,
  uspolo,
  blade,
  imperial,
} from "../assets/TopBrands";
import "./topbrands.css";
import "./OurBrands.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

import watch9 from "../assets/casio/edifice-ed475-efs-s550db-1avudf-edifice.webp";
import watch10 from "../assets/sveston/SV-7425_Cam001M4_1b543194-8186-479c-ba1a-ec67e04c8517_600x.webp";

const TopBrands = () => {
  const images = [
    {
      id: 1,
      image: uspolo,
      name: "U. S. Polo",
    },
    {
      id: 2,
      image: police,
      name: "Police",
    },
    {
      id: 3,
      image: leecooper,
      name: "Lee Cooper",
    },
    {
      id: 4,
      image: blade,
      name: "Blade",
    },
    {
      id: 5,
      image: watch10,
      name: "Sweston",
    },
    {
      id: 6,
      image: watch9,
      name: "Casio",
    },
    {
      id: 7,
      image: imperial,
      name: "Imperial",
    },
    {
      id: 8,
      image: leecooper,
      name: "Lee Cooper",
    },
    {
      id: 9,
      image: police,
      name: "Police",
    },
    {
      id: 10,
      image: uspolo,
      name: "U. S. Polo",
    },
  ];
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowLeft style={{ color: "#ff6565", fontSize: "25px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowRight style={{ color: "#ff6565", fontSize: "25px" }} />
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
          slidesToShow: 1.25,
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
    <div className="topBrands py-5">
      <Container className="pt-3">
        <h2 className="py-5 text-center ">TOP BRANDS</h2>
        <div className="carousel">
          <Slider {...carouselProperties}>
            {images.map((val) => {
              return (
                <div
                  className="image-container mt-1 text-center d-flex justify-content-around align-items-center"
                  key={val.id}
                >
                  <div className="sub-container">
                    <Image className="image" src={val.image} alt="" />
                  </div>
                  <h6>{val.name}</h6>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default TopBrands;
