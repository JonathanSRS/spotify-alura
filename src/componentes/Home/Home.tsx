import React from "react";
import './Home.css';
import '../../styles/media-queries.css';
import HeaderPlaylist from "../HeaderPlaylist/HeaderPlaylist.tsx";
import Playlist from "../Playlists/Playlist.tsx";

const Home = () =>{
    return(
        <section className="home-page">
            <div className="home-page_content">
                <HeaderPlaylist/>
                <Playlist/>
            </div>
        </section>
    );
};

export default Home