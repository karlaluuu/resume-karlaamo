import React, { Component, Suspense, lazy } from 'react';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import logo from './logo.png';

const Homepage = lazy(() => import('./home'));
const Timeline = lazy(() => import('./timeline'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
const Projects = lazy(() => import('./projects'));

export default class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar expand="md" className="nav" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <Image src={logo} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="nav-link">HOME</Nav.Link>
                <Nav.Link as={Link} to="/timeline" className="nav-link">TIMELINE</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="nav-link">PROJECTS</Nav.Link>
                <Nav.Link as={Link} to="/about" className="nav-link">ABOUT ME</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}