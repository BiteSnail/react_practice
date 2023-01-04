import React from "react";
import "./EmpysisString.css";

export const EmpysisString = (props) => {
    return (
        <>
            <em class={props.emClass}>{props.emMessage}</em>
            <span class={props.spanClass}>{props.spanMessage}</span>
        </>
    )
}