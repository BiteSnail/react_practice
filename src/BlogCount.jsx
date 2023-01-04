import React from "react";
import { CountInfo } from "./CountInfo";
import {ProfileBut} from "./ProfileBut";

export const BlogCount = (props) => {
    return (
        <>
            <dl class="blog_count">
                <dt class="screen_out">브런치 정보</dt>
                <CountInfo aClass="follower" emMessage="구독자" spanMessage="1270"/>
                <CountInfo aClass="following" emMessage="관심작가" spanMessage="26"/>
                <ProfileBut/>
            </dl>
        </>
    )
}