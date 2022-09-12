import "../itemDetail/itemDetail.css";


function ItemDetail({ Detalle }) {
    return (
        <div className="ContenedorDetail">
            <div className="contenedorDetail__imagenDescripcion">
                <img className="imagenDetail" src={Detalle.Imagen} alt={Detalle.Nombre} />
                <p className="descripcionDetail">{Detalle.Descripcion}</p>
            </div>
            <div className="contenedorDetail__nombrePrecio">
                <h5 className="nombreDetail">{Detalle.Nombre}</h5>
                <h6 className="precioDetail">${Detalle.Precio}</h6>
                <button className="botonDeCompra">Comprar</button>
                {/* <div className="contenedorBoton">
                    <button className="Boton">Comprar</button>
                </div> */}
            </div>
        </div>
    )
};

export default ItemDetail;

