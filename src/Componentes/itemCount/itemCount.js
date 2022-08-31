import { useState } from 'react';
import "./itemCount.css";

function Contador() {
    const [contador, setContador] = useState(0);

    function addOne() {
        setContador(contador + 1)
    }
    function QuitOne() {
        setContador(contador - 1)
    }


    return (
        <div className='Contenedor'>
            <button className='Btn Btn1' onClick={QuitOne}><p>-</p></button>
            <h3 className='Contador'>{contador}</h3>
            <button className='Btn Btn2' onClick={addOne}><p>+</p></button>
        </div>
    )
}

export default Contador;