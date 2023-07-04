import React from 'react';
import Car from './Car';

class Garage extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Indian"
        }
    }
    changeName = () => {
        if(this.state.name === "Indian"){
            this.setState({name:"Foreign"});
        }else{
            this.setState({name:"Indian"});
        }
    }
    render(){
        return(
            <>
                <h1>Inside a {this.state.name} Garage</h1>
                <Car />
                <button onClick={this.changeName}>Not {this.state.name}?</button>
            </>
        )
    }
}

export default Garage;