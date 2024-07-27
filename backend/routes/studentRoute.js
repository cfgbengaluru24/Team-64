import express from 'express'
import { addStudent, listStudent } from '../controller/studentController.js'

const studentRouter = express.Router()

studentRouter.post("/addstudent", addStudent)
studentRouter.get("/liststudent", listStudent)

export default studentRouter