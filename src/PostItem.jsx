import React from "react";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const PostItem = (props) => {
    return (
        <Col>
            <Card>
                <Card.Img height="320px" variant="top" src={props.item.src}/>
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                    {props.item.preview}
                    </Card.Text>
                    <Button variant="primary">페이지로 이동</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}