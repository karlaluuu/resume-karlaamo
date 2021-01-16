import React, {Component} from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import * as Icons from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class Contact extends Component
{
    render()
    {
        return(

            <Container fluid className="contact-container" >
            <Row>
            <Col>
            <Image src={'img/contact1.jpg'} alt="contact1" fluid className="contact1" />
            </Col>
            <Col>
             <Image src={'img/contact.png'} alt="contactlogo" fluid className="contact-logo" />
            </Col>
            <Row>
            </Row>
            </Row>
            </Container>

        
        )
    }
}