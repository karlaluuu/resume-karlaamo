import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="footer">
    <a href="https://www.linkedin.com/in/karla-mari-amo-214b00b4/" className="linked-in social"><FontAwesomeIcon icon={Icons.faLinkedin} size="2x" /></a>
    <a href="https://www.youtube.com/user/KarlaMari13" className="youtube social"><FontAwesomeIcon icon={Icons.faYoutube} size="2x" /></a>
    <a href="https://www.instagram.com/karlaluuuuu" className="instagram social"><FontAwesomeIcon icon={Icons.faInstagram} size="2x" /></a>
    <a href="https://github.com/karlaluuu" className="github social"><FontAwesomeIcon icon={Icons.faGithubAlt} size="2x" /></a>
  </div>
);

export default Footer;