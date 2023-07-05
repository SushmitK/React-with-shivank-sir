import './App.css';

const Profile = (props) => {
  return(
    <>
      {props.name.length>0 && <h1>My Name Is {props.name}.</h1>}
    </>
  )
}

const Profile2 = (props) => {
  if(props.name.length <= 0){
    return <h1>My Name Is Unknown</h1>
  }else{
    return <h1>My Name Is {props.name}</h1>
  }
}

const Profile3 = (props) => {
  return(
    <>
    {(props.name.length>0) ? <h1>My Name Is {props.name}</h1> : <h1>My Name Is Unknown</h1>}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>React With Shivank Sir</h1>
      <Profile name="Sushmit"/>
      <Profile2 name="Sushmit Katkale"/>
      <Profile3 name="Sushmit Ramesh Katkale"/>
    </div>
  );
}

export default App;
