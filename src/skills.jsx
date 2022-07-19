import React from 'react'
import HTML from './assets/html.png';
import CSS from './assets/css.png';
import SVELTE from './assets/svelte.png';
import JAVASCRIPT from './assets/javascript.png';
import GITHUB from './assets/github.png';
import REACT from './assets/react.png';
import SQL from './assets/sql.png';
import Skillname from './skillname';
import "./index.css";


const Skills = () => {
    return (
        <section>
                <div className="skill-grid">
                    <div> <Skillname iconImage={REACT} /></div>
                    <div> <Skillname iconImage={SVELTE} /></div>
                   
                    <div> <Skillname iconImage={HTML} /></div>
                    <div> <Skillname iconImage={CSS} /></div>
                    <div> <Skillname iconImage={GITHUB} /></div>
                  
                    <div> <Skillname iconImage={JAVASCRIPT} /></div>
                
                    <div> <Skillname iconImage={SQL} /></div>
                </div>
          
        </section>
    )
}

export default Skills
