import React from "react";
export const EmpysisString = (props) => {
    return (
        <>
            <em hidden={props.hidden}>{props.emMessage}</em>
            <span>{props.spanMessage}</span>
        </>
    )
}