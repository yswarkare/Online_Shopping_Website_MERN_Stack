import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { isUserLoggedIn, setUserLogout } from "../../redux/actions/user_actions";

class MainHeader extends Component {

    componentDidMount = () => {

    }

    onClickUserLogOut = () => {
        this.props.setUserLogout()
    }

    render() {
        return (
            <Fragment>
                <div className="main-header">
                    <Link to="/">
                        <div className="main-header-1 card text-light bg-dark">Home</div>
                    </Link>
                    <div className="main-header-2 card text-light bg-dark">Search Bar</div>
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <Link to="/user-login">
                            <div className="main-header-3 card text-light bg-dark">Log In</div>
                        </Link>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === false &&
                        <Link to="/register-user">
                            <div className="main-header-4 card text-light bg-dark">Register</div>
                        </Link>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <Link to="/user-account">
                            <div className="main-header-3 card text-light bg-dark">{this.props.user.user.username}</div>
                        </Link>
                    }
                    {
                        this.props.user.loginStatus.loggedIn === true &&
                        <a href="/" onClick={()=>{this.onClickUserLogOut()}}>
                            <div className="main-header-4 card text-light bg-dark">Log Out</div>
                        </a>
                    }

                </div>
            </Fragment>
        );
    }
}

MainHeader.propTypes = {
    user: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    isUserLoggedIn,
    setUserLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);