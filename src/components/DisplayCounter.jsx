import React, { Component } from 'react';

class DisplayCounter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.getTime =this.getTime.bind(this);
    this.setZero =this.setZero.bind(this);
  };
  componentWillMount () {
    this.getTime();
  }
  componentDidMount () {
  setInterval(() => this.getTime(), 1000)
  }
  setZero (num) {
    return num > 9 ? num : '0' + num;
  }
  getTime () {
    const time =  Date.parse(this.props.showDate) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days, hours, minutes, seconds});
  }
  render () {
    return (
      <div className='clock'>
        <div> {this.setZero(this.state.days)} Days </div>
        <div> {this.setZero(this.state.hours)} Hours </div>
        <div> {this.setZero(this.state.minutes)} Minutes </div>
        <div> {this.setZero(this.state.seconds)} Seconds </div>
      </div>
    );
  }
};

export default DisplayCounter;
