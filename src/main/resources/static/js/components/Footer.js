import React from 'react';
import {NavLink} from "react-router-dom";

export const Footer = () =>{
    return(
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Spring Boot App</a>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                </li>
                {/*<li className="nav-item">*/}
                    {/*<NavLink className="nav-link" to="/employee">Сотрудники</NavLink>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                    {/*<NavLink className="nav-link" to="/department">Отделы</NavLink>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                    {/*<NavLink className="nav-link" to="/profession">Профессии</NavLink>*/}
                {/*</li>*/}
                {/*<li className="nav-item">*/}
                    {/*<NavLink className="nav-link" to="/about">О сайте</NavLink>*/}
                {/*</li>*/}

            </ul>

        </nav>
    )
};