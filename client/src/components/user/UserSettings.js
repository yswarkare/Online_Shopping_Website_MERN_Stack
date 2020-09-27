import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


class UserSettings extends Component {

    componentDidMount = () => {
        console.log("user space")
    }

    render () {
        return (
            <div>
                <span>this is user space</span>
            </div>
        )

    }
}

UserSettings.propTypes = {
    
}

const mapStateToPorps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToPorps, mapDispatchToProps)(UserSettings);