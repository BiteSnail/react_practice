import React from "react";
import { Container, Row } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';    
import { Articles } from "./Articles";
import { Info } from "./Info";
import { Magagine } from "./Magagine";

const magagines = [
    {
        text: "guulzzam",
        url: "http://filecache.humoruniv.com/w/1c/1c5bbf270f7932d38d186c74299e012f0fdaf397.webp",
    },
    {
        text: "guulzzam2",
        url: "http://timg.humoruniv.com/thumb_crop_resize.php?url=http://down.humoruniv.com//hwiparambbs/data/editor/pdswait/e_sb62b76006_962e06d648acbc37e8780ab057dec5d60e080505.png?SIZE=800x414?WEBP"
    }
]

export const NavBar= (props) => {
    return (
        <>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify
            >
            <Tab eventKey="info" title="Info">
                <Info user={props.user}/>
            </Tab>
            <Tab eventKey="article" title="Article">
                <Articles items={props.items}/>
            </Tab>
            <Tab eventKey="magagine" title="magagine">
                <Container>
                    <Row>
                        {magagines.map((item)=>{
                            return <Magagine item={item}/>
                        })}
                    </Row>
                </Container>
                
            </Tab>
        </Tabs>
        </>
    )
}