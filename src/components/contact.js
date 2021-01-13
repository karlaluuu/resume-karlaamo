import React, {Component} from 'react';
import * as Icons from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class Contact extends Component
{
    render()
    {
        return(
            <div className="contact" style={{'margin-top': "120px"}}>
            <img src={'img/contact1.jpg'} alt="contact1" style={{'height': "600px", 'width': "400px", 'margin-top': "120px", "margin-left": "300px", "float": "left"}}/>
            <div style={{'height': "200px", 'width': "550px",  "margin-right": "400px", 'margin-top': "120px","float": "right"}}>
            <img src={'img/contact.png'} alt="contact-logo" style={{'height': "200px", 'width': "550px"}}/>
            <div style={{"margin-left": "220px"}}>
            <a href="https://www.linkedin.com/in/karla-mari-amo-214b00b4/" className="linked-in social" ><FontAwesomeIcon icon={Icons.faLinkedin} size="2x" className="contact-icons" />  Linked In</a><br/><br/>
            <a href="https://github.com/karlaluuu" className="github social"><FontAwesomeIcon icon={Icons.faGithubAlt} size="2x" className="contact-icons" />  Github</a><br/><br/>
            <a href="https://www.instagram.com/kmphxtg" className="instagram social"><FontAwesomeIcon icon={Icons.faInstagram} size="2x" className="contact-icons"/>  Instagram</a><br/><br/>
            <a href="https://www.youtube.com/user/KarlaMari13" className="youtube social"><FontAwesomeIcon icon={Icons.faYoutube} size="2x" className="contact-icons"/>  Youtube</a>
            </div>
            </div>
            </div>
        
        )
    }
}