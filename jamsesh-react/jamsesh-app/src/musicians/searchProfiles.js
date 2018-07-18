import React from 'react';
import searchResults from './searchResults';

class searchProfiles extends React.Component {

renderItems () {
    return this.props.item.map((item) => (
      <NewSingle key={item.id} item={item} />
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

export default search;