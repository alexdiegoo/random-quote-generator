import React from 'react';
import './style.css';

import { getRandomQuote } from '../../api';

class RandomButton extends React.Component {
  constructor(props) {
    super(props);
  }
 
  getQuote = async () => {
    const quote = await getRandomQuote();
    this.props.setQuote(quote);
  }

  render() {
    return (
      <div className="random-button" onClick={this.getQuote}>
        <span style={{marginRight: 11}}>random</span>
        <span className="material-icons">
        autorenew
        </span>
      </div>
    );
  }
}

export default RandomButton;