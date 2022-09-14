import "../itemDetail/itemDetail.css";
import Count from "../itemCount/ItemCount"
import { useState } from "react"


function ItemDetail({ Detalle }) {

    const [contador, setContador] = useState(0);
    function agregarCarrito(dato) {
        setContador(dato);
    }

    return (
        <div className="ContenedorDetail">
            <div className="contenedorDetail__imagenDescripcion">
                <img className="imagenDetail" src={Detalle.Imagen} alt={Detalle.Nombre} />
                <p className="descripcionDetail">{Detalle.Descripcion}</p>
            </div>
            <div className="contenedorDetail__nombrePrecio">
                <h5 className="nombreDetail">{Detalle.Nombre}</h5>
                <h6 className="precioDetail">${Detalle.Precio}</h6>
                <div className="info">Cantidad: {" " + contador}</div>
                <div className="info">Total: ${contador * Detalle.Precio}</div>
                <button className="botonDeCompra">Comprar</button>
                <Count stock={Detalle.Stock} agregarAlCarrito={agregarCarrito} />
            </div>
        </div>
    )
};

export default ItemDetail;

/* const Div = document.createElement("div");
Div.innerHTML  */