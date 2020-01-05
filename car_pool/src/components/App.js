import React from 'react';
import './App.css';
import LogsTableHeader from './LogsTableHeader';
import RouteLogList from './routeLogList';

const App = () => {
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
        <img id="plus" alt="add a new log" src="./img/plus.png"></img>
      </div>

      </div>
    </div>
  );
}

export default App;
