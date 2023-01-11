import React from "react";
import { Col } from "react-bootstrap";
import { CountInfo } from "./CountInfo";
import {ProfileBut} from "./ProfileBut";

export const BlogCount = (props) => {
    return (
        <>
            <Col>
                <CountInfo aClass="follower" emMessage="구독자" spanMessage="1270"/>
            </Col>
            <Col>
                <CountInfo aClass="following" emMessage="관심작가" spanMessage="26"/>
            </Col>
            <div class="col text-end">
                <ProfileBut/>
            </div>
        </>
    )
}