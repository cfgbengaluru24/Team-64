import React from 'react'
import './SideBar.css'
import { assets } from '../../src/assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/addstudents' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Student</p>
            </NavLink>
            <NavLink to='/addattendance' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Attendance</p>
            </NavLink>
            <NavLink to='/liststudents' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>List Students</p>
            </NavLink>
            <NavLink to='/analysis' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Analysis</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar