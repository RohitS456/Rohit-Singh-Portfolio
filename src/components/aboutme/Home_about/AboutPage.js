import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Zoom from 'react-reveal/Zoom';
import vs from '../../../images/Vs.png';
import vercel from "../../../images/vercel.webp";
import git from '../../../images/git.png';
import github from '../../../images/github.png';
import pm from '../../../images/pm.png';
import chrome from '../../../images/chorme.svg';

export default function AboutPage() {
  return (
    <div>
      {/* About Section */}
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: '90%' }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <h1 className='section-heading' style={{ color: '#fbd9ad', marginBottom: '20px', fontWeight: 'bold' }}>
                WHO AM I?
              </h1>
              <p style={{ color: '#fbd9ad', lineHeight: '1.8' }}>
                My name is <b className="purple">Rohit Singh</b>, a B.Tech Computer Science student from ITER, SOA University. I'm currently interning at <b className="purple">Lumovate Intelligence</b>, where I’ve been working on the backend for a Chrome extension featuring Text-to-Speech and Chatbot functionality.
                <br /><br />
                Previously, I interned at <b className="purple">Webmobi 360</b>, where I integrated WebRTC-based voice calling into a live website and contributed to backend architecture and relational database design. This experience gave me hands-on exposure to building real-time systems, optimizing user experience, and working with cloud services.
                <br /><br />
                Outside of tech, I enjoy:
                <ul>
                  <li>Participating in <b className="purple">hackathons</b>, which fuel my problem-solving skills and teamwork.</li>
                  <li>Playing <b className="purple">cricket</b>, where I’ve represented Jharkhand at the national level, reflecting my discipline, leadership, and team spirit.</li>
                </ul>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>

      {/* Technical Skills Section */}
<div className=" text-center">
  <Tada>
    <h1 className="section-heading" style={{ color: "#fbd9ad", fontWeight: "bold" }}>Technical Skills</h1>
  </Tada>

  <Container className="mt-5">
    <Row className="g-4">

      {/* Programming Languages */}
      <Col md={6}>
        <div className="skill-card">
          <h4 className="skill-heading">Programming Languages</h4>
          <ul className="skill-list">
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C</li>
            <li>PHP</li>
          </ul>
        </div>
      </Col>

      {/* Web Technologies */}
      <Col md={6}>
        <div className="skill-card">
          <h4 className="skill-heading">Web Technologies</h4>
          <ul className="skill-list">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Redux</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
      </Col>

      {/* Databases */}
      <Col md={6}>
        <div className="skill-card">
          <h4 className="skill-heading">Databases</h4>
          <ul className="skill-list">
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </Col>

      {/* Tools & Platforms */}
      <Col md={6}>
        <div className="skill-card">
          <h4 className="skill-heading">Tools & Platforms</h4>
          <ul className="skill-list">
            <li>WebRTC (Peer-to-Peer)</li>
            <li>Stripe Payment</li>
            <li>SendGrid Email</li>
          </ul>
        </div>
      </Col>

    </Row>
  </Container>
</div>


     {/* Tools I Use Section */}
<div>
  <Zoom left cascade>
    <h1 className="section-heading text-center">Tools I Use</h1>
  </Zoom>
  <Container className="mt-4">
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {[
        { img: vs, name: "VS Code" },
        { img: github, name: "GitHub" },
        { img: pm, name: "Postman" },
        { img: chrome, name: "Chrome Extension" },
        {img:vercel , name:"Vercel"}
      ].map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <div className="tool-container">
            <img
              src={tool.img}
              alt={tool.name}
              title={tool.name}    // Tooltip when hovered
              className="tool-image"
              style={{
                width: '85%',
                height: '85%',
                filter: tool.img === github ? 'grayscale(1) invert(1)' : 'none'
              }}
            />
            <div className="tool-title">{tool.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</div>

    </div>
  );
}