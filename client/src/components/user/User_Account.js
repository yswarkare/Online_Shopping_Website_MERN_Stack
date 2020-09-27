import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserSettings from './UserSettings';
import UserDashboard from './User_Dashboard';
import UserProfile from './User_Profile';
// import PropTypes from 'prop-types';

class UserAccount extends Component {

    constructor () {
        super();
        this.state = {
            activeTab: "dashboard",
            settingsClass: "card text-light bg-dark list-group-item-action p-2",
            profileClass: "card text-light bg-dark list-group-item-action p-2",
            dashboardClass: "card text-light bg-dark list-group-item-action p-2",
            activeClass: "card text-light bg-secondary list-group-item-action list-group-item-info p-2",
            inactiveClass: "card text-light bg-dark list-group-item-action p-2",
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
                settingsClass: this.state.inactiveClass
            })
        } else if (tab === "profile"){
            this.setState({
                dashboardClass: this.state.inactiveClass, 
                profileClass: this.state.activeClass,
                settingsClass: this.state.inactiveClass
            })
        } else if (tab === "settings") {
            this.setState({
                dashboardClass: this.state.inactiveClass, 
                profileClass: this.state.inactiveClass,
                settingsClass: this.state.activeClass
            })
        }
    }

    render () {
        return (
            <div>
                <ul className="user-header">
                    <li className={this.state.dashboardClass} onClick={()=>{this.onClickChangeTab("dashboard")}}>
                        Dashboard
                    </li>
                    <li className={this.state.profileClass} onClick={()=>{this.onClickChangeTab("profile")}}>
                        Profile
                    </li>
                    <li className={this.state.settingsClass} onClick={()=>{this.onClickChangeTab("settings")}}>
                        Settings
                    </li>
                </ul>
                {
                    this.state.activeTab === "dashboard" &&
                    <UserDashboard></UserDashboard>
                }
                {
                    this.state.activeTab === "profile" &&
                    <UserProfile></UserProfile>
                }
                {
                    this.state.activeTab === "settings" &&
                    <UserSettings></UserSettings>
                }
            </div>
        )

    }
}

UserAccount.propTypes = {
    
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(UserAccount);