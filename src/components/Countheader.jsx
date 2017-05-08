import React, { Component } from 'react';

class Countheader extends Component {

  render () {
    return <h1>Count down to  {this.props.deadline}</h1>;
  }
};
export default Countheader;
