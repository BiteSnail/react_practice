import React from "react";
import { ProfileDesc } from "./ProfileDesc";
import { BlogCount } from "./BlogCount";
import { EmpysisString } from "./EmpysisString";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/Profile.css"
import { Image } from "react-bootstrap";

export const Profile = (props) => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <ProfileDesc name={props.user.username}/>
                    <EmpysisString hidden="true" emMessage="소속" spanMessage="COSMIC" />
                    <EmpysisString hidden="true" emMessage="직업" spanMessage="학생" />
                </div>
                <div class="col text-end">
                    <Image roundedCircle="true" src={props.user.userImgPath} width="100" height="100" alt="이미지정보"></Image>
                </div>
            </div>
            <div class="row">
                <BlogCount />
            </div>
        </div>
    );
}