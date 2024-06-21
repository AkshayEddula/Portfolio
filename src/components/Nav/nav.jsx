import React from 'react'
import './nav.css'
import { NavLinks } from '../NavLinks/NavLinks'

export const Nav = ({HomeRef, AboutRef, ExperienceRef, ProjectRef, contactRef, handleclick}) => {
    return (
        <section className='navres' ref={HomeRef}>
            <div onClick={()=>handleclick(HomeRef)} className="logo">
                <h1>Akshay Eddula</h1>
            </div>
            <NavLinks AboutRef={AboutRef} ExperienceRef={ExperienceRef} ProjectRef={ProjectRef} contactRef={contactRef} handleclick={handleclick} />
        </section>
    )
}
