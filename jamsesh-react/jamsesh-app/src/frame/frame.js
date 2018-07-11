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
          <a href="home" id="jamlogo">J</a>
          <div id="startup">
          <a href=""><div id="signup">SIGN UP</div></a>
          <a href=""><div id="login">LOG IN</div></a>
          </div>
        </header>
        {this.props.children}
        <footer id="masterfoot"><div id="footertext">© 2018 JAMSESH | ALL RIGHTS RESERVED</div></footer>
      </div>
    );
  }
}

export default frame
