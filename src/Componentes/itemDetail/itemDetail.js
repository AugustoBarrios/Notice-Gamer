import "../itemDetail/itemDetail.css";
import Count from "../itemCount/ItemCount"
import { useState, useContext } from "react"
import { cartContext } from "../../cartContext/cartContext";


function ItemDetail({ Detalle }) {
    const { addItem } = useContext(cartContext);
    const [contador, setContador] = useState(0);

    function agregarCarrito(dato) {
        setContador(dato);
        addItem(Detalle, dato)

        /* function cambiar(event){
            event.preventDefault()
            debugger
            const enlace = document.getElementsByClassName('contenedorCount');
            const enlace2 = document.getElementsByClassName('count');
            const creacion = document.createElement('p');
            const texto = document.createTextNode('hola');
            creacion.appendChild(texto);

            enlace.replaceChild(creacion, enlace2)
        } */
    }

    return (
        <div className="ContenedorDetail">
            {/* <div>{Detalle.Id}</div> */}
            <div className="contenedorDetail__imagenDescripcion">
                <img className="imagenDetail" src={Detalle.Imagen} alt={Detalle.Nombre} />
                <p className="descripcionDetail">{Detalle.Descripcion}</p>
            </div>
            <div className="contenedorDetail__nombrePrecio">
                <h5 className="nombreDetail">{Detalle.Nombre}</h5>
                <h6 className="precioDetail">${Detalle.Precio}</h6>
                <div className="info">Cantidad: {" " + contador}</div>
                <div className="info">Total: ${contador * Detalle.Precio}</div>
                <div className="contenedorCount"><Count className="count" stock={Detalle.Stock} agregarAlCarrito={agregarCarrito} /></div>
            </div>
        </div>
    )
};

export default ItemDetail;

/* const Div = document.createElement("div");
Div.innerHTML  */