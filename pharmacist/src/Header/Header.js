import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../assets/img/logo512.png'
import cart from '../assets/img/cart.png'

function Header(){
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link to="/">
                        <li className="nav-item">
                            <img className="nav-logo" src={logo} />
                            <p>pharmacist.ru</p>
                        </li>
                    </Link>
                    <li className="nav-item nav-menu">
                        <Link to="/">
                            <p className={window.location.pathname == '/' ? 'nav-selected' : ''}>Каталог</p>
                        </Link>
                        <Link to="/info">
                            <p className={window.location.pathname == '/info' ? 'nav-selected' : ''}>Информация</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <div className="cart">
                            <Link to="/cart">
                                <img src={cart} />
                            </Link>
                        </div>
                        <Link to="/login">
                            <div className="primary-button nav-button">
                                <p>Войти</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;