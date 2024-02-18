import './App.css';
import Hello from './components/Hello';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <Hello />
      <Name userName="Neeraj" />
    </div>
  );
}

export default App;
