import React from 'react'
import './About.css'
import html from '../images/html-5.png'
import css from '../images/css.png'
import js from '../images/java-script.png'
import boot from '../images/bootstrap.png'
import java from '../images/java.png'
import react from '../images/atom.png'
import git from '../images/github (1).png'
import figma from '../images/figma.png'
import github from '../images/gihb.png'
import link from '../images/link.png'
import sql from '../images/mysql.png'

function About() {
  return (
    <>
        <div className="About">
            <div style={{ textAlign: 'center' }}>
            <h2>Get to know Me</h2>
            </div>
        </div>
        <div className='heading'>
          <h2>Education</h2>
          <div className="data">
            <div className="ed">
              <div>
                <span><p>B.tech (Computer Science and Engineering)</p></span>
                <p style={{ fontSize: "1rem", opacity:'0.9' }}>2020-2024</p>
              </div>
              <div>
                <p>Amity University Jaipur</p>
                <p style={{ fontSize: "1rem", justifySelf:"end",opacity:'0.9' }}>Jaipur, Rajasthan</p>
              </div>
            </div>
            <div className="ed">
              <div>
                <span><p>Intermediate</p></span>
                <p style={{ fontSize: "1rem", opacity:'0.9' }}>2019-2020</p>
              </div>
              <div>
                <p>Guruharkrishan Sen. Sec. Public School</p>
                <p style={{ fontSize: "1rem", justifySelf:"end",opacity:'0.9' }}>Hanumagarh, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="heading">
          <h2>Tech-Skills</h2>
          <div className="data skill-data">
            <div className="sk"><img className='icon' src={html} alt='html'></img>HTML</div>
            <div className="sk"><img className='icon' src={css} alt='css'></img>CSS</div>
            <div className="sk"><img className='icon' src={js} alt='js'></img>JavaScript</div>
            <div className="sk"><img className='icon' src={boot} alt='bootstrap'></img>Bootstrap</div>
            <div className="sk"><img className='icon' src={java} alt='java'></img>Java</div>
            <div className="sk"><img className='icon' src={react} alt='react'></img>React.js</div>
            <div className="sk"><img className='icon' src={figma} alt='figma'></img>Figma</div>
            <div className="sk"><img className='icon' src={git} alt='github'></img>Github</div>
            <div className="sk"><img className='icon' src={sql} alt='sql'></img>MySQL</div>
          </div>
        </div>

        <div className="heading">
          <h2>Non-Tech Skills</h2>
          <div className="data skill-data">
            <div className="sk">MS Word</div>
            <div className="sk">Self-learning</div>
            <div className="sk">Creativity</div>
            <div className="sk">Positive-Attitude</div>
            <dv className="sk">Adaptability</dv>
            <div className="sk">Team Work</div>
          </div>
        </div>

        <div className="heading">
          <h2>Projects</h2>
          <div className="project-data">
            <div className="data-top">
              <p style={{color:'black', marginLeft:'10px', fontWeight:'bold', fontSize:'large'}}>PGLife</p>
            </div>
            <div className="data-bottom">
              <div id='bottom'>
                <a href='https://github.com/Nisha04Suthar/PGLife'><img src={link} style={{height:'30px', marginRight:'10px',}} alt='link'></img></a>
                <img style={{height:'30px'}} src={github} alt='link'/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About

