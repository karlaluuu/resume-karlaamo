
import React, { Component } from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

export default class About extends Component {
  render() {
    const expertise = [
      {
        icon: solidIcons.faLaptopCode,
        title: 'Web Development',
        description:
          'Knowledgeable in building and maintaining web applications using HTML, CSS, JavaScript, ReactJS, and .NET. I enjoy exploring new technologies and finding ways to improve user experiences.'
      },
      {
        icon: solidIcons.faHeadset,
        title: 'IT Support',
        description:
          'Experienced in providing technical assistance, troubleshooting issues, and helping users find solutions. I value clear communication and delivering reliable support.'
      },
      {
        icon: solidIcons.faServer,
        title: 'Systems Administration',
        description:
          'Familiar with Windows Server administration, Active Directory, and Microsoft Exchange through hands-on IT support experience.'
      },
      {
        icon: solidIcons.faClipboardCheck,
        title: 'Quality Assurance',
        description:
          'Bringing 5 years of experience in software testing, including Functional, Regression, UAT, Smoke, and Sanity Testing to help deliver reliable, high-quality applications.'
      },
      {
        icon: solidIcons.faBug,
        title: 'Production Support',
        description:
          'Experienced in supporting Tier-1 critical banking applications, investigating production issues, troubleshooting defects, and working with different teams to maintain system stability.'
      },
      {
        icon: solidIcons.faFileAlt,
        title: 'Test Planning & Management',
        description:
          'Skilled in creating test cases, test matrices, and test data based on business requirements, using HP Application Lifecycle Management (ALM) to manage testing activities.'
      }
    ];

    return (
      <Container fluid className="about-container">
        <section className="text-center">

          {/* About Me */}
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image
                src="img/about.png"
                alt="About me"
                className="about-logo"
                fluid
              />
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md={9} lg={8}>
              <h3 className="h3-responsive font-weight-bold my-5">
                WHO AM I?
              </h3>

              <p className="lead grey-text mb-4">
                I'm a Software Engineering graduate from Centennial College
                with 5 years of experience in Quality Assurance and
                production support. I enjoy solving problems, exploring
                new technologies, and continuously learning how things work.
              </p>

              <p className="grey-text mb-5">
                Outside of work, I'm curious about almost everything,
                especially technology, design, and creative ideas.
                I have a love-hate relationship with choosing colour
                palettes, but that's part of the fun!
              </p>
            </Col>
          </Row>

          <Divider variant="middle" />

          {/* Expertise */}
          <Row className="justify-content-center">
            <Col xs={12}>
              <h3 className="h3-responsive font-weight-bold my-5">
                MY EXPERTISE
              </h3>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {expertise.map((item, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={4}
                className="mb-5 px-4"
              >
                <div className="expertise-card h-100">
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="3x"
                    className="expertise-icon"
                  />

                  <h5 className="font-weight-bold my-4">
                    {item.title}
                  </h5>

                  <p className="grey-text mb-0">
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>

        </section>
      </Container>
    );
  }
}
