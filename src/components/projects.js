import React, {Component} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

export default class Projects extends Component{
    render()
    {
        return(
<VerticalTimeline className="project-timeline">
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Project 1</h3>
    <h4 className="vertical-timeline-element-subtitle">Project 1</h4>
    <p>
      Description
    </p>
      <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing"><b>View Project</b></a></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Project 2</h3>
    <h4 className="vertical-timeline-element-subtitle">Project 2</h4>
    <p>
      Description
    </p>
          <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing"><b>View Project</b></a></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<DeveloperModeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Project 3</h3>
    <h4 className="vertical-timeline-element-subtitle">Project 1</h4>
    <p>
      Description
    </p>
          <p><a class="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1pnOdpAU2tg26OWRIwtHbqp3L7oCr4Wib/view?usp=sharing"><b>View Project</b></a></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
        )
    }
}