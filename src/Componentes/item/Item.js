import "./Item.css"
import {Link} from "react-router-dom"


function Item({ Id, Nombre, Descripcion, Precio, Imagen, Stock}) {
    return (
        
        <div className="contenedorCarta">
            <div className="Carta">
            <img className="Imagen" src= {Imagen} alt={Nombre} />
            <p className="Titulo"><strong>{Nombre}</strong></p>
            <p className="Precio" >{Precio}</p>
            <p className="Descripcion" >{Descripcion}</p>
            <Link to={`/item/` + Id} ><button className="Boton">Detalles</button></Link>
            <p className="Stock">En Stock: {Stock}</p>
            </div>
        </div>
    );
};

export default Item;

