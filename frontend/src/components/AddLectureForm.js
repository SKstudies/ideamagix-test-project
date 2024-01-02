// src/components/AddLectureForm.js
import React, { useState, useEffect } from 'react';

const AddLectureForm = ({ courseId, onAddLecture }) => {
  const [lectureData, setLectureData] = useState({
    instructorId: '',
    date: '',
  });
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch all instructors on component mount
    fetch('http://localhost:5000/instructor/instructors')  // Corrected endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInstructors(data.instructors);
      })
      .catch(error => {
        console.error('Error fetching instructors:', error);
      });
  }, []);

  const handleChange = (e) => {
    setLectureData({ ...lectureData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLecture(courseId, lectureData);
    // Optionally, reset the form fields
    setLectureData({ instructorId: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Instructor:</label>
      <select name="instructorId" value={lectureData.instructorId} onChange={handleChange} required>
        <option value="" disabled>Select an instructor</option>
        {instructors.map((instructor) => (
          <option key={instructor._id} value={instructor._id}>{instructor.name}</option>
        ))}
      </select>

      <label>Date:</label>
      <input type="date" name="date" value={lectureData.date} onChange={handleChange} required />

      <button type="submit">Add Lecture</button>
    </form>
  );
};

export default AddLectureForm;
