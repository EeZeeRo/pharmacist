import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../assets/css/Auth.css";

function doRegister(e) {
    e.preventDefault();

    let login_form = document.querySelector("#register_create");
    login_form.submit();
}

export default function Reg() {
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
                        <form method="POST" id="register_create">
                            <p className="form-title">Регистрация</p>
                            <div className="form-input">
                                <input type="text" name="reg-phone" placeholder="Номер телефона"/>
                            </div>
                            <div className="form-input">
                                <input type="mail" name="reg-mail" placeholder="Почта"/>
                            </div>
                            <div className="form-input">
                                <input type="password" name="reg-password" placeholder="Пароль"/>
                            </div>
                            <div className="form-row">
                                <Link to="/login">
                                    <div className="form-button">
                                        <p>Авторизация</p>
                                    </div>
                                </Link>
                                <div className="form-button" onClick={doRegister}>
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
