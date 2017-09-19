import React, { Component } from 'react';

import './App.css';

class CardInventoryTableHeader extends Component {
    render() {
        return (
            <div className="row card-row-header">
                <div className="col-2">Count</div>
                <div className="col-2">Count</div>
                <div className="col-2">Name</div>
                <div className="col-2">Something Else</div>
            </div>
        )
    }
}

export default CardInventoryTableHeader;