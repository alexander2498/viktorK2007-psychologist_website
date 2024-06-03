import styled from "styled-components";
import "../App.css"
export default function MenuM() {
    return (
        <div >
            <header className="header">
                <div  className="containerr header__container">
                    <button className="header__burgerBtn" id="burger">
                        <span></span> <span ></span><span></span>
                    </button>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a className="menu__link" href="#methods">
                                    <p className="text_main"> О методах</p>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#seans">
                                    <p  className="text_main">О сеансах</p>
                                </a>
                            </li>
                            <li  className="menu__item">
                                <a className="menu__link" href="#educationA">
                                    <p className="text_main">Об образовании</p>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#contacts">
                                    <p className="text_main">Как связаться</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
