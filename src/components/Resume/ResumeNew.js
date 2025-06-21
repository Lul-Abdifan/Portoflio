
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

function ResumeNew() {
  const googleDocViewUrl =
    "https://docs.google.com/document/d/1jWrF337N1EBOHrDiAVrl1IbHuXuVLZvyImOQhTt9c9E/preview";

  const googleDocDownloadUrl =
    "https://docs.google.com/document/d/1jWrF337N1EBOHrDiAVrl1IbHuXuVLZvyImOQhTt9c9E/export?format=pdf";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  };

  const buttonWrapperStyle = isMobile
    ? {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
        paddingRight: 0,
      }
    : {
        width: "100%",
        maxWidth: "900px",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "7rem",
        marginRight: "-100px",
        position: "relative",
      };

  const iframeWrapperStyle = isMobile
    ? {
        width: "100%",
        maxWidth: "700px",
        height: "80vh",
        marginTop: "2rem",
      }
    : {
        width: "100%",
        maxWidth: "700px",
        height: "80vh",
        marginTop: "-2rem",
        marginRight: "100px",
      };

  const buttonStyle = {
    fontSize: "1rem",
    marginTop: "2rem",
   
  };

  return (
    <div style={containerStyle}>
      {/* Download Button */}
      <div style={buttonWrapperStyle}>
        <Button variant="outline-primary" onClick={() => window.open(googleDocDownloadUrl, "_blank")} style={buttonStyle}>
          Download Resume
        </Button>
      </div>

      {/* Resume Preview */}
      <div style={iframeWrapperStyle}>
        <iframe
          title="Google Doc Resume"
          src={googleDocViewUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeNew;

