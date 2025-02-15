import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
    email:{type: String, required:true, unique:true},
    present_absent:{type:Boolean, required:true},
    date:{type:Date, default:Date.now()}
})

const attendanceModel = mongoose.models.user || mongoose.model("Attendance", attendanceSchema)

export default attendanceModel;