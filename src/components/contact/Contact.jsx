import React from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export const Contact = ({contactRef}) => {
  return (
    <div ref={contactRef} className='contact'>
        <div className="contact-title">
            <h3>Get in Touch</h3>
            <h1>Contact Me</h1>
        </div>
        <div className='contact-info'>
                <div className='contact-des contact-mail'>
                    <IoMdMail/>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akshayeddula454@gmail.com" target='_blank'><div><p>akshayeddula454@gmail.com</p></div></a>
                </div>
                <div className="contact-des contact-linkden">
                    <a href="https://www.linkedin.com/in/akshayeddula" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                        <p>LinkedIn</p> 
                    </a>
                </div>
        </div>
    </div>
  )
}
