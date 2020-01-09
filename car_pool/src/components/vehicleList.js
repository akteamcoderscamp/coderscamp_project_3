import React, { Component } from 'react';
import vehicleApi from '../apis/vehicleAPI.js';

class VehicleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })
        vehicleApi.getAllVehicles().then(vehicles => {
            this.setState({
                vehicles: vehicles.data,
                isLoading: false
            })
        })
    };

    renderList() {

        return this.state.vehicles.map(vehicle => {

            return (
                <option key={vehicle._id}>
                    {vehicle.plate}
                </option>
            );
        });

    };

    render() {

        return (
        <select id="selectVehicle">
            {this.renderList()}
        </select>
        )
    };
}

export default VehicleList
