import React from "react";
import './Header.css'
import logo from '../assets/img/logo512.png'
import cart from '../assets/img/cart.png'

function Header(){
    return (
        <header className="header">
            <nav>
                <ul>
                    <a href="/">
                        <li className="nav-item">
                            <img className="nav-logo" src={logo} />
                            <p>pharmacist.ru</p>
                        </li>
                    </a>
                    <li className="nav-item nav-menu">
                        <a href="/">
                            <p className={window.location.pathname == '/' ? 'nav-selected' : ''}>Каталог</p>
                        </a>
                        <a href="/info">
                            <p className={window.location.pathname == '/info' ? 'nav-selected' : ''}>Информация</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <div className="cart">
                            <img src={cart} />
                        </div>
                        <div className="primary-button nav-button">
                            <p>Войти</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;