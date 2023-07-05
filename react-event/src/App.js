import './App.css';

const kick = (a,e) => {
  console.log(e);
}

const Football = () => {
  return(
    <>
      <buttom onClick={(e) => {
        kick("Goal!",e)
      }} type="submit">Kick</buttom>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h1>React With Shivank Sir</h1>
      <Football type="Goal" />
    </div>
  );
}

export default App;
