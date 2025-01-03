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
            <div className="sk"><img className='icon' src={html}></img>HTML</div>
            <div className="sk"><img className='icon' src={css}></img>CSS</div>
            <div className="sk"><img className='icon' src={js}></img>JavaScript</div>
            <div className="sk"><img className='icon' src={boot}></img>Bootstrap</div>
            <div className="sk"><img className='icon' src={java}></img>Java</div>
            <div className="sk"><img className='icon' src={react}></img>React.js</div>
            <div className="sk"><img className='icon' src={figma}></img>Figma</div>
            <div className="sk"><img className='icon' src={git}></img>Github</div>
          </div>
        </div>
    </>
  )
}

export default About

