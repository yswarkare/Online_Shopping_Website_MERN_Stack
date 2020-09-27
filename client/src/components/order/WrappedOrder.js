import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import withOrderHOC from './withOrderHOC';

class Order extends Component {


    render () {
        return (
            <Fragment>
                <Link to={`/order/${this.props.order._id}`}>
                    <div className="user-order">
                        <div className="user-order-header">
                            <span>{`${this.props.index + 1} `}</span>
                            <span>{`${this.props.order.createdAt}`}</span>
                        </div>
                        <div>
                            {
                                this.props.order.products.map((product, index)=>{
                                    return (
                                        <Link to={`/product-page/${product._id}`}>
                                            <div key={index} className="ordered-products-list">
                                                <span>{`${index+1}`}</span>
                                                <span>{product.productName}</span>
                                                <div><span>Price &#8377; {product.price}</span></div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="order-price">
                            <div><span>Total Price </span></div><div>&#8377; { this.props.order.price }</div>
                        </div>
                    </div>
                </Link>
            </Fragment>
        )
    }
}

const WrappedOrder = withOrderHOC(Order);

export default WrappedOrder;