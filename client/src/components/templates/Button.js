import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

class CustomButton extends Component {
    constructor(props) {
        super()
        this.state = {
            buttonName: "Button Name"
        }
    }

    componentDidMount = () => {
        this.setState({
            buttonName: this.props.buttonName
        })
    }

    buttonClick = () => {
        this.props.onClick()
    }
    
    render() {
        return (
            <Fragment>
                <Link to={this.props.redirect}>
                <button 
                className="btn btn-primary"
                onClick={()=>{this.buttonClick()}}
                variant="contained" 
                color="secondary">
                {this.state.buttonName}
                </button>
                </Link>
            </Fragment>
        );
    }
}

export default CustomButton;  