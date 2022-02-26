import React from "react";

export const Perfil = () => {
    return (
        <div className="View">
            <h1 className="bg-success w-100 text-center">
                {localStorage.getItem("user")}
            </h1>
        </div>
    );
};
