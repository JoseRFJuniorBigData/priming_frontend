// App.js
import './App.css';
import GraphView from './components/graph';
import Text from './components/text';
import WorldCup from './components/worldcup';
import YouTube from './components/youtube';

function App() {
 return (
  <div className="App">
    <GraphView />
    <Text />
    <YouTube />
  </div>
 );
}

export default App;
