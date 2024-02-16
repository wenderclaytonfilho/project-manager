import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento number={2}/>
      <Evento number={1}/>
      <Form/>
    </div>
  );
}

export default App;
