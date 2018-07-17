import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import Card from "../Card/card.js";

class SimpleSlider extends React.Component {
  render() {
    
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        centermode: false,
      };
    
    return (
      <Slider {...settings}>
        <div>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
        </div>
        <div>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
        </div>
        <div>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
        </div>
        <div>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
        </div>
        <div>
            <Card class="cards"></Card>
            <Card class="cards"></Card>
            <Card class="cards"></Card>
        </div>
        <div>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
          <Card class="cards"></Card>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
