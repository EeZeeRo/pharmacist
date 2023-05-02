import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../assets/css/Auth.css";

export default function Reg() {
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
                        <form method="POST">
                            <p className="form-title">Регистрация</p>
                            <div className="form-input">
                                <input type="text" name="reg-phone" placeholder="Номер телефона" required/>
                            </div>
                            <div className="form-input">
                                <input type="mail" name="reg-mail" placeholder="Почта" required/>
                            </div>
                            <div className="form-input">
                                <input type="password" name="reg-password" placeholder="Пароль" required/>
                            </div>
                            <div className="form-row">
                                <Link to="/login">
                                    <div className="form-button">
                                        <p>Авторизация</p>
                                    </div>
                                </Link>
                                <div className="form-button" onClick={submitHandler}>
                                    <p>Готово</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
