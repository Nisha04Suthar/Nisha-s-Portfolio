import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
        <div className="contact">
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h1>Contact</h1>
            </div>
            <form action="#">
            <div className="con">
                <div className="name co">
                    <input type="text" placeholder="Full Name" name="name" className="me" id=""/>
                </div>
                <div className="email co">
                    <input type="email" placeholder="Email Address" name="email" className="me" id=""/>
                </div>
                <div className="mobile co">
                    <input type="text" placeholder="Mobile Number" name="phone" className="me" id=""/>
                </div>
                <div className="message co">
                    <textarea placeholder="Your Message" name="message" className="me" id="msg"></textarea> 
                </div>
                <input type="submit" value="Send Message" className="btn"/>
            </div>
            </form>
        </div>
    </>
  )
}

export default Contact