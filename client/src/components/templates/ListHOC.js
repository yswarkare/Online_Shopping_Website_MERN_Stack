import React, { Component } from 'react';
import withListHOC from './withListHOC';

class WrappedList extends Component {


    render () {
        return (
            <div>
                
            </div>
        )

    }
}

const ListHOC = withListHOC(WrappedList);

export default ListHOC;