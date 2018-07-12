import React from 'react';
import "./Card.css";

class card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <figure class="card"><img src="http://1.bp.blogspot.com/_XpzVbtlY8wE/Sb0qULjlH0I/AAAAAAAAB5A/CtVQyyF8Q_g/s400/japanese+cartoon.jpg" alt="profile-sample1" class="background"/><img src="http://1.bp.blogspot.com/_XpzVbtlY8wE/Sb0qULjlH0I/AAAAAAAAB5A/CtVQyyF8Q_g/s400/japanese+cartoon.jpg" alt="profile-sample1" class="profile"/>
            <figcaption>
                <h3>Test Test<span>Drummer</span></h3>
                <div class="icons">
                        <a href="#"> <i class="ion-headphone"></i></a>
                        <a href="#"> <i class="ion-ios-email"></i></a>
                        <a href="#"> <i class="ion-ios-home"></i></a>
                </div>
            </figcaption>
        </figure>
    );
  }
}

export default card