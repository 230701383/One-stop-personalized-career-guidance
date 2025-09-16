import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  ClockIcon, 
  ChartBarIcon,
  BookmarkIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const RecommendationsSection = () => {
  const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
  const onboardingData = JSON.parse(localStorage.getItem('onboardingData') || '{}');
  
  // Default recommendations if no quiz results
  const defaultRecommendations = [
    {
      name: "Computer Science Engineering",
      description: "Based on your interest in technology and problem-solving",
      match: 92,
      color: "blue"
    },
    {
      name: "Data Science",
      description: "Perfect blend of mathematics and technology",
      match: 88,
      color: "green"
    }
  ];

  const recommendations = quizResults.recommendations || defaultRecommendations;
  
  return (
    <div className="space-y-4">
      {recommendations.length > 0 ? (
        recommendations.slice(0, 3).map((course, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">{course.name}</h4>
            <p className="text-sm text-gray-600 mb-2">
              {course.description || `Based on your interests in ${onboardingData.interests?.slice(0, 2).join(' and ') || 'your selected fields'}`}
            </p>
            <div className="flex items-center justify-between">
              <Link 
                to="/course-trail" 
                state={{ courseName: course.name }}
                className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition-colors"
              >
                Start Course Trail
              </Link>
              <span className={`text-xs px-2 py-1 rounded ${
                course.match >= 90 ? 'bg-green-100 text-green-800' :
                course.match >= 80 ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {course.match}% Match
              </span>
              <Link to="/courses" className="text-primary-600 hover:text-primary-700 text-sm">
                Learn More
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-8">
          <AcademicCapIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Complete your profile to get personalized recommendations</p>
          <Link to="/onboarding" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            Complete Profile
          </Link>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { t } = useTranslation();
  const { user } = useAuth0();

  const quickActions = [
    { name: 'Explore Courses', href: '/courses', icon: AcademicCapIcon, color: 'bg-blue-500' },
    { name: 'Find Colleges', href: '/colleges', icon: BuildingLibraryIcon, color: 'bg-green-500' },
    { name: 'Check Timeline', href: '/timeline', icon: ClockIcon, color: 'bg-purple-500' },
    { name: 'View Profile', href: '/profile', icon: ChartBarIcon, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('dashboard.welcome')}{user?.name ? `, ${user.name}` : ''}!
          </h1>
          <p className="text-gray-600 mt-2">Here's your personalized career dashboard</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              to={action.href}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                <action.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
            </Link>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recommendations */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t('dashboard.recommendations')}</h3>
                <Link to="/courses" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              <RecommendationsSection />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t('dashboard.timeline')}</h3>
                <BellIcon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">JEE Main Registration</p>
                    <p className="text-xs text-gray-500">Ends in 15 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">NEET Application</p>
                    <p className="text-xs text-gray-500">Ends in 25 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Scholarship Deadline</p>
                    <p className="text-xs text-gray-500">Ends in 30 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Colleges */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{t('dashboard.colleges')}</h3>
                <Link to="/colleges" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">IIT Delhi</p>
                    <p className="text-xs text-gray-500">15 km away</p>
                  </div>
                  <BookmarkIcon className="h-4 w-4 text-gray-400 hover:text-primary-600 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Delhi University</p>
                    <p className="text-xs text-gray-500">8 km away</p>
                  </div>
                  <BookmarkIcon className="h-4 w-4 text-gray-400 hover:text-primary-600 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">NSUT Delhi</p>
                    <p className="text-xs text-gray-500">12 km away</p>
                  </div>
                  <BookmarkIcon className="h-4 w-4 text-gray-400 hover:text-primary-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
