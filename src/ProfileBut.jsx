import React from "react";
import "./ProfileBut.css";

export const ProfileBut = (props) => {
    return (
        <div class="wrap_profile_btn">
            <span class="my_follow">
                <button type="button" class="btn_type_btn_default_btn_profile_btnFollow">구독하기</button>
            </span>
        </div>
    );
}