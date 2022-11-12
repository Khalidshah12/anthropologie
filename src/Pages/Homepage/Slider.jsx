import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./HOme.css";
import "slick-carousel/slick/slick-theme.css";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4114086690039_009_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4123650590238_001_c?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4112368730036_011_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4110259830506_010_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4113326950120_012_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4130257230059_001_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4130348690198_029_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
          <div className="Slider2">
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4114529100206_023_b2?$an-category$&qlt=80&fit=constrain"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
