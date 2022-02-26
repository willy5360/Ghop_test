import React from "react";

export const Perfil = () => {
    return (
        <div className="View">
            <div className="welcome">
                <h1>Bienvenido</h1>
                <h2 className=" w-100 text-center">
                    {localStorage.getItem("user")}
                </h2>
            </div>
        </div>
    );
};
