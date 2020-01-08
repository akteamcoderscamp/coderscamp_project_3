import React from 'react';
import './App.css';
import VehicleList from './vehicleList.js';

const AddNewLog = () => {
    return (
        <div className="box">
          <div id="blue" className="formTitle titleSmall">Add new route</div>

        <form>
          <div className="formContent">
          <div className="formP1 titleSmall">
              <div className="left column">
                <div>Date:</div>
                <div>Vehicle:</div>
                <div>From:</div>
                <div>To:</div>
              </div>

              <div className="right column">
                <input id="date" type="date"></input>
                <VehicleList />
                <input id="starting" placeholder="ex. Wroclaw"></input>
                <input id="destination" placeholder="ex. Warszawa"></input>

              </div>
        </div>

        <div className="formP2 titleSmall">
            <div className="column left">
                <div>KM</div>
                <div>Invoice</div>
            </div>
            <div className="column right">
                <input id="km"></input>
                <input id="invoice" placeholder="ex. 100"></input>
            </div>
        </div>

        <div className="formP3 titleSmall">
            <input id="checkbox" type="checkbox" />
            <div>Route is finished</div>
        </div>
        </div>

        <div className="formP4">
            <button>Add</button>
        </div>

        </form>

    </div>
    )
};


export default AddNewLog;