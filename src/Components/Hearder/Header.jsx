import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'



const Header = () => {
  return (
   
        <div className="container01" >
            <ul className="nav-wrapper">
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              
              
            
            </ul>
        </div>

  )
}

export default Header