import React from 'react';
import './frame.css';

class frame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header id="masterhead">
          <a href="home"><div id="logo">Logo</div></a>
          <div id="startup">
          <button id="signup">Sign Up</button>
          <br></br>
          <button id="login">Log In</button>
          </div>
        </header>
        {this.props.children}
        <footer id="masterfoot"><div id="footertext">© 2018 JAMSESH | ALL RIGHTS RESERVED</div></footer>
      </div>
    );
  }
}

export default frame
