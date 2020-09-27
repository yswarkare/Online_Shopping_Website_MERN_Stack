import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class UserHeader extends Component {

    constructor () {
        super();
        this.state = {
            activeTab: "account",
            accountClass: "card list-group-item-action p-2",
            profileClass: "card list-group-item-action p-2",
            dashboardClass: "card list-group-item-action p-2",
            activeClass: "card list-group-item-action list-group-item-info p-2",
            inactiveClass: "card list-group-item-action p-2",
        }
    }

    componentDidMount = () => {
        let savedState = JSON.parse(sessionStorage.getItem("online_Shopping_site_state"));
        console.log("State from Session Storage => ");
        console.log(savedState);
    }

    onClickChangeTab = (tab) => {
        this.setState({
            activeTab: tab
        });
        if (tab === "dashboard") {
            this.setState({
                dashboardClass: this.state.activeClass,
                profileClass: this.state.inactiveClass,
                accountClass: this.state.inactiveClass
            })
        } else if (tab === "profile"){
            this.setState({
                dashboardClass: this.state.inactiveClass, 
                profileClass: this.state.activeClass,
                accountClass: this.state.inactiveClass
            })
        } else if (tab === "account") {
            this.setState({
                dashboardClass: this.state.inactiveClass, 
                profileClass: this.state.inactiveClass,
                accountClass: this.state.activeClass
            })
        }
    }

    render () {
        return (
            <Fragment>
                <ul className="user-header">
                    <Link to="/user-dashboard">
                        <li className={this.state.dashboardClass} onClick={()=>{this.onClickChangeTab("dashboard")}}>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/user-profile">
                        <li className={this.state.profileClass} onClick={()=>{this.onClickChangeTab("profile")}}>
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to="/user-account">
                        <li className={this.state.accountClass} onClick={()=>{this.onClickChangeTab("account")}}>
                            <span>Account</span>
                        </li>
                    </Link>
                </ul>
            </Fragment>
        )
    }
}

UserHeader.propTypes = {
    
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(UserHeader);