# Student-parent-control-system

 Table of contents:
 0) Introduction
 1) Tech stack
 2) Installation instructions
 3) User gude
 4) Features
 5) Team members


# Introduction
The project is designed in order to provide parents a free access to their childrens school-life information. It suppose to increase open communication between students and parents, prevent law physical and emotional states of students, improve students studying invironment and keep parents informed about students issues so they could provide financial and psychological help. Student-parent-control-system is stable, has a user friendly interface and easy to integrate. 
thus, it can be freely used in any adducation institution.

This documentation will be focused on development planning and code structure of Student=parent-control-system.

# Tech stack
Frontend:
-react application using java script programming language with the vite@6.1.1 as a helping tool, 
-axios (for making HTTP requests to the backend),
-css (styling)

Backend:  
-express js (web framework fore node js)
-node js (Backend runtime environment)

Database: MondoDB


# Installation instructions

//Node.js should have version 16 or higher
//MongoDB should have version 8.0 or higher

Steps:

1. Clone the Repository

git clone <repository_url>
cd Parent-Dashboard-System

2. Install Dependencies

Frontend:

npm install

Backend:

cd server
npm install

3. Start MongoDB

Make sure MongoDB is running locally

Seed the Database

cd scripts
node seed.js

4. Run the Frontend

npm run dev

5. Run the Server

cd server
node server.js

# User guide

1. open http://localhost:3000 in a browser

2. enter student id from your database to log in

3. navigate through the dashboard using buttons of sidebar

# Features
1, Login System

Parents can log in using their clildrens student id

Error handling for invalid student id

2. Parent Dashboard

Displays the student’s name

Provides information:

-attendance Records

-grades 

-completed Projects

-academic calendar

3. Navigation

Sidebar navigation to switch between different sections (Home, Attendance, Grades, ...)

4. Responsive design

User-friendly and responsive interface styled with CSS

# team members
Darya Babuchenka B2405090230
Miray Uzunoğlu B2405.090169
Kerim Can Erdal B2405.090097
Mehmet Kagan Hayirli B2305.090234

