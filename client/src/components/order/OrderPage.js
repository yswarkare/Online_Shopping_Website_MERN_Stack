import React, { Component } from 'react';
import withOrderPage from './withOrderPage';

class WrappedOrderPage extends Component {


    render () {
        return (
            <div className="order-page">
                <div></div>
            </div>
        )
    }
}

const OrderPage = withOrderPage(WrappedOrderPage);

export default OrderPage;