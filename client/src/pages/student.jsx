// src/components/StudentDashboard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const StudentDashboard = ({ student, testScores, attendanceRecords }) => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Student Dashboard</h1>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="mb-2"><strong>Name:</strong> {student.name}</p>
                <p className="mb-2"><strong>Email:</strong> {student.email}</p>
                <p className="mb-2"><strong>Enrollment Date:</strong> {student.enrollmentDate}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-4">Test Scores</h2>
                <ul>
                    {testScores.map(score => (
                        <li key={score.subject} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                            <p className="mb-2"><strong>Subject:</strong> {score.subject}</p>
                            <p className="mb-2"><strong>Score:</strong> {score.score}</p>
                            <p className="mb-2"><strong>Date:</strong> {score.date}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
                <ul>
                    {attendanceRecords.map(record => (
                        <li key={record.date} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                            <p className="mb-2"><strong>Date:</strong> {record.date}</p>
                            <p className="mb-2"><strong>Status:</strong> {record.status}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

StudentDashboard.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        enrollmentDate: PropTypes.string.isRequired,
    }).isRequired,
    testScores: PropTypes.arrayOf(
        PropTypes.shape({
            subject: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    attendanceRecords: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default StudentDashboard;