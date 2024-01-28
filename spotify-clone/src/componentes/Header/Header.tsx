import React from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () =>{
    return(
        <nav className="header_navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <img src={smallLeft} alt="Seta Esquerda"/>
                    </button>
                    <button className="arrow-right">
                        <img src={smallRight} alt="Seta Direita"/>
                    </button>
                </div>
                <div className="header_search">
                    <img src={search} alt=""/>
                    <input id="search-input" type="text" maxLength={800} placeholder="O que você quer ouvir?"/>
                </div>
                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    );
};

export default Header