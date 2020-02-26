import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Link from 'next/link';

export default function Header (props) {

  const currentPage = typeof props.currentPage !=='undefined' ? props.currentPage : '';

  return (
    <div className="main-header">
      <header className="roots-header">
        <Navbar bg="dark" className="navbar-dark" expand="lg">
          <div className="container-fluid">
            <Navbar.Brand href="/">
              <img alt="Logo MECHID" src="images/favicon.png" />
              <span style={{margin: "0 3px"}}>MECHID</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mr-auto">
                <Link href="/about">
                  <a className={currentPage === 'about' ? 'active nav-link': 'nav-link'} >About us</a>
                </Link>
                <Link href="/help">
                  <a className={currentPage === 'help' ? 'active nav-link': 'nav-link'} >Help</a>
                </Link>
              </Nav>

              <Nav>
               
                
                
                  <Nav.Link target="blank" href="http://168.1.217.30:31314/login" className="login-button">Login</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>

      <section className="banner"></section>
    </div>
  );
}