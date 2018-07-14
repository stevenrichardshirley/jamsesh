import React from 'react';
import SimpleSlider from "../components/Carousel/carousel.js";
import slider from '../../node_modules/react-slick/lib/slider';


class Musicians extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <SimpleSlider />
    );
  }
}

export default Musicians
