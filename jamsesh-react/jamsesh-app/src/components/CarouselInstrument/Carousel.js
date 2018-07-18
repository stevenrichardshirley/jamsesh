import React from "react";
import Slider from "react-slick";
import "./carousel.css";
import guitar from "./instrumentimages/guitar.jpg"
import drumset from "./instrumentimages/drumset.jpg"
import mic from "./instrumentimages/mic.jpg"
import keyboard from "./instrumentimages/keyboard.jpg"
import bass from "./instrumentimages/bass.jpg"

class SimpleSlider extends React.Component {

   Save=(e)=>{
     e.stopPropagation();
     console.log(e.target.id);
  }









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
          <a href="musicians"><img class="InstImage" id="guitar" onClick={this.Save} src={guitar}></img></a>
        </div>
        <div>
          <a href="musicians"><img class="InstImage" id="drumset" onClick={this.Save} src={drumset}></img></a>
        </div>
        <div>
          <a href="musicians"><img class="InstImage" id="mic" onClick={this.Save} src={mic}></img></a>
        </div>
        <div>
          <a href="musicians"><img class="InstImage" id="keyboard" onClick={this.Save} src={keyboard}></img></a>
        </div>
        <div>
          <a href="musicians"><img class="InstImage" id="bass" onClick={this.Save} src={bass}></img></a>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
