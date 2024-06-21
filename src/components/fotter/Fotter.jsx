import React from 'react';
import './Fotter.css';

export const Fotter = ({HomeRef,AboutRef, ExperienceRef, ProjectRef, contactRef, handleclick}) => {
  return (
    <div className='fotter'>
        <div className='fotter-links'>
          <button className='btn' onClick={()=>handleclick(HomeRef)}>Home</button>
            <div className='fotternav-links'>
                  <button onClick={() => handleclick(AboutRef)}>About</button>
                  <button onClick={() => handleclick(ExperienceRef)}>Experience</button>
                  <button onClick={() => handleclick(ProjectRef)}>Projects</button>
                  <button onClick={() => handleclick(contactRef)}>Contact</button>
            </div>
        </div>
        <p>Copyright © 2024 Akshay Eddula. All Rights Reserved.</p>
    </div>
  )
}
