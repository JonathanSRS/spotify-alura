import React from "react";
import './LibraryContent.css';

const LibraryContent = () =>{
    return(
        <div className="library_content">
                <button className="library_button">
                    <span className="fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fas fa-plus"></span>
            </div>
    );
};

export default LibraryContent
