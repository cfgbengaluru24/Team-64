import express from 'express'
import { addAttendance, listAttendance } from '../controller/attendanceController.js'

const attendanceRouter = express.Router()

attendanceRouter.post("/addattendance", addAttendance)
attendanceRouter.get("/listattendance", listAttendance)

export default attendanceRouter