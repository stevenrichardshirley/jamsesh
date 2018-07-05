import React from 'react';

class frame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header id="masterhead">
          <button id="signup">Sign Up</button>
          <div id="logo">Logo</div>
          <button id="Login">Log In</button>
        </header>
        {this.props.children}
        <footer>{"© 2018 JAMSESH | ALL RIGHTS RESERVED"}</footer>
      </div>
    );
  }
}

export default frame
