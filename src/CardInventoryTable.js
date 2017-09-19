import React, { Component } from 'react';
import CardInventoryTableHeader from './CardInventoryTableHeader'
import CardInventoryTableRow from './CardInventoryTableRow'

import './App.css';
import './CardInventoryTable.css'

import $ from 'jquery';
window.jQuery = window.$ = $;

let rows = [];

class CardInventoryTable extends Component {
    constructor() {
        super();
        this.registerFloatingHeading = this.registerFloatingHeading.bind(this);
        this.updateFloatingHeaders = this.updateFloatingHeaders.bind(this);
        this.state = {
            cards: []
        }
    }
    registerFloatingHeading() {
        var clonedHeaderRow;

        $(".card-inventory-table").each(function () {
            clonedHeaderRow = $(".card-row-header", this);
            clonedHeaderRow
                .before(clonedHeaderRow.clone())
                .css("width", clonedHeaderRow.width())
                .addClass("floatingHeader");

        });

        $(window)
            .scroll(this.updateTableHeaders)
            .trigger("scroll");
    }
    updateFloatingHeaders() {
        $('.card-inventory-table').each(function () {
            var el = $(this),
                offset = el.offset(),
                scrollTop = $(window).scrollTop(),
                floatingHeader = $('.floatingHeader', this)

            var visibility = ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) ?
                'visible' : 'hidden';
            var antivisibility = visibility === 'visible' ? 'hidden' : 'visible';

            floatingHeader.css({ "visibility": visibility });
            //$('.card-row-header').css({ "visibility": antivisibility });
        })
    }
    componentDidMount() {
        this.registerFloatingHeading();
        let endpoint = this.props.endpoint + '&callback=?';
        $.getJSON(endpoint)
            .then(function (data) {
                this.setState({cards: data})
                console.log(data)
            });
    }
    render() {
        console.log('rendering')
        console.log('cards length: ' + this.state.cards.length)
        var rows = [];
        for (let i = 0; i < this.state.cards.length; i++) {
            const card = this.state.cards[i]
            rows.push(<CardInventoryTableRow name={card.name} image={card.image} wishlist="na" tradelist="na" inventory="na" type={card.typeline} mana={card.manacost} set={card.printings} power={card.power} toughness={card.toughness} price="3.50" />);
        }
        return (
            <div className="card-inventory-table">
                <CardInventoryTableHeader />
                {rows}
            </div>
        );
    }
}

export default CardInventoryTable;