import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { GrTechnology } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";




const Header = () => {
  return (
    <div>

      {/* <Container fluid className='ps-sticky border-bottom shadow'>
        <Container className='pt-1  pos-sticky pb-3'>
          <Row className='align-items-center'>
            <div className='col-3 p-0'>
              <a href="/"><img src="https://autocare.dexignlab.com/xhtml/images/logo-black.png" width={200} className='pt-2' alt="" /></a>
            </div>
            <div className='col-5 p-0'>
              <ul className='d-flex mb-0  justify-content-center'>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/" className="hov text-dark ">Home</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/about-us" className="hov text-dark ">About</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/Services" className="hov text-dark ">Service</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/technician-login" className="hov text-dark">Technician</Link></li>
                <li className=' ps-4  fs-18 list-unstyled fw-bold'><Link to="/customer-login" className="hov text-dark">Customer</Link></li>
              </ul>
            </div>
            <div className='col-4 p-0'> 
              <ul className='d-flex mb-0 justify-content-end'>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaInstagram /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaFacebookF /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaTwitter /></Link></li>
                <li className='ps-4 fs-4 list-unstyled fw-bold'><Link  to="/" className=" hov text-dark"><FaGooglePlusG /></Link></li>
              </ul>
            </div>
          </Row>
        </Container>
      </Container> */}



      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className='ps-sticky py-2 border-bottom shadow'>
          <Container>
            <Row className='d-flex justify-content-between py-1'>
              <div className='col-2'>
                <Navbar.Brand href="/"><img src="https://autocare.dexignlab.com/xhtml/images/logo-black.png" width={200} className='pt-2' alt="" /></Navbar.Brand>
              </div>
              <div className='col-6 d-flexx justify-content-end'>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className='bn-btnn' />
                <Navbar.Collapse id="basic-navbar-nav" className='d-end'> 
                  <Nav className="d-flex top justify-content-between">
                    <Nav.Link  href="/" className='text-black ps-5 fs-5 hov'>Home</Nav.Link>
                    <Nav.Link  href="/about-us" className='text-black ps-5 fs-5 hov'>About</Nav.Link>
                    <Nav.Link  href="/Services" className='text-black ps-5 fs-5 hov'>Service</Nav.Link>
                    <Nav.Link  href="/technician-login" className='text-black ps-5 fs-5 hov'>Technician</Nav.Link>
                    <Nav.Link  href="/customer-login" className='text-black ps-5 fs-5 hov'>Customer</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
              <div className="col-4 d-flex d-none d-lg-block">
                <Navbar.Collapse id="basic-navbar-nav" className='d-end'>
                  <Nav className="d-flex mt-2 justify-content-end">
                    <Nav.Link  href="/" className='text-black ps-4 fs-5 hov'><FaInstagram /></Nav.Link>
                    <Nav.Link  href="/about-us" className='text-black ps-4 fs-5 hov'><FaFacebookF /></Nav.Link>
                    <Nav.Link  href="/all/service" className='text-black ps-4 fs-5 hov'><FaTwitter /></Nav.Link>
                    <Nav.Link  href="/technician-login" className='text-black ps-4 fs-5 hov'><FaGooglePlusG /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </div>
            </Row>
          </Container>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header