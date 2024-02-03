import React from "react";
import './Card.css';
import '../../styles/media-queries.css';
import img17 from '../../assets/playlist/17.jpg';
import img2 from '../../assets/playlist/2.png';
import img3 from '../../assets/playlist/3.jpg';
import img9 from '../../assets/playlist/9.jpeg';
import img20 from '../../assets/playlist/20.jpg';
import img19 from '../../assets/playlist/19.jpg';
import img21 from '../../assets/playlist/21.jpg';
import img22 from '../../assets/playlist/22.jpg';
import img23 from '../../assets/playlist/23.jpg';
import img25 from '../../assets/playlist/25.jpg';
import img31 from '../../assets/playlist/31.jpg';
import img32 from '../../assets/playlist/32.jpg';


const Card = () =>{
    return(
        <React.Fragment>
            
            <section className="playlists">
            <div className="cards">
                <div className="card_content">
                    <img src={img17} alt="cantor"/>
                    <div className="card-text">
                        <span className="card-title">This is Racionais</span>
                        <span className="card-subtitle">Os maiores do Rap</span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img20} alt=""/>
                    <div className="card-text">
                        <span className="card-title">This is Legião Urbana</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img19} alt=""/>
                    <div className="card-text">
                        <span className="card-title">This is Djavan</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img23} alt=""/>
                    <div className="card-text">
                        <span className="card-title">This is Charlie Brown Jr</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img22} alt=""/>
                    <div className="card-text">
                        <span className="card-title">This is AC/DC</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img21} alt=""/>
                    <div className="card-text">
                        <span className="card-title">This is Rashid</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
            </div>
            </section>
                            
            <section className="playlists">
            <div className="cards">
                <div className="card_content">
                    <img src={img32} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img25} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img31} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img2} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img3} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img9} alt=""/>
                    <div className="card-text">
                        <span className="card-title"></span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
            </div>
            </section>

        </React.Fragment>
    );
};

export default Card