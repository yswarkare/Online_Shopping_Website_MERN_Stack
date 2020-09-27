import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withCartItem = (WrappedCartItem) => {
    class withCartItem extends Component {

        componentDidMount = () => {

        }

        render () {
            return (
                <div>
                    {
                        this.props.cart.products.map((product, index) => {
                            return (
                                <WrappedCartItem
                                    key={index}
                                    product={product}
                                ></WrappedCartItem>
                            )
                        })
                    }
                </div>
            )
        }
    }

    withCartItem.propTypes = {
        cart: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
    }

    const mapStateToPorps = (state) => {
        return {
            cart: state.cart,
            order: state.cart.order
        }
    }

    const mapDispatchToProps = {
        
    }

    return connect(mapStateToPorps, mapDispatchToProps)(withCartItem);
}
export default withCartItem;