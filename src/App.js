import logo from './logo.svg';
import './App.css';
import Moyin from './pages/authentication/components/exampleMoyin'
import Hello from './pages/authentication/components/helloworld'
import Tictactoe from './pages/authentication/components/tiktaktoe';

function App() {
  return (
    <div className="App">
      {/* <Moyin/> */}
      <Tictactoe />
      {/* /* /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/  }
    </div>
  );
}

export default App;
