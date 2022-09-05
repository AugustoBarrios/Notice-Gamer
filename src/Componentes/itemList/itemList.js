import Item from "../item/Item"
import "./itemList.css";

function ItemList({itemList}) {
    return (
       <div className="divContenedor">
            {itemList.map((producto) => {
                return (<Item 
                key= {producto.Id}
                Nombre= {producto.Nombre} 
                Descripcion= {producto.Descripcion}
                Precio= {producto.Precio}
                Imagen= {producto.Imagen}
                />
                );
            })}
       </div>
    )

}

export default ItemList;