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
                <h6 className="precioDetail">{Detalle.Precio}</h6>
            </div>
        </div>
    )
};

export default ItemDetail;

/* return(
        
     <div>
         <h4>{Nombre}</h4>
         <h5>{Descripcion}</h5>
         <h6>{Precio}</h6>
         <img src={Imagen}/>
     </div>) */

/* Detalle.find(Destalle => Detalle.Id == 1) */