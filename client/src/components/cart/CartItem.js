import React, { Component } from 'react';
import withCartItem from './withCartItem';

class WrappedCartItem extends Component {

    constructor () {
        super();
        this.state = {
            toggleInfo: false
        }
    }

    onClickToggle = () => {
        this.setState({
            toggleInfo: !this.state.toggleInfo
        });
    }

    render () {
        return (
            <div className="cart-item">
                <div className="cart-item-header" onClick={()=>{this.onClickToggle()}}>
                    <div>{this.props.product.brandName}</div>
                    <div>
                        <span>Price &#8377; { this.props.product.price }</span>
                    </div>
                </div>
                {
                    this.state.toggleInfo === true &&
                    <div className="product-price">
                        <div><span>Price </span></div><div>&#8377; { this.props.product.price }</div>
                        <div><span>MRP </span></div><div className="mrp">&#8377; { this.props.product.mrp }</div>
                        <div><span>Discount </span></div><div>{ this.props.product.discount }</div>
                        <div><span>Delivery Charge </span></div><div>&#8377; { this.props.product.deliveryCharge }</div>
                    </div>
                }
            </div>
        )
    }
}

const CartItem = withCartItem(WrappedCartItem);

export default CartItem;