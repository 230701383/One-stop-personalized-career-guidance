import React from 'react';
import { Link } from 'react-router-dom';

const TestCourseTrail = () => {
  const testCourses = [
    { name: 'Computer Science Engineering', description: 'For tech enthusiasts' },
    { name: 'Medical Science', description: 'For future doctors' },
    { name: 'Business Administration', description: 'For future leaders' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Test Course Trail Links</h1>
      <div className="space-y-4">
        {testCourses.map((course, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <Link
              to="/course-trail"
              state={{ courseName: course.name }}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Start {course.name} Trail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCourseTrail;
