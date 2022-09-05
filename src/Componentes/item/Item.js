import "./Item.css"

function Item({ Id, Nombre, Descripcion, Precio, Imagen,}) {
    return (
        <div className="contenedorCarta">
            <div className="Carta">
            <img className="Imagen" src={Imagen} alt={Nombre} />
            <h6 className="Titulo">{Nombre}</h6>
            <h6 className="Precio" >{Precio}</h6>
            <p className="Descripcion" >{Descripcion}</p>
            </div>
        </div>
    );
};

export default Item;