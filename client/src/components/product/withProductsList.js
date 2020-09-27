import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withProductListHOC = (WrappedProductList) => {
    class withProductList extends Component {

        componentDidMount = () => {
            
        }

        render () {
            return (
                <Fragment>
                    <div className="product-cards">
                        {
                            this.props.products.products.map((product, index)=>{
                                return (
                                    <WrappedProductList key={index} product={product}></WrappedProductList>
                                )
                            })
                        }
                    </div>
                </Fragment>
            )
        }
    }

    withProductList.propTypes = {
        products: PropTypes.object.isRequired
    }

    const mapStateToPorps = (state) => {
        return {
            products: state.products
        }
    }

    const mapDispatchToProps = {
        
    }

    return connect(mapStateToPorps, mapDispatchToProps)(withProductList);
}

export default withProductListHOC;