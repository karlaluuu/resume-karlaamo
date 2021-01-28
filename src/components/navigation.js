import React, { Component } from 'react'
import {Image} from 'react-bootstrap'
import { ReactNavbar } from "react-responsive-animate-navbar";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,  MDBIcon } from "mdbreact";
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-brands-svg-icons'
import Homepage from './home'
import logo from './logo.png'
import Timeline from './timeline'
import About from './about'
import Contact from './contact'
import Projects from './projects'



export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

    render() {
        return (
       <BrowserRouter>
      <MDBNavbar fixed="top" dark expand="md" scrolling transparent color="bg-primary" className="nav" >       
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
               
            <MDBNavbarBrand href="/">
              <Image src={logo} alt="logo" className="logo"/>
            </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/" className="nav-link">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/timeline">TIMELINE</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/projects">PROJECTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">ABOUT ME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">CONTACT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
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