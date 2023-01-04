import React from "react";
import { Profile } from "./profiles/Profile";
import { TabContents } from "./tabConents/TabContents";

const x = (props) => {
    return(
    <>
    <header class="header_menubar">
        <div class="cover_image"></div>
        <Profile user={props.user}/>
        <TabContents />
    </header>
    </>
    );
} 


export const Header = (props) => {
    return (
        <>
            <h1>hi</h1>
        </>
    )
}