import React from "react";
import { EmpysisString } from "./EmpysisString";

export const CountInfo = (props) => {
    return (
        <>
            <dd>
                <a href="/" class={"link_count_"+props.aClass}>
                    <EmpysisString emMessage={props.emMessage} spanMessage={props.spanMessage} />
                </a>
            </dd>
        </>
    )
}