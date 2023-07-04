import './App.css';

// class Car extends React.Component{
//   render(){
//     return <h1>Class Component</h1>
//   }
// }

const Car = (props) => {
  return (
    <>
    <h1>I Am a {props.color} Car.</h1>
    </>
  )
}

const Garage = (props) => {
    return(
      <>
        <h1>Who lives in this {props.name} garage</h1>
        <Car color="Black"/>
      </>
    )
}

function App() {
  return (
    <div className="App">
      <h1>React With Shivank Sir</h1>
      <Garage name="Indian"/>
    </div>
  );
}

export default App;
