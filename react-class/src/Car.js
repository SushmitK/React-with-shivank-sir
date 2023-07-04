import React from 'react';

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "White"
        }
    }
    render(){
        return(
            <>
                <h1>There is a {this.state.color} Car</h1>
            </>
        )
    }
}

export default Car;