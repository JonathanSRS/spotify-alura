import React from "react";
import './Playlist.css';
import '../../styles/media-queries.css';
import Card from "../Cards/Card.tsx";
import CardColor from "../Cards/CardColor.tsx";

const Playlist = () =>{
    return(
        <div className="offter_scroll-container">
            <div className="offter_list">
                {/* <section className="playlists"> */}
                    <Card/>
                    <CardColor/>
                {/* </section> */}
            </div>
        </div>
    );
};

export default Playlist