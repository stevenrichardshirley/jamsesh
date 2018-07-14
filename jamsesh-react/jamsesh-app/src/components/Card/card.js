import React from 'react';
import "./card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <figure className="card"><img src="http://1.bp.blogspot.com/_XpzVbtlY8wE/Sb0qULjlH0I/AAAAAAAAB5A/CtVQyyF8Q_g/s400/japanese+cartoon.jpg" alt="profile-sample1" className="background"/><img src="http://1.bp.blogspot.com/_XpzVbtlY8wE/Sb0qULjlH0I/AAAAAAAAB5A/CtVQyyF8Q_g/s400/japanese+cartoon.jpg" alt="profile-sample1" className="profile"/>
            <figcaption>
                <h3>Test Test<span>Drummer</span></h3>
                <div className="icons">
                        <a href="#"> <i className="ion-headphone"></i></a>
                        <a href="#"> <i className="ion-ios-email"></i></a>
                        <a href="#"> <i className="ion-ios-home"></i></a>
                </div>
            </figcaption>
        </figure>
    );
  }
}

export default Card
