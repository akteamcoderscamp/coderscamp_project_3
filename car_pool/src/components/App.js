import React, { Component } from 'react';
import './App.css';
import LogsTableHeader from './LogsTableHeader';
import RouteLogList from './routeLogList';
import AddNewLog from './AddNewLog';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hideForm: 'none' }

    this.formDisplay = this.formDisplay.bind(this);
  }

  async formDisplay() {
    await this.setState({ hideForm: 'in-line block' });
  }

  render() {

    const visibility = this.state.hideForm;

  return (
    <div className="container">

      <div className="userPanel">

      <div className="header icons">
        <img id="questionMark" alt="questionMark" src="./img/ant-design_question-circle-fill.png"></img>
        <img id="userIcon" alt="user" src="./img/user_profile.png"></img>
      </div>

      <div className="header title">
        Route Log
      </div>

      <div className="content">
        <div className="routeLog">
          <LogsTableHeader />
          <RouteLogList />
        </div>
      </div>

      <div className="header icons">
        <img id="plus" alt="add a new log" src="./img/plus.png" onClick={this.formDisplay}></img>
      </div>

      </div>

      <div id="overlap" style={{display:visibility}}>
        <AddNewLog />
      </div>

    </div>

  );
  
  }

}


export default App;
