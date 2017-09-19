import React, { Component } from 'react';
import CardInventoryTableHeader from './CardInventoryTableHeader'
import CardInventoryTableRow from './CardInventoryTableRow'

import './App.css';
import './CardInventoryTable.css'

import $ from 'jquery';
window.jQuery = window.$ = $;

class CardInventoryTable extends Component {
    constructor() {
        super();
        this.updateTableHeaders = this.updateTableHeaders.bind(this);
    }
    updateTableHeaders() {
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
    render() {
        var rows = []
        for (let i = 0; i < 20; i++) {
            rows.push(<CardInventoryTableRow />);
        }
        return (
            <div className="card-inventory-table">
                <CardInventoryTableHeader />
                <CardInventoryTableRow name="Adarkar Wastes" image="r.jpg" wishlist="1" tradelist="0" inventory="0" type="Land" mana="" set="10E" power="" toughness="" price="1.39" />
                {rows}
            </div>
        );
    }
}

export default CardInventoryTable;