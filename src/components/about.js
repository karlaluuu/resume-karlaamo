import React, {Component} from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

export default class About extends Component{
    render()
    {
        return(
            <Container fluid className="about-container">
            <Row>
            <Image src="img/about.png" alt="about" className="about-logo" fluid/>
            </Row>
            <Row>
            <h3 className="h3-about">WHO AM I?</h3>
            </Row>
            <Row>
            <p>I am a 20-ish year old, Software Engineering graduate from Centennial College. I love researching and reading things about everything since the generation right now is veeerrryyyy progressive. It's honestly a love-hate relationship with design and colour palettes, but I'll take it ;P</p>
            </Row>
            <Row>
            <p><b>TMI:</b> I am still waiting for a USB-C charging port on iPhones. LOOOOOOOOOOOOOOOL</p>
            </Row>
            <Divider variant="middle"/>
            <br/>
            <Row>
            <h5 className="h3-about">MY EXPERTISE</h5> <p style={{'color': "#EDEDED", 'font-weight': "bold"}}>(maybe lol) </p>
            </Row>
            </Container>
        )
    }
}