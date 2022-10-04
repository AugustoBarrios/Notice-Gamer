import React, { useContext } from "react";
import { cartContext } from "../../cartContext/cartContext";
import trash from "../../asetss/trash.svg";
import "../cartContainer/cartContainer.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

function CartContainer() {
    const { productCartList, removeItem, clear, getTotal } = useContext(cartContext);

    function sendOrder(event) {
        event.preventDefault()
        const newOrder = {
            buyer: {
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value,
            },

            items: productCartList,
            total: getTotal(),
        }
        const ref = collection(db, "orders");
        addDoc(ref, newOrder).then(response => console.log(response))
    }


    return (
        <>
            {
                productCartList.length > 0 ? <div className="container">
                    Cart Container
                    {productCartList.map(item => (
                        <div className="card">
                            <div className="contenedorImagen__card centrar">
                                <img className="imagen m" src={item.Imagen} />
                            </div>
                            <div className="contenedorNombre__card centrar">
                                <p className="nombre m">{item.Nombre}</p>
                            </div>
                            <div className="contenedorCantidad__card centrar">
                                <p className="cantidad m">{item.quantity}</p>
                            </div>
                            <div className="contenedorPrecioUnitario__card centrar">
                                <p className="precioUnitario m">Precio Unitario: {item.Precio}</p>
                            </div>
                            <div className="contenedorPrecioTotal__card centrar">
                                <p className="precio m">Total: {item.quantityPrecio}</p>
                            </div>
                            <div className="contenedorButton__card centrar">
                                <button className="remover m" onClick={() => removeItem(item.Id)}><img src={trash} /></button>
                            </div>
                        </div>
                    ))}
                    <h4>Total a pagar: {" "} {getTotal()}</h4>
                    <button className="clear" onClick={clear}>Limpiar Carrito</button>
                    <div>
                        <form className="contenedorFormulario" onSubmit={sendOrder}>
                            <input className="formulario" type="text" placeholder="Apellido y Nombre" />
                            <input className="formulario" type="tel" placeholder="Telefono" />
                            <input className="formulario" type="email" placeholder="Email" />
                            <input className="formularioBoton" type="submit" placeholder="Enviar order" />
                            <h3 className="tituloComentario">Aviso!</h3>
                            <p className="comentario">Asegurate de tener los productos necesarios en tu carrito , y valida que los datos esten bien agregados ,
                                ya que no se podra modificar la orden luego de ser enviada. Para cancelar una orden deberas comunicarte por telefono
                                con la empresa para poder hacerlo , asegurate de tener el numero de identificacion de tu pedido.</p>
                        </form>
                    </div>
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