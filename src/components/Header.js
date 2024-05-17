import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Img from "../img/logo.png";
import "./Navbar.css";
import LoginModal from "./LoginModal";

function Header() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  // Function to close login modal
  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log(formData); // Example: Log form data
    handleClose(); // Close the modal after submission
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar   
        collapseOnSelect
        expand="lg"
        variant="white"
        sticky="top"
        className="custom-dropdown"
        ref={navRef}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={Img}
              className="logo-img mt-3 mx-4"
              alt="Logo"
              width="100%"
              height="60px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" className="text-end" />
          <Navbar.Collapse
            id="navbarCollapse"
            className="justify-content-center"
          >
            <Nav className="ms-auto mb-md-0 text-center w-100">
              <NavDropdown
                title="Our Standards"
                id="navbarScrollingDropdown"
                className="ps-2 pe-2"
                show={dropdownOpen}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="col-lg-12 col-md-12">
                  <NavDropdown.Item href="">
                    Elevated RYS 200 Standards
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    The Ethical Commercial
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">
                    Community Conversations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="">Accountability</NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="" className="ps-2 pe-2">
                Become a Member
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Membership Benefits
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Events
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                About Yoga
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Get Involved
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                About Us
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Community
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Foundation
              </Nav.Link>
              <Nav.Link href="" className="ps-2 pe-2">
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
