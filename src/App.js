import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Chart />

        <p> Bar Chart</p>


      </header>
    </div>
  );
}

export default App;
