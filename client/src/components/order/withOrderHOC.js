import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withOrderHOC = (WrappedOrder) => {
    class withOrderHOC extends Component {


        render () {
            return (
                <Fragment>
                    {
                        this.props.orders !== undefined && this.props.orders.map((order, index) => {
                            return (
                                <WrappedOrder
                                    key={index}
                                    order={order}
                                    index={index}
                                ></WrappedOrder>
                            )
                        })
                    }
                </Fragment>
            )
        }
    }

    withOrderHOC.propTypes = {
        orders: PropTypes.array.isRequired
    }

    const mapStateToPorps = (state) => {
        return {
            orders: state.orders.orders
        }
    }

    const mapDispatchToProps = {
        
    }

    return connect(mapStateToPorps, mapDispatchToProps)(withOrderHOC);
}
export default withOrderHOC;