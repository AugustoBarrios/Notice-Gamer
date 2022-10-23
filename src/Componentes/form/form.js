

function Form({ action }) {

    return (
        <div>
            <form className="contenedorFormulario" onSubmit={action}>
                <input id="formNombre" className="formulario" type="text" placeholder="Apellido y Nombre" />
                <input id="formTelefono" className="formulario" type="tel" placeholder="Telefono" />
                <input id="formEmail" className="formulario" type="email" placeholder="Email" />
                <input className="formularioBoton" type="submit" placeholder="Enviar order" />
                <h3 className="tituloComentario">Aviso!</h3>
                <h6>Asegurate de estar seguro/a al enviar el formulario ya que una vez hecho, enviara la orden de compra y vaciara tu carrito</h6>
                <p className="comentario">Asegurate de tener los productos necesarios en tu carrito , y valida que los datos esten bien agregados ,
                    ya que no se podra modificar la orden luego de ser enviada. Para cancelar una orden deberas comunicarte por telefono
                    con la empresa para poder hacerlo , asegurate de tener el numero de identificacion de tu pedido.</p>
            </form>
        </div>
    )
}

export default Form;