import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Ajustes } from "./views/Ajustes";
import { Login } from "./views/Login";
import { Perfil } from "./views/Perfil";
import "./App.css";
import { Navbar } from "./component/Navbar";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
        <Navbar />
    </BrowserRouter>,
    document.getElementById("root")
);
