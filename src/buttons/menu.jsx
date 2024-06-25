import React, { useState } from 'react';
import '../Burger.css';
import styled from 'styled-components';


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
                        <a href="#about_me"  >
                            <li><Text>Обо мне</Text></li>
                        </a>
                        <a href="#about_you"  >
                            <li><Text>О вас</Text></li>
                        </a>
                        <a href="#methods"  >
                            <li><Text>О методах</Text></li>
                        </a>
                        <a href="#seans" >
                            <li><Text>О сеансах</Text></li>
                        </a>
                        <a href="#education" >
                            <li><Text>Об образовании</Text></li>
                        </a>
                        <a href='#forma' id='#' >
                            <li><Text>Как связаться</Text></li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Text = styled.p`
    font-family: "Jost", sans-serif;
`

export default BurgerMenu;