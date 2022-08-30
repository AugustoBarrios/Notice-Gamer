import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <ItemListContainer>
         <h2>Saludos Usuario!</h2>
        </ItemListContainer>
        <img src={logo} className="App-logo" alt="logo" />
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
