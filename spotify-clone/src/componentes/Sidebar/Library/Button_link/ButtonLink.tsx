import React from "react";
import './ButtonLink.css';
import '../../../../styles/media-queries.css';

const ButtonLink = () =>{
    return(
        <div className="buttons_links">
                <div className="buttons-links_content"><a href="legal"><span>Legal</span></a></div>
                <div className="buttons-links_content"><a href="privacidade"><span>Centro de Privacidade</span></a></div>
                <div className="buttons-links_content"><a href="politica"><span>Política de privacidade</span></a></div>
                <div className="buttons-links_content"><a href="coockies"><span>Coockies</span></a></div>
                <div className="buttons-links_content"><a href="anuncios"><span>Sobre anúncios</span></a></div>
                <div className="buttons-links_content"><a href="acessibilidade"><span>Acessibilidade</span></a></div>
                <div className="buttons-links_content"><a href="colection"><span>Notice at Collection</span></a></div>
                <div className="buttons-links_content">
                    <a href="escolhas">
                        <span>Suas escolhas de privacidade</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 14" aria-labelledby="ccpa-svg-title">
                            <title id="ccpa-svg-title">California Consumer Privacy Act (CCPA) Opt-Out Icon</title>
                            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" ></path>
                            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"></path>
                            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"></path>
                            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"></path>
                        </svg> */}
                    </a>
                </div>
            </div>
    );
};

export default ButtonLink