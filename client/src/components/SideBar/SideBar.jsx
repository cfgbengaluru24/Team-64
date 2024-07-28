import React from 'react'
import './SideBar.css'
import { assets } from '../../../../teamlead/src/assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <button onClick='/addstudents' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Student</p>
            </button>
            <button onClick='/addattendance' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Attendance</p>
            </button>
            <button to='/liststudents' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>List Students</p>
            </button>
        </div>
    </div>
  )
}

export default SideBar
