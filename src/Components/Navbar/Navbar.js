import React,{useState} from 'react'
 import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   
  return ( 
    <div className='flex items-center justify-between
          md:justify-around bg-black py-6'>
        <div className='logoContainer ml-3 md:-ml-20'>
            <img src="logo.webp" 
            className ='h-full w-64 md:w-72 ' 
            alt="logo" />
        </div>
         
         <div className={`menu ${isOpen ? "open" : ""} flex items-center md:gap-6  text-white 
                `} id="navlink">
            <Link to ='/'
              onClick = {toggleMenu}>
              Home
            </Link>
            <Link>About Us</Link>
            <Link>Careers</Link>
            <Link>Blog</Link>
            <Link to ='/contact'
              onClick={toggleMenu}>
              Contact
            </Link>
         </div>
 
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>
  )
}

export default Navbar