const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
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
    college: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { minimize: false });

const Applicant = mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;