import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    class: '',
    marks: '',
    cutoff: '',
    interests: [],
    location: '',
    budget: ''
  });
  const navigate = useNavigate();

  const interests = [
    'Technology & Programming', 'Medicine & Healthcare', 'Engineering', 'Business & Management',
    'Arts & Design', 'Science & Research', 'Law & Legal Studies', 'Education & Teaching',
    'Sports & Fitness', 'Media & Communication', 'Finance & Banking', 'Agriculture'
  ];

  const steps = [
    {
      title: 'Personal Information',
      fields: ['name', 'age', 'class']
    },
    {
      title: 'Academic Details',
      fields: ['marks', 'cutoff', 'location']
    },
    {
      title: 'Interests & Preferences',
      fields: ['interests', 'budget']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestToggle = (interest) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: updatedInterests
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save onboarding data and navigate to quiz
      localStorage.setItem('onboardingData', JSON.stringify(formData));
      localStorage.setItem('onboardingComplete', 'true');
      
      // Update user data in registered users
      const userEmail = localStorage.getItem('userEmail');
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
      if (existingUsers[userEmail]) {
        existingUsers[userEmail].onboardingData = formData;
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
      }
      
      navigate('/quiz');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your age"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Class/Grade</label>
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="">Select your class</option>
                <option value="10th">10th Grade</option>
                <option value="11th">11th Grade</option>
                <option value="12th">12th Grade</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Post Graduate</option>
              </select>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Recent Exam Marks (%)</label>
              <input
                type="number"
                name="marks"
                value={formData.marks}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your percentage"
                max="100"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cutoff/Rank</label>
              <input
                type="text"
                name="cutoff"
                value={formData.cutoff}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter cutoff or rank"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your city/state"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Select Your Interests (Choose multiple)</label>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-3 text-sm rounded-lg border transition-colors ${
                      formData.interests.includes(interest)
                        ? 'bg-primary-100 border-primary-500 text-primary-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (Annual)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Select budget range</option>
                <option value="0-50k">₹0 - ₹50,000</option>
                <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                <option value="5L+">₹5,00,000+</option>
              </select>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Let's Get to Know You</h1>
          <p className="text-gray-600">Help us personalize your career recommendations</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{steps[currentStep].title}</h2>
          
          {renderStep()}

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              Previous
            </button>
            
            <button
              onClick={handleNext}
              className="flex items-center btn-primary"
            >
              {currentStep === steps.length - 1 ? 'Start Quiz' : 'Next'}
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
