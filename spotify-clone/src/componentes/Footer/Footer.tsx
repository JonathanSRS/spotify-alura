import React from "react";
import './Footer.css';

const Footer = ()=>{
    return(
        <footer className="footer-now-playing-bar">
        <div className="footer-signup-bar">
            <div className="footer-text">
                <p>Testar o Premium de graça</p>
                <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <button className="footer-button"><span>Inscreva-se grátis</span></button>
        </div>
    </footer>
    );
};

export default Footer