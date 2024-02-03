import React from "react";
import './Section.css';
import '../../../../styles/media-queries.css';

const Section = (props)=>{
    return(
        <section className="section-playlist">
                <div className="section-playlist_content">
                    <span className="text title">{props.title}</span>
                    <span className="text subtitle">{props.subtitle}</span>
                    <button className="section-playlist_button">
                        <span>{props.text}</span>
                    </button>
                </div>
        </section>
    );
}

export default Section