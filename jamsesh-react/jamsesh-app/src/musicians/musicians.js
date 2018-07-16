import React from 'react';
import SimpleSlider from "../components/CarouselMusician/Carousel.js";
import slider from '../../node_modules/react-slick/lib/slider';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from "axios";


class Musicians extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    var finishData=[];
    var config = {
      apiKey: "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I",
      authDomain: "jamsesh-68d39.firebaseapp.com",
      databaseURL: "https://jamsesh-68d39.firebaseio.com",
      projectId: "jamsesh-68d39",
      storageBucket: "jamsesh-68d39.appspot.com",
      messagingSenderId: "500614187735"
    };
    if (!firebase.app.length){
    firebase.initializeApp(config);
    }
    
    var signUpData = firebase.database();

    // signUpData.ref().on("value", function(childSnapshot, prevChildKey){
    //     childSnapshot.forEach(function(childSnapshot) {
    //       var childData = childSnapshot.val();
    //       finishData.push(childData);
          function ziptest(){
            console.log(finishData);
            const zip2 = 75158;
            const zip = 75159;
            const APIkey = "js-MnhBjzNQdQtszhsMRKm7wIPgnUwnS9llVlTF5LwC5k4PX57QZ8lncL0o1X0soN7t";
            const APIurl = "https://www.zipcodeapi.com/rest/"+APIkey+"/distance.json/"+zip+"/"+zip2+"/mile";
            axios.get(APIurl,{headers: {
              'Access-Control-Allow-Origin': '*',
               crossdomain: true }
            }).then(function(response) {
            console.log(response);
            });
          }
          ziptest();
    //     })
    // });
  }


  render() {
    return (
    <SimpleSlider />
    );
  }
}

export default Musicians
