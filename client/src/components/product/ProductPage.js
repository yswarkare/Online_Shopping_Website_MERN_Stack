import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import withProductPage from './withProductPage';


class WrapedProductPage extends Component {

    onClickAddToCart = () => {
        this.props.onClickAddToCart();
    }

    onClickGoToCart = () => {
        this.props.onClickGoToCart();
    }

    onClickBuyNow = () => {
        this.props.onClickBuyNow();    
    }

    onClickAddToWishlist = () => {
        this.props.onClickAddToWishlist();
    }

    onClickRemoveFromWishlist = () => {
        this.props.onClickRemoveFromWishlist();
    }

    render () {
        return (
            <div className="product-page">
                <div>
                    <span>{ this.props.product.productName }</span>
                    <span>{ this.props.product.brandName }</span>
                </div>
                <div>
                    <img src={this.props.product.image}></img>
                </div>
                <div>
                    <span>{ this.props.product.description }</span>
                </div>
                <div className="product-price">
                    <div><span>Price </span></div><div>&#8377; { this.props.product.price }</div>
                    <div><span>MRP </span></div><div className="mrp">&#8377; { this.props.product.mrp }</div>
                    <div><span>Discount </span></div><div>{ this.props.product.discount }</div>
                    <div><span>Delivery Charge </span></div><div>&#8377; { this.props.product.deliveryCharge }</div>
                </div>
                <div className="product-page-buttons">
                    <div className="product-page-button">
                        {
                            this.props.addedToCart === false &&
                            <Button color="primary" onClick={()=>{this.onClickAddToCart()}}>Add to Cart</Button>
                        }
                        {
                            this.props.addedToCart === true &&
                            <Link to="/cart">
                                <Button color="primary" onClick={()=>{this.onClickGoToCart()}}>Go to Cart</Button>
                            </Link>
                        }
                    </div>
                    <div className="product-page-button">
                        <Link to="/cart">
                            <Button color="primary" onClick={()=>{this.onClickBuyNow()}}>Buy Now</Button>
                        </Link>
                    </div>
                    <div className="product-page-button">
                        {
                            this.props.addedToWishlist === false &&
                            <Button color="primary" onClick={()=>{this.onClickAddToWishlist()}}>Add to Wishlist</Button>
                        }
                        {
                            this.props.addedToWishlist === true &&
                            <Button color="primary" onClick={()=>{this.onClickRemoveFromWishlist()}}>Remove from Wishlist</Button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const ProductPage = withProductPage(WrapedProductPage);

export default ProductPage;