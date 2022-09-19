import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Contador from "./Componentes/itemCount/ItemCount"
import ItemDetailContainer from './Componentes/itemDetaiContainer/itemDetailContainer';
import CartContainer from "./Componentes/cartContainer/cartContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./cartContext/cartContext"

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Saludos Usuario!"/>}/> 
        <Route path='/category/:Id' element={<ItemListContainer/>}/>
        <Route path="/item/:Id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartContainer/>}/>
      </Routes>
      <br/>
      <br/>
      </header>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
