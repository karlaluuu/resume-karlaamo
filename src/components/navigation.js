
import React, { Component, Suspense, lazy } from 'react';
import { Image, Navbar, Nav, Container, Spinner } from 'react-bootstrap';
import {
  Route,
  BrowserRouter,
  Routes,
  Link,
  useLocation
} from 'react-router-dom';

import logo from './logo.png';

const Homepage = lazy(() => import('./home'));
const Timeline = lazy(() => import('./timeline'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
const Projects = lazy(() => import('./projects'));

function NavigationLinks() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'HOME', end: true },
    { path: '/timeline', label: 'TIMELINE' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/about', label: 'ABOUT ME' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <Nav className="ms-auto align-items-md-center">
      {links.map((item) => (
        <Nav.Link
          key={item.path}
          as={Link}
          to={item.path}
          className={`nav-link ${
            location.pathname === item.path ? 'active' : ''
          }`}
          aria-current={
            location.pathname === item.path ? 'page' : undefined
          }
        >
          {item.label}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar
          expand="md"
          className="main-navbar"
          variant="light"
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
              <Image
                src={logo}
                alt="Karla's Portfolio"
                className="logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="main-navigation"
              aria-label="Toggle navigation"
            />

            <Navbar.Collapse id="main-navigation">
              <NavigationLinks />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Suspense
          fallback={
            <div className="page-loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p>Loading page...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}
