// src/components/AddLectureForm.js
import React, { useState } from 'react';

const AddLectureForm = ({ courseId, onAddLecture }) => {
  const [lectureData, setLectureData] = useState({
    instructorId: '',
    date: '',
  });

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
      <label>Instructor ID:</label>
      <input type="text" name="instructorId" value={lectureData.instructorId} onChange={handleChange} required />

      <label>Date:</label>
      <input type="date" name="date" value={lectureData.date} onChange={handleChange} required />

      <button type="submit">Add Lecture</button>
    </form>
  );
};

export default AddLectureForm;
