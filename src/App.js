import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer 
        Titulo="Call Of Duty" 
        precio="2500" 
        descripcion="juego de disparos" 
        Imagen="#" />
        
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
