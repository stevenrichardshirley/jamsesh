import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import guitar from "./instrumentimages/guitar.jpg"
import drumset from "./instrumentimages/drumset.jpg"
import mic from "./instrumentimages/mic.jpg"
import keyboard from "./instrumentimages/keyboard.jpg"
import bass from "./instrumentimages/bass.jpg"

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <a class="guitar"><img class="InstImage" src={guitar}></img></a>
        </div>
        <div>
          <a class="drumset"><img class="InstImage" src={drumset}></img></a>
        </div>
        <div>
          <a class="mic"><img class="InstImage" src={mic}></img></a>
        </div>
        <div>
          <a class="keyboard"><img class="InstImage" src={keyboard}></img></a>
        </div>
        <div>
          <a class="bass"><img class="InstImage" src={bass}></img></a>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
