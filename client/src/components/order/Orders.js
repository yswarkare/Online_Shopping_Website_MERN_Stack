import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserOrders } from "../../redux/actions/order_actions";
import WrappedOrder from './WrappedOrder';

class Orders extends Component {

    componentDidMount = () => {
        this.props.getUserOrders();
    }

    render () {
        return (
            <div className="user-orders">
               <WrappedOrder></WrappedOrder>
            </div>
        )

    }
}

Orders.propTypes = {
    getUserOrders: PropTypes.func.isRequired
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    getUserOrders
}

export default connect(mapStateToPorps, mapDispatchToProps)(Orders);