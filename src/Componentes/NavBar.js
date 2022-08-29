import "./NavBar.css";
import CartWidget from "./CartWidget";


function NavBar() {
    return (
        <div className="ContenedorDeMenu">
            <div className="Buscador">
                <p className="NombrePagina">NTG / Noticia Gamer</p>
                <input className="InputBuscador" type="text" placeholder="Buscar"></input>
                <button className="BotonBuscador">Buscar</button></div>
            <div className="ContenedorDeLista">
                <nav>
                    <ul className="Lista Navegacion">
                        <li className="opciones"><a className="LinkMenu" href="#">Inicio</a></li>
                        <li className="opciones"><a className="LinkMenu" href="#">Noticias</a></li>
                        <li className="opciones"><a className="LinkMenu" href="#">Acerca de</a></li>
                        <li className="opciones"><a className="LinkMenu" href="#">Contacto</a></li>
                    </ul>
                    <ul className="Lista Interaccion">
                        <li className="opciones"><a className="LinkMenu" href="#">Registrarse</a></li>
                        <li className="opciones" ><a className="LinkMenu" href="#">Acceder a tu cuenta</a></li>
                    </ul>
                    <CartWidget />
                </nav>
            </div>
        </div>
    );
}

export default NavBar;