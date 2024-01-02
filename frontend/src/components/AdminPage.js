// src/components/AdminPage.js
import React, { useState, useEffect } from 'react';

const AdminPage = ({ userType }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch all courses
    fetch(`http://localhost:5000/${userType}/courses`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.courses);
        setCourses(data.courses);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [userType]);

  return (
    <div>
      <h2>Welcome Admin!</h2>
      <h3>All Courses:</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {course.name}
            </div>
            <div>
              <strong>Level:</strong> {course.level}
            </div>
            <div>
              <strong>Description:</strong> {course.description}
            </div>
            <div>
              <strong>Image:</strong> <img src={course.image} alt={course.name} />
            </div>
            <div>
              <strong>Lectures:</strong>
              <ul>
                {course.lectures.map((lecture, lectureIndex) => (
                  <li key={lectureIndex}>{`${lecture.date} - ${lecture.instructor.name}`}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
