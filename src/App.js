import React from 'react';

import Header from './components/Header';
import Quote from './components/Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: " "
    }
  }

  setNewQuote = (newQuote) => {
    this.setState({quote: newQuote});
  }

  render() {
    return (
      <div className="app-container">
        <Header setQuote={this.setNewQuote} />
        <main className="random-quote">
          <Quote quote={this.state.quote} setQuote={this.setNewQuote}/>
        </main>
      </div>
    );
  }
}

export default App;