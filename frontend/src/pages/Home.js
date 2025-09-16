import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  ClockIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { t } = useTranslation();

  const features = [
    {
      name: t('home.features.aptitude'),
      description: 'Get personalized course and career recommendations based on your skills and interests',
      icon: ChartBarIcon,
    },
    {
      name: t('home.features.courses'),
      description: 'Explore comprehensive course details with career paths and financial prospects',
      icon: AcademicCapIcon,
    },
    {
      name: t('home.features.colleges'),
      description: 'Find government colleges near you with detailed information and comparisons',
      icon: BuildingLibraryIcon,
    },
    {
      name: t('home.features.timeline'),
      description: 'Never miss important deadlines for admissions, scholarships, and entrance exams',
      icon: ClockIcon,
    },
  ];

  const stats = [
    { name: 'Active Users', value: '10,000+' },
    { name: 'Course Recommendations', value: '500+' },
    { name: 'Government Colleges', value: '1,200+' },
    { name: 'Success Stories', value: '2,500+' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="gradient-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                {t('home.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
                {t('home.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    Go to Dashboard
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    {t('home.getStarted')}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                )}
                <Link
                  to="/success-stories"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-72 h-72 bg-white opacity-10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-96 h-96 bg-white opacity-5 rounded-full"></div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and insights you need to make informed decisions about your education and career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Engineering Student",
                content: "This platform helped me discover my passion for computer science and guided me to the perfect college. The recommendations were spot-on!",
                rating: 5
              },
              {
                name: "Rahul Patel",
                role: "Medical Student",
                content: "The timeline tracker was a lifesaver! I never missed any important deadlines for medical entrance exams and scholarships.",
                rating: 5
              },
              {
                name: "Anita Singh",
                role: "Parent",
                content: "The parent mode made it easy for me to understand and support my daughter's career choices. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect career path with our personalized guidance.
          </p>
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect()}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              {t('home.getStarted')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
