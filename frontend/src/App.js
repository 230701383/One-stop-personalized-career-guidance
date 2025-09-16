import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import AptitudeQuiz from './pages/AptitudeQuiz';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import Colleges from './pages/Colleges.js';
import Timeline from './pages/Timeline';
import Scholarships from './pages/Scholarships';
import ParentMode from './pages/ParentMode';
import SuccessStories from './pages/SuccessStories';
import CourseTrail from './pages/CourseTrail';
import TestCourseTrail from './pages/TestCourseTrail';
import Loading from './components/UI/Loading';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/quiz" element={<AptitudeQuiz />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          <Route path="/colleges" element={
            <ProtectedRoute>
              <Colleges />
            </ProtectedRoute>
          } />
          <Route path="/timeline" element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          } />
          <Route path="/course-trail" element={<CourseTrail />} />
          <Route path="/scholarships" element={
            <ProtectedRoute>
              <Scholarships />
            </ProtectedRoute>
          } />
          <Route path="/parent-mode" element={
            <ProtectedRoute>
              <ParentMode />
            </ProtectedRoute>
          } />
          <Route path="/test-course-trail" element={<TestCourseTrail />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
