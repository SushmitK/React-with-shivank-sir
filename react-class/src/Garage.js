import React from 'react';
import Car from './Car';

class Garage extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Indian"
        }
    }
    render(){
        return(
            <>
                <h1>Inside a {this.state.name} Garage</h1>
                <Car />
            </>
        )
    }
}

export default Garage;