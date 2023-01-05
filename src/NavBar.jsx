import React from "react";
import "./NavBar.css";

export const NavBar= (props) => {
    return (
        <>
            <div className="naviBar">
                <div className="menu">
                    <a href="/">article</a>
                </div>
                <div className="menu">
                    <a href="/info">info</a>
                </div>
                <div className="menu">
                    <a href="/magagine">magagine</a>
                </div>
                
            </div>
        </>
    )
}