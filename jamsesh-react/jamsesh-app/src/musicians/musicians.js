import React from 'react';
import SimpleSlider from "../components/CarouselMusician/Carousel.js";
import slider from '../../node_modules/react-slick/lib/slider';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import searchProfiles from './searchProfiles';
import searchResults from  './searchResults';
import members from '../utility/api/profileSearch.json'
import gapi from 'gapi-client';
import axios from "axios";
//import card from './src/components/card'





class Musicians extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      displayName: "",
      id: [],
    }
  this.google = this.google.bind(this)
  }


  
  componentDidMount() {
    this.google()
    const key = "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I"
    const url = 'T https://people.googleapis.com/v1/people/me?personFields=names&fields=names&key=' + key;
    

    axios.get(url)
      .then((response) =>{
        this.setState({
          members
        })
      })
      .catch((error)=> console.log(error));
    };

 
   // var finishData=[];
   // var config = {
     // apiKey: "AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I",
     // authDomain: "jamsesh-68d39.firebaseapp.com",
     // databaseURL: "https://jamsesh-68d39.firebaseio.com",
     // projectId: "jamsesh-68d39",
     // storageBucket: "jamsesh-68d39.appspot.com",
     // messagingSenderId: "500614187735"
    //};
   // if (!firebase.app.length){
   // firebase.initializeApp(config);
   //}
    
  //  var signUpData = firebase.database();

    //signUpData.ref().on("value", function(childSnapshot, prevChildKey){
      //  childSnapshot.forEach(function(childSnapshot) {
       //  var childData = childSnapshot.val();
       //  finishData.push(childData);
       //   function ziptest(){
       //     console.log(finishData);
       //     const zip2 = 75158;
       //     const zip = 75159;
       //     const APIkey = "js-MnhBjzNQdQtszhsMRKm7wIPgnUwnS9llVlTF5LwC5k4PX57QZ8lncL0o1X0soN7t";
      //      const APIurl = "https://www.zipcodeapi.com/rest/"+APIkey+"/distance.json/"+zip+"/"+zip2+"/mile";
      //      axios.get(APIurl,{headers: {
      //        'Access-Control-Allow-Origin': '*',
     //          crossdomain: true }
     //       }).then(function(response) {
      //      console.log(response);
     //       });
    //      }
   //      ziptest();
   //  /    })
 //  });
 // }

 google() {
  function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': 'AIzaSyDYc_Phs9I-6OQYRdcvmPPi9AJXNOYiE1I',
      // clientId and scope are optional if auth is not required.
      'clientId': '500614187735-ijct501n3sdqnrjkh2q0prknkkoak0ov.apps.googleusercontent.com',
      'scope': 'profile',
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.request({
        'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
      })
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
  // 1. Load the JavaScript client library.
  gapi.load('client', start);

 };

renderItems() {
  return this.state.searchmember.map((item) => (
    <searchResults key={item.name} item={item} />
  ));
}

    render() {
      console.log ("state",this.state)
    return (
     <SimpleSlider />
    )
  };
}

export default Musicians
