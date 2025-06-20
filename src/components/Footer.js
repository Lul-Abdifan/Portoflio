import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#0a0a0a",
    padding: "0.5rem 1rem",   // Reduced padding
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "0.8rem",       // Smaller base font size
  };

  const copywrightStyle = {
    fontSize: "1rem",       // Smaller font for copyright text
    display: "flex",
    alignItems: "center",
    marginBottom: 0,
  };

  const footerBodyStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  };

  const footerIconsStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "0.6rem",           // Less gap between icons
  };

  const socialIconLinkStyle = {
    color: "white",
    fontSize: "1.1rem",      // Smaller icon size
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  const getIconColor = (iconName) =>
    hoveredIcon === iconName ? "#6c63ff" : "white";

  return (
    <Container fluid style={footerStyle}>
      <Row className="align-items-center" style={{ width: "100%" }}>
        <Col md="6" style={copywrightStyle}>
          <h3 style={{ margin: 0, fontWeight: "normal", fontSize: "1rem" }}>
            Copyright © {year} SB
          </h3>
        </Col>
        <Col md="6" style={footerBodyStyle}>
          <nav aria-label="Social media links">
            <ul style={footerIconsStyle}>
              <li>
                <a
                  href="https://github.com/Lul-Abdifan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    ...socialIconLinkStyle,
                    color: getIconColor("github"),
                  }}
                  onMouseEnter={() => setHoveredIcon("github")}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/AbdiBekele68808"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{
                    ...socialIconLinkStyle,
                    color: getIconColor("twitter"),
                  }}
                  onMouseEnter={() => setHoveredIcon("twitter")}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hope2023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    ...socialIconLinkStyle,
                    color: getIconColor("linkedin"),
                  }}
                  onMouseEnter={() => setHoveredIcon("linkedin")}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/tasanbannu2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  style={{
                    ...socialIconLinkStyle,
                    color: getIconColor("telegram"),
                  }}
                  onMouseEnter={() => setHoveredIcon("telegram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <FiSend />
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
