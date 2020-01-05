import React, { Component } from 'react';
import { routeApi } from '../apis';

class RouteLogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routeLogs: []
        }
    }

    componentDidMount() {
        routeApi.getAllRouteLogs().then(routeLogs => {
            this.setState(routeLogs.data)
        })
    };

    renderList() {
        const { routeLogs } = this.state
        
        return routeLogs.map(routeLog => {
            return (
                <div className="log" key={routeLog.id}>
                    <p>{routeLog}</p>
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
