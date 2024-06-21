import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavLinks = ({AboutRef, ExperienceRef, ProjectRef, contactRef, handleclick}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='nav-res'>
      <div className="nav-toggle" onClick={toggleMenu}>
          {!isOpen ? <FaBars /> : <FaTimes />}
      </div>
      <div className={isOpen ? 'nav-links active' : 'nav-links'}>
            <button onClick={() => handleclick(AboutRef)}>About</button>
            <button onClick={() => handleclick(ExperienceRef)}>Experience</button>
            <button onClick={() => handleclick(ProjectRef)}>Projects</button>
            <button onClick={() => handleclick(contactRef)}>Contact</button>
      </div>
    </div>
  )
}
