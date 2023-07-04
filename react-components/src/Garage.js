import Car from './Car';

const Garage = (props) => {
    return(
      <>
        <h1>Who lives in this {props.name} garage</h1>
        <Car color="Black"/>
      </>
    )
}

export default Garage;