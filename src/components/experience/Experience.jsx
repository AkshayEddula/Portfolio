import React from 'react'
import './Experience.css'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const Experience = ({ExperienceRef}) => {
  return (
    <div ref={ExperienceRef} className='exp'>
        <div className='exp-title'>
            <h3>Explore My</h3>
            <h1>Experience</h1>
        </div>
        <div className='exp-skills'>
          <div className='skills'>
            <h1>Frontend Development</h1>
            <div className="skill-tags">
              <div className='tag'>
                <TiHtml5 color='#f06529'/>
                <h1>HTML</h1>
              </div>
              <div className='tag'>
                <IoLogoCss3 color='#264de4'/>
                <h1>CSS5</h1>
              </div>
              <div className='tag'>
                <IoLogoJavascript color='#F0DB4F'/>
                <h1>JAVASCRIPT</h1>
              </div>
              <div className='tag'>
                <FaReact color='#61DBFB'/>
                <h1>REACT.JS</h1>
              </div>
              <div className='tag'>
                <RiTailwindCssFill color='#38bdf8'/>
                <h1>TAILWIND CSS</h1>
              </div>
              <div className='tag'>
                <SiNextdotjs/>
                <h1>NEXT.JS</h1>
              </div>
            </div>
          </div>
          <div className='skills'>
            <h1>Backend Development</h1>
            <div className="skill-tags">
              <div className='tag'>
                <FaNodeJs color='3c873a'/>
                <h1>NODE.JS</h1>
              </div>
              <div className='tag'>
                <SiExpress/>
                <h1>EXPRESS.JS</h1>
              </div>
              <div className='tag'>
                <SiMongodb color='#4DB33D'/>
                <h1>MONGODB</h1>
              </div>
              <div className='tag'>
                <SiMysql color='#00758f'/>
                <h1>MYSQL</h1>
              </div>
              <div className='tag'>
                <SiPhp  color='#8993be'/>
                <h1>PHP</h1>
              </div>
              <div className='tag'>
                <FaGithub/>
                <h1>GIT & GITHUB</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
