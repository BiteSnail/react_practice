import React from "react";

export const Info = (props) => {
    return (
        <>
            <h1>{props.user.username}님의 생일</h1>
            <span>{props.user.birth}입니다</span>
        </>
    )
}