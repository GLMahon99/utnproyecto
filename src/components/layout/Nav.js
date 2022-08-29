import React from "react";
import {NavLink} from "react-router-dom";

const navItems = [
    {name : "Home", href: "/"},
    {name : "Nosotros", href: "/nosotros"},
    {name : "Noticias", href: "/noticias"},
    {name : "Contacto", href: "/contacto"}
]

const Nav = (props) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow p-3 mb-5 ">
            <div className="container d-flex justify-content-center">
                <ul className="navbar-nav mb-2">
                    {navItems.map((item) => (
                            <li className="nav-item mx-4"><NavLink className="nav-link" to={item.href}>{item.name}</NavLink></li>
                    )
                    )}
                </ul>
            </div>
        </nav>
    )
};
export default Nav;