import React from 'react'
import './About.css'
import { IoMdSchool } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";


export const About = ({AboutRef}) => {
  return (
    <div ref={AboutRef} className='about'>
        <div className='about-title'>
            <h3>Get To Know More</h3>
            <h1>About Me</h1>
        </div>
        <div className="about-sec">
            <div className="about-img">
                <img src="images/about-pic.jpg" alt="" />
            </div>
            <div className='about-main'>
                <div className='exp-edu'>
                    <div className='experience'>
                        <div ><PiMedalFill className='exp-icon'/></div>
                        <h1>Experience</h1>
                        <p>Worked on</p>
                        <p>Freelance Projects</p>
                    </div>
                    <div className='experience'>
                        <div><IoMdSchool className='exp-icon'/></div>
                        <h1>Education</h1>
                        <p>Bachelor of Technology</p>
                        <p>in Computer Science</p>
                    </div>
                </div>
                <div className='about-des'>
                    <p>Hi, I'm <b><i>Akshay Eddula</i></b>, a Full Stack Developer based in India, currently in my final year of B.Tech in Computer Science and Engineering at Lovely Professional University. With a s
                    olid foundation in both frontend and backend development, I've worked on various freelance projects, including developing scalable e-commerce platforms and custom content management systems. Passionate about staying updated with the latest technology trends.<b><i>Feel free to connect with me on <span><a href="https://www.linkedin.com/in/akshayeddula">LinkedIn</a></span></i></b>.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
