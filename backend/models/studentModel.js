import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    email:{type: String, required:true, unique:true},
    name:{type: String, required:true},
    course:{type: String, required:true},
    semester:{type: String, required:true},
    college:{type: String, required:true},
    mentor:{type:String, required:true}
})

const studentModel = mongoose.models.user || mongoose.model("Student", studentSchema)

export default studentModel;