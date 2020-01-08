import React, { Component } from 'react';
import routeApi from '../apis/routeLogAPI';

class RouteLogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeLogs: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })
        routeApi.getAllRouteLogs().then(routeLogs => {
            this.setState({
                routeLogs: routeLogs.data,
                isLoading: false
            })
        })
    };

    renderList() {

        var n = 1;
        var colorChange = 'red'

        return this.state.routeLogs.map(log => {

                log.date = log.date.substr(0, 10);
                log.lp = n;
                n=n+1;

                switch(log.status) {
                case "In Progress":
                    colorChange = 'green'
                break;
                case "Denied":
                    colorChange = 'red'
                break;
                case "Closed":
                    colorChange = 'grey'
                break;
                default:
                    
                }
            return (
                <div className="item" key={log._id}>
                    <div id="lp" className="field">{log.lp}</div>
                    <div className="field">{log.date}</div>
                    <div className="field">{log.route}</div>
                    <div className="field">{log.km}</div>
                    <div className="field">{log.vehicle}</div>
                    <div className="field">{log.invoice}</div>
                    <div id={colorChange} className="field">{log.status}</div>
                </div>
            );

        });

    };

    render() {

        return (
        <div className="logList">
            {this.renderList()}
        </div>
        )
    };
}

export default RouteLogList
