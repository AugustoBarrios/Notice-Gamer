import "./CartWidget.css";
import Cart from './cart.svg'
import Arrow from './caret-down-fill.svg'
import { Link } from "react-router-dom"

function CartWidget() {
    return (
        <Link to="/cart">
            <button className="contenedorCarritoImagen">
                <img className="ImagenBuscador" src={Cart} alt=""></img>
                <img className="ImagenBuscador" src={Arrow} alt=""></img>
            </button>
        </Link>
    )
}

export default CartWidget;