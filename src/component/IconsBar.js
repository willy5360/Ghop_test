import React from "react";
import { Link } from "react-router-dom";

export const IconsBar = () => {
    return (
        <nav className="Homebar">
            <ul>
                <li>
                    <Link to="/home">
                        <i className="fa-solid fa-lg fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/perfil">
                        <i className="fa-solid fa-lg fa-user"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/ajustes">
                        <i className="fa-solid fa-lg fa-gear"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
