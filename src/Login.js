import React from 'react';
import './Login.css';
import AboutUs1 from './images/AboutUs1.jpg';

const Login = ({ student }) => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={AboutUs1} alt="Logo" className="logo-image" />
      </div>
      <div className="student-details">
        <h2>{student.name}</h2>
        <p>Student ID: {student.studentId}</p>
        <p>{student.branch}</p>
        <p>{student.college}</p>
        <p>{student.semester}</p>
      </div>
    </div>
  );
};

export default Login;
