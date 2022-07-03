import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/components/Layout/Nav.css'


  let activeClassName = "underline";

const Nav = (props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : activeClassName}>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : activeClassName}>Nosotros</NavLink></li>
                    <li><NavLink to="/noticias" className={({ isActive }) => isActive ? "activo" : activeClassName}>Noticias</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : activeClassName}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};
export default Nav;