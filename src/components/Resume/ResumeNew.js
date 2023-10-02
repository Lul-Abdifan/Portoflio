import React from "react";
import Button from 'react-bootstrap/Button';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdfFile from "../../Assets/abdi_resume.pdf"
function ResumeNew() {
  const onButtonClick =async () => {
    try{
      const response = await fetch('hope_resume.pdf')

      if(!response.ok)
      {
        throw new Error("Failed to fetch PDF");
      }
      const blob = await response.blob();
      const fileURL = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = fileURL;
      downloadLink.download = 'hope_resume.pdf';
      downloadLink.click();
      URL.revokeObjectURL(fileURL);
    }
    catch(error){
      return error;
    }
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




