import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../assets/css/Auth.css";

export default function Forgot() {
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
                            <p className="form-title">Восстановление пароля</p>
                            <div className="form-input">
                                <input type="text" name="reg-phone" placeholder="Номер телефона"/>
                            </div>
                            <div className="form-row">
                                <Link to="/login">
                                    <div className="form-button">
                                        <p>Назад</p>
                                    </div>
                                </Link>
                                <div className="form-button">
                                    <p>Отправить код</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
