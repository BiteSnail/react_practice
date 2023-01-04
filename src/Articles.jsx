import React from "react";
import { PostItem } from "./PostItem";
import "./Articles.css";

export const Articles = (props) => { 
    return (
        <div className="wrap_articles">
            {props.items.map((item)=>{
                return <PostItem item={item}/>
            })}
        </div>
    )
}