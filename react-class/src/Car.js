import React from 'react';

class Car extends React.Component{
    render(){
        return(
            <>
                <h1>There is a {this.props.color} Car</h1>
            </>
        )
    }
}

export default Car;