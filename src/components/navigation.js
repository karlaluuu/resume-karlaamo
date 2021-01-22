import React, { Component } from 'react'
import { ReactNavbar } from "react-responsive-animate-navbar";
import { Route, BrowserRouter as Router} from 'react-router-dom'
import Homepage from './home'
import logo from './logo.png'
import Timeline from './timeline'
import About from './about'
import Contact from './contact'
import Projects from './projects'


export default class Navigation extends Component {
   
    render() {
        return (
<Router>
            <ReactNavbar
        color="#aca3af"
        logo={logo}
        menu={[
          { name: "HOME", to: "/", component: Homepage},
          { name: "TIMELINE", to: "/timeline", component: Timeline},
          { name: "PROJECTS", to: "/projects", component: Projects },
          { name: "ABOUT ME", to: "/about", component: About },
          { name: "CONTACT", to: "/contact", component: Contact },
        ]}
        social={[
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/karla-mari-amo-214b00b4",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Youtube",
            url: "https://www.youtube.com/user/KarlaMari13",
            icon: ["fab", "youtube"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/karlaluuuuu",
            icon: ["fab", "instagram"],
          },
          {
            name: "Github",
            url: "https://github.com/karlaluuu",
            icon: ["fab", "github"],
          },
        ]}
      />

<Route exact path="/" component={Homepage}/>
<Route exact path="/timeline" component={Timeline}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/about" component={About}/>
<Route exact path="/projects" component={Projects}/>
</Router>


            

        )
    }

}