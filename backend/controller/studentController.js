import studentModel from "../models/studentModel.js";

const addStudent = async(req, res)=>{
    const sc = studentModel({
        email:req.body.email,
        name:req.body.name,
        course:req.body.course,
        semester:req.body.semester,
        college:req.body.college,
        mentor:req.body.mentor
    })
    try{
        await sc.save();
        res.json({success: true, message: "Student was added"})
    }catch (error) {
        console.log(error)
        res.json({success: false, message: "Student was not added"})
    }
}

const listStudent = async(req, res)=>{
    try{
        const data = await studentModel.find()
        res.json({success: true, data:data})
    }catch (error){
        console.log(error)
        res.json({success: false, message: "Could not list all students"})
    }
}

export {addStudent, listStudent}
