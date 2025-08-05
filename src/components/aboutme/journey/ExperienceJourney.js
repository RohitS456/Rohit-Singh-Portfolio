import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import lumovateLogo from '../../../images/lumovate_intelligence_logo.jpeg';
import webmobiLogo from '../../../images/webmobi360_b2b_business_solutions_logo.jpeg';

export default function ExperienceJourney() {
  const experiences = [
    {
      company: 'Lumovate Intelligence',
      role: 'Software Engineer Intern',
      duration: 'Mar 2025 - Aug 2025',
      location: 'Remote',
      logo: lumovateLogo,
      tasks: [
        'Built backend functionality for a Chrome extension with Text-to-Speech and Chatbot features.',
        'Learning and optimizing backend APIs using Node.js and MongoDB.'
      ]
    },
    {
      company: 'Webmobi 360',
      role: 'Web Development Intern',
      duration: 'Dec 2024 - Mar 2025',
      location: 'Remote',
      logo: webmobiLogo,
      tasks: [
        'Integrated WebRTC-based voice calling into the company’s live website.',
        'Designed and optimized backend architecture and relational database schema.',
        'Collaborated with the frontend team to ensure seamless real-time user experience.'
      ]
    }
  ];

  return (
    <div className="experience-page" style={{ paddingTop: '120px', paddingBottom: '50px' }}>
      <Container>
        <Zoom>
          <h1 className="text-center mb-3" style={{ color: '#fbd9ad', fontWeight: 'bold' }}>
            Roles I’ve Held
          </h1>
          <p className="text-center" style={{ color: '#ccc', fontSize: '16px', marginBottom: '50px' }}>
            A list of recent positions and what I did in each.
          </p>
        </Zoom>

        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col md={6} key={index}>
              <Card className="experience-card-custom">
                <div className="logo-container">
                  <Card.Img variant="top" src={exp.logo} alt="Company Logo" className="experience-logo" />
                </div>
                <Card.Body>
                  <Card.Title className="experience-role-custom">{exp.role}</Card.Title>
                  <h5 className="experience-company-custom">{exp.company}</h5>
                  <p className="experience-duration-custom">{exp.duration} | {exp.location}</p>
                  <ul className="experience-tasks-custom">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
