import React from "react";
import { EmpysisString } from "./EmpysisString";
import "./ProfileDesc.css"

export const ProfileDesc = (props) => {
    return (
        <div class="wrap_profile_desc">
            <strong class="profileUserName">{props.name}</strong>
            <span class="blog_cpeg">
                <EmpysisString emClass="screen_out" emMessage="소속" spanClass ="txt_info" spanMessage="COSMIC" />
                <EmpysisString emClass="screen_out" emMessage="직업" spanClass ="txt_info" spanMessage="학생" />
            </span>
        </div>
    )
}