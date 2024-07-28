import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginSignUp.css';
import ParticleComponent from './ParticleComponent';

const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');
    const [semester, setSemester] = useState('');
    const [role, setRole] = useState('student'); // Default role is student
    const [message, setMessage] = useState(''); // State for messages
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsLogin(true);
        setMessage('');
    };

    const handleSignupClick = () => {
        setIsLogin(false);
        setMessage('');
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);

            setEmail('');
            setPassword('');

            if (role === 'student') {
                navigate('/student-dashboard');
            } else {
                navigate('/admin-dashboard');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Invalid email or password');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const signupData = {
                email,
                password,
                role,
                ...(role === 'student' ? { firstName, lastName, college, course, semester } : { firstName, lastName })
            };

            const response = await axios.post('http://localhost:4000/signup', signupData);

            setMessage('Signup successful! You can now log in.');
            setIsLogin(true);
            setEmail('');
            setPassword('');
            setName('');
            setFirstName('');
            setLastName('');
            setCollege('');
            setCourse('');
            setSemester('');

            if (role === 'student') {
                navigate('/student-dashboard');
            } else {
                navigate('/admin-dashboard');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something has occured');
        }
    };

    return (
        <div className="login-signup-container">
            <ParticleComponent />
            <div className="wrapper">
                <div className="form-container">
                    <div className="title-text">
                        <div className="title">
                            {isLogin ? 'Login Form' : 'Signup Form'}
                        </div>
                    </div>

                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked={isLogin} readOnly />
                        <input type="radio" name="slide" id="signup" checked={!isLogin} readOnly />
                        <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
                            Login
                        </label>
                        <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
                            Signup
                        </label>
                        <div className="slider-tab" style={{ left: isLogin ? '0%' : '50%' }}></div>
                    </div>

                    <div className="form-inner" style={{ marginLeft: isLogin ? '0%' : '-100%' }}>
                        <form onSubmit={handleLoginSubmit} className="login">
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="field dropdown">
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="" disabled>Select Role</option>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">
                                Not a member? <a href="#" onClick={handleSignupClick}>Signup now</a>
                            </div>
                            {message && <div className="message">{message}</div>}
                        </form>
                        <form onSubmit={handleSignupSubmit} className="signup">
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {role === 'student' ? (
                                <>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="College Name"
                                            value={college}
                                            onChange={(e) => setCollege(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Course"
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <select
                                            value={semester}
                                            onChange={(e) => setSemester(e.target.value)}
                                        >
                                            <option value="" disabled>Select Semester</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="field dropdown">
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="" disabled>Select Role</option>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                            {message && <div className="message">{message}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignUp;
