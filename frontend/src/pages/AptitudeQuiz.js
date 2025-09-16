import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "What type of problems do you enjoy solving the most?",
      options: [
        "Mathematical equations and logical puzzles",
        "Creative design and artistic challenges",
        "Human behavior and social issues",
        "Technical and mechanical problems"
      ],
      category: "problem_solving"
    },
    {
      id: 2,
      question: "In a group project, you typically:",
      options: [
        "Take the leadership role and coordinate tasks",
        "Focus on research and analysis",
        "Handle creative and presentation aspects",
        "Manage timelines and ensure quality"
      ],
      category: "teamwork"
    },
    {
      id: 3,
      question: "Which subject did you find most engaging in school?",
      options: [
        "Mathematics and Physics",
        "Biology and Chemistry",
        "History and Literature",
        "Art and Music"
      ],
      category: "academic_interest"
    },
    {
      id: 4,
      question: "Your ideal work environment would be:",
      options: [
        "A modern office with latest technology",
        "A laboratory or research facility",
        "Outdoors or traveling frequently",
        "A creative studio or workshop"
      ],
      category: "work_environment"
    },
    {
      id: 5,
      question: "When learning something new, you prefer:",
      options: [
        "Hands-on practice and experimentation",
        "Reading detailed explanations and theory",
        "Visual demonstrations and examples",
        "Group discussions and collaboration"
      ],
      category: "learning_style"
    },
    {
      id: 6,
      question: "Which activity sounds most appealing to you?",
      options: [
        "Building and programming a robot",
        "Conducting a scientific experiment",
        "Writing a short story or article",
        "Designing a mobile app interface"
      ],
      category: "activity_preference"
    },
    {
      id: 7,
      question: "Your biggest strength is:",
      options: [
        "Analytical thinking and problem-solving",
        "Communication and interpersonal skills",
        "Creativity and innovation",
        "Organization and attention to detail"
      ],
      category: "strengths"
    },
    {
      id: 8,
      question: "In 10 years, you see yourself:",
      options: [
        "Leading a team or organization",
        "Specializing in a technical field",
        "Making a positive social impact",
        "Running your own business"
      ],
      category: "future_vision"
    },
    {
      id: 9,
      question: "Which type of content do you consume most?",
      options: [
        "Tech blogs and programming tutorials",
        "Scientific journals and research papers",
        "News and current affairs",
        "Art, design, and entertainment"
      ],
      category: "content_preference"
    },
    {
      id: 10,
      question: "What motivates you the most?",
      options: [
        "Solving complex challenges",
        "Helping others and making a difference",
        "Creating something beautiful or innovative",
        "Achieving financial success and stability"
      ],
      category: "motivation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const results = calculateResults();
    localStorage.setItem('quizResults', JSON.stringify(results));
    
    // Update user data in registered users
    const userEmail = localStorage.getItem('userEmail');
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (existingUsers[userEmail]) {
      existingUsers[userEmail].quizResults = results;
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    }
    
    setShowResults(true);
  };

  const calculateResults = () => {
    const onboardingData = JSON.parse(localStorage.getItem('onboardingData') || '{}');
    const interests = onboardingData.interests || [];
    
    // Simple scoring algorithm based on answers and interests
    const scores = {
      engineering: 0,
      medical: 0,
      business: 0,
      arts: 0,
      science: 0
    };

    // Score based on quiz answers
    Object.values(answers).forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      if (question) {
        switch (answerIndex) {
          case 0:
            if (question.category === 'problem_solving' || question.category === 'academic_interest') {
              scores.engineering += 2;
              scores.science += 1;
            }
            break;
          case 1:
            if (question.category === 'academic_interest') {
              scores.medical += 2;
              scores.science += 2;
            }
            break;
          case 2:
            scores.business += 1;
            scores.arts += 1;
            break;
          case 3:
            scores.arts += 2;
            break;
        }
      }
    });

    // Boost scores based on interests
    interests.forEach(interest => {
      if (interest.includes('Technology') || interest.includes('Engineering')) {
        scores.engineering += 3;
      }
      if (interest.includes('Medicine') || interest.includes('Healthcare')) {
        scores.medical += 3;
      }
      if (interest.includes('Business') || interest.includes('Management')) {
        scores.business += 3;
      }
      if (interest.includes('Arts') || interest.includes('Design')) {
        scores.arts += 3;
      }
      if (interest.includes('Science') || interest.includes('Research')) {
        scores.science += 3;
      }
    });

    // Generate recommendations
    const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a);
    
    return {
      topField: sortedScores[0][0],
      scores,
      recommendations: generateRecommendations(sortedScores)
    };
  };

  const generateRecommendations = (sortedScores) => {
    const recommendations = {
      engineering: [
        { name: "Computer Science Engineering", match: 95, duration: "4 years", scope: "Software Developer, Data Scientist, AI Engineer" },
        { name: "Electronics Engineering", match: 88, duration: "4 years", scope: "Hardware Engineer, IoT Developer, Robotics" },
        { name: "Mechanical Engineering", match: 82, duration: "4 years", scope: "Design Engineer, Manufacturing, Automotive" }
      ],
      medical: [
        { name: "MBBS", match: 94, duration: "5.5 years", scope: "Doctor, Surgeon, Medical Researcher" },
        { name: "Pharmacy", match: 87, duration: "4 years", scope: "Pharmacist, Drug Research, Healthcare" },
        { name: "Nursing", match: 83, duration: "4 years", scope: "Nurse, Healthcare Management, Public Health" }
      ],
      business: [
        { name: "Business Administration", match: 91, duration: "3 years", scope: "Manager, Consultant, Entrepreneur" },
        { name: "Commerce", match: 86, duration: "3 years", scope: "Accountant, Financial Analyst, Banking" },
        { name: "Economics", match: 82, duration: "3 years", scope: "Economist, Policy Analyst, Research" }
      ],
      arts: [
        { name: "Graphic Design", match: 89, duration: "3 years", scope: "Designer, Creative Director, Freelancer" },
        { name: "Fine Arts", match: 85, duration: "4 years", scope: "Artist, Art Teacher, Gallery Curator" },
        { name: "Mass Communication", match: 81, duration: "3 years", scope: "Journalist, Content Creator, PR" }
      ],
      science: [
        { name: "Physics", match: 90, duration: "3 years", scope: "Research Scientist, Professor, Data Analyst" },
        { name: "Chemistry", match: 87, duration: "3 years", scope: "Chemist, Lab Technician, Quality Control" },
        { name: "Mathematics", match: 84, duration: "3 years", scope: "Mathematician, Statistician, Actuary" }
      ]
    };

    return recommendations[sortedScores[0][0]] || recommendations.engineering;
  };

  if (showResults) {
    const results = JSON.parse(localStorage.getItem('quizResults'));
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
            <p className="text-gray-600">Here are your personalized course recommendations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {results.recommendations.map((course, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                    {course.match}% Match
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Career Scope:</strong> {course.scope}</p>
                </div>
                <button className="w-full mt-4 btn-primary">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-primary px-8"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Aptitude Assessment</h1>
          <p className="text-gray-600">Answer these questions to get personalized recommendations</p>
        </div>

        {/* Progress and Timer */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-700 bg-white px-3 py-1 rounded-full border">
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(question.id, index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  answers[question.id] === index
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    answers[question.id] === index
                      ? 'bg-primary-500 border-primary-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[question.id] === index && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-lg ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={answers[question.id] === undefined}
              className={`px-6 py-2 rounded-lg ${
                answers[question.id] !== undefined
                  ? 'btn-primary'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeQuiz;
