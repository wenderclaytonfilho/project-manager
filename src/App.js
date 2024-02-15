
import './App.css';

function App() {

  const name = "Wender"

  function sum(a,b){
    return a+b
  }
  
  return (
    <div className="App">
      <h1>Meu primeiro projeto React</h1>
      <p>Soma, {sum(10,5)}</p>
    </div>
  );


}

export default App;
