import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import '../assets/css/Auth.css';

function doLogin(e){
    e.preventDefault();

    let login_form = document.querySelector('#login_authorize');
    login_form.submit();
}

export default function Auth() {
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
                        <form method="POST" id="login_authorize">
                            <p className="form-title">Авторизация</p>
                            <div className="form-input">
                                <input type="text" name="login-phone" placeholder="Номер телефона" />
                            </div>
                            <div className="form-input">
                                <input type="password" name="login-password" placeholder="Пароль" />
                            </div>
                            <div className="form-row">
                                <div className="form-button">
                                    <p>Создать аккаунт</p>
                                </div>
                                <div className="form-button" onClick={doLogin}>
                                    <p>Войти</p>
                                </div>
                            </div>
                            <p className="form-primary">
                                <Link to="/forgot">
                                    Забыли пароль
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
