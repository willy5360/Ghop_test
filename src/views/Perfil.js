import React from "react";

export const Perfil = () => {
    return <h1>{localStorage.getItem("user")}</h1>;
};
