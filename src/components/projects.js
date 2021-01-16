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
    <h3 className="vertical-timeline-element-title">EduCloud</h3>
    <h4 className="vertical-timeline-element-subtitle">ReactJS / MongoDB</h4>
    <p>
      A flexible school platform that serves as a communication tool with file sharing capability for the students and tracker / scheduler for school tasks. 
      It also comes with ChatBot that helps you through the whole app.
    </p><br/>
      <Button variant="secondary" class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing">View Project</Button>
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
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing">View Project</Button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(244,233,232)' }}
        contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Reservation Website</h3>
    <h4 className="vertical-timeline-element-subtitle">ASP .Net Core 2.1</h4>
    <p>
      A reservation website for Bruce Peninsula National Park. 
    </p><br/>
    <Button variant="secondary" class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing">View Project</Button>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
        )
    }
}