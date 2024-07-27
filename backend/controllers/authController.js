const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const Applicant = require('../models/Applicant.js')

exports.signup = async (req, res) => {
    const { email, password, firstName, lastName, college, course, semester, role } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({
            email,
            password,
            role: role || 'student'
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user
        await user.save();

        if (role === 'student') {
            // Create new applicant
            const applicant = new Applicant({
                emailId: email,
                firstName,
                lastName,
                college,
                course,
                semester,
                password: user.password
            });

            // Save applicant
            await applicant.save();
        } else if (role === 'admin') {
            // Create new admin
            const admin = new Admin({
                emailId: email,
                firstName,
                lastName,
                password: user.password
            });

            // Save admin
            await admin.save();
        }

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};