
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactMe = () => {
  const [data,setData]=useState({
    message:'',
    from_name:'',
    from_email:''
  })
    const form = useRef();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
     const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;
 const handleChange =(event)=>{
  const {name,value} = event.target
  console.log(name,value);
 setData({...data,[name]:value})
 }

  const handleSubmit =(event)=>{
    event.preventDefault();
    setData({
      message:'',
      from_name:'',
      from_email:''
    })
    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
    .then((result) => {
      console.log(result);
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
     
    


    }, (error) => {
        console.log(error.text);
        toast.error("Oop,Email is not sent!", {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
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
        <Form.Control type="text" name="from_name" placeholder="Full Name" className="custom-input" value={data.from_name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" name="from_email" placeholder="Email" required className="custom-input" value={data.from_email} onChange={handleChange}/>
      </Form.Group>
     

      <Form.Group className="m-3 custom-input" controlId="exampleForm.ControlTextarea1">
       <Form.Control name="message" as="textarea" rows={3} required value={data.message} placeholder="I value your message or connection" onChange={handleChange}/>
      </Form.Group>
         <Button type="submit" className="m-5" variant="outline-primary" required>Get In Touch</Button>{' '}
    </Form>
</div>
        </Container>
  
    </div> );

    }
export default ContactMe;










