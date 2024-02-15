import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName name="Wender"/>
      <SayMyName name="Tobias"/>
      <Pessoa name="Wender" age="23" occupation="Programador" photo="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
