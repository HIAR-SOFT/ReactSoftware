import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [currentSection, setCurrentSection] = useState('Home'); // Track which section is active
  const [isLoading, setIsLoading] = useState(false);

  const authenticateUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/student/${studentId}`);
      setStudentData(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      alert('Invalid Student ID');
    } finally {
      setIsLoading(false);
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'Home':
        return (
          <section className="section">
            <h1>Parent Dashboard</h1>
            <div className="student-info">
              <h2>Student: {studentData.name}</h2>
            </div>
          </section>
        );
      case 'Attendance':
        return (
          <section className="section">
            <h2>Attendance Records</h2>
            {studentData.attendance && studentData.attendance.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.attendance.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No attendance records available.</p>
            )}
          </section>
        );
      case 'Projects':
        return (
          <section className="section">
            <h2>Completed Projects</h2>
            {studentData.projects && studentData.projects.length > 0 ? (
              <ul>
                {studentData.projects.map((project, index) => (
                  <li key={index}>
                    {project.title} - {project.status}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No projects available.</p>
            )}
          </section>
        );
      case 'Grades':
        return (
          <section className="section">
            <h2>Grades</h2>
            {studentData.grades && studentData.grades.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.grades.map((grade, index) => (
                    <tr key={index}>
                      <td>{grade.subject}</td>
                      <td>{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No grades available.</p>
            )}
          </section>
        );
      case 'Calendar':
        return (
          <section className="section">
            <h2>Academic Calendar</h2>
            {studentData.calendar && studentData.calendar.length > 0 ? (
              <ul>
                {studentData.calendar.map((event, index) => (
                  <li key={index}>
                    {event.date}: {event.event}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No calendar events available.</p>
            )}
          </section>
        );
      default:
        return <p>Select a section</p>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login">
        <h1>Parent Login</h1>
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button onClick={authenticateUser}>Login</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Student Portal</h2>
        <ul>
          <li onClick={() => setCurrentSection('Home')}>Home</li>
          <li onClick={() => setCurrentSection('Attendance')}>Attendance</li>
          <li onClick={() => setCurrentSection('Projects')}>Projects</li>
          <li onClick={() => setCurrentSection('Grades')}>Grades</li>
          <li onClick={() => setCurrentSection('Calendar')}>Academic Calendar</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default App;

