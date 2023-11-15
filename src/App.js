// App.js
import logo from './logo.svg';
import './App.css';
import GraphView from './components/graph';
import WorldCup from './components/worldcup';

function App() {
 return (
  <div className="App">
    <WorldCup />
    <GraphView />
    <div>Painel 4</div>
  </div>
 );
}

export default App;
