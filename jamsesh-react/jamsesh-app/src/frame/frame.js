import React from 'react';
import './frame.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import history from '../history'

const config = {
  apiKey: "AIzaSyCyyHuBFXC51HGQvhJNQfDvhOcAOzApjtk",
  authDomain: "jamsesh2018.firebaseapp.com",
  databaseURL: "https://jamsesh2018.firebaseio.com",
  projectId: "jamsesh2018",
  storageBucket: "",
  messagingSenderId: "603681166914"
 };
  firebase.initializeApp(config);

  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};


class Frame extends React.Component {
  constructor(props) {
    super(props);
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user.isAnonymous) {
        const appUser = {
          photoUrl: user.photoURL,
          phoneNumber: user.phoneNumber,
          name: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified
        }
        window.localStorage.setItem('jameshAppGoogleUser', JSON.stringify(appUser))
      }
    })
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver()
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
