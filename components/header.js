import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

export default function Header(props) {

  const currentPage = typeof props.currentPage !== 'undefined' ? props.currentPage : '';

  return (
    <div className="main-header">
      <header className="roots-header">
        <Navbar bg="dark" className="navbar-dark" expand="lg">
          <div className="container-fluid">
            <Navbar.Brand href="/">
              <img alt="Logo MECHID" src="images/logo2_white.png" style={{ width: '100px', paddingTop: '5px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mr-auto">
                <Link href="/about">
                  <a className={currentPage === 'about' ? 'active nav-link' : 'nav-link'} >About us</a>
                </Link>
                <Link href="/help">
                  <a className={currentPage === 'help' ? 'active nav-link' : 'nav-link'} >Help</a>
                </Link>
              </Nav>

              <Nav>



                <Nav.Link target="blank" href="http://roots-fe.au-syd.mybluemix.net/" className="login-button">Login User</Nav.Link>
                <Nav.Link target="blank" href="http://roots-fe-staff.au-syd.mybluemix.net/" className="login-button">Login Staff</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      <section className="banner">
        {/*<img src='/images/banner.jpg' style={{width:'100%'}}></img>
        */}
        <Container fluid>
          <Row style={{ paddingTop: '100px' }}>
            <Col xs={12} md={6} >
              <div className="text-left" style={{ minHeight: "300px" }}>
                <h1 className="website-header">
                  Where students, academics and industry come together.
                </h1>
                <p>We connect young talents to great opportunities during their most important years</p>
                <p><b>
                The site is still under construction, we will have more exciting news and features soon!

                </b>
                </p>


                <a className="learn-more-button" xs={6} href="http://roots-fe.au-syd.mybluemix.net/">
                  Students Sign up
                </a>
                <a className="learn-more-button" xs={6} href="http://roots-fe-staff.au-syd.mybluemix.net/">
                  Staff Sign up
                </a>

              </div>            
            </Col>
            <Col xs={12} md={6}>
              <img src='/images/banner.jpg' style={{ width: '100%' }}></img>
            </Col>


          </Row>

        </Container>
      </section>
    </div>
  );
}