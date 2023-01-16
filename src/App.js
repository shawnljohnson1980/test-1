import React from 'react';
import './App.css';
import { Router } from "@reach/router";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Navbar className='shadow' bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="/">Test App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Home  path="/" component={Home} />
            
          {/* This Link is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <About path="/about" component={About} />
            
          {/* This Link is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Contact path="/contact" component={Contact} />
          </Router>
          </div>
          </div>
  );
}
export default App;
