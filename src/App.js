import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Contador from "./Componentes/itemCount/ItemCount"

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <header className="App-header">
      <ItemListContainer greeting="Saludos Usuario!"/>
      <br/>
      <br/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Contador/>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
