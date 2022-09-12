import Item from "../item/Item"
import "./itemList.css";

function ItemList({itemList}) {
    return (
       <div className="divContenedor">
            {itemList.map((producto) => {
                return (<Item 
                key= {producto.Id}
                Id= {producto.Id}
                Nombre= {producto.Nombre} 
                Descripcion= {producto.Descripcion}
                Precio= {producto.Precio}
                Imagen= {producto.Imagen}
                Stock= {producto.Stock}
                />
                );
            })}
       </div>
    )

}

export default ItemList;