import React from "react";
import { Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

export const Info = (props) => {
    return (
        <>
            <h1>소개</h1>
            <span>{props.user.introduce}</span>
            <Container>
                {props.user.tag.map((t) => {
                    return <Badge pill bg="dark">{t}</Badge>
                })}
            </Container>
        </>
    )
}