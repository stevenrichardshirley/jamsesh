import React from 'react';
import SimpleSlider from "../components/CarouselMusician/Carousel.js";
import slider from '../../node_modules/react-slick/lib/slider';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from "axios";
import Slider from "react-slick";


class MusiciansBass extends React.Component {
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



  // componentDidMount(){
  //   var finishData=[];
  //   var config = {
  //     apiKey: "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I",
  //     authDomain: "jamsesh-68d39.firebaseapp.com",
  //     databaseURL: "https://jamsesh-68d39.firebaseio.com",
  //     projectId: "jamsesh-68d39",
  //     storageBucket: "jamsesh-68d39.appspot.com",
  //     messagingSenderId: "500614187735"
  //   };
  //   if (!firebase.app.length){
  //   firebase.initializeApp(config);
  //   }
    
  //   var signUpData = firebase.database();

  //   // signUpData.ref().on("value", function(childSnapshot, prevChildKey){
  //   //     childSnapshot.forEach(function(childSnapshot) {
  //   //       var childData = childSnapshot.val();
  //   //       finishData.push(childData);
  //         function ziptest(){
  //           console.log(finishData);
  //           const zip2 = 75158;
  //           const zip = 75159;
  //           const APIkey = "js-MnhBjzNQdQtszhsMRKm7wIPgnUwnS9llVlTF5LwC5k4PX57QZ8lncL0o1X0soN7t";
  //           const APIurl = "https://www.zipcodeapi.com/rest/"+APIkey+"/distance.json/"+zip+"/"+zip2+"/mile";
  //           axios.get(APIurl,{headers: {
  //             'Access-Control-Allow-Origin': '*',
  //              crossdomain: true }
  //           }).then(function(response) {
  //           console.log(response);
  //           });
  //         }
  //         ziptest();
  //   //     })
  //   // });
  


  
    
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
      <figure className="card"><img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="background"/><img src="https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="profile"/>
          <figcaption>
              <h3>Grover Dink<span>Bassist</span></h3>
              <div className="icons">
                <a href="https://soundcloud.com/"> <i className="ion-headphone"></i></a>
                <a href="mailto:groverdink@yahoo.com"> <i className="ion-ios-email"></i></a>      
              </div>
          </figcaption>
      </figure>
      <figure className="card"><img src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="background"/><img src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="profile"/>
          <figcaption>
              <h3>Matthew Wrathborn<span>Bassist</span></h3>
              <div className="icons">
                <a href="https://soundcloud.com/"> <i className="ion-headphone"></i></a>
                <a href="mailto:mwrathborn@yahoo.com"> <i className="ion-ios-email"></i></a>      
              </div>
          </figcaption>
      </figure>
      <figure className="card"><img src="https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="background"/><img src="https://images.pexels.com/photos/1031081/pexels-photo-1031081.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile-sample1" className="profile"/>
          <figcaption>
              <h3>Milicent Miller<span>Bassist</span></h3>
              <div className="icons">
                <a href="https://soundcloud.com/"> <i className="ion-headphone"></i></a>
                <a href="mailto:Milner_Milner@yahoo.com"> <i className="ion-ios-email"></i></a>      
              </div>
          </figcaption>
      </figure>
      </div>
    </Slider>
    );
  }
}

export default MusiciansBass
