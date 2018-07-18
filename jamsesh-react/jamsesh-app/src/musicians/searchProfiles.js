import React from 'react';
import searchResults from './searchResults';
import axio from 'axios';
import gapi from 'gapi-client';

class searchProfiles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchmember: {
        Name: 'displayName'
      },
    };
  }

 componentDidMount () {
    const url = 'https://people.googleapis.com/$discovery/rest?version=v1';

    fetch(url)
      .then ((response) => {
          return response.json();
      })
      .then((searchdata) => {
        this.setState({
          searchmember: searchdata.result
        })
      })
      .catch((error) => console.log(error));
  }

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
          'path': 'https://people.googleapis.com/v1/people/me',
        })
      }).then(function(response) {
        console.log(response.result);
        this.setState({googleData:response.result})
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
   };

  renderItems()  {
    return this.state.searchmember.map((item) => (
      <searchResults key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  };
}

export default searchProfiles;