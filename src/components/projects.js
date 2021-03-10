import React, {Component} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import {Button} from 'react-bootstrap';

export default class Projects extends Component{
    render()
    {
        return(
<VerticalTimeline className="project-timeline">
  <VerticalTimelineElement 
    className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(244,233,232)' }}
            contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">EXP|CON</h3>
    <h4 className="vertical-timeline-element-subtitle">HTML/CSS</h4>
    <p>
       A HTML/CSS based website with a theme of providing virtual concerts in your own home.
    </p><br/>
        <p>Deployed on Netlify</p> <br/>
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://expcon-static.netlify.app">View Project</Button>
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://github.com/karlaluuu/SpeerTech-FrontEndAssessment">View Repository in Github</Button>
  </VerticalTimelineElement>

  <VerticalTimelineElement 
    className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(244,233,232)' }}
            contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">EduCloud</h3>
    <h4 className="vertical-timeline-element-subtitle">ReactJS / MongoDB</h4>
    <p>
      A flexible school platform that serves as a communication tool with file sharing capability for the students and tracker / scheduler for school tasks. 
      It also comes with ChatBot that helps you through the whole app. It is a group project for Software Development Class.
    </p><br/>
    <p>Deployed on Netlify, Heroku and MongoDB Atlas</p> <br/>
            <Button variant="secondary" class="btn btn-primary btn-learn" href="https://educloud-mern.netlify.app">View Project</Button>
      <Button variant="secondary" class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/19ebOU3xwE5ZKdSh9Ae-2q4oSZ5gcFlNa/view?usp=sharing">View Video Recording</Button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(244,233,232)' }}
        contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Online PetStore API</h3>
    <h4 className="vertical-timeline-element-subtitle">ASP .Net Core / AWS</h4>
    <p>
      A project for API Engineering & Cloud COMP class. An integration with ASP .Net Core 2.1 Web API and publish to AWS Elastic Beanstalk and RDS
    </p><br/>
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://github.com/karlaluuu/Online-Pet-Store">View Repository in Github</Button>
        <Button variant="secondary" class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/15MBJ8B1dEWpaZ9c21tVy_mojkHUP7Tj3/view?usp=sharing">View Video Recording</Button>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(244,233,232)' }}
        contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Reservation Website</h3>
    <h4 className="vertical-timeline-element-subtitle">ASP .Net Core 2.1</h4>
    <p>
       A reservation website for Bruce Peninsula National Park.
    </p><br/>
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://github.com/karlaluuu/Reservation-Website">View Repository in Github</Button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
        )
    }
}