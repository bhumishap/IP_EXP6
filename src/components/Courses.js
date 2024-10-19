// Courses.js
import React from 'react';
import './Courses.css';

const Courses = () => {
  const courseDetails = [
    {
      name: 'Computer Science',
      description: 'Explore the world of programming, data structures, and algorithms, preparing for a future in tech.',
      instructor: 'Prof. Fayal Mujawar',
      duration: '4 years'
    },
    {
      name: 'Psychology',
      description: 'Dive into human behavior, mental processes, and various psychological theories and approaches.',
      instructor: 'Prof. Benny',
      duration: '4 years'
    },
    {
      name: 'Economics',
      description: 'Understand the fundamentals of microeconomics and macroeconomics, analyzing markets and trends.',
      instructor: 'Prof. Tushar Mane',
      duration: '4 years'
    },
    {
      name: 'English Literature',
      description: 'Study classical and modern works of literature, enhancing your critical reading and writing skills.',
      instructor: 'Prof. Shreya Kadam',
      duration: '3 years'
    },
    {
      name: 'Biology',
      description: 'Investigate the life sciences, including cell biology, genetics, evolution, and ecosystems.',
      instructor: 'Prof. Richards',
      duration: '3 years'
    },
    {
      name: 'Philosophy',
      description: 'Examine philosophical thought from ancient to modern times, including ethical and metaphysical inquiries.',
      instructor: 'Prof. Sophia Miller',
      duration: '3 years'
    }
  ];

  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {courseDetails.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
