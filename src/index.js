import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';
import './css/bootstrap.min.css';
import './css/tooplate-style.css';
import { HeroImage } from './HeroImage';
import Gallery from './Gallery';
import { Header } from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        {/* <HeroImage /> */}
        <Gallery />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
