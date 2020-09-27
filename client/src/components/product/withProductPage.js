import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../../redux/actions/procut_actions';
import { addProductToCart } from "../../redux/actions/cart_actions";

const withProductPage = (WrappedProductPage) => {
    class withProductPage extends Component {

        constructor () {
            super();
            this.state = {
                addedToCart: false,
                addedToWishlist: false
            }
        }

        componentDidMount = () => {
            this.props.getProduct(this.props.match.params.id);
        }

        onClickAddToCart = () => {
            let productInfo = {
                product: this.props.product,
                user_id: this.props.user._id
            }
            console.log("user id adding in order");
            console.log(this.props.user._id);
            this.props.addProductToCart(productInfo);
            this.setState({
                addedToCart: true
            });
        }

        onClickGoToCart = () => {

        }

        onClickBuyNow = () => {
            let productInfo = {
                product: this.props.product,
                user_id: this.props.user._id
            }
            console.log("user id adding in order");
            console.log(this.props.user._id);
            this.props.addProductToCart(productInfo);
            this.props.addProductToCart(productInfo);
            this.setState({
                addedToCart: true
            });
        }

        onClickAddToWishlist = () => {
            this.setState({
                addedToWishlist: true
            });
        }

        onClickRemoveFromWishlist = () => {
            this.setState({
                addedToWishlist: false
            });
        }

        render () {
            return (
                <div>
                    <WrappedProductPage 
                    product={this.props.product}
                    addedToCart={this.state.addedToCart}
                    addedToWishlist={this.state.addedToWishlist}
                    onClickAddToCart={()=>{this.onClickAddToCart()}}
                    onClickBuyNow={()=>{this.onClickBuyNow()}}
                    onClickAddToWishlist={()=>{this.onClickAddToWishlist()}}
                    onClickRemoveFromWishlist={()=>{this.onClickRemoveFromWishlist()}}
                    onClickGoToCart={()=>{this.onClickGoToCart()}}
                    ></WrappedProductPage>
                </div>
            )
        }
    }

    withProductPage.propTypes = {
        user: PropTypes.object.isRequired,
        product: PropTypes.object.isRequired,
        getProduct: PropTypes.func.isRequired,
        addProductToCart: PropTypes.func.isRequired,
    }

    const mapStateToPorps = (state) => {
        return {
            user: state.user.user,
            product: state.products.product
        }
    }

    const mapDispatchToProps = {
        getProduct,
        addProductToCart
    }

    return connect(mapStateToPorps, mapDispatchToProps)(withProductPage);
}
export default withProductPage;