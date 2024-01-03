import React, { useState, useEffect } from 'react';
import AddCourseForm from './AddCourseForm';
import AddLectureForm from './AddLectureForm';

const AdminPage = ({ userType }) => {
  const [courses, setCourses] = useState([]);

  //to fetch all courses
  const fetchCourses = () => {
    fetch(`http://localhost:5000/${userType}/courses`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCourses(data.courses);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Fetch all courses on component mount
    fetchCourses();
  }, [userType]);

  const handleAddCourse = (courseData) => {
    //to add a new course
    fetch(`http://localhost:5000/${userType}/add-course`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Fetch courses again after adding a new course
        fetchCourses();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleAddLecture = (courseId, lectureData) => {
    //to add a new lecture
    fetch(`http://localhost:5000/${userType}/add-lectures`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...lectureData, courseId }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Fetch courses again after adding a new lecture
        fetchCourses();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

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
              <AddLectureForm courseId={course._id} onAddLecture={handleAddLecture} />
            </div>
          </li>
        ))}
      </ul>

      <h3>Add Course:</h3>
      <AddCourseForm onAddCourse={handleAddCourse} />
    </div>
  );
};

export default AdminPage;
