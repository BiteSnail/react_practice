import React from "react";
import { Container } from "react-bootstrap";
import {NavBar} from "./NavBar";
import { Profile } from "./Profile";
import "./css/MainPage.css"

export const MainPage = (props) => {
    return (
        <div>
            <div className="cover_image"/>
            <Container>
                <Profile user={props.user}/>
            </Container>
            <Container>
                <main>
                <NavBar items={props.items} user={props.user}/>
                </main>
            </Container>
        </div>
    )
}