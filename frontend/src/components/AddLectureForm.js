// src/components/AddLectureForm.js
import React, { useState } from 'react';

const AddLectureForm = ({ courseId, instructors, onAddLecture }) => {
  const [lectureData, setLectureData] = useState({
    instructorId: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLectureData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLecture(courseId, lectureData);
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
