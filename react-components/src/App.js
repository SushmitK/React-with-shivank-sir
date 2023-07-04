import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component{
  render(){
    return <h1>Class Component</h1>
  }
}

const Car2 = () => {
  return (
    <h1>Function Component</h1>
  )
}

function App() {
  return (
    <div className="App">
      <h1>React With Shivank Sir</h1>
      <Car />
      <Car2 />
    </div>
  );
}

export default App;
