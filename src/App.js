
import './App.css';

function App() {

  const name = "Wender"
  const url = "https://cdn-icons-png.flaticon.com/512/5969/5969113.png"

  function sum(a,b){
    return a+b
  }

  return (
    <div className="App">
      <h1>Meu primeiro projeto React</h1>
      <p>Me chamo, {name}</p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );


}

export default App;
