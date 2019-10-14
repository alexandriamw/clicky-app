import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.groantClick = this.groantClick.bind(this);
  }

  groantClick (id) {
    console.dir(id);
  }
  
  render () {
    return (
      <div className="App">
        <header>
          <h1>Kitty Game!</h1>
          <h2>Click on the kitty to earn points, but don't click on any image more than once!</h2>
          <h3>Score: <span>0</span></h3>
        </header>
        <div className="grid-container">
          <div className="grid-item"><img src="images/groant_01.jpg" alt="a weird Groant" onClick={this.groantClick.bind(this, 1)} /></div>
          <div className="grid-item"><img src="images/groant_02.jpg" alt="an oldtimey Groant" onClick={this.groantClick.bind(this, 2)} /></div>
          <div className="grid-item"><img src="images/groant_03.jpg" alt="an adorable Groant" onClick={this.groantClick.bind(this, 3)} /></div>
          <div className="grid-item"><img src="images/groant_04.jpg" alt="a cute Groant" onClick={this.groantClick.bind(this, 4)} /></div>
          <div className="grid-item"><img src="images/groant_05.jpg" alt="a hambeast Groant" onClick={this.groantClick.bind(this, 5)} /></div>
          <div className="grid-item"><img src="images/groant_06.jpg" alt="a Groant ready to rock you like a hurricane" onClick={this.groantClick.bind(this, 6)} /></div>
          <div className="grid-item"><img src="images/groant_07.jpg" alt="a snuggle Groant" onClick={this.groantClick.bind(this, 7)} /></div>
          <div className="grid-item"><img src="images/groant_08.jpg" alt="a tarty Groant" onClick={this.groantClick.bind(this, 8)} /></div>
          <div className="grid-item"><img src="images/groant_09.jpg" alt="a curious Groant" onClick={this.groantClick.bind(this, 9)} /></div>
          <div className="grid-item"><img src="images/groant_10.jpg" alt="a Christmas Groant" onClick={this.groantClick.bind(this, 10)} /></div>
          <div className="grid-item"><img src="images/groant_11.jpg" alt="a warm Groant" onClick={this.groantClick.bind(this, 11)} /></div>
          <div className="grid-item"><img src="images/groant_12.jpg" alt="the best Groant" onClick={this.groantClick.bind(this, 12)} /></div>
        </div>
      </div>
    );
  }
}

export default App;
