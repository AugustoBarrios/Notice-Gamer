import { useState } from 'react';
import "./itemCount.css";

function Contador({stock, agregarAlCarrito}) {
    const [contador, setContador] = useState(0);

    function addOne() {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    function quitOne() {
        if(contador > 0 )
        {setContador(contador - 1)}
        
    }


    return (
        <div className='contenedor'>
        <div className='contenedorContador'>
            <button className='Btn Btn1' onClick={quitOne}><p>-</p></button>
            <h3 className='Contador'>{contador}</h3>
            <button className='Btn Btn2' onClick={addOne}><p>+</p></button>
        </div>
        <div>
            <button className='btnAdd' onClick={()=>agregarAlCarrito(contador)}>Add to cart</button>
            <p className='stockDisponible'>Stock disponible:{" " + stock} </p>
        </div>
        </div>
    )
}

export default Contador;