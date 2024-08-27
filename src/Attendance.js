import React, { useEffect } from 'react';
import './Attendance.css';

const Attendance = ({ attendance, title }) => {
  useEffect(() => {
    console.log('Received attendance data:', attendance);
  }, [attendance]);

  if (!attendance) {
    return <div>Loading attendance data...</div>;
  }

  const { theory, practical } = attendance;

  // Check if theory and practical data are available
  if (!theory || !practical) {
    return <div>No attendance data available.</div>;
  }

  const calculateProgress = (subjectData) => {
    const totalClasses = subjectData.length;
    const attendedClasses = subjectData.reduce((acc, curr) => acc + curr, 0);
    return (attendedClasses / totalClasses) * 100;
  };

  return (
    <div className="attendance">
      
      <div className="attendance-cards">
        <div className="attendance-card">
          <h4>Theory Attendance</h4>
          {Object.keys(theory).map((subject) => (
            <div className="attendance-record" key={subject}>
              <span>{subject} (Theory)</span>
              <div className="progress-bar">
                <div
                  className={`progress ${calculateProgress(theory[subject]) >= 75 ? 'green' : 'red'}`}
                  style={{ width: `${calculateProgress(theory[subject])}%` }}
                ></div>
              </div>
              <span>{calculateProgress(theory[subject]).toFixed(2)}%</span>
            </div>
          ))}
        </div>

        <div className="attendance-card">
          <h4>Practical Attendance</h4>
          {Object.keys(practical).map((subject) => (
            <div className="attendance-record" key={subject}>
              <span>{subject} (Practical)</span>
              <div className="progress-bar">
                <div
                  className={`progress ${calculateProgress(practical[subject]) >= 75 ? 'green' : 'red'}`}
                  style={{ width: `${calculateProgress(practical[subject])}%` }}
                ></div>
              </div>
              <span>{calculateProgress(practical[subject]).toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
