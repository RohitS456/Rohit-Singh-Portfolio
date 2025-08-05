import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Zoom from "react-reveal/Zoom";
import Particle from "../../Particle";

export default function Contactus() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Particle />
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-center">
              <Zoom left cascade>
                <h1 className="aboutme-heading" style={{ color: "#fbd9ad", fontWeight: "bold" }}>
                  Contact Me
                </h1>
              </Zoom>
            </Col>

            <Col md={12} className="text-center mt-4">
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks d-flex justify-content-center gap-4">
                  <li className="socialicons">
                    <a
                      href="https://github.com/RohitS456"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillGithub size={30} />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/rohit-singh-73a228254"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaLinkedinIn size={30} />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://leetcode.com/u/rohit4546/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <SiLeetcode size={30} />
                    </a>
                  </li>
                </ul>
              </div>

              
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
