import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ImPointRight /> Hi Everyone, I am{"  "}
            <span className="purple">Ansh Viyogi </span>
            from <span className="purple"> Bareilly, Uttar Pradesh.</span>
            <br />
            <br />
            <ImPointRight /> I've accrued{" "}
            <span className="purple">
              4.5 years of experience as a Full Stack Developer
            </span>{" "}
            specializing in the tech stack of{" "}
            <span className="purple">MERN</span> .
            <br />
            <br />
            <ImPointRight /> {"  "}I have a strong passion for web development
            that began when I was in <span className="purple">10th grade</span>,
            and it has remained a significant focus for me ever since.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling around the globe
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaged in physical fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive not to be a success, but rather to be of value!"{" "}
          </p>
          <footer className="blockquote-footer">Ansh V.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
