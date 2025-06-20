

import React from "react";
import Button from 'react-bootstrap/Button';

function ResumeNew() {
  // Google Docs preview link
  const googleDocViewUrl = "https://docs.google.com/document/d/1jWrF337N1EBOHrDiAVrl1IbHuXuVLZvyImOQhTt9c9E/preview";

  // Google Docs direct PDF download link
  const googleDocDownloadUrl = "https://docs.google.com/document/d/1jWrF337N1EBOHrDiAVrl1IbHuXuVLZvyImOQhTt9c9E/export?format=pdf";

  const onButtonClick = () => {
    window.open(googleDocDownloadUrl, "_blank");
  };

  return (
    <div className="resume-content" style={{ textAlign: 'center' }}>
      <div className="resume" style={{ 
        display: 'inline-block', 
        width: '190%', 
        height: '600px',
        marginBottom: '3rem'
      }}>
        <iframe
          title="Google Doc Resume"
          src={googleDocViewUrl}
          width="100%"
          height="100%"
          style={{ border: '1px solid #ccc', borderRadius: '10px' }}
        ></iframe>
      </div>
      <div style={{ textAlign: 'left', paddingLeft: '15rem' }}>
  <Button 
    variant="outline-primary" 
    onClick={onButtonClick}
    style={{ 
      padding: '0.25rem 0.75rem',  
      fontSize: '1.2rem',         
      height: '36px',              
      minWidth: '120px'            
    }}
  >
    Download Resume
  </Button>
</div>

    </div>
  );
}

export default ResumeNew;


