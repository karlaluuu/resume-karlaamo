import React, { Component } from 'react'
import { ReactNavbar } from "react-responsive-animate-navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
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
            <ReactNavbar
        color="#aca3af"
        logo={logo}
        menu={[
          { name: "HOME", to: "/", component: Homepage,},
          { name: "TIMELINE", to: "/timeline", component: Timeline },
          { name: "PROJECTS", to: "/projects", component: Timeline },
          { name: "ABOUT ME", to: "/about", component: About },
          { name: "CONTACT", to: "/contact", component: Contact },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />

<Switch>
<Route exact path="/" component={Homepage}/>
<Route exact path="/timeline" component={Timeline}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/about" component={About}/>
<Route exact path="/projects" component={Projects}/>
</Switch>
</BrowserRouter>

            

        )
    }

}