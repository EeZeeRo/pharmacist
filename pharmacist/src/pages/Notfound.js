import React from "react";
import Header from "../Header/Header";

export default function Notfound() {
    return (
        <div className="wrapper">
            <section className="section-header">
                <div className="container">
                    <Header />
                </div>
            </section>
            <section className="section-notfound">
                <div className="notfound">
                    <p>Страница не найдена</p>
                </div>
            </section>
        </div>
    );
}
