const mongoose = require('mongoose');
const { MONGO_URL } = process.env;

const connectDB = async () => {
    await mongoose.connect(MONGO_URL)
        .then(console.log('connected to mongoDB'));
};

module.exports = connectDB;