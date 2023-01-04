import React from "react";
import './BlogThumb.css';

export const BlogThumb = (props) => {
    return (
        <div className="blogthumb">
            <img className="profileUserImage" src={props.src} width="100" height="100" alt="이미지정보"></img>
        </div>
    );
}