import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import Header from "../Header/Header";
import "../assets/css/Auth.css";

const Auth = () => {
    const navigate = useNavigate();

    const submitHandler = () => {
        localStorage.setItem("isAuth", true);
        navigate("/");
    };

    useEffect(() => {
        if (localStorage.getItem("isAuth")) {
            navigate("/");
        }
    }, []);

    return (
        <div className="wrapper">
            <section className="section-header">
                <div className="container">
                    <Header />
                </div>
            </section>
            <section className="section-login">
                <div className="container">
                    <div className="login-form">
                        <form onSubmit={submitHandler}>
                            <p className="form-title">Авторизация</p>
                            <div className="form-input">
                                <input
                                    type="text"
                                    title={"логин"}
                                    name={"login"}
                                    placeholder="Номер телефона"
                                />
                            </div>
                            <div className="form-input">
                                <input
                                    type="password"
                                    title={"пароль"}
                                    name={"password"}
                                    placeholder="Пароль"
                                />
                            </div>
                            <div className="form-row">
                                <Link to="/register">
                                    <div className="form-button">
                                        <p>Создать аккаунт</p>
                                    </div>
                                </Link>
                                <button className="form-button">
                                    <p>Войти</p>
                                </button>
                            </div>
                            <p className="form-primary">
                                <Link to="/forgot">Забыли пароль?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Auth;
