import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Contador from "./Componentes/itemCount/ItemCount"
import ItemDetailContainer from './Componentes/itemDetaiContainer/itemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Saludos Usuario!"/>}/> 
        <Route path='/category/:Id' element={<ItemListContainer/>}/>
        <Route path="/item/:Id" element={<ItemDetailContainer/>}/>
      </Routes>
      {/* <ItemDetailContainer/>
      <ItemListContainer greeting="Saludos Usuario!"/> */}
      <br/>
      <br/>
        <Contador/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
