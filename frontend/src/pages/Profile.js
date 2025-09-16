import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  UserCircleIcon, 
  AcademicCapIcon, 
  ChartBarIcon,
  MapPinIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  PencilIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Profile = () => {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  
  // Get user data from localStorage
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'User');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');
  const [editableData, setEditableData] = useState(JSON.parse(localStorage.getItem('onboardingData') || '{}'));
  const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');

  const handleInputChange = (field, value) => {
    setEditableData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Update localStorage with new data
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('onboardingData', JSON.stringify(editableData));
    
    // Update registered users data if exists
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (registeredUsers[userEmail]) {
      registeredUsers[userEmail] = {
        ...registeredUsers[userEmail],
        name: userName,
        onboardingData: editableData
      };
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }
    
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    // Reset to original data
    setUserName(localStorage.getItem('userName') || 'User');
    setUserEmail(localStorage.getItem('userEmail') || '');
    setEditableData(JSON.parse(localStorage.getItem('onboardingData') || '{}'));
    setIsEditing(false);
  };
  
  const profileStats = [
    { label: 'Quiz Score', value: `${Object.keys(quizResults).length > 0 ? '10/10' : 'Not taken'}`, icon: CheckCircleIcon },
    { label: 'Recommendations', value: `${quizResults.recommendations?.length || 0}`, icon: AcademicCapIcon },
    { label: 'Interests', value: `${editableData.interests?.length || 0}`, icon: StarIcon },
    { label: 'Profile Complete', value: Object.keys(editableData).length > 0 ? '100%' : '20%', icon: ChartBarIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="section-title">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <div className="card text-center">
              <div className="mb-6">
                <UserCircleIcon className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900">{userName}</h2>
                <p className="text-sm text-gray-500 mt-2">
                  {editableData.class || 'Student'} • {editableData.location || 'Location not set'}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {profileStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="w-full btn-primary"
                >
                  <PencilIcon className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="space-y-2">
                  <button 
                    onClick={handleSave}
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <CheckCircleIcon className="h-4 w-4 mr-2 inline" />
                    Save Changes
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userEmail}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editableData.age || ''}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      min="1"
                      max="100"
                    />
                  ) : (
                    <p className="text-gray-900">{editableData.age || 'Not specified'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class/Grade</label>
                  {isEditing ? (
                    <select
                      value={editableData.class || ''}
                      onChange={(e) => handleInputChange('class', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Class</option>
                      <option value="10th">10th</option>
                      <option value="11th">11th</option>
                      <option value="12th">12th</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">{editableData.class || 'Not specified'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editableData.location || ''}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your location"
                    />
                  ) : (
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-gray-900">{editableData.location || 'Not specified'}</p>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  {isEditing ? (
                    <select
                      value={editableData.budget || ''}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select Budget</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                      <option value="₹2,00,000 - ₹5,00,000">₹2,00,000 - ₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                  ) : (
                    <div className="flex items-center">
                      <CurrencyRupeeIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-gray-900">{editableData.budget || 'Not specified'}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Recent Marks</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={editableData.marks || ''}
                      onChange={(e) => handleInputChange('marks', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      min="0"
                      max="100"
                      placeholder="Enter percentage"
                    />
                  ) : (
                    <p className="text-gray-900">{editableData.marks ? `${editableData.marks}%` : 'Not specified'}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cutoff/Rank</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editableData.cutoff || ''}
                      onChange={(e) => handleInputChange('cutoff', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter cutoff or rank"
                    />
                  ) : (
                    <p className="text-gray-900">{editableData.cutoff || 'Not specified'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interests & Preferences</h3>
              {editableData.interests && editableData.interests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {editableData.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No interests specified</p>
              )}
            </div>

            {/* Quiz Results & Recommendations */}
            {quizResults.recommendations && (
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Recommendations</h3>
                <div className="space-y-4">
                  {quizResults.recommendations.slice(0, 3).map((course, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{course.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded ${
                          course.match >= 90 ? 'bg-green-100 text-green-800' :
                          course.match >= 80 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.match}% Match
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Duration: {course.duration}</p>
                      <p className="text-sm text-gray-600">Career Scope: {course.scope}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quiz Performance */}
            {Object.keys(quizResults).length > 0 && (
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aptitude Assessment Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Top Field</label>
                    <p className="text-gray-900 capitalize">{quizResults.topField || 'Not available'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quiz Completed</label>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                      <p className="text-gray-900">Yes</p>
                    </div>
                  </div>
                </div>
                
                {quizResults.scores && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Field Scores</label>
                    <div className="space-y-2">
                      {Object.entries(quizResults.scores).map(([field, score]) => (
                        <div key={field} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 capitalize">{field}</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-primary-600 h-2 rounded-full" 
                                style={{ width: `${Math.min((score / 10) * 100, 100)}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
