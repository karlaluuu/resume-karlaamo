
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import * as Icons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
  render() {
    return (
      <Container fluid className="contact-page-container">

        <Row className="justify-content-center align-items-center">

          {/* Contact Image */}
          <Col xs={12} md={5} lg={4} className="text-center mb-4 mb-md-0">
            <Image
              fluid
              src="img/contact1.jpg"
              alt="Contact illustration"
              className="contact1"
            />
          </Col>

          {/* Contact Information */}
          <Col xs={12} md={7} lg={6}>
            <div className="contact-container">

              <div className="contact text-center">

                <Image
                  fluid
                  src="img/contact.png"
                  alt="Let's connect"
                  className="contact-logo"
                />

                <h3 className="contact-heading">
                  LET'S CONNECT!
                </h3>

                <p className="contact-description">
                  Have a question, an opportunity, or just want to say hello?
                  I'd love to hear from you!
                </p>

                {/* Contact Details */}
                <div className="contact-details">

                  <div className="contact-item">
                    <FontAwesomeIcon
                      icon={solidIcons.faMapMarkerAlt}
                      size="2x"
                      className="contact-icons"
                    />
                    <div>
                      <h5>Location</h5>
                      <p>Toronto, Ontario, Canada</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <FontAwesomeIcon
                      icon={solidIcons.faEnvelope}
                      size="2x"
                      className="contact-icons"
                    />
                    <div>
                      <h5>Email</h5>
                      <p>
                        <a href="mailto:karlamari13@gmail.com">
                          karlamari13@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                </div>

                <hr className="contact-divider" />

                {/* Social Links */}
                <h5 className="social-heading">
                  FIND ME ONLINE
                </h5>

                <ul className="list-inline contact-socials">

                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/karla-mari-amo-214b00b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="social-link"
                    >
                      <FontAwesomeIcon
                        icon={Icons.faLinkedin}
                        size="2x"
                      />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      href="https://github.com/karlaluuu"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="social-link"
                    >
                      <FontAwesomeIcon
                        icon={Icons.faGithub}
                        size="2x"
                      />
                    </a>
                  </li>

                </ul>

                <p className="contact-footer">
                  Looking forward to connecting with you!
                </p>

              </div>
            </div>
          </Col>

        </Row>

      </Container>
    );
  }
}
