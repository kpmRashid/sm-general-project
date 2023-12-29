import {GiHamburgerMenu} from 'react-icons/gi'
import { IoClose } from "react-icons/io5";
import images from '../../constants/images'
import { useState } from 'react'
import './Navbar.css'



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.smLogo} alt="app-logo" />
     {/*<h1 className='headtext__roboto'>SM General Contracting & Construction Co. W.L.L.</h1>
        <h2 className='headtext__roboto'>SM General Cont. & Const. Co.</h2> */}
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About Us</a></li>
        <li className='p__opensans'><a href="#menu">Services</a></li>
        <li className='p__opensans'><a href="#awards">Projects</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#00008B' fontSize={35} onClick={()=>setToggleMenu(true)}/>
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <IoClose fontSize={50} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Services</a></li>
        <li className='p__opensans'><a href="#awards">Projects</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar