import React, { Component } from 'react';
import Countheader from  './components/Countheader';
import DisplayCounter from './components/DisplayCounter';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      deadline: '25 December,2017',
      newDate: ''
    };
    this.updateDate =this.updateDate.bind(this);
    this.setDate =this.setDate.bind(this);
  };
  updateDate (e) {
    this.setState({newDate: e.target.value});
  }
  setDate () {
    this.setState({deadline: this.state.newDate})
  }

  render(){
    return (
    <div className='app'>
      <Countheader deadline={this.state.deadline}/>
      <DisplayCounter
        showDate={this.state.deadline}
        />
        <br />
      <div className='form-inline form-group'>
        <input className='form-control' type='text' onChange={this.updateDate}/>
      </div>
      <button className='btn btn-primary' type='submit' onClick={this.setDate}>Submit</button>
    </div>
    );
  }
};
export default App;
