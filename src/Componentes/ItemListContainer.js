import "./ItemListContainer.css"

function ItemListContainer({Titulo, precio, descripcion, Imagen}){
    return(
        <div>
            <img src={Imagen}></img>
            <h2>{Titulo} </h2>
            <h3>{precio} </h3>
            <p>{descripcion} </p>
        </div>
    )
}

export default ItemListContainer;