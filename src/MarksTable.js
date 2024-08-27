import React from 'react';
import './MarksTable.css';

const MarksTable = ({ marks }) => {
  return (
    <div className="marks-table">
      <h3>Internal Marks Details</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Subject</th>
            <th>Marks Obtained</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {marks && marks.map((mark, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{mark.subject}</td>
              <td>{mark.marks}</td>
              <td>{mark.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksTable;
