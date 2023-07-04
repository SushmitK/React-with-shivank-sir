import React from 'react';
import Car from './Car';

class Garage extends React.Component{
    render(){
        return(
            <>
                <h1>Inside a {this.props.name} Garage</h1>
                <Car color="White"/>
            </>
        )
    }
}

export default Garage;