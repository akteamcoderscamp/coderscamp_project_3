import React, { Component } from 'react';
import './App.css';
import VehicleList from './vehicleList.js';
import routeApi from '../apis/routeAPI';

class AddNewLog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: Date.now,
            vehicle: '',
            starting: '',
            destination: '',
            km: 0,
            invoice: 0,
            state: false,
            routes: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })
        routeApi.getAllRoutes().then(routes => {
            this.setState({
                routes: routes.data,
                isLoading: false
            })
        })
    };
      
    handleDateChange = (event) => {
        this.setState({ date: event.target.value });
    }
    handleStartingChange = (event) => {
        this.setState({ starting: event.target.value });
    }
    handleDestinationChange = (event) => {
        this.setState({ destination: event.target.value });
    }
    handleKmChange = (event) => {
        this.setState({ km: event.target.value });
    }
    handleInvoiceChange = (event) => {
        this.setState({ invoice: event.target.value });
    }
    handleStateChange = (event) => {
        this.setState({ state: event.target.value });
    }
      
    render() {
        console.log(this.state.vehicle)
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
                <input id="date" type="date" value={this.state.date} onChange={this.handleDateChange}></input>
                <VehicleList vehicle={this.state.vehicle}/>
                <input id="starting" placeholder="ex. Wroclaw" value={this.state.starting} onChange={this.handleStartingChange}></input>
                <input id="destination" placeholder="ex. Warszawa" value={this.state.destination} onChange={this.handleDestinationChange}></input>

              </div>
        </div>

        <div className="formP2 titleSmall">
            <div className="column left">
                <div>KM</div>
                <div>Invoice</div>
            </div>
            <div className="column right">
                <input id="km" value={this.state.km} onChange={this.handleKmChange}></input>
                <input id="invoice" placeholder="ex. 100" value={this.state.invoice} onChange={this.handleInvoiceChange}></input>
            </div>
        </div>

        <div className="formP3 titleSmall">
            <input id="checkbox" type="checkbox" value={this.state.state} onChange={this.handleStateChange}/>
            <div>Route is finished</div>
        </div>
        </div>

        <div className="formP4">
            <button >Add</button>
        </div>

        </form>

    </div>
    )
    }

}


export default AddNewLog;