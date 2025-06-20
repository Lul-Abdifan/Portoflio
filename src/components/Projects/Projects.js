import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import seeFood from "../../Assets/Images/SeaFood.gif";
import adot from "../../Assets/Images/adot.png";
import Rateeat from "../../Assets/Images/Rateeat.png";
import skillbrige from "../../Assets/Images/skillbrige.png";
import hakimhub from "../../Assets/Images/hakimhub.png";
import afrochat from "../../Assets/Images/afrochat.png";
import Akil from "../../Assets/Images/Akil.png";

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
              imgPath={Akil}
              isBlog={false}
              title="Akil"
              description="Akil connects organizations with youth seeking opportunities, simplifying how organizations manage opportunities and communicate. It helps organizations find the right talent and offers tailored opportunities to youth based on their skills and interests. This platform bridges the gap between job seekers and providers by enhancing accessibility and matching efficiency."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://akilconnect.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hakimhub}
              isBlog={false}
              title="HakimHub"
              description="HakimHub is an AI-powered healthcare platform created by A2SV interns that helps users find hospitals and doctors based on symptoms. It provides real-time hospital availability, booking features, and intelligent symptom-based recommendations. This platform improves healthcare accessibility by ensuring timely care with a user-friendly design."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://hakimhub.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillbrige}
              isBlog={false}
              title="SkillBridge"
              description="SkillBridge targets Ethiopian high school and university students preparing for national exams or tech readiness. It uses AI-powered study tools, quizzes, and performance tracking aligned with the Ethiopian curriculum. The platform supports exam preparation for grades 9–12 and higher education entrance exams through interactive learning and leaderboards."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://skillbridge.academy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrochat}
              isBlog={false}
              title="AfroChat"
              description="AfroChat is an AI-driven platform that makes advanced AI accessible to all. It enables users to interact naturally with AI, providing solutions for learning, productivity, and everyday problems. AfroChat aims to bridge the digital divide by delivering intuitive, localized assistance, empowering individuals and communities to fully harness AI capabilities."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://afrochat.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adot}
              isBlog={false}
              title="Adot project"
              description="Adot supports women through pregnancy and motherhood by offering expert medical advice, real-life stories, and personalized milestone recommendations. Features include trusted doctor access, a supportive community, tailored product suggestions, and a pregnancy tracker, providing reliable guidance and support throughout the motherhood journey."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://adot.life/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rateeat}
              isBlog={false}
              title="RateEat"
              description="RateEat revolutionizes dining with an all-in-one platform for authentic food reviews, preordering, and personalized recommendations. Whether searching for the perfect meal or planning ahead, RateEat ensures a seamless, informed dining experience through user-friendly tools and reliable insights."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://rateeat.app/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seeFood}
              isBlog={false}
              title="MealHub"
              description="MealHub uses an API to gather meal data, offering interactive features like liking and commenting on meals. It includes a pop-up that displays detailed ingredient information, enhancing user engagement and providing an enriched culinary experience."
              ghLink="https://github.com/Lul-Abdifan/JS-Capstone"
              demoLink="https://abeltsew.github.io/JS-Capstone/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
