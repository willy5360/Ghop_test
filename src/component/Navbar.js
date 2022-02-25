import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="Homebar bg-dark">
            <ul>
                <li>
                    <Link to="/home">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/perfil">
                        <i className="fa-solid fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/ajustes">
                        <i className="fa-solid fa-gear"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
