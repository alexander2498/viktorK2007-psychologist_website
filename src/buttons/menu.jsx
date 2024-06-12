import React, { useState } from 'react';
import '../Burger.css';


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='boxMenu' >
            <div className={`burger ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={`menu ${isOpen ? 'show' : ''}`}>
                <div className='TextMenu' >
                    <ul>
                        <a href="#methods"  >
                            <li>О методах</li>
                        </a>
                        <a href="#seans" >
                            <li>О сеансах</li>
                        </a>
                        <a href="#education" >
                            <li>Об образовании</li>
                        </a>
                        <a href='#forma' id='#' >
                            <li>Как связаться</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;