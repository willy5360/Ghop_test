import React from "react";

export const Home = () => {
    const userLogged = { user: localStorage.getItem("user") };

    const openDoor = () => {
        fetch("http://ghoptest.ddns.net:2028/open", {
            method: "POST",
            body: JSON.stringify(userLogged),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((res) => {
            if (res.ok && localStorage.getItem("logged")) {
                alert("¡Puerta Abierta!");
            } else {
                alert("Error try again");
            }
        });
    };

    return (
        <div className="View ">
            <button className="btn btn-primary" onClick={openDoor}>
                Abrir
            </button>
        </div>
    );
};
