import mongoose from "mongoose";
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
}, { minimize: false });

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
export default Admin;