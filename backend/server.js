import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import scoreRouter from './routes/scoreRoute.js'
import attendanceRouter from './routes/attendanceRoute.js'
import studentRouter from './routes/studentRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.use('/score', scoreRouter)
app.use('/attendance', attendanceRouter)
app.use('/student', studentRouter)

app.listen(port, ()=>{
    console.log(`Server started in http://localhost:${port}`)
})
