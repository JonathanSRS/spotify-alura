import React from "react";
import './Sidebar_navigation.css';
import logoSpotify from '../../../assets/icons/logo-spotify.png';

const Sidebar_navigation = () =>{
    return(
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="logo"><img src={logoSpotify} alt=""/></a>
            </div>
            <ul>
                <li>
                    <a href="inicio">
                        <span className="fa fa-home"></span>    
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="busca">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar_navigation