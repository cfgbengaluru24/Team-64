import scoreModel from "../models/scoreModel.js";

const addScore = async(req, res)=>{
    const sc = scoreModel({
        email: req.body.email,
        subject: req.body.subject,
        category1: req.body.category1,
        category2: req.body.category2,
        category3: req.body.category3,
        category4: req.body.category4,
        date: req.body.date
    })
    try{
        await sc.save();
        res.json({success: true, message: "Score Added"})
    }catch (error) {
        console.log(error)
        res.json({success: false, message: "Score could not be Added"})
    }
}

const listScore = async(req, res)=>{
    try{
        const data = await scoreModel.find()
        res.json({success: true, data:data})
    }catch (error){
        console.log(error)
        res.json({success: false, message: "Could not list all scores"})
    }
}

export {addScore, listScore}
