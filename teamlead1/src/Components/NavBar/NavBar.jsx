import React from 'react'
import './NavBar.css'
import { assets } from '../../../../teamlead/src/assets/assets'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
    </div>
  )
}

export default NavBar