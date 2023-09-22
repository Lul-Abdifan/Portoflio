
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactMe = () => {
    const form = useRef();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
     const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;
  const handleSubmit =(event)=>{
    event.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  

    return ( 
    <div>
        <Container fluid className="contact-section">
          <p >
   I'm always interested in hearing about new projects, <br/>
    so if you'd like to chat please get in touch.
   </p>
<div className="d-flex justify-content-center">
<Form className="m-3" ref={form} onSubmit={handleSubmit}>
 <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="from_name" placeholder="Full Name" className="custom-input"/>
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="from_email" placeholder="Email" className="custom-input"/>
      </Form.Group>
     

      <Form.Group className="m-3 custom-input" controlId="exampleForm.ControlTextarea1">
       <Form.Control name="message" as="textarea" rows={3} placeholder="I value your message or connection"/>
      </Form.Group>
         <Button type="submit" className="m-5" variant="outline-primary">Get In Touch</Button>{' '}
    </Form>
</div>
        </Container>
  
    </div> );

    }
export default ContactMe;










