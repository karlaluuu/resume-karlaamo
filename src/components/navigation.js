import React, { Component } from 'react'
import { ReactNavbar } from "react-responsive-animate-navbar";
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Homepage from './home'
import logo from './logo.png'
import Timeline from './timeline'
import About from './about'
import Contact from './contact'
import Projects from './projects'


export default class Navigation extends Component {
   
    render() {
        return (
       <BrowserRouter>
<Switch>
<Route exact path="/" component={Homepage}/>
<Route exact path="/timeline" render={()=> <Timeline/>}/>
<Route exact path="/contact" render={()=> <Contact/>}/>
<Route exact path="/about" render={()=> <About/>}/>
<Route exact path="/projects" render={()=> <Projects/>}/>
</Switch>
            <ReactNavbar
        color="#aca3af"
        logo={logo}
        menu={[
          { name: "HOME", to: "/", component: Homepage, render: Homepage},
          { name: "TIMELINE", to: "/timeline", component: Timeline, render: Timeline},
          { name: "PROJECTS", to: "/projects", component: Projects, render: Projects },
          { name: "ABOUT ME", to: "/about", component: About, render: About },
          { name: "CONTACT", to: "/contact", component: Contact, render: Contact },
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

       </BrowserRouter>


            

        )
    }

}