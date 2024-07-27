import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    }
}, { minimize: false })

const adminModel = mongoose.models.user || mongoose.model("Admin", adminSchema)

export default adminModel;