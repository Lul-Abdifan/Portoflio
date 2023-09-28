import { Document, Page } from "react-pdf";

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../components/Resume/ResumeNew'
export const PDFViewer =()=> {
    return (
      
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
     
    );
  }