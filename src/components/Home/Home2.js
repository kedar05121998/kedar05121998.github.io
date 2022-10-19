import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple">Full Stack Developer </b>
              </i>
              A highly motivated enthusiast with leadership
                  skills having a Bachelor of Engineering degree. A person who is eager
                  to learn new technologies and methodologies
                  and wants to succeed in an environment of
                  excellence and growth which can help to
                  achieve personal as well as organizational
                  goal. Worked through 1000+ hours of Bootcamp structure learning
              JavaScript, React.Js, Node.Js, MongoDB, Express, HTML5, and CSS3.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://avatars.githubusercontent.com/u/101327577?v=4" className="img-fluid myphoto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p className="contact-font">
              Mobile : <span className="purple">+91 7709314967 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kedar05121998"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kedar-pathak-583445233/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kedarpathak0873.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
