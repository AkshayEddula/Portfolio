import React from 'react'
import './Project.css'

export const Project = ({ProjectRef}) => {
  return (
    <div ref={ProjectRef} className='project'>
        <div className='project-title'>
            <h3>Browse My Recent</h3>
            <h1>Projects</h1>
        </div>
        <div className='projects'>
            <div className="project-1">
                <div className='projet-img'>
                    <img src="images/project-1.png" alt="" />
                </div>
                <div className='project-info'>
                    <h1>Project One</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, assumenda! Voluptates modi cumque deleniti libero iure sit reprehenderit eveniet mollitia facere error, voluptate ea inventore itaque hic! Laboriosam, sapiente excepturi.</p>
                    <div className='project-btns'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </div>
            </div>
            <div className="project-1">
                <div className='projet-img'>
                    <img src="images/project-1.png" alt="" />
                </div>
                <div className='project-info'>
                    <h1>Project Two</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, assumenda! Voluptates modi cumque deleniti libero iure sit reprehenderit eveniet mollitia facere error, voluptate ea inventore itaque hic! Laboriosam, sapiente excepturi.</p>
                    <div className='project-btns'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </div>
            </div>
            <div className="project-1">
                <div className='projet-img'>
                    <img src="images/project-1.png" alt="" />
                </div>
                <div className='project-info'>
                    <h1>Project Three</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, assumenda! Voluptates modi cumque deleniti libero iure sit reprehenderit eveniet mollitia facere error, voluptate ea inventore itaque hic! Laboriosam, sapiente excepturi.</p>
                    <div className='project-btns'>
                        <button>Github</button>
                        <button>Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
