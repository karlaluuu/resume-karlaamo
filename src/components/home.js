
import React, { Component } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';

export default class Homepage extends Component {
  render() {
    return (
      <Container fluid className="homepage-container">

        <Carousel
          fade
          indicators={true}
          controls={true}
          pause="hover"
          keyboard={true}
          touch={true}
          className="homepage-carousel"
        >

          {/* Slide 1 - Introduction */}
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 homepage-image"
              src="img/1.jpg"
              alt="Welcome to my portfolio"
            />

            <Carousel.Caption className="homepage-caption">
              <h1 className="font-weight-bold">
                Hello! Bonjour! Nǐ hǎo! 안녕!
              </h1>

              <h2>
                I'm Karla!
              </h2>

              <p>
                Quality Assurance Analyst | Software Engineering Graduate
              </p>

              <Button
                variant="primary"
                className="btn-learn"
                href="https://drive.google.com/file/d/1zF6LOvt4VPJFtvz1ovTfBMCQgpreJYdQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 - Professional Experience */}
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 homepage-image"
              src="img/2.jpg"
              alt="Technology and software development"
            />

            <Carousel.Caption className="homepage-caption">
              <h2 className="font-weight-bold">
                Turning Problems Into Solutions
              </h2>

              <p>
                5 years of experience in Quality Assurance,
                software testing, and production support.
              </p>

              <p>
                Always learning, exploring new technologies,
                and finding better ways to solve problems.
              </p>

              <Button
                variant="primary"
                className="btn-learn"
                href="/projects"
              >
                Explore My Projects
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 - Personal Interests */}
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 homepage-image"
              src="img/3.jpg"
              alt="My photography and creative interests"
            />

            <Carousel.Caption className="homepage-caption">
              <h2 className="font-weight-bold">
                Beyond the Screen
              </h2>

              <p>
                When I'm not working with technology,
                you'll probably find me exploring photography,
                discovering new things, or getting creative.
              </p>

              <Button
                variant="primary"
                className="btn-learn"
                href="https://www.instagram.com/zyyyril.k?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore My Photography
              </Button>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </Container>
    );
  }
}
