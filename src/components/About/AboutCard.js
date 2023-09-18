import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
             <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdi  Bekele </span>
            from <span className="purple"> Ethiopia, Africa.</span>
            <br />
           <p style={{margin:"5px"}}>
           I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! 
            
            If you like what you see and have a project you need coded, don’t hestiate to contact me.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
           </p>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Club News
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
