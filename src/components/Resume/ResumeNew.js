import React from "react";
import Button from 'react-bootstrap/Button';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from "../../Assets/resume.pdf"
function ResumeNew() {
  const onButtonClick = () => {
    fetch('resume').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume'
            alink.click();
        })
    })
}
  return (
   <div className="resume-content">
     <div className="resume">
      
      <Document file={pdfFile}>
                <Page pageNumber={1} />
                <Page pageNumber={2}/>
      </Document>
            
     
    </div>

    <Button variant="outline-primary" onClick={onButtonClick}>Download Resume</Button>{' '}

   </div>
  );
}

export default ResumeNew;




