import React from 'react'
import { useState } from 'react';
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.css'


import './style.css'

function Contact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [textarea, setTextarea] = useState(
    "Type your message here"
  );
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleTextAreaChange=(event)=>{
      setTextarea(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your details have been sent succesfully name:${name}, Email:${email}, Message:${textarea}`)
  }
    return (
        
       <section id="contact" className="contact">

       <PageHeaderContent headerText="Contact Me"  />
       <form onSubmit={handleSubmit} className="container">
        <h1>Name</h1>
        <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} className="input_element"/>
        <h1>Email</h1>
        <input type="email" placeholder="Your Email"  value={email} onChange={handleEmailChange} className="input_element"/>
        <h1>Message</h1>
        <textarea className="text_area" value={textarea} onChange={handleTextAreaChange} rows="4" cols="50">Please Enter Your Message Form Me</textarea>
        <button type="submit" className="send_btn">Send</button>

       </form>
       
    </section>
    )
}

export default Contact
