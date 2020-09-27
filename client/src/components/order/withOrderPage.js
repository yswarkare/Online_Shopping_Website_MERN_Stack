import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrderById } from "../../redux/actions/order_actions";


const withOrderPage = (WrappedOrderPage) => {
    class withOrderPage extends Component {

        componentDidMount = () => {
            this.props.getOrderById(this.props.match.params.id);
        }

        render () {
            return (
                <div>
                    <WrappedOrderPage
                        order_id={this.props.match.params.id}
                        order={this.props.order}
                    ></WrappedOrderPage>
                </div>
            )
        }
    }

    withOrderPage.propTypes = {
        order: PropTypes.object.isRequired,
        getOrderById: PropTypes.func.isRequired
    }

    const mapStateToPorps = (state) => {
        return {
            order: state.orders.order
        }
    }

    const mapDispatchToProps = {
        getOrderById
    }

    return connect(mapStateToPorps, mapDispatchToProps)(withOrderPage);
}
export default withOrderPage;