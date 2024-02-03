import React from "react";
import './HeaderPlaylist.css';
import '../../styles/media-queries.css';

const HeaderPlaylist = ()=>{
    return(
    <div className="header-playlist">
        <div className="header-playlist-title">
            <h2><a href="playlist">Playlist do Spotify</a></h2>
        </div>
        <a href="mostrar tudo">
            <span>Mostrar tudo</span>
        </a>
    </div>
    );
};

export default HeaderPlaylist