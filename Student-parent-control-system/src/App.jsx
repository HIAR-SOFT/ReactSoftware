//libraries
import React, {useState,useEffect} from 'react';
import './App.css';

const App=()=>{
  const [attendanceData,setAttendanceData]=useState([]);
  const [projectData,setProjectData]=useState([]);
  const [gradesData,setGradesData]=useState([]);
  const [weakSubjects,setWeakSubjects]=useState([]);
  const [calendarData,setCalendarData]=useState([]);

  //authentication
  const [isAuthenticated,setIsAuthenticated]=useState(false) ;
  const authenticateUser=(username,password)=>{
//parents authentication
    if (username === 'parent' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Authentication failed');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Load data after authentication
      fetchAttendanceData();
      fetchProjectData();
      fetchGradesData();
      fetchCalendarData();
    }
  }, [isAuthenticated]);

  // Fetch Attendance Data
  const fetchAttendanceData = () => {
    // Mock data
    setAttendanceData([
      { date: '2024-12-01', status: 'Present' },
      { date: '2024-12-02', status: 'Absent' },
    ]);
  };

  // Fetch Project Data
  const fetchProjectData = () => {
    // Mock data
    setProjectData([
      { title: 'Science Project', status: 'Completed' },
      { title: 'History Assignment', status: 'Pending' },
    ]);
  };

  // Fetch Grades Data
  const fetchGradesData = () => {
    // Mock data
    const grades = [
      { subject: 'Math', grade: 50 },
      { subject: 'Science', grade: 70 },
      { subject: 'History', grade: 45 },
    ];
    setGradesData(grades);
    identifyWeakSubjects(grades);
  };

  // Identify Weak Subjects
  const identifyWeakSubjects = (grades) => {
    const weak = grades.filter((subject) => subject.grade < 60);
    setWeakSubjects(weak);
  };

  // Fetch Calendar Data
  const fetchCalendarData = () => {
    // Mock data
    setCalendarData([
      { date: '2024-12-15', event: 'Math Test' },
      { date: '2024-12-20', event: 'Science Fair' },
    ]);
  };

  if (!isAuthenticated) {
    return (
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button
          onClick={() =>
            authenticateUser(
              document.getElementById('username').value,
              document.getElementById('password').value
            )
          }
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Parent Dashboard</h1>

      {/* Attendance Records */}
      <section>
        <h2>Attendance Records</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Project Records */}
      <section>
        <h2>Completed Projects</h2>
        <ul>
          {projectData.map((project,index)=>(
            <li key={index}>
              {project.title}-{project.status}
            </li>
          ))}
        </ul>
      </section>

      {/* Weak Subjects */}
      <section>
        <h2>Subjects to Focus On</h2>
        <ul>
          {weakSubjects.map((subject,index)=>(
            <li key={index}>
              {subject.subject}:{subject.grade}
            </li>
          ))}
        </ul>
      </section>

      {/* Academic Calendar */}
      <section>
        <h2>Academic Calendar</h2>
        <ul>
          {calendarData.map((event, index) => (
            <li key={index}>
              {event.date}: {event.event}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;