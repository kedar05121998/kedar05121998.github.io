import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <Row className="contact_icons" style={{ justifyContent: "center" }} xs={1} md={2}>
          <Col>
            <BsLinkedin />
            <br />
            <a
              href="https://www.linkedin.com/in/kedar-pathak-583445233/"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
             kedarpathak
            </a>
          </Col>
          <Col>
            <FaGithubSquare />
            <br />
            <a
              href="https://github.com/kedar05121998"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
           kedar05121998
            </a>
          </Col>
        </Row>
        <Row className="contact_icons" style={{ justifyContent: "center", padding : "50px"}} xs={1} md={2}>
          <Col>
            <GrMail />
            <br />
            <a
              href="mailto:kedarpathak0873@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
             kedarpathak0873@gmail.com
            </a>
          </Col>
          <Col>
            <FaPhoneSquareAlt />
            <br />
            <a
              href="tel:+917709314967"
              rel="noreferrer"
              className="contact_info"
            >
              +91 7709314967
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
