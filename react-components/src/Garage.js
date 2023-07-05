import Car from './Car';

const car = [
  {id:1,color: "Red"},
  {id:1,color: "Black"},
  {id:1,color: "White"},
  {id:1,color: "Blue"},
  {id:1,color: "Dark Blue"},
  {id:1,color: "Yellow"},
]

const Garage = (props) => {
    return(
      <>
        <h1>Who lives in this {props.name} garage</h1>
        <ul>
          {
            car.map((car) => {
              return (<li><Car id={car.id} color={car.color}/></li>)
            })
          }
        </ul>
        <Car color="Black"/>
      </>
    )
}

export default Garage;