import React from "react";
import {Profile} from "./Profile";
import "./Header.css";


export const Header = (props) => {
    return (
        <>
            <header className="header_menubar">
                <div className="cover_image"></div>
                <Profile user={props.user}/>
            </header>
        </>
    )
}