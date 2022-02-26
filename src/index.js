import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Home } from "./views/Home";
import { Ajustes } from "./views/Ajustes";
import { Login } from "./views/Login";
import { Perfil } from "./views/Perfil";
import { IconsBar } from "./component/IconsBar";

import "./App.css";
import { Navbar } from "./component/Navbar";

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <IconsBar />
    </BrowserRouter>,
    document.getElementById("root")
);
