import attendanceModel from "../models/attendanceModel.js";

const addAttendance = async(req, res)=>{
    const sc = attendanceModel({
        email: req.body.email,
        present_absent: req.body.present_absent,
        date: req.body.date
    })
    try{
        await sc.save();
        res.json({success: true, message: "Marked as Absent"})
    }catch (error) {
        console.log(error)
        res.json({success: false, message: "Could not mark as absent"})
    }
}

const listAttendance = async(req, res)=>{
    try{
        const data = await attendanceModel.find()
        res.json({success: true, data:data})
    }catch (error){
        console.log(error)
        res.json({success: false, message: "Could not list all absentees"})
    }
}

export {addAttendance, listAttendance}
