import React from 'react'
import './Contact.css'
import insta from '../images/instagram.png'
import gmail from '../images/gmail.png'
import phone from '../images/telephone-call.png'

function Contact() {
  return (
    <>
        <div className="contact">
            <div style={{width:'80%', padding:'20px'}}>
                <div style={{ margin: 'auto', textAlign: 'center' }}>
                    <h2>Get In Touch</h2>
                </div>
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="11f9aa77-50bc-4c0e-ad58-e66e413fe3c1"/>
                <div className="con">
                    <div className="name co">
                        <input type="text" placeholder="Full Name" name="name" className="me" id=""/>
                    </div>
                    <div className='co2'>
                        <div className="email co">
                            <input type="email" placeholder="Email Address" name="email" className="me" id="email"/>
                        </div>
                        <div className="mobile co">
                            <input type="text" placeholder="Mobile Number" name="phone" className="me" id="phone"/>
                        </div>
                    </div>
                    <div className="message co">
                        <textarea placeholder="What's on your mind?" name="message" className="me" id="msg"></textarea> 
                    </div>
                    <input type="submit" value="Send Message" className="btn"/>
                </div>
                <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                </form>
            </div>
            <div className='social'>
                <div className="social-item"><a href="https://www.instagram.com/bills_suthar/"><img src={insta} alt='instagram'></img></a></div>
                <div className="social-item mail item"><img src={gmail} alt='gmail'></img></div>
                <div className="social-item number item"><img src={phone} alt='phone'></img></div>
            </div>
        </div>
    </>
  )
}

export default Contact