import React from 'react';
import './frame.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';





const config = {
  apiKey: "AIzaSyA8j7FJgRdaFGdJVYskvUJO19O6O_RM_lw",
  authDomain: "jamsesh-c43bb.firebaseapp.com",
  databaseURL: "https://jamsesh-c43bb.firebaseio.com",
  projectId: "jamsesh-c43bb",
  storageBucket: "jamsesh-c43bb.appspot.com",
  messagingSenderId: "84443028283"
 };
  firebase.initializeApp(config);

  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/instruments',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};


class Frame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header id="masterhead">
          <a href="/" id="jamlogo" className="hvr-back-pulse">J</a>
           <a href="/signedIn" id="button" className="hvr-back-pulse">Sign Up!</a>
          <div id="startup">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="hvr-back-pulse" id="login"/>
            {/* <div id="loginwrap"><a href="" className="hvr-back-pulse" id="login">LOG IN</a></div> */}
          </div>
        </header>
        {this.props.children}
        <footer id="masterfoot"><div id="footertext">© 2018 JAMSESH | ALL RIGHTS RESERVED</div></footer>
      </div>
    );
  }
}

export default Frame
