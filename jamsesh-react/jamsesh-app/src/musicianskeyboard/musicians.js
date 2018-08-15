import React from 'react';
import SimpleSlider from "../components/CarouselMusician/Carousel.js";
import slider from '../../node_modules/react-slick/lib/slider';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from "axios";
import Slider from "react-slick";


class MusiciansBass extends React.Component {
  constructor() {
    super()
    this.state = {
      users: null
    }
  }
  componentDidMount() {
    firebase.database()
      .ref('users')
      .orderByChild('instrument')
      .equalTo('keyboard')
      .on('value', (users) => {
        this.setState({ users: users.val() })
      })
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
  
    const users = this.state.users
    const keyboardists = []
    if (users) {
      for (let p in users) {
        if (users.hasOwnProperty(p)) {
            // do stuff
            const user = users[p]
            keyboardists.push(
              <figure key={p} className="card">
              <img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="background"/>
              <img src={user.photoUrl} height='150' width='150' alt="profile-sample1" className="profile"/>
                <figcaption>
                    <h3>{user.name}<span>Keyboard</span></h3>
                    <div className="icons">
                      <a href="https://soundcloud.com/"> <i className="ion-headphone"></i></a>
                      <a href={`mailto:${user.email}`}> <i className="ion-ios-email"></i></a>      
                    </div>
                </figcaption>
            </figure>
            )
        }
      }
    }

  
    
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      centermode: false,
    }
   
    return (
      <Slider {...settings}>
      <div>
        {
          keyboardists
        }
      </div>
    </Slider>
    );
  }
}

export default MusiciansBass
