import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="Homebar bg-dark">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/ajustes">Ajustes</Link>
                </li>
            </ul>
        </nav>
    );
};
