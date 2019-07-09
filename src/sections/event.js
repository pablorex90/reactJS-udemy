import React, { Component } from 'react';

class ClickHi extends Component {
  handleClick(e) {
    console.log('e: ',e);
    console.log('e native!: ',e.nativeEvent);
    alert('Hi there!');
  }
  render(){
    return <button onClick={this.handleClick}>Hi there!</button>;
  }
}

class MouseMove extends Component {
  constructor(){
    super()
    this.state = {mouseX: 0, mouseY: 0};
    // this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    this.setState({mouseX: clientX, mouseY: clientY});
  }
  render(){
    return(
      <div
      onMouseMove= {this.handleMouseMove}
      style= {{border: '1px solid #000', marginTop: 10, padding: 10}}>
        <p>{this.state.mouseX}, {this.state.mouseY}</p>
      </div>
    );
  }
}

function Event() {
  return (
    <div className="Event">
      <h4>Eventos</h4>
      <ClickHi></ClickHi>
      <MouseMove></MouseMove>
    </div>
  );
}

export default Event;
