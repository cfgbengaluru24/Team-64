import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar.jsx';
import AddAttendance from './Pages1/addAttendance/addAttendance';

const App = () => {
  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path='/addstudents' element={<AddStudents url={url}/>}/>
          <Route path='/addattendance' element={<AddAttendance url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
