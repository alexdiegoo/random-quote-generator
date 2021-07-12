import React from 'react';
import './style.css';

import RandomButton from '../RandomButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <RandomButton setQuote={this.props.setQuote} />
      </header>
    );
  }
}

export default Header;