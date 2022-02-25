import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const [isLogged, setIslogged] = useState(false);

    const singIn = (data) => {
        fetch("http://ghoptest.ddns.net:2028/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    localStorage.setItem("user", data.user);
                    setIslogged(!isLogged);
                    console.log("loggeado!!!");
                }
                throw new Error("Can not Login");
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (localStorage.getItem("user") === "frontend" && isLogged) {
            navigate("/home");
        }
    }, [isLogged]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        singIn(data);
    };

    return (
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
            <label className="form-label" htmlFor="user">
                Usuario:
            </label>
            {errors.user?.type === "required" && "Nombre de usuario requerido"}
            <input
                type="text"
                id="user"
                name="user"
                className="form-control"
                {...register("user", { required: true })}
            />
            <label className="form-label" htmlFor="password">
                Contraseña:
            </label>
            {errors.password?.type === "required" && "Contraseña requerida"}
            <input
                type="text"
                id="password"
                name="password"
                className="form-control"
                {...register("password", { required: true })}
            />

            <input className="btn btn-primary" type="submit" />
        </form>
    );
};
