import React, { useState, setStatus } from "react";
import { Image, Container, Button, Row, Col, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import image1 from "../images/image1.jpeg";
import divider from "../images/divider1.png";
import Footer from "../components/Footer";
import miranda2 from "../images/mirandasquare.jpg";
import Navigation from "../components/Navigation";

import logo from "../logo.svg";
import "../styles/index.css";

// To-Do: FORM VALIDATION YAY
const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { firstName, lastName, email, message } = e.target.elements;
    let details = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://purduefencing.com:5001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <script
        src="https://kit.fontawesome.com/a17da011a4.js"
        crossorigin="anonymous"
      ></script>
      <div className="contact-nav">
        <Navigation></Navigation>
        <div className="header-text">
          <Container>
            <Row>
              <p className="heading-fencing">GET IN TOUCHE</p>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <div>
        <Container className="fencing-body">
            <p className="fencing-header">
              Have a question or comment? Leave us a message.
            </p>
            <p className="fencing-subheader">
              We'll get back to you as soon as we can.
            </p>
          <br />
          {/* <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row>
                  <Col>
                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                    />
                  </Col>
                  <Col>
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control as="textarea" rows={3} id="message" />
              </Form.Group>
              <Button variant="dark" type="submit">
                {status}
              </Button>
            </Form>
          </Container> */}
          <br />
          <hr></hr>
          <Container className="contact-primary text-center">
              <Row xs={1} md={2}>
                <Col>
                  <p className="fencing-header">Primary Contact</p>
                  <Image src={miranda2} roundedCircle fluid width="40%" />
                  <p className="fencing-subheader">Miranda Carter</p>

                  <p className="fencing-subheader">carte272@purdue.edu</p>
                </Col>
                <Col>
                  <Row xs={1}>
                    <Col>
                      <p className="fencing-header">Club Contact Info</p>
                    </Col>
                    <Col>
                      <Image src={logo} roundedCircle fluid width="40%" />
                    </Col>
                    <Col>
                      <p className="fencing-subtitle">
                        purdue.fencing.club@gmail.com
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
          </Container>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
