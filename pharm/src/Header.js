import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">Pharmacy</div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="header__user">
        {user ? (
          <>
            <button className="header__menu-button" onClick={handleMenuOpen}>
              <span className="header__menu-icon">&#9776;</span>
            </button>
            {isMenuOpen && (
              <div className="header__menu">
                <p>Hello, {user.email}!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;