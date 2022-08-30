import "./NavBar.css";
import CartWidget from "../Componentes/CartWidget/CartWidget";


function NavBar() {
    return (
        <div className="ContenedorDeMenu">
            <div className="Buscador">
                <input className="InputBuscador" type="text" placeholder="Buscar"></input>
                <button className="BotonBuscador">Buscar</button></div>
            <div className="ContenedorDeLista">
                <nav>
                    <ul className="ContenedorDeLinks">
                        <li className="Lista"><a className="LinkMenu" href="#">Inicio</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Productos</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Noticias</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Ayuda</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Contacto</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Accede a tu cuenta</a></li>
                        <div className="Lista"><CartWidget/></div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;






