import React from 'react'
import './contact.css';
import fb from '../../assets/facebook-icon.png';
import tw from '../../assets/twitter.png';
import yb from '../../assets/youtube.png';
import ig from '../../assets/instagram.png';

const Contact = () => {
  return (
    <div>
      <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'> Contact Me</h1>
            <span className='contactDesc'>If you're interested in collaboration or would like to connect,<br/>
please don't hesitate to get in touch.</span> 
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>    
                <input type='email' className='email' placeholder='Your Email'/>    
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Send Message</button>
                <div className='links'>
                    <img src={fb} alt='facebook' className='link'/>
                    <img src={yb} alt='youtube' className='link'/>
                    <img src={tw} alt='twitter' className='link' id='twitter'/>
                    <img src={ig} alt='instagram' className='link'/>
                </div>
            </form>       
        </div>
      </section>
    </div>
  )
}

export default Contact;
