import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Ajustes = () => {
    const navigate = useNavigate();

    const [isNotLogged, setIsNotLogged] = useState(true);

    const logOut = () => {
        localStorage.removeItem("user");
        setIsNotLogged(!isNotLogged);
    };

    useEffect(() => {
        if (!isNotLogged) {
            navigate("/login");
        }
    }, [isNotLogged]);

    return (
        <div className="View">
            <button className="btn btn-danger" onClick={() => logOut()}>
                Cerrar sesion
            </button>
        </div>
    );
};
