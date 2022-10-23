import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom"


function NavBar() {
    return (
        <div className="ContenedorDeMenu">
            <div className="Buscador">
                <input className="InputBuscador" type="text" placeholder="Buscar"></input>
                <button className="BotonBuscador">Buscar</button></div>
            <div className="ContenedorDeLista">
                <nav>
                    <ul className="ContenedorDeLinks">
                        <li className="Lista"><NavLink className={({isActive})=>isActive ? "LinkMenuActive" : "LinkMenu"} to="/" >Inicio</NavLink></li>
                        <li className="Lista"><NavLink className={({isActive})=>isActive ? "LinkMenuActive" : "LinkMenu"} to="/category/Consolas">Consolas</NavLink></li>
                        <li className="Lista"><NavLink className={({isActive})=>isActive ? "LinkMenuActive" : "LinkMenu"} to="/category/videojuegos">Videojuegos</NavLink></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Noticias</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Ayuda</a></li>
                        <li className="Lista"><a className="LinkMenu" href="#">Accede a tu cuenta</a></li>
                        <li className="Lista"><CartWidget/></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;






