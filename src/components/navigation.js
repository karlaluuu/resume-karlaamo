import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import {Divider} from '@material-ui/core';
import Homepage from './home'
import logo from './logo.png'
import Timeline from './timeline'
import About from './about'
import Contact from './contact'
import Projects from './projects'


export default class Navigation extends Component {
   
    render() {
        return (
            <div class="">
            <BrowserRouter>
<Navbar collapseOnSelect  className="navbar" variant="light">

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse >
      <Nav className="m-auto">
            <Nav.Link className="nav-link" href="/about">About Me</Nav.Link>
                        <Divider orientation="vertical" flexItem/>
                  <Nav.Link href="/timeline">Timeline</Nav.Link>
      </Nav>
        <Navbar.Brand href="/"><img src={logo} alt="logo" className="logo"/></Navbar.Brand>
    <Nav className="m-auto" pullRight>

                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Divider orientation="vertical" flexItem/>
                                                <Nav.Link href="/contact">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Divider variant="middle" className="middle-divider"/>
<Switch>
<Route exact path="/" component={Homepage}/>
<Route exact path="/timeline" component={Timeline}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/about" component={About}/>
<Route exact path="/projects" component={Projects}/>
</Switch>
</BrowserRouter>

            </div>
            

        )
    }

}