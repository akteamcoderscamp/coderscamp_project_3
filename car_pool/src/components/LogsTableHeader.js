import React from 'react';
import './App.css';

const LogsTableHeader = () => {
    return (
        <div id="captions" className="item">
            <div id="lp" className="field">Lp</div>
            <div className="field">Date</div>
            <div className="field">Route</div>
            <div className="field">Km</div>
            <div className="field">Vehicle</div>
            <div className="field">Invoice</div>
            <div className="field">Status</div>
          </div>
    )
};

export default LogsTableHeader;