import React from "react";
import "./PostItem.css";

export const PostItem = (props) => {
    return (
        <div className="post_item">
            <img className="preview_img" src={props.item.src} alt="없는 사진"/>
            <h1 className="post_title">{props.item.title}</h1>
            <span className='post_preview'>{props.item.preview}</span>
            <span className="post_date">{props.item.createDate}</span>
        </div>
    );
}