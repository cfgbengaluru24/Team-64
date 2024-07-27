import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import scoreRouter from './routes/scoreRoute.js'

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

app.use('/score', scoreRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server started in http://localhost:${port}`)
})
