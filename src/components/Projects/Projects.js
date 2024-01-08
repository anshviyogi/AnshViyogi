import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              isGithub={false}
              title="Skill Portal"
              description="A management sort of application which can manage all the on-going actions which are being performed in the organization. It also have multiple-sort of roles which have different access in the modules provided in Skill Portal"
              demoLink="https://skill-portal.inadev.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              isGithub={true}
              title="NASA WorldWind"
              description="A module designed by the developers of NASA for the access of the sattelite to perform some actions towards the globe like Google Maps. This is a testing application which I've build for personal learning and exploring new into the innovations"
              ghLink="https://github.com/anshviyogi/NASA-Worldwind"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isGithub={true}
              title="J-Kit Recharge App"
              description="A goverenment contractual work to implement Recharge router named as J-Kit like Jio Fiber & Airtel Fiber. Basically, we've integrated Razorpay payment gateway which can handle the recharges and also user admin multi-level roles which can keep a track of the records and distribute the commission accordingly"
              ghLink="https://github.com/anshviyogi/RechargeApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
