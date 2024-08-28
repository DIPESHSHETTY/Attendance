import React, { useEffect, useRef ,useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Dashboard.css';
import studentDetails from './studentDetails.json';
import Login from './Login';
import AttendanceTable from './AttendanceTable'; // Import the AttendanceTable component
import Settings from './Settings';
import StudentEvents from './StudentEvents';
import Graph from './Graph';
import PieChart from './PieChart';
import sies from './sies.png';
import Leave from './Leave';
import Attendance from './Attendance';
import { Title } from 'chart.js';

const Dashboard = () => {
  const [student, setStudent] = useState({});
  const dashboardContainerRef = useRef(null);

  useEffect(() => {
    try {
      setStudent(studentDetails['2022037933']); // Assuming student ID is the key
    } catch (error) {
      console.error('Error fetching student data:', error);
      // Handle the error gracefully, e.g., display an error message or redirect
      //hi
    }
  }, []);

  const calculateAttendance = (attendanceData) => {
    if (!attendanceData || !attendanceData.dates) {
      return []; // Handle the case of missing data gracefully
    }

    const totalDays = attendanceData.dates.length;

    // Calculate overall theory and practical attendance for each subject
    const theoryAttendance = Object.keys(attendanceData.theory).map((subject) => {
      const attendedClasses = attendanceData.theory[subject].reduce((acc, curr) => acc + curr, 0);
      return {
        subject,
        percentage: (attendedClasses / totalDays) * 100,
        type: 'theory',
      };
    });

    const practicalAttendance = Object.keys(attendanceData.practical).map((subject) => {
      const attendedClasses = attendanceData.practical[subject].reduce((acc, curr) => acc + curr, 0);
      return {
        subject,
        percentage: (attendedClasses / totalDays) * 100,
        type: 'practical',
      };
    });

    return [...theoryAttendance, ...practicalAttendance];
  };

  const attendanceData = student.attendance || {};
  const attendanceSummary = calculateAttendance(attendanceData);

  return (
    <Router>
      <div className="dashboard-container" ref={dashboardContainerRef}>
        <div className="sidebar">
          <div className="logo-container">
            <div className="logo" style={{ color: "#ffa726" }}>SIES GST</div>
            <div className="logo-img">
              <img src={sies} alt="Logo" />
            </div>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/graph">Attendance Graph</Link></li>
              <li><Link to="/leave-application">Leave Application</Link></li>
            </ul>
          </nav>
          <Settings />
        </div>
        <div className="main-content">
          <div className="header">
            <h1 style={{ color: "#2c3e50" }}>STUDENT DASHBOARD</h1>
          </div>
          <Routes>
            <Route path="/" element={
              <div className="content-columns">
                <div className="left-column">
                  <div><Login student={student} /></div>
                  <div className="attendance-section">
                    <h2>Attendance Records</h2>
                    <Attendance attendance={attendanceData} title="Attendance Records" />

                  </div>
                  <div className="event">
                    <StudentEvents studentId={student.studentId} />
                  </div>
                </div>
                <div className="right-column">
                  <h2>Chart View</h2>
                  <div className="charts-container">
                    {attendanceSummary.map((data, index) => (
                      <div className="chart-card" key={index}>
                        <PieChart data={data} />
                        <p>{data.subject} ({data.type})</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }/>
            <Route path="/graph" element={<Graph />} />
            <Route path="/leave-application" element={<Leave />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;