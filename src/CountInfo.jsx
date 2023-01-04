import React from "react";
import { EmpysisString } from "./EmpysisString";
import "./CountInfo.css";

export const CountInfo = (props) => {
    return (
        <>
            <dd>
                <a href="/" class={"link_count_"+props.aClass}>
                    <EmpysisString emClass="txt_g" emMessage={props.emMessage} spanClass ="num_count" spanMessage={props.spanMessage} />
                </a>
            </dd>
        </>
    )
}