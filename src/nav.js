import React,{useState} from 'react';
import {Link} from 'react-router-dom'
function Nav (){

  return (
    <nav className='nav'> 
        <ul className='nav-links'>
            <Link to ='/'>
            <li>Page</li>
            </Link>
            <Link to ='/about'>
            <li>About</li>
            </Link>
            <Link to ='/tweet'>
            <li>Tweet</li>
            </Link>

        </ul>

    </nav>
  )
}

export default Nav ;