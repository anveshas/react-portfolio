import React from 'react';
import './navbar.css';
import logo from '../../assets/logo1.png';
import {Link} from 'react-scroll';
import connect from '../../assets/connect.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-125} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView();
        }}>
          {/* {behavior: smooth} */}
            <a href="https://www.linkedin.com/in/anvesha-srivastava-41babb25a/" target="_blank" rel="noopener noreferrer">
                <img src={connect} alt='' className='desktopMenuImg'/>
            </a>
        </button>
    </nav>
  )
}

export default Navbar;
