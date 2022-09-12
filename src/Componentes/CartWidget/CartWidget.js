import "./CartWidget.css";
import Cart from './cart.svg'
import Arrow from './caret-down-fill.svg'

function CartWidget() {
    return (
        <button className="contenedorCarritoImagen"> 
        <img className="ImagenBuscador" src={Cart} alt=""></img>
        <img className="ImagenBuscador" src={Arrow} alt=""></img>
        </button>
    )
}

export default CartWidget;