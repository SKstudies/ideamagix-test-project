// src/components/InstructorPage.js
import React, { useEffect, useState } from 'react';

const InstructorPage = ({ userType, username }) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // Fetch instructor lectures using the username
    fetch(`http://localhost:5000/${userType}/lectures?name=${encodeURIComponent(username)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLectures(data.lectures);  // Set the lectures directly as an array
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [userType, username]);

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <h3>Your Lectures:</h3>
      <ul>
      {lectures.map((lecture, index) => (
        <li key={index}>{`${lecture.course.name} - ${new Date(lecture.date).toLocaleDateString()}`}</li>
        ))}

      </ul>
    </div>
  );
};

export default InstructorPage;

