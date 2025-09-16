import React, { useState, useEffect } from 'react';
import { BellIcon, BellAlertIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SeatAvailabilityAlert = ({ collegeId, collegeName }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    course: '',
    category: 'General',
  });

  // Check if user is already subscribed
  useEffect(() => {
    const subscriptions = JSON.parse(localStorage.getItem('seatAlerts') || '{}');
    setIsSubscribed(!!subscriptions[collegeId]);
  }, [collegeId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subscriptions = JSON.parse(localStorage.getItem('seatAlerts') || '{}');
    
    subscriptions[collegeId] = {
      collegeName,
      ...formData,
      createdAt: new Date().toISOString(),
      notified: false
    };
    
    localStorage.setItem('seatAlerts', JSON.stringify(subscriptions));
    setIsSubscribed(true);
    setShowForm(false);
    
    // In a real app, you would send this data to your backend
    console.log('Subscription saved:', subscriptions[collegeId]);
  };

  const handleUnsubscribe = () => {
    const subscriptions = JSON.parse(localStorage.getItem('seatAlerts') || '{}');
    delete subscriptions[collegeId];
    localStorage.setItem('seatAlerts', JSON.stringify(subscriptions));
    setIsSubscribed(false);
  };

  return (
    <div className="mt-4">
      {isSubscribed ? (
        <div className="flex items-center justify-between bg-green-50 text-green-700 p-3 rounded-lg">
          <div className="flex items-center">
            <BellAlertIcon className="h-5 w-5 mr-2" />
            <span>You'll be notified when seats are available</span>
          </div>
          <button 
            onClick={handleUnsubscribe}
            className="text-green-700 hover:text-green-900"
            title="Unsubscribe"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      ) : showForm ? (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-3">Get Seat Availability Alerts</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., B.Tech Computer Science"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="EWS">EWS</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Set Alert
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <BellIcon className="h-4 w-4 mr-2" />
          Alert Me for Seat Availability
        </button>
      )}
    </div>
  );
};

export default SeatAvailabilityAlert;
