import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  CurrencyRupeeIcon,
  StarIcon,
  BookmarkIcon,
  FunnelIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  const { t } = useTranslation();
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    duration: 'all',
    level: 'all'
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setCourses(coursesData);
    setFilteredCourses(coursesData);
  }, []);

  useEffect(() => {
    let filtered = courses;

    if (filters.category !== 'all') {
      filtered = filtered.filter(course => course.category === filters.category);
    }
    if (filters.duration !== 'all') {
      filtered = filtered.filter(course => course.duration.includes(filters.duration));
    }
    if (filters.level !== 'all') {
      filtered = filtered.filter(course => course.level === filters.level);
    }

    setFilteredCourses(filtered);
  }, [filters, courses]);

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const getRecruitersForCourse = (category, courseName) => {
    // Course-specific recruiters
    const courseRecruiters = {
      'Computer Science Engineering': ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'TCS', 'Infosys'],
      'Mechanical Engineering': ['Saint-Gobain', 'Hitachi', 'Siemens', 'General Electric', 'Bosch', 'Mahindra', 'Tata Motors', 'L&T'],
      'Electrical Engineering': ['ABB', 'Schneider Electric', 'Siemens', 'General Electric', 'Honeywell', 'Emerson', 'BHEL', 'PowerGrid'],
      'Civil Engineering': ['L&T', 'Shapoorji Pallonji', 'DLF', 'Godrej Properties', 'Tata Projects', 'Hindustan Construction', 'IRCON', 'NHAI'],
      'Chemical Engineering': ['Reliance Industries', 'ONGC', 'Indian Oil', 'BPCL', 'Hindustan Petroleum', 'UPL', 'Tata Chemicals', 'Asian Paints'],
      'Electronics & Communication Engineering': ['Qualcomm', 'Intel', 'Broadcom', 'Samsung', 'LG', 'Sony', 'Ericsson', 'Nokia'],
      'Information Technology': ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant', 'Accenture', 'IBM'],
      'Aerospace Engineering': ['ISRO', 'HAL', 'DRDO', 'Boeing', 'Airbus', 'Rolls-Royce', 'Safran', 'Lockheed Martin'],
      'Biomedical Engineering': ['Medtronic', 'Johnson & Johnson', 'GE Healthcare', 'Philips Healthcare', 'Siemens Healthineers', 'Abbott', 'Boston Scientific', 'Stryker'],
      'Environmental Engineering': ['Veolia', 'Suez', 'Thermax', 'Ion Exchange', 'VA Tech Wabag', 'ERM', 'AECOM', 'Jacobs'],
      'Petroleum Engineering': ['ONGC', 'Oil India', 'Reliance Industries', 'Cairn India', 'Schlumberger', 'Halliburton', 'Baker Hughes', 'Weatherford'],
      'Mining Engineering': ['Coal India', 'NMDC', 'Vedanta', 'Hindalco', 'Tata Steel', 'JSW Steel', 'SAIL', 'Adani Group'],
      'Agricultural Engineering': ['John Deere', 'Mahindra Tractors', 'TAFE', 'Escorts', 'Sonalika', 'New Holland', 'Case IH', 'Kubota'],
      'Industrial Engineering': ['Toyota', 'Maruti Suzuki', 'Hyundai', 'Honda', 'Ford', 'General Motors', 'Bajaj Auto', 'Hero MotoCorp'],
      'Materials Science Engineering': ['Tata Steel', 'JSW Steel', 'SAIL', 'Hindalco', 'Vedanta', 'Jindal Steel', 'NALCO', 'Bharat Aluminium'],
      'Nuclear Engineering': ['NPCIL', 'BARC', 'IGCAR', 'DAE', 'Westinghouse', 'Areva', 'Rosatom', 'CNNC'],
      'Ocean Engineering': ['Mazagon Dock', 'Cochin Shipyard', 'GRSE', 'Goa Shipyard', 'Rolls-Royce Marine', 'Wärtsilä', 'MAN Energy', 'Caterpillar Marine'],
      'Textile Engineering': ['Arvind Mills', 'Welspun', 'Trident Group', 'Vardhman Textiles', 'Raymond', 'Aditya Birla Fashion', 'Grasim Industries', 'Indo Count'],
      'Food Technology': ['Nestlé', 'Unilever', 'ITC', 'Britannia', 'Parle', 'Amul', 'Mother Dairy', 'McCain Foods'],
      'Biotechnology Engineering': ['Biocon', 'Dr. Reddy\'s', 'Cipla', 'Sun Pharma', 'Lupin', 'Glenmark', 'Aurobindo Pharma', 'Cadila Healthcare'],
      'MBBS (Bachelor of Medicine)': ['AIIMS', 'Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Manipal Hospitals', 'Narayana Health', 'Medanta', 'PGIMER'],
      'BDS (Bachelor of Dental Surgery)': ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Clove Dental', 'Dental Corp', 'My Dentist', 'Sabka Dentist', 'Dentzz'],
      'BAMS (Ayurvedic Medicine)': ['Patanjali Ayurved', 'Dabur', 'Himalaya Drug', 'Baidyanath', 'Zandu Pharmaceuticals', 'Arya Vaidya Sala', 'Kerala Ayurveda', 'Jiva Ayurveda'],
      'BHMS (Homeopathic Medicine)': ['Dr. Batra\'s', 'Bakson Drugs', 'SBL Pharmaceuticals', 'Reckeweg', 'Schwabe India', 'Adel Pekana', 'Heel India', 'Boiron'],
      'B.Pharm (Bachelor of Pharmacy)': ['Sun Pharma', 'Dr. Reddy\'s', 'Cipla', 'Lupin', 'Aurobindo Pharma', 'Glenmark', 'Cadila Healthcare', 'Torrent Pharma'],
      'Business Administration (MBA)': ['McKinsey & Co', 'BCG', 'Bain & Co', 'Deloitte', 'PwC', 'EY', 'KPMG', 'Accenture'],
      'Bachelor of Business Administration (BBA)': ['Reliance Industries', 'Tata Group', 'Aditya Birla Group', 'Mahindra Group', 'Bajaj Group', 'Godrej Group', 'ITC', 'Hindustan Unilever'],
      'Bachelor of Commerce (B.Com)': ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra Bank', 'Yes Bank', 'IndusInd Bank', 'Federal Bank'],
      'Chartered Accountancy (CA)': ['Deloitte', 'PwC', 'EY', 'KPMG', 'Grant Thornton', 'BDO India', 'RSM India', 'Nexia International'],
      'Company Secretary (CS)': ['Tata Group', 'Reliance Industries', 'Infosys', 'Wipro', 'HDFC Bank', 'ICICI Bank', 'Mahindra Group', 'Aditya Birla Group'],
      'Data Science': ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Uber', 'Airbnb', 'Spotify'],
      'Artificial Intelligence': ['Google', 'Microsoft', 'Amazon', 'Meta', 'OpenAI', 'NVIDIA', 'Tesla', 'DeepMind'],
      'Cybersecurity': ['IBM', 'Cisco', 'Palo Alto Networks', 'CrowdStrike', 'FireEye', 'Symantec', 'McAfee', 'Trend Micro'],
      'Cloud Computing': ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'Salesforce', 'VMware', 'Red Hat'],
      'Blockchain Technology': ['IBM', 'Microsoft', 'JPMorgan Chase', 'Goldman Sachs', 'Coinbase', 'Binance', 'ConsenSys', 'Ripple'],
      'Graphic Design': ['Ogilvy', 'Leo Burnett', 'Publicis', 'Saatchi & Saatchi', 'DDB Mudra', 'McCann', 'Havas', 'Wunderman Thompson'],
      'Fine Arts': ['National Gallery', 'Lalit Kala Akademi', 'India Habitat Centre', 'Kiran Nadar Museum', 'Devi Art Foundation', 'Gallery Espace', 'Vadehra Art Gallery', 'Chemould Prescott Road'],
      'Fashion Design': ['Reliance Brands', 'Aditya Birla Fashion', 'Raymond', 'Arvind Fashions', 'Shoppers Stop', 'Lifestyle', 'Myntra', 'Ajio'],
      'Interior Design': ['Godrej Interio', 'Livspace', 'Urban Ladder', 'Pepperfry', 'HomeLane', 'Design Cafe', 'Bonito Designs', 'Spacewood'],
      'Animation & VFX': ['Technicolor', 'Prime Focus', 'Reliance MediaWorks', 'DQ Entertainment', 'Toonz Animation', 'Graphiti Multimedia', 'Maya Entertainment', 'Red Chillies VFX']
    };

    // Category-based fallback recruiters
    const categoryRecruiters = {
      'Engineering': ['TCS', 'Infosys', 'Google', 'Microsoft', 'Amazon', 'IBM', 'Wipro', 'Accenture'],
      'Medical': ['AIIMS', 'Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Manipal Hospitals', 'Narayana Health', 'Medanta', 'PGIMER'],
      'Business': ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra Bank', 'Yes Bank', 'IndusInd Bank', 'Federal Bank'],
      'Technology': ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Uber', 'Airbnb'],
      'Arts': ['Ogilvy', 'Leo Burnett', 'Publicis', 'Saatchi & Saatchi', 'DDB Mudra', 'McCann', 'Havas', 'Wunderman Thompson']
    };

    return courseRecruiters[courseName] || categoryRecruiters[category] || ['TCS', 'Infosys', 'Google', 'Microsoft', 'Amazon', 'IBM', 'Wipro', 'Accenture'];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="section-title">{t('courses.title')}</h1>
          <p className="text-gray-600">Discover courses tailored to your interests and career goals</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <FunnelIcon className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="input-field"
              >
                <option value="all">All Categories</option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
                <option value="Arts">Arts</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="input-field"
              >
                <option value="all">All Durations</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5+ Years</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={filters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
                className="input-field"
              >
                <option value="all">All Levels</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            // Check if this course is in user's recommendations
            const quizResults = JSON.parse(localStorage.getItem('quizResults') || '{}');
            const userRecommendations = quizResults.recommendations || [];
            const isRecommended = userRecommendations.some(rec => rec.name === course.name);
            const recommendedCourse = userRecommendations.find(rec => rec.name === course.name);
            const displayMatch = isRecommended ? recommendedCourse.match : course.match;
            
            return (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <AcademicCapIcon className="h-16 w-16 text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      displayMatch >= 90 ? 'bg-green-100 text-green-800' :
                      displayMatch >= 80 ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {displayMatch}% Match
                    </span>
                    {isRecommended && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Recommended
                      </span>
                    )}
                  </div>
                  <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-primary-600 cursor-pointer" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.category} • {course.level}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <ClockIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 ml-1">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <CurrencyRupeeIcon className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 ml-1">{course.fee}</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Career Scope:</strong> {course.careerScope}</p>
                  <p><strong>Financial Scope:</strong> {course.financialScope}</p>
                </div>
                
                <button 
                  onClick={() => handleViewDetails(course)}
                  className="w-full btn-primary"
                >
                  View Details
                </button>
              </div>
            </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <AcademicCapIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Course Detail Modal */}
        {showModal && selectedCourse && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.name}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Course Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{selectedCourse.category}</h3>
                          <p className="text-primary-100">{selectedCourse.level} • {selectedCourse.duration}</p>
                        </div>
                        <AcademicCapIcon className="h-12 w-12 text-white opacity-80" />
                      </div>
                      <p className="text-lg">{selectedCourse.objectives}</p>
                    </div>

                    {/* Detailed Information */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Prerequisites</h4>
                        <p className="text-gray-600">{selectedCourse.prerequisites}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Opportunities</h4>
                        <p className="text-gray-600 mb-3">{selectedCourse.careerScope}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h5 className="font-medium text-green-800 mb-2">Financial Scope</h5>
                            <p className="text-green-700 text-sm">{selectedCourse.financialScope}</p>
                          </div>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h5 className="font-medium text-blue-800 mb-2">Future Scope</h5>
                            <p className="text-blue-700 text-sm">{selectedCourse.futureScope}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Curriculum</h4>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Core Subjects</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Fundamentals & Theory</li>
                                <li>• Practical Applications</li>
                                <li>• Industry Projects</li>
                                <li>• Research Methodology</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Specializations</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Advanced Topics</li>
                                <li>• Emerging Technologies</li>
                                <li>• Industry Partnerships</li>
                                <li>• Internship Programs</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Top Recruiters</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {getRecruitersForCourse(selectedCourse.category, selectedCourse.name).map((company, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                              <BuildingOfficeIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                              <p className="text-sm font-medium text-gray-700">{company}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Stats */}
                  <div className="space-y-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Stats</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <StarIcon className="h-5 w-5 text-yellow-400 fill-current mr-2" />
                            <span className="text-sm text-gray-600">Rating</span>
                          </div>
                          <span className="font-semibold text-gray-900">{selectedCourse.rating}/5</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <UserGroupIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">Students</span>
                          </div>
                          <span className="font-semibold text-gray-900">{selectedCourse.students?.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <CurrencyRupeeIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">Fee</span>
                          </div>
                          <span className="font-semibold text-gray-900">{selectedCourse.fee}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <ChartBarIcon className="h-5 w-5 text-gray-400 mr-2" />
                            <span className="text-sm text-gray-600">Match</span>
                          </div>
                          <span className={`font-semibold ${
                            selectedCourse.match >= 90 ? 'text-green-600' :
                            selectedCourse.match >= 80 ? 'text-blue-600' :
                            'text-gray-600'
                          }`}>{selectedCourse.match}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-primary-900 mb-3">Admission Process</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                          <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</div>
                          <p className="text-primary-800">Check eligibility criteria</p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</div>
                          <p className="text-primary-800">Prepare for entrance exams</p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</div>
                          <p className="text-primary-800">Submit application form</p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</div>
                          <p className="text-primary-800">Attend counseling process</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors">
                        <BookmarkIcon className="h-4 w-4 inline mr-2" />
                        Save Course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
