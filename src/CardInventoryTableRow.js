import React, { Component } from 'react';

import './App.css';

let name, image, wishlist, tradelist, inventory, type, mana, set, power, toughness, price
let cols = []

class CardInventoryTableRow extends Component {
    constructor() {
        super();
        this.buildColumns = this.buildColumns.bind(this);
    }
    buildColumns() {
        name = this.props.name;
        image = this.props.image;
        wishlist = this.props.wishlist;
        tradelist = this.props.tradelist;
        inventory = this.props.inventory;
        type = this.props.type;
        mana = this.props.mana;
        set = this.props.set;
        power = this.props.power;
        toughness = this.props.toughness;
        price = this.props.price;
        cols = [];
        cols.push(<div className="card-cell col-2">{inventory} / {wishlist} / {tradelist}</div>)
        cols.push(<div className="card-cell col-2">{image}</div>)
        cols.push(<div className="card-cell col-2">{name}</div>)
        cols.push(<div className="card-cell col-2">{set}</div>)
        cols.push(<div className="card-cell col-2">{type}</div>)
        cols.push(<div className="card-cell col-2">{price}</div>)
    }
    render() {
        this.buildColumns();
        return (
            <div className="card-row row" style={{ "background": "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('r.jpg')", "background-size": "cover" }}>
                {cols}
            </div>
        )
    }
}

export default CardInventoryTableRow;