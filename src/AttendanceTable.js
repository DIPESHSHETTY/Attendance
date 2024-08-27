
import React from 'react';
import './AttendanceTable.css';

const AttendanceTable = ({ attendanceData }) => {
  if (!attendanceData || !attendanceData.theory || !attendanceData.practical || !attendanceData.dates) {
    return <div>Loading...</div>; // Add a loading state or error message
  }

  const { theory, practical, dates } = attendanceData;

  const subjects = Object.keys(theory);

  const renderTableRows = (data) => {
    return subjects.map(subject => {
      let lastNumber = 0;
      return (
        <tr key={subject}>
          <td>{subject}</td>
          {data[subject].map((attendance, index) => {
            if (attendance === 1) {
              lastNumber += 1;
            }
            return (
              <td key={index} className={attendance === 1 ? 'present' : 'absent'}>
                {lastNumber}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div className="attendance-tables">
      <div className="attendance-table">
        <h4>Theory</h4>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              {dates.map(date => <th key={date}>{date}</th>)}
            </tr>
          </thead>
          <tbody>
            {renderTableRows(theory)}
          </tbody>
        </table>
      </div>
      <div className="attendance-table">
        <h4>Practical</h4>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              {dates.map(date => <th key={date}>{date}</th>)}
            </tr>
          </thead>
          <tbody>
            {renderTableRows(practical)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;
