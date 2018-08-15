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
      <section class="instbackground">
        <h1 class="jamsubtitles">Choose an Instrument</h1>
        <div class="instwrap">
          <a href="musicians/guitar"><img class="InstImage" id="guitar" onClick={this.Save} src={guitar}></img></a>


          <a href="musicians/drums"><img class="InstImage" id="drumset" onClick={this.Save} src={drumset}></img></a>


          <a href="musicians/mic"><img class="InstImage" id="mic" onClick={this.Save} src={mic}></img></a>


          <a href="musicians/keyboard"><img class="InstImage" id="keyboard" onClick={this.Save} src={keyboard}></img></a>


          <a href="musicians/bass"><img class="InstImage" id="bass" onClick={this.Save} src={bass}></img></a>
    </div>
      </section>
    );
  }
}

export default SimpleSlider;
