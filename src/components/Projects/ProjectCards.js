// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img className="card-img" variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text className="card-description" style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <>
      <style>{`
        .project-card-view {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 0;
          background-color: #1c1c2b;
          color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 0 12px rgba(128, 0, 128, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card-view:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(128, 0, 128, 0.6);
        }

        .card-img-top {
          max-height: 180px;
          object-fit: cover;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }

        .card-body-flex {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 1rem;
        }

        .card-title {
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .card-description {
          flex-grow: 1;
          font-size: 0.95rem;
          text-align: left;
        }

        .card-buttons {
          margin-top: 5rem;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .card-buttons .btn {
          min-width: 100px;
          font-size: 0.875rem;
          padding: 0.45rem 0.9rem;
          border-radius: 0.5rem;
        }
      `}</style>

      <Card className="project-card-view">
        <Card.Img className="card-img-top" variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body className="card-body-flex">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="card-description">{props.description}</Card.Text>

          <div className="card-buttons">
            <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCards;
