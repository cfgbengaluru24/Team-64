import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <button onClick='/addstudents' className="sidebar-option">
 
                <p>Add Student</p>
            </button>
            <button onClick='/addattendance' className="sidebar-option">

                <p>Add Attendance</p>
            </button>
            <button to='/liststudents' className="sidebar-option">

                <p>List Students</p>
            </button>
        </div>
    </div>
  )
}

export default SideBar