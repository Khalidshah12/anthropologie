import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Navbar2.module.css";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    //   outerWidth: "80%",
    };
    return (
      <div>
        {/* <h2>Auto Play</h2> */}
        <Slider className="BNAEERS" {...settings}>
          <div>
            <h3>count DOWN to dressing up!</h3>
          </div>
          <div>
            <h3>Order by 12/27, 1PM ET with Express Shipping</h3>
          </div>
          <div>
            <h3>shop for New Year's Eve</h3>
          </div>
          <div>
            <h3>The Home Refresh Event</h3>
          </div>
          <div>
            <h3>Up to 30% OFF in-stock furniture, décor, bedding & more!</h3>
          </div>
          <div>
            <h3>shop now</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
