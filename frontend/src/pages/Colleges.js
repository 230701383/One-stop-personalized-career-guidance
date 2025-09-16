import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  StarIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ArrowTopRightOnSquareIcon,
  MapIcon,
  XMarkIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { collegesData, collegeCategories, collegeTypes, locations } from '../data/collegesData';

const Colleges = () => {
  const { t } = useTranslation();
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [routeInfo, setRouteInfo] = useState(null);
  const [loadingRoute, setLoadingRoute] = useState(false);

  // Initialize component with data and user location
  useEffect(() => {
    try {
      setColleges(collegesData);
      setFilteredColleges(collegesData);
      getUserLocation();
    } catch (error) {
      console.error('Error initializing component:', error);
    }
  }, []);

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied:', error);
          // Fallback to Delhi coordinates
          setUserLocation({ lat: 28.6139, lng: 77.2090 });
        }
      );
    } else {
      // Fallback to Delhi coordinates
      setUserLocation({ lat: 28.6139, lng: 77.2090 });
    }
  };

  // Calculate distance between two coordinates in kilometers using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return Math.round(distance * 10) / 10; // Round to 1 decimal
  };

  // Handle opening college details modal
  const openModal = (college) => {
    setSelectedCollege(college);
    setShowModal(true);
  };

  // Handle getting directions
  const handleGetDirections = (college) => {
    if (!userLocation || !college.coordinates) {
      alert('Location services are not available.');
      return;
    }
    
    const { lat, lng } = college.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  // Handle closing modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCollege(null);
  };

  // Main component render
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Colleges</h1>
          <p className="text-gray-600">Discover top colleges and universities across India</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {collegeCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Types</option>
              {collegeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredColleges.length} of {colleges.length} colleges
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {college.category === 'Engineering' ? (
                      <BuildingOfficeIcon className="h-5 w-5" />
                    ) : (
                      <AcademicCapIcon className="h-5 w-5" />
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      college.type === 'Government' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {college.type}
                    </span>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    NIRF #{college.ranking?.nirf || 'N/A'}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{college.shortName || college.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{college.name}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {college.location}
                  </div>
                  {college.fees?.total && (
                    <div className="flex items-center text-sm text-gray-600">
                      <CurrencyRupeeIcon className="h-4 w-4 mr-2" />
                      {college.fees.total}
                    </div>
                  )}
                  {college.placements?.averagePackage && (
                    <div className="flex items-center text-sm text-gray-600">
                      <ChartBarIcon className="h-4 w-4 mr-2" />
                      Avg Package: {college.placements.averagePackage}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => openModal(college)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Details
                  </button>
                  {college.website && (
                    <a
                      href={college.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center mt-2 text-blue-600 hover:underline text-sm"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* College Details Modal */}
        {showModal && selectedCollege && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 hover:scale-100 border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with white background */}
              <div className="bg-white p-6 border-b border-gray-200 sticky top-0 z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCollege.name}</h2>
                    <div className="flex items-center mt-2 text-gray-600">
                      <BuildingOfficeIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{selectedCollege.location}</span>
                      {selectedCollege.established && (
                        <span className="ml-3 flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                          Est. {selectedCollege.established}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedCollege.ranking?.nirf && (
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <div className="text-2xl font-bold text-blue-700">#{selectedCollege.ranking.nirf}</div>
                      <div className="text-sm text-gray-600">NIRF Rank</div>
                    </div>
                  )}
                  {selectedCollege.placements?.averagePackage && (
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <div className="text-xl font-bold text-green-700">{selectedCollege.placements.averagePackage}</div>
                      <div className="text-sm text-gray-600">Avg Package</div>
                    </div>
                  )}
                  {selectedCollege.fees?.total && (
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                      <div className="text-xl font-bold text-purple-700">{selectedCollege.fees.total}</div>
                      <div className="text-sm text-gray-600">Total Fees</div>
                    </div>
                  )}
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-5 w-5 ${i < (selectedCollege.rating || 4) ? 'text-amber-400' : 'text-gray-300'}`} 
                          fill={i < (selectedCollege.rating || 4) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="ml-2 text-gray-700 font-medium">
                        {selectedCollege.rating || 4.0}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">College Rating</div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 border-b pb-6 mb-2">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Info</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <AcademicCapIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span>{selectedCollege.type}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <ChartBarIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span>{selectedCollege.category}</span>
                      </div>
                      {selectedCollege.website && (
                        <div className="flex items-center">
                          <GlobeAltIcon className="h-5 w-5 text-blue-600 mr-2" />
                          <a 
                            href={selectedCollege.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {selectedCollege.website.replace(/^https?:\/\//, '')}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h3>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={selectedCollege.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <GlobeAltIcon className="h-4 w-4 mr-1.5" />
                        Visit Website
                      </a>
                      <button
                        onClick={() => handleGetDirections(selectedCollege)}
                        className="flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        <MapIcon className="h-4 w-4 mr-1.5" />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fees */}
                {selectedCollege.fees && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <CurrencyRupeeIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Fee Structure</h3>
                    </div>
                    <div className="space-y-4">
                      {selectedCollege.fees.tuition && (
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Tuition Fee</p>
                            <p className="text-sm text-gray-600">Per Academic Year</p>
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{selectedCollege.fees.tuition}</span>
                        </div>
                      )}
                      {selectedCollege.fees.hostel && (
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Hostel & Mess</p>
                            <p className="text-sm text-gray-600">Annual Charges</p>
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{selectedCollege.fees.hostel}</span>
                        </div>
                      )}
                      {selectedCollege.fees.total && (
                        <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-100 rounded-lg mt-2">
                          <p className="font-medium text-blue-800">Total Estimated Cost</p>
                          <span className="text-xl font-bold text-blue-700">{selectedCollege.fees.total}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Placements */}
                {selectedCollege.placements && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-green-100 rounded-lg mr-3">
                        <ChartBarIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Placement Statistics</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {selectedCollege.placements.averagePackage && (
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="text-2xl font-bold text-green-700 mb-1">
                            {selectedCollege.placements.averagePackage}
                          </div>
                          <p className="text-sm text-gray-600">Average Package</p>
                          <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      )}
                      
                      {selectedCollege.placements.highestPackage && (
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="text-2xl font-bold text-blue-700 mb-1">
                            {selectedCollege.placements.highestPackage}
                          </div>
                          <p className="text-sm text-gray-600">Highest Package</p>
                          <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                      )}
                      
                      {selectedCollege.placements.placementRate && (
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="text-2xl font-bold text-purple-700 mb-1">
                            {selectedCollege.placements.placementRate}%
                          </div>
                          <p className="text-sm text-gray-600">Placement Rate</p>
                          <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-purple-500 rounded-full" 
                              style={{ width: `${selectedCollege.placements.placementRate}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {selectedCollege.placements.topRecruiters?.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-3">Top Recruiting Companies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCollege.placements.topRecruiters.map((recruiter, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1.5 bg-white text-sm font-medium text-gray-700 rounded-full border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                            >
                              {recruiter}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Specializations */}
                {selectedCollege.specializations?.length > 0 && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                        <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Available Programs</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-gray-600 mb-4">
                        The college offers various undergraduate and postgraduate programs across multiple disciplines. 
                        Here are the major specializations available:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedCollege.specializations.map((spec, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="ml-2 text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* College Overview */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Campus & Facilities</h3>
                  </div>
                  
                  <div className="prose prose-indigo max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedCollege.description || 'This prestigious institution offers state-of-the-art facilities and a vibrant campus life that fosters academic excellence and personal growth.'}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-900">Campus Highlights</h4>
                        <ul className="space-y-3">
                          {selectedCollege.campusSize && (
                            <li className="flex items-start">
                              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">Sprawling campus spanning {selectedCollege.campusSize}</span>
                            </li>
                          )}
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Modern classrooms with smart learning facilities</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Well-equipped laboratories and research centers</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">Extensive library with digital resources</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium text-gray-900">Key Features</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedCollege.faculties && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-gray-500">Faculty</p>
                              <p className="text-lg font-semibold text-gray-900">{selectedCollege.faculties}+</p>
                              <p className="text-xs text-gray-500">Experienced Professors</p>
                            </div>
                          )}
                          
                          {selectedCollege.students && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-gray-500">Students</p>
                              <p className="text-lg font-semibold text-gray-900">{selectedCollege.students}+</p>
                              <p className="text-xs text-gray-500">Enrolled Students</p>
                            </div>
                          )}
                          
                          {selectedCollege.accreditation && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm font-medium text-gray-500">Accreditation</p>
                              <p className="text-sm font-medium text-gray-900">{selectedCollege.accreditation}</p>
                            </div>
                          )}
                          
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-gray-500">Hostel</p>
                            <p className="text-sm font-medium text-gray-900">Available</p>
                            <p className="text-xs text-gray-500">Separate for Boys & Girls</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-t border-gray-200 sticky bottom-0">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">Interested in this college?</p>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Request more information</a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                    <button
                      onClick={closeModal}
                      className="px-5 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleGetDirections(selectedCollege)}
                      className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                    >
                      <MapIcon className="h-5 w-5 mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No colleges found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;
