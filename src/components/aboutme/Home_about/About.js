// import React from "react";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";
// const About = () => {
//   return (
//     <div>
//       <Container>
//         {/* <Slide left > */}
//         <Row className="mt-5">
//           <Col md={5}>
//             {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

//             <Slide left>
//               <lottie-player
//                 src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
//                 background="transparent"
//                 speed="1"
//                 style={{ width: "100%", height: "90%" }}
//                 loop
//                 autoplay
//               ></lottie-player>
//             </Slide>
//           </Col>

//           <Col md={7}>
//             <Fade duration={3000}>
//   <p className="home-about-body">
//     My name is <b className="purple">Rohit Singh</b> and I am a 
//     <b className="purple"> Computer Science Engineering </b> student at 
//     <b className="purple"> ITER, SOA University</b>, expected to graduate in 2026.
//     <br />
//     <br />
//     I have practical experience in building full-stack web applications using&nbsp;
//     <b className="purple"> React.js, Node.js, Express.js, and MongoDB</b>.
//     <br />
//     <br />
//     I’ve worked on real-time applications with&nbsp;
//     <b className="purple"> WebRTC, Socket.IO, and RESTful APIs</b>, and integrated features like 
//     <b className="purple"> Stripe Payment and SendGrid Email</b> into my projects.
//     <br />
//     <br />
//     I enjoy collaborating in team-based environments, and I’m constantly improving my skills in&nbsp;
//     <b className="purple"> scalable system design and API security</b>.
//     <br />
//     <br />
//     Outside of development, I am passionate about exploring new technologies and&nbsp;
//     <b className="purple">building impactful, real-world web solutions</b>.
//   </p>
// </Fade>

//           </Col>
//         </Row>
//         {/* </Slide> */}
//       </Container>
//     </div>
//   );
// };

// export default About;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              {/* <h1 className="home-about-section-title" style={{ color: "#fbd9ad", marginBottom: "20px" }}>
                LET ME INTRODUCE MYSELF
              </h1> */}

              <p className="home-about-body"style={{ color: "#fbd9ad", marginBottom: "20px" }}>
                I’m a passionate tech enthusiast with practical experience in building <b className="purple">full-stack web applications</b> using technologies like <b className="purple">React.js, Node.js, Express.js, and MongoDB</b>.
                <br />
                <br />
                I have explored <b className="purple">real-time communication</b> through <b className="purple">WebRTC and Socket.IO</b>, and integrated payment and mailing solutions like <b className="purple">Stripe</b> and <b className="purple">SendGrid</b>.
                <br />
                <br />
                I love collaborating on team projects, optimizing backend systems, and designing <b className="purple">scalable, secure APIs</b>.
                <br />
                <br />
                Beyond coding, I actively participate in <b className="purple">hackathons</b>, am a member of <b className="purple">Google Developer Student Clubs (GDSC)</b>, and have proudly represented my state in <b className="purple">national-level cricket tournaments</b>.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

