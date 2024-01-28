import React from "react";
import './Playlist.css';
import Card from "../Cards/Card.tsx";

const Playlist = () =>{
    return(
        <div className="offter_scroll-container">
            <div className="offter_list">
                {/* <section className="playlists"> */}
                    <Card/>
                {/* </section> */}
            </div>
        </div>
    );
};

export default Playlist