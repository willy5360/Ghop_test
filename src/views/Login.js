import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

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
                    localStorage.setItem("logged", !isLogged);
                }
                throw new Error("Can not Login");
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (isLogged) {
            navigate("/home");
        }
    }, [isLogged]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => singIn(data);

    return (
        <>
            <section className="container">
                <Link className="go_back" to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>

                <div className="row">
                    <div className="col-md-12">
                        <h1>Login</h1>
                        <p>Por favor inicie sesión para continuar</p>
                    </div>
                </div>

                <form className="myform" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-label" htmlFor="user"></label>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        className="form-control"
                        placeholder="Usuario"
                        {...register("user", { required: true })}
                    />
                    {errors.user?.type === "required" && (
                        <p>Nombre de usuario requerido</p>
                    )}
                    <label className="form-label" htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === "required" && (
                        <p>Contraseña requerida</p>
                    )}

                    <input id="btn-grad" value="Log in" type="submit" />
                </form>
            </section>
        </>
    );
};
