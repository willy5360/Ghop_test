import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Ajustes = () => {
    const navigate = useNavigate();
    const [isLoggedOut, setIsLoggedOut] = useState(true);

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("logged");
        setIsLoggedOut(!isLoggedOut);
    };

    useEffect(() => {
        if (!isLoggedOut) {
            navigate("/login");
            alert("Sesion Cerrada");
        }
    }, [isLoggedOut]);

    return (
        <div className="View">
            <button className="btn btn-danger" onClick={() => logOut()}>
                Cerrar sesion
            </button>
        </div>
    );
};
