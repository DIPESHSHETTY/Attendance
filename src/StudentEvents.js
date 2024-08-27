import React, { useEffect, useState } from 'react';
import './StudentEvents.css'; // Assuming you have some styling in StudentEvents.css

// Importing the simplified JSON data directly (replace with actual API call in production)
import jsonData from './studentData.json'; // Replace './studentData.json' with the path to your simplified JSON file

const StudentEvents = ({ studentId }) => {
  const [events, setEvents] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchStudentData = () => {
      // Find student data based on studentId from JSON data
      const studentData = jsonData.find(student => student.studentId === studentId);
      if (studentData) {
        // Extract events and teams arrays from studentData
        setEvents(studentData.events);
        setTeams(studentData.teams);
      } else {
        // Handle case where studentId is not found
        console.log(`Student with ID ${studentId} not found.`);
      }
    };

    fetchStudentData();
  }, [studentId]);

  return (
    <div className="events-container">
      <h3>Student Events and Teams</h3>

      {/* Display Events */}
      <div>
        <h4>Events:</h4>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <h4>{event.name}</h4>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Teams */}
      <div>
        <h4>Teams:</h4>
        <ul>
          {teams.map((team, index) => (
            <li key={index}>
              <h4>{team.name}</h4>
              <p>Role: {team.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentEvents;
