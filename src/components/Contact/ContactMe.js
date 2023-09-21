import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


const ContactMe = () => {
  const [form,setForm] =useState(
    {
    full_name:'',
    email:'',
    message:''
   }
    )

  const handleChange =(event)=>{
  const {name,value} = event.target;
  setForm({...form,[name]:value})
      
}

  const handleSubmit =async(event)=>{
    event.preventDefault();
    try{
      await axios.post('http://localhost:3000/send-email',form);
      alert("Your email successfully submitted")
    }
    catch(error){
      console.log("Error while sending",error)
    }
  }

    return ( 
    <div>
        <Container fluid className="contact-section">
          <p >
   I'm always interested in hearing about new projects, <br/>
    so if you'd like to chat please get in touch.
   </p>
<div className="d-flex justify-content-center">
<Form className="m-3" onSubmit={(event) => handleSubmit(event)}>
 <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full Name" className="custom-input"/>
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="custom-input"/>
      </Form.Group>
      <Form.Group className="m-3 custom-input" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3}  name="message" value={form.message} onChange={handleChange} placeholder="I value your message or connection"/>
      </Form.Group>
         <Button type="submit" className="m-5" variant="outline-primary">Get In Touch</Button>{' '}
    </Form>
</div>
        </Container>
  
    </div> );
}
 
export default ContactMe;