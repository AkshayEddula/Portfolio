import './App.css';
import { Main } from './components/main/main';
import { Nav } from './components/Nav/nav';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Project } from './components/projects/Project';
import { Contact } from './components/contact/Contact';
import { Fotter } from './components/fotter/Fotter';
import { useRef } from 'react';

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectRef = useRef(null);
  const contactRef = useRef(null);

  const handleclick = (refLink) => {
    refLink.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Nav HomeRef={HomeRef} AboutRef={AboutRef} ExperienceRef={ExperienceRef} ProjectRef={ProjectRef} contactRef={contactRef} handleclick={handleclick}/>
      <Main contactRef={contactRef} handleclick={handleclick}/>
      <About AboutRef={AboutRef} />
      <Experience ExperienceRef={ExperienceRef} />
      <Project ProjectRef={ProjectRef} />
      <Contact contactRef={contactRef} />
      <Fotter HomeRef={HomeRef} AboutRef={AboutRef} ExperienceRef={ExperienceRef} ProjectRef={ProjectRef} contactRef={contactRef} handleclick={handleclick}/>
    </div>
  );
}

export default App;
