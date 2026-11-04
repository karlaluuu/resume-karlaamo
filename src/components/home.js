
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Homepage extends Component {
  render() {
    return (
      <Container fluid className="homepage-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows
          className="homepage-carousel"
        >
          <div>
            <img className="homepage-image" src="img/1.jpg" alt="Welcome to my portfolio" />
            <div className="homepage-caption carousel-caption">
              <h1 className="font-weight-bold">Hello! Bonjour! Nǐ hǎo! 안녕!</h1>
              <h2>I&apos;m Karla!</h2>
              <p>Quality Assurance Analyst | Software Engineering Graduate</p>
              <Button
                variant="primary"
                className="btn-learn"
                href="https://drive.google.com/file/d/1zF6LOvt4VPJFtvz1ovTfBMCQgpreJYdQ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Resume
              </Button>
            </div>
          </div>

          <div>
            <img className="homepage-image" src="img/2.jpg" alt="Technology and software development" />
            <div className="homepage-caption carousel-caption">
              <h2 className="font-weight-bold">Turning Problems Into Solutions</h2>
              <p>5 years of experience in Quality Assurance, software testing, and production support.</p>
              <p>Always learning, exploring new technologies, and finding better ways to solve problems.</p>
              <Button variant="primary" className="btn-learn" href="/projects">
                Explore My Projects
              </Button>
            </div>
          </div>

          <div>
            <img className="homepage-image" src="img/3.jpg" alt="My photography and creative interests" />
            <div className="homepage-caption carousel-caption">
              <h2 className="font-weight-bold">Beyond the Screen</h2>
              <p>When I&apos;m not working with technology, you&apos;ll probably find me exploring photography, discovering new things, or getting creative.</p>
              <Button
                variant="primary"
                className="btn-learn"
                href="https://www.instagram.com/zyyyril.k?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore My Photography
              </Button>
            </div>
          </div>
        </Carousel>
      </Container>
    );
  }
}
