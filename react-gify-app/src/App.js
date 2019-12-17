import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
        gifs: [
            {
                id: 1,
                url: 'http://fakeimg.pl/300/'
            },
            {
                id: 2,
                url: 'http://fakeimg.pl/300/'
            },
            {
                id: 3,
                url: 'http://fakeimg.pl/300/'
            }
        ]
    }
}

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div class="text">
        <h1>REACT - GIFY APP</h1>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;


