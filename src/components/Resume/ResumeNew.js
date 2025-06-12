// import React from "react";
// import Button from 'react-bootstrap/Button';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import pdfFile from "../../Assets/abdi_resume.pdf"
// function ResumeNew() {
//   const onButtonClick =async () => {
//     try{
//       const response = await fetch('hope_resume.pdf')

//       if(!response.ok)
//       {
//         throw new Error("Failed to fetch PDF");
//       }
//       const blob = await response.blob();
//       const fileURL = URL.createObjectURL(blob);
//       const downloadLink = document.createElement('a');
//       downloadLink.href = fileURL;
//       downloadLink.download = 'hope_resume.pdf';
//       downloadLink.click();
//       URL.revokeObjectURL(fileURL);
//     }
//     catch(error){
//       return error;
//     }
// }
//   return (
//    <div className="resume-content">
//      <div className="resume">
      
//       <Document file={pdfFile}>
//                 <Page pageNumber={1} />
//                 <Page pageNumber={2}/>
//       </Document>
            
     
//     </div>

//     <Button variant="outline-primary" onClick={onButtonClick}>Download Resume</Button>{' '}

//    </div>
//   );
// }

// export default ResumeNew;



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
        width: '150%', 
        height: '600px',
        marginBottom: '3rem'
      }}>
        <iframe
          title="Google Doc Resume"
          src={googleDocViewUrl}
          width="100%"
          height="100%"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        ></iframe>
      </div>
      <div style={{ textAlign: 'left', paddingLeft: '7rem' }}>  {/* Added left alignment and padding */}
        <Button variant="outline-primary" onClick={onButtonClick}>
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default ResumeNew;

