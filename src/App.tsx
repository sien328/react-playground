import Header from './components/header/header.component';
import Monster from './monster rolodex/monster';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Monster/>
      </header>
    </div>
  );
}

export default App;