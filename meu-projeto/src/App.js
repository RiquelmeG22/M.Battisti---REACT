import './App.css';
import HelloWord from './components/HelloWord';
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
        <HelloWord />
        < SayMayName name="Riquelme"/>
        < Pessoa nome />
    </div>
  );
}

export default App;

