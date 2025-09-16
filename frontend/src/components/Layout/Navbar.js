import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/', current: location.pathname === '/' },
    { name: t('nav.dashboard'), href: '/dashboard', current: location.pathname === '/dashboard', protected: true },
    { name: t('nav.courses'), href: '/courses', current: location.pathname === '/courses', protected: true },
    { name: t('nav.colleges'), href: '/colleges', current: location.pathname === '/colleges', protected: true },
    { name: t('nav.timeline'), href: '/timeline', current: location.pathname === '/timeline', protected: true },
    { name: 'Course Trail', href: '/course-trail', current: location.pathname === '/course-trail', protected: true },
    { name: t('nav.scholarships'), href: '/scholarships', current: location.pathname === '/scholarships', protected: true },
    { name: t('nav.successStories'), href: '/success-stories', current: location.pathname === '/success-stories' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'es', name: 'Español' }
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setShowLanguageMenu(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Career Advisor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.protected && !isAuthenticated) return null;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-900'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center text-gray-500 hover:text-gray-900 p-2 rounded-lg"
              >
                <GlobeAltIcon className="h-5 w-5" />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        i18n.language === lang.code
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth buttons */}
            {localStorage.getItem('isAuthenticated') ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center text-gray-500 hover:text-gray-900"
                >
                  <UserCircleIcon className="h-8 w-8" />
                  <span className="ml-2 text-sm font-medium">{localStorage.getItem('userName') || 'User'}</span>
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('userName');
                    localStorage.removeItem('userEmail');
                    window.location.href = '/';
                  }}
                  className="btn-secondary"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn-primary"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => {
              if (item.protected && !isAuthenticated) return null;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  } block px-3 py-2 text-base font-medium rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* Mobile Auth */}
            <div className="pt-4 border-t">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <Link
                    to="/profile"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {user?.picture ? (
                      <img
                        className="h-6 w-6 rounded-full mr-2"
                        src={user.picture}
                        alt={user.name}
                      />
                    ) : (
                      <UserCircleIcon className="h-6 w-6 mr-2" />
                    )}
                    {user?.name}
                  </Link>
                  <button
                    onClick={() => {
                      logout({ returnTo: window.location.origin });
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {t('nav.logout')}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    loginWithRedirect();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-primary-600 hover:bg-primary-50 rounded-md"
                >
                  {t('nav.login')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
