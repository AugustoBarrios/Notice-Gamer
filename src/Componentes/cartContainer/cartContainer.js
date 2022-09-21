import React, { useContext } from "react";
import { cartContext } from "../../cartContext/cartContext";
import trash from "../../asetss/trash.svg";
import "../cartContainer/cartContainer.css";
import { Link } from "react-router-dom";

function CartContainer() {
    const { productCartList, removeItem, clear, getTotal } = useContext(cartContext);
    console.log(productCartList)

    return (
        <>
            {
                productCartList.length > 0 ? <div className="container">
                    Cart Container
                    {productCartList.map(item => (
                        <div className="card">
                            <img className="imagen m" src={item.Imagen} />
                            <p className="nombre m centrar">{item.Nombre}</p>
                            <p className="cantidad m centrar">{item.quantity}</p>
                            <p className="precio m centrar">Pu: {item.Precio}</p>
                            <p className="precio m centrar">Pu: {item.quantityPrecio}</p>
                            <button className="remover m" onClick={() => removeItem(item.Id)}><img src={trash} /></button>
                        </div>
                    ))}
                    <h4>Total a pagar: {" "} {getTotal()}</h4>
                    <button className="clear" onClick={clear}>Limpiar Carrito</button>
                </div>
                    :
                    <div>
                    <p>No hay productos en tu carrito</p>
                    <h4>vamos a comprar!</h4>
                    <li className="Lista"><Link className="linkInicioCart" to="/" >Inicio</Link></li>
                    </div>
                    
            }
        </>

    )
}

export default CartContainer;