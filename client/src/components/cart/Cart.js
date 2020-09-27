import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Button } from "reactstrap";
import { placeOrder } from "../../redux/actions/order_actions";


class Cart extends Component {


    proceedToCheckout = () => {
        this.props.placeOrder(this.props.order)
    }

    render () {
        return (
            <div className="cart">
                <div>
                    <span>Order Details</span>
                </div>
                <div>
                    <CartItem></CartItem>
                </div>
                <div>
                    {
                        this.props.order.products[0] === undefined &&
                        <span>Cart is emty</span>
                    }
                    {
                        this.props.order.products[0] !== undefined &&
                        <div className="order-summery">
                            <div className="product-price">
                                <div><span>Price </span></div><div>&#8377; { this.props.order.price }</div>
                                <div><span>MRP </span></div><div className="mrp">&#8377; { this.props.order.mrp }</div>
                                <div><span>Savings </span></div><div>&#8377; { this.props.order.savings }</div>
                                <div><span>Delivery Charge </span></div><div>&#8377; { this.props.order.deliveryCharge }</div>
                            </div>
                            <div>
                                <span>Proceed to </span>
                                <Button color="primary" onClick={()=>{this.proceedToCheckout()}}>Checkout</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    placeOrder: PropTypes.func.isRequired,
}

const mapStateToPorps = (state) => {
    return {
        cart: state.cart,
        order: state.cart.order
    }
}

const mapDispatchToProps = {
    placeOrder
}

export default connect(mapStateToPorps, mapDispatchToProps)(Cart);