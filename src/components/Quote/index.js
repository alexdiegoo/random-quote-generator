import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { getRandomQuote } from '../../api';

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (async () => {
      const data = await getRandomQuote();
      console.log(data);
      this.props.setQuote(data);
    })();
  }

  render() {
    return (
      <div className="quote-container">
        <p className="quote">
        {this.props.quote[0].quoteText}
        </p>
        <Link to={`/${this.props.quote[0].quoteAuthor}`} style={{
          textDecoration: "none", color: "#4F4F4F"
        }}>
          <div className="author">
            <div>
              <p>{this.props.quote[0].quoteAuthor}</p>
              <span>{this.props.quote[0].quoteGenre}</span>
            </div>
            <span class="material-icons" style={{fontSize: 34, color: "#fff"}}>
            trending_flat
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Quote;