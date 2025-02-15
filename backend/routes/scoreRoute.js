import express from 'express'
import { addScore, listScore } from '../controller/scoreController.js'

const scoreRouter = express.Router()

scoreRouter.post("/addscore", addScore)
scoreRouter.get("/listscore", listScore)

export default scoreRouter
