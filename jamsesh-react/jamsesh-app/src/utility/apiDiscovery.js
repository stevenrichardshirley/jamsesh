import React from 'react';
import gapi from 'gapi';
import $script from 'scriptjs';

$script('https://apis.google.com/js/api.js', function () {
  //Put your google api functions here as callback
});

class apiDiscovery extends React.Component {
  componentDidMount() {
    // this is taken directly from Google documentation:
    // https://developers.google.com/api-client-library/javascript/start/start-js
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
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
  }
};

export default apiDiscovery;

