import React from 'react';
import './App.css';

const LogsTableHeader = () => {
    return (
        <div id="captions" className="log">
            <div className="lp">Lp</div>
            <div className="date">Date</div>
            <div className="route">Route</div>
            <div className="km">Km</div>
            <div className="vehicle">Vehicle</div>
            <div className="invoice">Invoice</div>
            <div className="status">Status</div>
          </div>
    )
};

export default LogsTableHeader;