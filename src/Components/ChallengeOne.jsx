import React, { Component } from 'react';
//import images
import left from '../Assets/look-left.jpeg'
import right from '../Assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    src: left,
    alt: "looking left"
  };

  //click left/right button handler goes here
  changeEyeLeft=()=> {
    this.setState({
      src: left,
      alt: "looking left"
    })
  }
  changeEyeRight=()=> {
    this.setState({
      src: right,
      alt: "looking right"
    })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.src}
            alt={this.state.alt}
          />
        </div>
        <button className="btn" onClick={this.changeEyeLeft}>⭠</button>
        <button className="btn" onClick={this.changeEyeRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;