import React from "react";
import { Card } from "react-bootstrap";
import {Col } from "react-bootstrap";

export const Magagine = (props) => {
    return (
        <Col>
            <Card>
                <Card.Img height="320px" variant="top" src={props.item.url}/>
                <Card.Body>
                    <Card.Text>
                    {props.item.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}