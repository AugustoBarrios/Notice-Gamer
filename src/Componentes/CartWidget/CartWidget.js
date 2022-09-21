import "./CartWidget.css";
import Cart from './cart.svg'
import Arrow from './caret-down-fill.svg'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../../cartContext/cartContext";

function CartWidget() {
    const {totalProducts} = useContext(cartContext);

    return (
        <Link to="/cart">
            <button className="contenedorCarritoImagen">
                <img className="ImagenBuscador" src={Cart} alt=""></img>
                <img className="ImagenBuscador" src={Arrow} alt=""></img>
                <span className="quantity" >{totalProducts()}</span>
            </button>
        </Link>
    )
}

export default CartWidget;