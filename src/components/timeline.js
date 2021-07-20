import React, {Component} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

export default class Timeline extends Component{
    render()
    {
        return(
        <VerticalTimeline className="timeline">
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
         contentStyle={{ background: 'rgb(244,233,232)' }}
         contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
         date="2016 - present"
         iconStyle={{ background: 'rgb(196,224,220)', color: 'rgb(172,172,172)' }}
         icon={<WorkIcon />}>
         <h3 className="vertical-timeline-element-title">Costco Wholesale Inc</h3>
         <h4 className="vertical-timeline-element-subtitle">Toronto, Ontario</h4>
         <h5>Cashier Assistant</h5><br/>
         <p>Provides accurate and efficient customer service by handling transactions and queries.</p>

         </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
         contentStyle={{ background: 'rgb(244,233,232)' }}
         contentArrowStyle={{ borderRight: '10px solid rgb(244,233,232)' }}
         date="2016 - present"
         iconStyle={{ background: 'rgb(196,224,220)', color: 'rgb(172,172,172)' }}
         icon={<WorkIcon />}>
         <h3 className="vertical-timeline-element-title">McDonald's Restaurant of Canada</h3>
         <h4 className="vertical-timeline-element-subtitle">Toronto, Ontario | Scarborough, Ontario</h4>
         <h5>General Crew</h5><br/>
         <p>Provides accurate and efficient customer service by handling transactions and orders, serving food in a short period of time, and answering customer concerns.</p>
         <p>Provides assistance on the preparation of orders and additional requests.</p>
         <p>Maintains cleanliness and sanitation of the store to meet sanitary guidelines and provide quality service.</p>
         </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2016 - September 2020"
    iconStyle={{ background: 'rgb(196,224,220)', color: 'rgb(172,172,172)' }}
    icon={<WorkIcon />}>
    <h3 className="vertical-timeline-element-title">AGS Automotive Systems</h3>
    <h4 className="vertical-timeline-element-subtitle">North York, Ontario</h4>
    <h5>IT Support Specialst</h5><br/>
    <p>Provided Tier 1 support from the corporate office to users from all locations.</p>
    <p>Assisted the programming department with the development of applications using ASP .Net.</p>
    <p>Monitored company computer systems and networks.</p>
    <p>Trained onboarding staff with software and hardware usage. </p>
    <p>Installed and configured computer hardware, software programs, systems, networks, and other company assets</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="September 2017 - December 2020"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<SchoolIcon />}>
    <h3 className="vertical-timeline-element-title">Centennial College</h3>
    <h4 className="vertical-timeline-element-subtitle">Scarborough, Ontario</h4>
    <p>
      Post Secondary Education (Advanced Diploma) <br></br>
      Major: Software Engineering Technology - Coop
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2016 - 2017"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">City Adult Learning Centre</h3>
    <h4 className="vertical-timeline-element-subtitle">Toronto, Ontario</h4>
    <p>
      Secondary Education
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="April 2015 - May 2015"
    iconStyle={{ background:'rgb(196,224,220)', color: 'rgb(172,172,172)' }}
    icon={<WorkIcon />}>
    <h3 className="vertical-timeline-element-title">Diversified Technology Solutions International Inc</h3>
    <h4 className="vertical-timeline-element-subtitle">Makati City, Philippines</h4>
    <h5>Human Resource Assistant - Internship/Practicum</h5><br/>
    <p>Managed the company's HR Leave Monitoring and Daily Time Record (DTR).</p>
    <p>In close contact of Accounting Department regarding the employee salary.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2013 - 2016"
    iconStyle={{ background: 'rgb(231,178,191)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Polytechnic University of the Philippines</h3>
    <h4 className="vertical-timeline-element-subtitle">Sta. Mesa, Manila, Philippines</h4>
    <p>
      Higher Education (Bachelor's Degree - Undergraduate) <br/>
      Bachelor of Science in Business Administration - Major in Human Resource Development Management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
        )
    }
}