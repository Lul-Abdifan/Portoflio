const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); 
const cors = require('cors');
const app = express();

//middleware

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOptions)); 

app.use(bodyParser.json());

app.post('/send-email',async (req,res) =>{
    try{
        const {full_name,email,message} =req.body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'isadore.hayes@ethereal.email',
                pass: 'fAmXfVchbe5XtTUvWr'
            }
        });
        const mailOptions = {
            from:email,
            to:'isadore.hayes@ethereal.email',
            subject:"Message from Portofolio",
            text: `Name: ${full_name}\nEmail: ${email}\nMessage: ${message}`,
        }
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch(error)
    {
        console.log('Error while sending',error);
        res.status(500).json({ error: 'Error while sending email' });    }
}
);

const port = 3000;
app.listen(port,()=>{
    console.log("serve is running")
})