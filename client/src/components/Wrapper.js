import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn, userLogin, verifyCookies, setUserLogout } from "../redux/actions/user_actions";
import { getAllProducts } from "../redux/actions/procut_actions"; 
import MainHeader from "./headers/MainHeader";
import HomePage from "./HomePage";
import UserLogIn from "./user/UserLogIn";
import RegisterUser from "./user/Register_User";
import UserAccount from "./user/User_Account";
import UserDashboard from "./user/User_Dashboard";
import UserProfile from "./user/User_Profile";
import UserSettings from "./user/UserSettings"
import ProductPage from './product/ProductPage';
import Cart from "./cart/Cart";
import OrderPage from "./order/OrderPage";
import Orders from "./order/Orders";


class Wrapper extends Component {

    componentDidMount = () => {
        this.props.isUserLoggedIn();
        this.props.getAllProducts();
    }

    render() {
        return (
            <div className="wrapper">
                <Router>
                <MainHeader></MainHeader>
                    <Switch>
                        <Route exact path="/"><HomePage></HomePage></Route>
                        <Route exact path="/user-login"><UserLogIn></UserLogIn></Route>
                        <Route exact path="/register-user"><RegisterUser></RegisterUser></Route>
                        <Route exact path="/user-account"><UserAccount></UserAccount></Route>
                        <Route exact path="/user-dashboard"><UserDashboard></UserDashboard></Route>
                        <Route exact path="/user-profile"><UserProfile></UserProfile></Route>
                        <Route exact path="/user-settings"><UserSettings></UserSettings></Route>
                        <Route exact path="/product-page/:id" component={ProductPage}></Route>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/order/:id" component={OrderPage}></Route>
                        <Route exact path="/orders" component={Orders}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

Wrapper.propTypes = {
    user: PropTypes.object.isRequired,
    isUserLoggedIn: PropTypes.func.isRequired,
    verifyCookies: PropTypes.func.isRequired,
    userLogin: PropTypes.func.isRequired,
    setUserLogout: PropTypes.func.isRequired,
    getAllProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    isUserLoggedIn,
    userLogin,
    verifyCookies,
    setUserLogout,
    getAllProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)