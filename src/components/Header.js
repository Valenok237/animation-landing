import React from "react";
import logo from '../img/Logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <nav className="header__nav">
                    <img src={logo} alt="Логотип" className="header__logo" />
                    <ul className="header-list">
                        <li className="header-list__item">
                            <a href="#!" className="header-list__link">Welcome</a>
                        </li>
                        <li className="header-list__item">
                            <a href="#!" className="header-list__link">Service</a>
                        </li>
                        <li className="header-list__item">
                            <a href="#!" className="header-list__link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;