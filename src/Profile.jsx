import React from "react";
import { BlogThumb } from "./BlogThumb";
import { ProfileDesc } from "./ProfileDesc";
import "./Profile.css"
import { BlogCount } from "./BlogCount";

export const Profile = (props) => {
    return (
        <div class="wrap_profile">
            <BlogThumb src={props.user.userImgPath}/>
            <ProfileDesc name={props.user.username}/>
            <BlogCount />
        </div>
    );
}