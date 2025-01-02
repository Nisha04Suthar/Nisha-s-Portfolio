import React from 'react'
import './Home.css'
import photo from './images/Passport_Photograph.jpg'
import github from './images/gihb.png'
import likedin from './images/lnkdin.png'

export default function Home() {
  return (
    <>
    <section id="Home">
        <div className="main">
            <div className="links">
                <div className="link">
                    <a href='https://github.com/Nisha04Suthar'><img src={github}/></a>
                </div>
                <div className="link">
                    <a href='http://www.linkedin.com/in/nisha-suthar-624065232'><img src={likedin}/></a>
                </div>   
            </div>
            <div className="intro">
                <h2>Hello, I'm <br/><span>NISHA SUTHAR</span></h2>
                <span>Passionate Front-end Developer designing User-Friendly Interfaces with Code and Creativity.</span>
            </div>
            <div className="image">
                <img src={photo} alt=""/>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
    </>
  )
}
