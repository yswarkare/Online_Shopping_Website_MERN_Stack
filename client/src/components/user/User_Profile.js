import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

class UserProfile extends Component {


    render () {
        return (
            <div className="user-profile">
                <Link to="/orders">
                    <div className="card list-group-item-action">
                        <span>Orders</span>
                    </div>
                </Link>
                <Link to="/wishlist">
                    <div className="card list-group-item-action">
                        <span>Wishlist</span>
                    </div>
                </Link>
            </div>
        )

    }
}

UserProfile.propTypes = {
    
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(UserProfile);