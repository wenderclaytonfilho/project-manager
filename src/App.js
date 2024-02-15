import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Wender"
  const url = "https://cdn-icons-png.flaticon.com/512/5969/5969113.png"

  return (
    <div className="App">
      <h1>Meu primeiro projeto React</h1>
      <p>Me chamo, {name}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
    </div>
  );


}

export default App;
