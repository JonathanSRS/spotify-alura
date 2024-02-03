import React from "react";
import './CardColor.css';
import '../../styles/media-queries.css';
import img4 from '../../assets/playlist/4.jpg';
import img26 from '../../assets/playlist/26.jpg';
import img27 from '../../assets/playlist/27.jpg';
import img28 from '../../assets/playlist/28.jpg';
import img29 from '../../assets/playlist/29.jpg';
import img30 from '../../assets/playlist/30.jpg';


const CardColor = () =>{
    return(
        <React.Fragment>  
            <section className="playlists">
            <div className="cards color">
                <div className="card_content">
                    <img src={img30} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">All the Right Reasons</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img4} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">Keith Sweat</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img26} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">Holocausto Urbano</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img27} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">Esse é clima</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img29} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">Pagode do Exalta</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
                <div className="card_content">
                    <img src={img28} alt=""/>
                    <div className="card-text color">
                        <span className="card-title">As Melhores Sampa Crew</span>
                        <span className="card-subtitle"></span>
                    </div>
                </div>
            </div>
            </section>

        </React.Fragment>
    );
};

export default CardColor