import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaderboard from "../../Assets/Images/leaderboard-full-page.png"
import bookstore from "../../Assets/Images/bookstore.jpeg"
import seeFood from "../../Assets/Images/SeaFood.gif"
import spaceTravel from "../../Assets/Images/rocketmission01.jpeg"
import aiconference from "../../Assets/Images/africonference.PNG"


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
              imgPath={seeFood}
              isBlog={false}
              title="Doctor Appointment"
              description="A website offers a user-friendly platform for patients to register, log in, set appointments, check doctor profiles, and manage their appointments. Admins can effortlessly add or delete doctors and monitor the platform, ensuring seamless healthcare access and efficient management"
              ghLink="https://github.com/Lul-Abdifan/JS-Capstone"
              demoLink="https://abeltsew.github.io/JS-Capstone/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seeFood}
              isBlog={false}
              title="MealHub"
              description="The meal website utilizes an API to gather meal data and provides interactive features such as liking and commenting on meals. Additionally, the website includes a pop-up function that displays ingredient and amount details of the selected meal."
              ghLink="https://github.com/Lul-Abdifan/JS-Capstone"
              demoLink="https://abeltsew.github.io/JS-Capstone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceTravel}
              isBlog={false}
              title="Space Travellers"
              description="This web application is designed for a company specializing in commercial and scientific space travel services. It seamlessly integrates with the SpaceX API, retrieving real-time data, and enables users to reserve rockets and participate in curated space missions."
              ghLink="https://github.com/Lul-Abdifan/Space-travellers-Hub"
              demoLink="https://space-hub-9gkl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore"
              description="Bookstore website allows users to add books by author , title and category on an API. Users can leave comments on books they have read, edit or delete their comments,"
              ghLink="https://github.com/Lul-Abdifan/Bookstore"
              demoLink="https://bookstore-redux-s5uw.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaderboard}
              isBlog={false}
              title="Leaderboard"
              description="Leaderboard games are competitive games where players aim for the top spot on a public leaderboard by completing tasks and earning points."
              ghLink="https://github.com/Lul-Abdifan/Leaderboard"
              demoLink="https://lul-abdifan.github.io/Leaderboard/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiconference}
              isBlog={false}
              title="AfriConference AI"
              description="The website for the First Pan African Conference on Artificial Intelligence includes a home page with its location and description, as well as information about artificial intelligence.The website also features program demonstrations and sponsorship details."
              ghLink="https://github.com/Lul-Abdifan/Capstone-Project1"
              demoLink="https://lul-abdifan.github.io/Capstone-Project1/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
