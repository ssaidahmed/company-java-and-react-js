import React ,{Fragment} from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () =>(
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Company App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/employee">Сотрудники</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/department">Отделы</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profession">Профессии</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">О сайте</NavLink>
            </li>

        </ul>
    </nav>
);