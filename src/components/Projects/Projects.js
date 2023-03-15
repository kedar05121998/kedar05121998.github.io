import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import betterCloud from "../../Assets/project/betterCloud.png";
import dotandkey from "../../Assets/project/dotandkey.png";

import weather from "../../Assets/project/weather.png";
import tripoto from "../../Assets/project/tripoto.png";
import shop from "../../Assets/project/shop.png";
import ndtv from "../../Assets/project/ndtv.png";
import mind from "../../Assets/project/mind.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div id="project" className="projects-sections"></div>

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
              imgPath={shop}
              isBlog={false}
              title="Fayda Bazar"
              description="This is a clone of Shop.com . this e-commerce website. This is a American base web site. In this project i have been work for 5 days with 5 teammates including me."
              stacks="Tech Stack : ReactJS,NodeJS,MongoDB,ExpressJS,Javascript,Chakra UI "
              ghLink="https://github.com/yadav123yo/FaydaBazar"
              demoLink="https://fayda-bazar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripoto}
              isBlog={false}
              title="tripoto"
              description="Tripoto-Clone-Project: is a travel community and travel search engine portal based on user-generated content. It allows users to write travel stories and discover those written by other travelers."
              stacks="Tech Stack : ReactJS,NodeJS,MongoDB,ExpressJS,Javascript,Chakra UI "
              ghLink="https://github.com/atul85400krishna/wasteful-cast-8657"
              demoLink="https://precious-biscotti-a1a839.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mind}
              isBlog={false}
              title="School Management System"
              description="This is a competitive application created for the Masai Hackathon program. This SAAS web application is all about education platforms."
              stacks="Tech Stack : JavaScript, React, Next JS, Chakra UI, Node JS, Mongo DB"
              ghLink="https://github.com/H-unique245/MindInstallers"
              demoLink="https://hackathon-sms.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ndtv}
              isBlog={false}
              title="NDTV"
              description="Clone of NDTV website which offers 24x7 live news."
              stacks="Tech Stack : React,HTML,CSS ,Javascript,Bootstrap"
              ghLink="https://github.com/kedar05121998/amused-can-5733"
              demoLink="https://drive.google.com/file/d/18gQ-XBkmY3rJsDPJPA6H0WiH7iRjFGSG/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={betterCloud}
              isBlog={false}
              title="BetterCloud"
              description="BetterCloud is the market leader for SaaS Operations, empowering IT to transform their employee experience, centralize data protection, and maximize operational efficiency."
              stacks="Tech Stack : HTML,CSS ,Javascript,Bootstrap"
              ghLink="https://github.com/Rohit-M-Roy/BetterCloud-Clone"
              demoLink="https://legendary-dango-0ff999.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dotandkey}
              isBlog={false}
              title="Dot&Key"
              description="Dot&Key is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with cart updation feature"
              stacks="Tech Stack :  HTML,CSS,JavaScript,Bootstarp"
              ghLink="https://github.com/KaranJoshi4357/Dot-Key__Clone"
              demoLink="https://dotandkey-clone.netlify.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather forecasting web application built using weather API. It shows city and current location."
              stacks="Tech Stack :  Javascript, CSS, Rest-API"
              ghLink="https://github.com/kedar05121998/Weather-App/tree/main"
              demoLink="https://keen-nasturtium-8da81a.netlify.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
