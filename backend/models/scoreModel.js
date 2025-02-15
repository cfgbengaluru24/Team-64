import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
    email:{type: String, required:true, unique:true},
    subject:{type:String, required: true},
    category1:{type: Number, required: true},
    category2:{type: Number, required: true},
    category3:{type: Number, required: true},
    category4:{type: Number, required: true},
    date:{type:Date, default:Date.now()}
}, {minimize:false})

const scoreModel = mongoose.models.user || mongoose.model("Score", scoreSchema)

export default scoreModel;