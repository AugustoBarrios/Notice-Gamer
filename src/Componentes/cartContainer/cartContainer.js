import React, { useContext } from "react";
import { cartContext } from "../../cartContext/cartContext";
import trash from "../../asetss/trash.svg";
import "../cartContainer/cartContainer.css";

function CartContainer() {
    const {productCartList, removeItem, clear} = useContext(cartContext);

    return (
        <div>
            Cart Container
            <div className="container">
                {productCartList.map(item => (
                    <div className="card">
                        <img className="imagen m" src={item.Imagen} />
                        <p className="nombre m centrar">{item.Nombre}</p> 
                        <p className="cantidad m centrar">{item.quantity}</p>
                        <p className="precio m centrar">{item.Precio}</p>
                        <button className="remover m" onClick={()=>removeItem(item.Id)}><img src={trash}/></button>
                    </div>
                ))}
                <button className="clear" onClick={clear}>Limpiar Carrito</button>
            </div>
        </div>
    )
}

export default CartContainer;