import React from 'react'
import './intro.css';
import btn from '../../assets/contact.png';
import {Link} from 'react-scroll';
import tw from '../../assets/tw1.png';
import gt from '../../assets/github.png';
import lik from '../../assets/lk1.png';
import ig from '../../assets/instagram.png';
// import mail from '../../assets/gmail.png';

const Intro = () => {
  return (
    <div>
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span>
                    <span className='introText'>I'm</span> 
                    <span className='introName'> Anvesha</span> <br/> 
                    <span className='webd'>Web Developer</span>
                </span>
                <p className='introPara'>I am a proficient developer with strong problem-solving skills,<br/> excelling in Data Structures and Algorithms (DSA).<br/> If you're interested in collaboration or wish to get in touch,<br/> you can reach me through the contacts below.</p>
                <br/>
                {/* <Link>
                    <button className='btn'> 
                        <a href="mailto:sanvesha28@gmail.com" target="_blank" rel="noopener noreferrer" >
                            <img src={btn} alt="Conatct Me"/> Contact Me
                        </a>
                    </button>
                </Link> */}
                <button className='btn'>
                    <a href="mailto:sanvesha28@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={btn} alt="Contact Me" /> 
                    </a>Contact Me
                </button>


            </div>
            {/* <img src={con} alt='Contact' className='bg'/> */}
            <div class="social-links">
                <a href="https://twitter.com/Anvesha91091051" target="_blank" rel="noopener noreferrer">
                    <img src={tw} alt="Twitter"></img>
                </a>
                <a href="https://github.com/anveshas" target="_blank" rel="noopener noreferrer">
                    <img src={gt} alt="GitHub"></img>
                </a>
                <a href="https://www.linkedin.com/in/anvesha-srivastava-41babb25a/" target="_blank" rel="noopener noreferrer">
                    <img src={lik} alt="Linkedin"></img>
                </a>
                <a href="https://www.instagram.com/its.anveshaa_28/" target="_blank" rel="noopener noreferrer">
                    <img src={ig} alt="Instagram"></img>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Intro;
