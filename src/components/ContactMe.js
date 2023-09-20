import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';import Form from 'react-bootstrap/Form';
const ContactMe = () => {
    return ( 
    <div>
        <Container fluid className="contact-section">


        <p >
   I'm always interested in hearing about new projects, <br/>
    so if you'd like to chat please get in touch.
   </p>
<div className="d-flex justify-content-center">
 <Form className="m-3">
 <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Full Name" className="custom-input"/>
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Email" className="custom-input"/>
      </Form.Group>
      <Form.Group className="m-3 custom-input" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3}  placeholder="I value your message or connection"/>
      </Form.Group>
         <Button className="m-5" variant="outline-primary">Get In Touch</Button>{' '}
    </Form>
</div>
        </Container>
  
    </div> );
}
 
export default ContactMe;