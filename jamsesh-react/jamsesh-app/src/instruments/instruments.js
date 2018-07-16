import React from 'react';
import SimpleSlider from "../components/CarouselInstrument/Carousel.js";




class Instruments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SimpleSlider />
      </div>
    );
  }
}

export default Instruments
