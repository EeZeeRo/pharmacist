import React, { useEffect } from "react";
import Header from "../Header/Header";
import "../assets/css/Info.css";
import { useNavigate } from "react-router-dom";

import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";

function Info() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("isAuth")) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="wrapper">
            <section className="section-header">
                <div className="container">
                    <Header />
                </div>
            </section>
            <section className="section-info">
                <div className="container">
                    <div className="info-contacts">
                        <div className="info-contacts-row">
                            <img src={phone} />
                            <p>8 800 600 55 55</p>
                        </div>
                        <div className="info-contacts-row">
                            <img src={mail} />
                            <p>info@pharmacist.ru</p>
                        </div>
                    </div>
                    <div className="info-map">
                        <p>Наши аптеки</p>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A73c69e80a2244eab4704f10f067556b018e5d380f99889cafbf70b334d183b01&amp;source=constructor"
                            width="100%"
                            height="500"
                            frameborder="0"
                        ></iframe>
                    </div>
                    <div className="info-license">
                        <p>ОГРН: 1025456608621</p>
                        <p>
                            Лицензия № Л043-00131-22/00285346 от 04 октября 2019
                            года
                        </p>
                        <p>
                            Акционерное общество «Научно-производственная
                            компания «Здоровье Алтая»
                        </p>
                        <p>
                            382653, АЛТАЙСКИЙ КРАЙ, ГОРОД БАРНАУЛ, ПР-КТ ЛЕНИНА,
                            71
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;
