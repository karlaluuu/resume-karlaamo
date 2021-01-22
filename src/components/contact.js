import React, {Component} from 'react';
import {  MDBRow, MDBCol, MDBCardBody } from "mdbreact";
import {  Container, Image } from 'react-bootstrap';
import * as Icons from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solidIcons from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component
{
    render()
    {
        return(
    <Container fluid className="contact-container">
    <section className="contact-section my-10">
        <MDBRow>
          <MDBCol lg="6">
            <Image fluid src={'img/contact1.jpg'} alt="contact-img" className="contact1"/>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
            <Image fluid src={'img/contact.png'} alt="contact-logo" className="contact-logo"/>
              <ul className="text-lg-center list-unstyled ml-4">
                <li>
                  <p>
                  <FontAwesomeIcon icon={solidIcons.faMapMarkerAlt} size="2x"/>
                    North York, Ontario
                  </p>
                </li>
                <li>
                  <p>
                  <i class="fas fa-envelope-square"></i>
                  <FontAwesomeIcon icon={solidIcons.faPaperPlane} size="2x"/>
                    karlamari13@gmail.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/karla-mari-amo-214b00b4/" className="p-2 fa-lg w-ic">
                  <FontAwesomeIcon icon={Icons.faLinkedin} size="1x" />

                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/karlaluuu" className="p-2 fa-lg w-ic">
                    <FontAwesomeIcon icon={Icons.faGithubSquare} size="1x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/karlaluuuuu" className="p-2 fa-lg w-ic">
                    <FontAwesomeIcon icon={Icons.faInstagram} size="1x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/user/KarlaMari13" className="p-2 fa-lg w-ic">
                    <FontAwesomeIcon icon={Icons.faYoutube} size="1x" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
    </section>
    </Container>
  )
}
}
