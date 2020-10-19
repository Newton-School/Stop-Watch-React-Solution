import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <h1>{this.props.hour} : {this.props.minute} : {this.props.second}</h1>
        )
    }
}

export default Time