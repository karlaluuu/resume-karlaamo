
import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import StarIcon from '@mui/icons-material/Star';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { Button } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Container from 'react-bootstrap/Container';
import { Container } from 'semantic-ui-react';


export default class Projects extends Component {
  render() {
    const projects = [
      {
        title: 'EXP|CON',
        subtitle: 'HTML / CSS',
        description:
          'An HTML and CSS-based website built around the idea of bringing virtual concerts into your own home.',
        deployment: 'Deployed on Netlify',
        links: [
          {
            label: 'View Project',
            url: 'https://expcon-static.netlify.app'
          },
          {
            label: 'View GitHub Repository',
            url: 'https://github.com/karlaluuu/SpeerTech-FrontEndAssessment'
          }
        ]
      },
      {
        title: 'EduCloud',
        subtitle: 'ReactJS / MongoDB',
        description:
          'A flexible school platform that serves as a communication tool with file-sharing capabilities for students, along with a task tracker and scheduler. It also includes a chatbot to help users navigate the application. Developed as a group project for a Software Development class.',
        deployment: 'Deployed using Netlify, Heroku, and MongoDB Atlas',
        links: [
          {
            label: 'View Project',
            url: 'https://educloud-mern.netlify.app'
          },
          {
            label: 'View Video Recording',
            url: 'https://drive.google.com/file/d/19ebOU3xwE5ZKdSh9Ae-2q4oSZ5gcFlNa/view?usp=sharing'
          }
        ]
      },
      {
        title: 'Online PetStore API',
        subtitle: 'ASP.NET Core / AWS',
        description:
          'An API engineering and cloud development project integrating an ASP.NET Core 2.1 Web API with AWS Elastic Beanstalk and Amazon RDS.',
        links: [
          {
            label: 'View GitHub Repository',
            url: 'https://github.com/karlaluuu/Online-Pet-Store'
          },
          {
            label: 'View Video Recording',
            url: 'https://drive.google.com/file/d/15MBJ8B1dEWpaZ9c21tVy_mojkHUP7Tj3/view?usp=sharing'
          }
        ]
      },
      {
        title: 'Reservation Website',
        subtitle: 'ASP.NET Core 2.1',
        description:
          'A reservation website developed for Bruce Peninsula National Park.',
        links: [
          {
            label: 'View GitHub Repository',
            url: 'https://github.com/karlaluuu/Reservation-Website'
          }
        ]
      }
    ];

    return (
      <Container fluid className="projects-container">
        <div className="projects-header text-center">
          <h2>MY PROJECTS</h2>
          <p>
            A collection of projects where I explored technologies,
            developed solutions, and put my skills into practice.
          </p>
        </div>

        <VerticalTimeline className="project-timeline">
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="project-timeline-element"
              contentStyle={{}}
              contentArrowStyle={{}}
              iconStyle={{}}
              icon={<DeveloperModeIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {project.title}
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                {project.subtitle}
              </h4>

              <p className="project-description">
                {project.description}
              </p>

              {project.deployment && (
                <p className="project-deployment">
                  <strong>{project.deployment}</strong>
                </p>
              )}

              <div className="project-buttons">
                {project.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="primary"
                    className="btn-learn"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            className="project-timeline-end"
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    );
  }
}
