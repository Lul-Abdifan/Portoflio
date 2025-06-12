import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaderboard from "../../Assets/Images/leaderboard-full-page.png"
import bookstore from "../../Assets/Images/bookstore.jpeg"
import seeFood from "../../Assets/Images/SeaFood.gif"
import spaceTravel from "../../Assets/Images/rocketmission01.jpeg"
import aiconference from "../../Assets/Images/africonference.PNG"
import adot from "../../Assets/Images/adot.png"
import ridshare from "../../Assets/Images/rideshare.png"
import Rateeat from "../../Assets/Images/Rateeat.png"
import skillbrige from "../../Assets/Images/skillbrige.png"
import hakimhub from "../../Assets/Images/hakimhub.png"
import afrochat from "../../Assets/Images/afrochat.png"
import Akil from "../../Assets/Images/Akil.png"


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
              title="Akil "
              description="Akil is a platform designed to connect organizations with youth seeking opportunities. By simplifying the process of managing opportunities and enhancing communication, Akil helps organizations find the right talent while offering individuals tailored opportunities that align with their skills and interests."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://akilconnect.org/"
              
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afrochat}
              isBlog={false}
              title="Afrocha"
              description="AfroChat is an AI-powered platform designed to make advanced artificial intelligence accessible to everyone. It enables users to interact with AI through natural conversation, offering solutions that support learning, productivity, and everyday problem-solving. AfroChat aims to bridge the digital divide by delivering intuitive, localized, and intelligent assistance—empowering individuals and communities to fully harness the capabilities of AI."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://afrochat.app/"
              
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillbrige}
              isBlog={false}
              title="SkillBridge"
              description="is their educational initiative targeting Ethiopian high school and university students preparing for national exams or seeking tech readiness. It uses AI-powered study tools, quizzes, performance tracking, leaderboards—all aligned with the Ethiopian curriculum—and supports exam preparation (Grade 9–12 and higher-ed entrance exams)"
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://skillbridge.academy/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hakimhub}
              isBlog={false}
              title="HakimHub"
              description="is an AI-powered healthcare recommendation platform developed by A2SV interns during the program’s internship phase. It helps users find nearby hospitals and doctors based on their symptoms and provides real-time hospital availability and booking features, ensuring timely access to care. The platform combines intelligent symptom-based recommendations with a user-centric design to improve healthcare accessibility."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://hakimhub.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adot}
              isBlog={false}
              title="Adot project "
              description=" Adot is a digital platform designed to support women through pregnancy and motherhood. It offers expert medical advice, real-life stories from other mothers, and personalized recommendations for each milestone. Key features include access to trusted doctors, a community of moms sharing experiences, tailored product suggestions, and a pregnancy milestone tracker. With Adot, expectant and new moms have a reliable companion providing guidance, support, and community throughout their journey."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://adot.life/en"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rateeat}
              isBlog={false}
              title="RateEat"
              description="At RateEat, we're revolutionizing dining by offering an all-in-one platform for authentic food reviews, preordering, and personalized recommendations. Whether you are searching for the perfect meal or planning ahead, RateEat ensures your dining experience is seamless and informed."
              ghLink="https://github.com/Lul-Abdifan"
              demoLink="https://rateeat.app/en"
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
           
         
          
         
           {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceTravel}
              isBlog={false}
              title="Space Travellers"
              description="This web application is designed for a company specializing in commercial and scientific space travel services. It seamlessly integrates with the SpaceX API, retrieving real-time data, and enables users to reserve rockets and participate in curated space missions."
              ghLink="https://github.com/Lul-Abdifan/Space-travellers-Hub"
              demoLink="https://space-hub-9gkl.onrender.com/"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore"
              description="Bookstore website allows users to add books by author , title and category on an API. Users can leave comments on books they have read, edit or delete their comments,"
              ghLink="https://github.com/Lul-Abdifan/Bookstore"
              demoLink="https://bookstore-redux-s5uw.onrender.com/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaderboard}
              isBlog={false}
              title="Leaderboard"
              description="Leaderboard games are competitive games where players aim for the top spot on a public leaderboard by completing tasks and earning points."
              ghLink="https://github.com/Lul-Abdifan/Leaderboard"
              demoLink="https://lul-abdifan.github.io/Leaderboard/"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiconference}
              isBlog={false}
              title="AfriConference AI"
              description="The website for the First Pan African Conference on Artificial Intelligence includes a home page with its location and description, as well as information about artificial intelligence.The website also features program demonstrations and sponsorship details."
              ghLink="https://github.com/Lul-Abdifan/Capstone-Project1"
              demoLink="https://lul-abdifan.github.io/Capstone-Project1/"
            />
          </Col> */}

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
