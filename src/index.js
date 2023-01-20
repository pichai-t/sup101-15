import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { HeroImage } from './HeroImage';
import { Gallery } from './Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style={{backgroundColor:"#CAE7DF", alignContent: "center", width: "100%"}} >
        <HeroImage />
        <Gallery />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
