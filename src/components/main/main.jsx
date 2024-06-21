import React from 'react'
import './main.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Main = ({contactRef, handleclick}) => {
  return (
    <section  className='main'>
        <div className='cover-img'>
            <img src="images/profile-pic.jpg" alt="" />
        </div>
        <div className='des'>
            <div className='d1'><p>Hello, I'm</p></div>
            <div className='d2'><h1>Akshay Eddula</h1></div>
            <div className='d3'><h2>FullStack Developer</h2></div>
            <div className='btns'>
                <button type='button' className='b1'>Download CV</button>
                <button onClick={()=>handleclick(contactRef)} type='button' className='b2'>Contact Info</button>
            </div>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/akshayeddula" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin  className='i'/>
                </a>
                <a href="https://github.com/AkshayEddula" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='i'/>
                </a>
            </div>
        </div>
    </section>
  )
}
