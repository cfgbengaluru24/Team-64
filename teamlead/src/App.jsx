import React from 'react'
import './App.css'
import NavBar from '../Components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../Components/SideBar/SideBar'
import AddStudents from '../Pages/addStudents/addStudents';
import AddAttendance from '../Pages/addAttendance/addAttendance';
import ListStudents from '../Pages/listStudents/listStudents';

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
          <Route path='/liststudents' element={<ListStudents url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
