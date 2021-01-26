import React, {Component} from 'react'
import { Row, Container, Col, Image } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import * as Icons from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'


export default class About extends Component{
    render()
    {
        return(
            <Container fluid className="about-container">
            <section className="text-center">
            <Row>
            <Image src="img/about.png" alt="about" className="about-logo" fluid/>
            </Row>
            <MDBRow>
            <h3 className="h3-responsive font-weight-bold my-5">WHO AM I?</h3>
            </MDBRow>
            <MDBRow>
            <p className="lead grey-text w-responsive mx-auto mb-5">I am a 20-ish year old, Software Engineering graduate from Centennial College. I love researching and reading things about everything since the generation right now is veeerrryyyy progressive. It's honestly a love-hate relationship with design and colour palettes, but I'll take it ;P</p>
            </MDBRow>
            <Row>
            <p><b>TMI:</b> I am still waiting for a USB-C charging port on iPhones. LOOOOOOOOOOOOOOOL</p>
            </Row>
            <Divider variant="middle"/>

            <MDBRow>
            <h3 className="h3-responsive font-weight-bold my-5">MY EXPERTISE</h3> 
            </MDBRow>

            <MDBRow>
          <MDBCol md="4">
            <FontAwesomeIcon icon={solidIcons.faLaptopCode} size="3x"/>
            <h5 className="font-weight-bold my-4">Web Development</h5>
            <p className="grey-text mb-md-0 mb-5">
              I have academic knowledge in building websites using HTML/CSS, ASP .Net, Javascript and ReactJS
            </p>
          </MDBCol>
          <MDBCol md="4">
            <FontAwesomeIcon icon={solidIcons.faBullhorn} size="3x"/>
            <h5 className="font-weight-bold my-4">Support</h5>
            <p className="grey-text mb-md-0 mb-5">
              Having a work experience that deals with customers, I have a good communication skills and can provide a good support to people. 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <FontAwesomeIcon icon={solidIcons.faDatabase} size="3x"/>
            <h5 className="font-weight-bold my-4">Windows Server Administration</h5>
            <p className="grey-text mb-md-0 mb-5">
              I've had an Coop term with IT Support Specialist. From there, I've got an good grasp dealing with Windows Servers, Active Directory, Microsoft Exchange and everything else revolving around it.
            </p>
          </MDBCol>
        </MDBRow>
        </section>
            </Container>
        )
    }
}