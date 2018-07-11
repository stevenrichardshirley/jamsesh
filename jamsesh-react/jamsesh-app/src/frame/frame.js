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
          <a href="home" id="jamlogo" class="hvr-back-pulse">J</a>
          <div id="startup">
          <a href="" class="hvr-back-pulse" id="signup">SIGN UP</a>
          <br></br>
        <div id="loginwrap"><a href="" class="hvr-back-pulse" id="login">LOG IN</a></div>
          </div>
        </header>
        {this.props.children}
        <footer id="masterfoot"><div id="footertext">© 2018 JAMSESH | ALL RIGHTS RESERVED</div></footer>
      </div>
    );
  }
}

export default frame
