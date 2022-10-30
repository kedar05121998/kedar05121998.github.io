import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import betterCloud from "../../Assets/project/betterCloud.png"
import dotandkey from "../../Assets/project/dotandkey.png"
import fabbag from "../../Assets/project/fabbag.png"

function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
 
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fabbag}
              isBlog={false}
              title="fabbag.com Clone"
              description="fabbag is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with cart updation feature"
              stacks="Tech Stack : React, Javascript, Chakra-UI,Bootstrap"
              ghLink="https://github.com/kedar05121998/crazy-name-9363"
              demoLink="https://fab-bag-fawn.vercel.app/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={betterCloud}
              isBlog={false}
              title="BetterCloud.com Clone"
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
              title="Dot&Key.com Clone"
              description="Dot&Key is an E-commerce website. Have built the user flow of the website from sign up to placing the orders with cart updation feature"
              stacks="Tech Stack :  HTML,CSS,JavaScript,Bootstarp"
              ghLink="https://github.com/KaranJoshi4357/Dot-Key__Clone"
              demoLink="https://dotandkey-clone.netlify.app"
            />
    </Col> 

        

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="A weather forecasting web application built using weather API. It shows city and current location based weather data with next 5 hours and 5 days forecast."
              stacks="Tech Stack : React, Javascript, Tailwind-CSS, Rest-API"
              ghLink="https://github.com/aakarsh604/React_WeatherApp"
              demoLink="https://incandescent-toffee-012bd4.netlify.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gearbest.com Clone"
              description="A cloned web application of gearbest.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/aakarsh604/Gearbest-Clone"
              demoLink="https://silly-queijadas-e172c2.netlify.app/"              
            />
          </Col>  */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Caratlane.com Clone"
              description="Web application clone of an E-commerce website caratlane.com selling diamonds and jewellery for both men and women."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
