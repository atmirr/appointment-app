import React, { Component } from 'react';
import './assets/styles/bootstrap.min.css'
import Header from './sections/Header'
import Main from './sections/Main'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Main />
      </div>
    );
  }
}

export default App;
