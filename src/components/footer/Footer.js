import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rohit Singh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rohit Singh</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/RohitS456"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            {/* <li className="social-icons">
              <a
                href="www.linkedin.com/in/rohits456"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="singhrohit4546@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ marginRight: "10px", color: "white" }} />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
