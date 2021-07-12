import React from 'react';
import './style.css';

import { getQuotesOfAuthor } from '../../api';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.match.params.author,
      quotes: []
    }
  }

  componentDidMount() {
    (async () => {
      const data = await getQuotesOfAuthor(this.state.author);
      this.setState({quotes: data});
    })();
  }

  setAuthor = (randomAuthor) => {
    this.setState({author: randomAuthor});
  }

  render() {
    return (
      <div className="author-container">
        <div className="list-of-quotes">
          <h1 style={{marginBottom: 140, marginLeft: 86, marginTop: 30}}>{this.state.author}</h1>
          <div className="quotes">
            <div className="quote-container">
              {
                this.state.quotes &&
                this.state.quotes.map((data) => {
                  return (
                    <p className="quote" key={data._id}>{data.quoteText}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Author;