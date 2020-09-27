import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withListHOC = (WrappedList) => {
    class withListHOC extends Component {


        render () {
            return (
                <div>
                    <WrappedList></WrappedList>
                </div>
            )
    
        }
    }
    
    withListHOC.propTypes = {
        
    }
    
    const mapStateToPorps = (state) => {
        return {
            
        }
    }
    
    const mapDispatchToProps = {
        
    }
    
    return connect(mapStateToPorps, mapDispatchToProps)(withListHOC);
}

export default withListHOC;