import React from "react";
import { PostItem } from "./PostItem";
import Row from 'react-bootstrap/Row';

export const Articles = (props) => { 
    return (
        <Row xs={1} md={2} className="g-4">
            {props.items.map((item)=>{
                return <PostItem item={item}/>
            })}
        </Row>
    )
}