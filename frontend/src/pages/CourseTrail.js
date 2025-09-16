import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Base course trail data structure
const getCourseTrailData = (courseName = '') => {
  // Default generic trail data
  let trailData = [
    {
      day: 1,
      title: `Introduction to ${courseName || 'Computer Science'}`,
      description: 'Understand the fundamentals of computer science and what to expect from this learning path',
      duration: '45 min',
      type: 'video',
      content: 'https://www.youtube.com/embed/8mAITcNt710?start=0', // CS50 Introduction
      resources: [
        { type: 'video', title: 'CS50: Intro to Computer Science', url: 'https://www.youtube.com/watch?v=8mAITcNt710' },
        { type: 'article', title: 'What is Computer Science?', url: 'https://www.mtu.edu/cs/what/' }
      ],
      quiz: {
        questions: [
          {
            id: 1,
            question: 'What is the main focus of computer science?',
            options: [
              'Only programming',
              'Only hardware',
              'Problem solving and computation',
              'Only internet technologies'
            ],
            correctAnswer: 2,
            explanation: 'Computer science is fundamentally about problem solving and computation, which includes but is not limited to programming and hardware.'
          },
          {
            id: 2,
            question: 'Which of these is NOT a programming language?',
            options: ['Python', 'Java', 'HTML', 'C++'],
            correctAnswer: 2,
            explanation: 'HTML is a markup language used for creating web pages, not a programming language.'
          }
        ]
      },
      exercise: {
        title: 'First Steps',
        description: 'Write a simple program that prints "Hello, World!" in any programming language of your choice.',
        solution: '// Example in JavaScript\nconsole.log("Hello, World!");',
        resources: [
          { type: 'tutorial', title: 'Learn Python', url: 'https://www.learnpython.org/' },
          { type: 'tutorial', title: 'JavaScript Basics', url: 'https://javascript.info/first-steps' }
        ]
      }
    }
  ];

  // Add course-specific content based on the course name
  if (courseName.toLowerCase().includes('computer science') || 
      courseName.toLowerCase().includes('engineering')) {
    // Add CS/Engineering specific content
    trailData = trailData.concat([
      // Day 2: Programming Fundamentals (already implemented)
      {
        day: 2,
        title: 'Programming Fundamentals',
        description: 'Master the building blocks of programming',
        duration: '60 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/8hly31xKli0?start=0',
        resources: [
          { type: 'video', title: 'JavaScript Algorithms', url: 'https://www.youtube.com/watch?v=8hly31xKli0' },
          { type: 'interactive', title: 'Codecademy: Learn to Code', url: 'https://www.codecademy.com/learn/learn-how-to-code' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'What is a variable in programming?',
              options: [
                'A fixed value that cannot be changed',
                'A container for storing data values',
                'A type of loop',
                'A programming language'
              ],
              correctAnswer: 1,
              explanation: 'A variable is a named container used to store data values that can be referenced and manipulated in a program.'
            },
            {
              id: 2,
              question: 'What does the following code do? for(let i = 0; i < 5; i++) { console.log(i); }',
              options: [
                'Prints numbers 1 through 5',
                'Prints numbers 0 through 4',
                'Causes an infinite loop',
                'Prints the number 5'
              ],
              correctAnswer: 1,
              explanation: 'The loop starts at 0 and continues as long as i is less than 5, printing 0, 1, 2, 3, 4.'
            }
          ]
        },
        exercise: {
          title: 'First Program',
          description: 'Write a function that takes a number and returns its square. Then, write a loop that prints the squares of numbers from 1 to 10.',
          solution: '// Example in JavaScript\nfunction square(num) {\n  return num * num;\n}\n\nfor(let i = 1; i <= 10; i++) {\n  console.log(`Square of ${i} is ${square(i)}`);\n}',
          resources: [
            { type: 'tutorial', title: 'JavaScript Functions', url: 'https://javascript.info/function-basics' },
            { type: 'tutorial', title: 'Loops in Programming', url: 'https://www.w3schools.com/js/js_loop_for.asp' }
          ]
        }
      },
      // Day 3: Data Structures - Arrays & Linked Lists
      {
        day: 3,
        title: 'Data Structures: Arrays & Linked Lists',
        description: 'Learn about fundamental data structures and their implementations',
        duration: '75 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/RBSGKlAvoiM?start=0',
        resources: [
          { type: 'video', title: 'Data Structures Easy to Advanced', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },
          { type: 'article', title: 'GeeksforGeeks: Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'What is the time complexity of accessing an element in an array?',
              options: [
                'O(1)',
                'O(log n)',
                'O(n)',
                'O(n²)'
              ],
              correctAnswer: 0,
              explanation: 'Arrays provide O(1) time complexity for access operations as elements are stored in contiguous memory locations.'
            }
          ]
        },
        exercise: {
          title: 'Implement a Linked List',
          description: 'Create a simple linked list with methods to add, remove, and find nodes.',
          solution: '// Example in JavaScript\nclass Node {\n  constructor(value) {\n    this.value = value;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n    this.length = 0;\n  }\n  \n  // Add methods here\n}'
        }
      },
      // Day 4: Algorithms - Searching & Sorting
      {
        day: 4,
        title: 'Algorithms: Searching & Sorting',
        description: 'Master fundamental searching and sorting algorithms',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/P00xJgWzz2c?start=0',
        resources: [
          { type: 'video', title: 'Sorting Algorithms Explained', url: 'https://www.youtube.com/watch?v=P00xJgWzz2c' },
          { type: 'interactive', title: 'Visualgo: Sorting', url: 'https://visualgo.net/en/sorting' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'Which sorting algorithm has the best average time complexity?',
              options: [
                'Bubble Sort',
                'Merge Sort',
                'Quick Sort',
                'Insertion Sort'
              ],
              correctAnswer: 2,
              explanation: 'Quick Sort has an average time complexity of O(n log n), which is the best among the given options.'
            }
          ]
        },
        exercise: {
          title: 'Implement Binary Search',
          description: 'Write a function that performs binary search on a sorted array.',
          solution: '// Example in JavaScript\nfunction binarySearch(arr, target) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) {\n      left = mid + 1;\n    } else {\n      right = mid - 1;\n    }\n  }\n  \n  return -1;\n}'
        }
      },
      // Day 5: Object-Oriented Programming
      {
        day: 5,
        title: 'Object-Oriented Programming',
        description: 'Learn the principles of OOP and design patterns',
        duration: '80 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/PFmuCDHHpwk?start=0',
        resources: [
          { type: 'video', title: 'OOP in JavaScript', url: 'https://www.youtube.com/watch?v=PFmuCDHHpwk' },
          { type: 'article', title: 'MDN: Object-Oriented JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'Which of these is NOT a principle of OOP?',
              options: [
                'Inheritance',
                'Encapsulation',
                'Polymorphism',
                'Iteration'
              ],
              correctAnswer: 3,
              explanation: 'The four main principles of OOP are: Encapsulation, Abstraction, Inheritance, and Polymorphism.'
            }
          ]
        },
        exercise: {
          title: 'Create a Class Hierarchy',
          description: 'Design a class hierarchy for different types of vehicles with inheritance.',
          solution: '// Example in JavaScript\nclass Vehicle {\n  constructor(make, model) {\n    this.make = make;\n    this.model = model;\n  }\n  \n  getInfo() {\n    return `${this.make} ${this.model}`;\n  }\n}\n\nclass Car extends Vehicle {\n  constructor(make, model, doors) {\n    super(make, model);\n    this.doors = doors;\n  }\n  \n  honk() {\n    return \'Beep!\';\n  }\n}'
        }
      },
      // Day 6: Web Development Basics
      {
        day: 6,
        title: 'Web Development Basics',
        description: 'Introduction to HTML, CSS, and JavaScript',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/1Rs2ND1ryYc?start=0',
        resources: [
          { type: 'interactive', title: 'HTML & CSS Tutorial', url: 'https://www.w3schools.com/html/' },
          { type: 'article', title: 'JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'What does HTML stand for?',
              options: [
                'Hyper Text Markup Language',
                'High Tech Modern Language',
                'Hyperlink and Text Markup Language',
                'Home Tool Markup Language'
              ],
              correctAnswer: 0,
              explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.'
            }
          ]
        },
        exercise: {
          title: 'Build a Simple Webpage',
          description: 'Create a simple webpage with a heading, paragraph, and image using HTML and CSS.',
          solution: '<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Webpage</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Welcome to My Webpage</h1>\n  <p>This is a paragraph of text on my first webpage.</p>\n  <img src="image.jpg" alt="Sample image">\n</body>\n</html>\n\n/* styles.css */\nbody {\n  font-family: Arial, sans-serif;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh1 {\n  color: #2c3e50;\n}\n\np {\n  line-height: 1.6;\n}',
          resources: [
            { type: 'tutorial', title: 'HTML & CSS Basics', url: 'https://www.codecademy.com/learn/learn-html' }
          ]
        }
      },
      // Day 7: Frontend Development with React
      {
        day: 7,
        title: 'Frontend Development with React',
        description: 'Building interactive user interfaces with React',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/w7ejDZ8SWv8?start=0',
        resources: [
          { type: 'documentation', title: 'React Official Docs', url: 'https://reactjs.org/docs/getting-started.html' },
          { type: 'tutorial', title: 'React Tutorial', url: 'https://reactjs.org/tutorial/tutorial.html' }
        ],
        exercise: {
          title: 'Create a React Component',
          description: 'Build a simple React component that displays a counter with increment and decrement buttons.',
          solution: 'import React, { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h2>Counter: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>+</button>\n      <button onClick={() => setCount(count - 1)}>-</button>\n    </div>\n  );\n}\n\nexport default Counter;',
          resources: [
            { type: 'tutorial', title: 'React Hooks', url: 'https://reactjs.org/docs/hooks-intro.html' }
          ]
        }
      },
      // Day 8: Backend Development with Node.js
      {
        day: 8,
        title: 'Backend Development with Node.js',
        description: 'Building server-side applications with Node.js',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/RLtyhwFtXQA?start=0',
        resources: [
          { type: 'documentation', title: 'Node.js Docs', url: 'https://nodejs.org/en/docs/' },
          { type: 'tutorial', title: 'Express.js Guide', url: 'https://expressjs.com/' }
        ],
        exercise: {
          title: 'Create a Simple API',
          description: 'Build a simple REST API with Express.js that returns a list of items.',
          solution: 'const express = require(\'express\');\nconst app = express();\nconst port = 3000;\n\n// Sample data\nconst items = [\n  { id: 1, name: \'Item 1\' },\n  { id: 2, name: \'Item 2\' }\n];\n\napp.get(\'/api/items\', (req, res) => {\n  res.json(items);\n});\n\napp.listen(port, () => {\n  console.log(`Server running at http://localhost:${port}`);\n});',
          resources: [
            { type: 'tutorial', title: 'Building REST APIs with Node.js', url: 'https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/' }
          ]
        }
      },
      // Day 9: Databases & SQL
      {
        day: 9,
        title: 'Databases & SQL',
        description: 'Working with relational databases and SQL',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/HXV3zeQKqGY?start=0',
        resources: [
          { type: 'interactive', title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
          { type: 'article', title: 'SQL Cheat Sheet', url: 'https://www.sqltutorial.org/sql-cheat-sheet/' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'Which SQL statement is used to retrieve data from a database?',
              options: [
                'GET',
                'SELECT',
                'RETRIEVE',
                'QUERY'
              ],
              correctAnswer: 1,
              explanation: 'The SELECT statement is used to retrieve data from a database.'
            }
          ]
        },
        exercise: {
          title: 'Basic SQL Queries',
          description: 'Write SQL queries to create a table, insert data, and query the data.',
          solution: '-- Create a table\nCREATE TABLE users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);\n\n-- Insert data\nINSERT INTO users (id, name, email) VALUES (1, \'John Doe\', \'john@example.com\');\n\n-- Query data\nSELECT * FROM users;',
          resources: [
            { type: 'tutorial', title: 'SQL for Beginners', url: 'https://www.khanacademy.org/computing/computer-programming/sql' }
          ]
        }
      },
      // Day 10: APIs & RESTful Services
      {
        day: 10,
        title: 'APIs & RESTful Services',
        description: 'Designing and consuming RESTful APIs',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/7YcW25PHnAA?start=0',
        resources: [
          { type: 'article', title: 'REST API Best Practices', url: 'https://blog.restcase.com/rest-api-best-practices/' },
          { type: 'tutorial', title: 'Building REST APIs', url: 'https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/' }
        ],
        exercise: {
          title: 'Consume a Public API',
          description: 'Write code to fetch and display data from a public API (e.g., JSONPlaceholder).',
          solution: '// Using fetch API in JavaScript\nfetch(\'https://jsonplaceholder.typicode.com/posts/1\')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(\'Error:\', error));\n\n// Using async/await\nasync function fetchData() {\n  try {\n    const response = await fetch(\'https://jsonplaceholder.typicode.com/posts/1\');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(\'Error:\', error);\n  }\n}\n\nfetchData();',
          resources: [
            { type: 'tutorial', title: 'Working with APIs in JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction' }
          ]
        }
      },
      // Day 11: Version Control with Git
      {
        day: 11,
        title: 'Version Control with Git',
        description: 'Collaborative development with Git and GitHub',
        duration: '60 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/SWYqp7iY_Tc?start=0',
        resources: [
          { type: 'cheatsheet', title: 'Git Cheat Sheet', url: 'https://education.github.com/git-cheat-sheet-education.pdf' },
          { type: 'tutorial', title: 'Learn Git', url: 'https://www.atlassian.com/git/tutorials' }
        ],
        exercise: {
          title: 'Basic Git Workflow',
          description: 'Practice the basic Git workflow: initialize a repository, make changes, commit them, and push to GitHub.',
          solution: '# Initialize a new Git repository\ngit init\n\n# Add files to staging\ngit add .\n\n# Commit changes\ngit commit -m "Initial commit"\n\n# Add remote repository\ngit remote add origin <repository-url>\n\n# Push to main branch\ngit push -u origin main',
          resources: [
            { type: 'tutorial', title: 'Git Handbook', url: 'https://guides.github.com/introduction/git-handbook/' }
          ]
        }
      },
      // Day 12: Software Development Lifecycle
      {
        day: 12,
        title: 'Software Development Lifecycle',
        description: 'Understanding the software development process',
        duration: '60 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/9zUHg7xjIqQ?start=0', // Updated SDLC video
        resources: [
          { type: 'article', title: 'SDLC Overview', url: 'https://www.tutorialspoint.com/sdlc/sdlc_overview.htm' },
          { type: 'guide', title: 'Agile Development', url: 'https://www.atlassian.com/agile' }
        ],
        quiz: {
          questions: [
            {
              id: 1,
              question: 'Which of the following is NOT a phase in the SDLC?',
              options: [
                'Planning',
                'Coding',
                'Marketing',
                'Maintenance'
              ],
              correctAnswer: 2,
              explanation: 'Marketing is not a phase in the Software Development Life Cycle (SDLC). The main phases are Requirements, Design, Implementation, Testing, Deployment, and Maintenance.'
            }
          ]
        },
        exercise: {
          title: 'Project Planning',
          description: 'Create a simple project plan for a small web application, including key milestones and deliverables.',
          resources: [
            { type: 'template', title: 'Project Plan Template', url: 'https://www.atlassian.com/software/confluence/templates/project-plan' }
          ]
        }
      },
      // Day 13: System Design Fundamentals
      {
        day: 13,
        title: 'System Design Fundamentals',
        description: 'Designing scalable and efficient systems',
        duration: '90 min',
        type: 'video',
        content: 'https://www.youtube.com/embed/mhUQe4BKZXs?start=0', // Updated working video URL
        resources: [
          { type: 'article', title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
          { type: 'book', title: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net/' }
        ],
        exercise: {
          title: 'Design a URL Shortener',
          description: 'Design a system like bit.ly that can convert long URLs to short URLs.',
          solution: '## URL Shortener Design\n\n### Components:\n1. **API Layer**: Handle incoming requests\n2. **URL Service**: Generate short URLs and store mappings\n3. **Database**: Store URL mappings (short -> long)\n4. **Cache**: Improve performance for frequently accessed URLs\n\n### Key Considerations:\n- Short URL generation (hash function)\n- Scalability\n- Analytics\n- Expiration of URLs\n\n### Example Flow:\n1. User submits long URL\n2. System generates short code (e.g., base62 of hash)\n3. Store mapping in database\n4. Return short URL to user\n5. When short URL is accessed, redirect to original URL',
          resources: [
            { type: 'tutorial', title: 'System Design Interview', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' }
          ]
        }
      },
      {
        day: 14,
        title: 'Final Project: Task Management System',
        description: 'Build a complete task management application',
        duration: '120 min',
        type: 'project',
        content: 'For your final project, you\'ll build a Task Management System that allows users to create, read, update, and delete tasks. This project will help you demonstrate your full-stack development skills.',
        project: {
          title: 'TaskMaster - Task Management System',
          description: 'A full-stack task management application with user authentication and real-time updates.',
          requirements: [
            'User authentication (signup/login)',
            'Create, read, update, and delete tasks',
            'Task categories and priorities',
            'Due dates and reminders',
            'Responsive design that works on all devices'
          ],
          technologies: [
            'Frontend: React.js with React Hooks',
            'Backend: Node.js with Express',
            'Database: MongoDB (or SQL if preferred)',
            'Authentication: JWT (JSON Web Tokens)',
            'Styling: Tailwind CSS or Material-UI'
          ],
          submission: {
            instructions: 'Submit your project by providing a link to your GitHub repository and a live demo URL (if deployed).',
            deadline: '7 days from today',
            gradingCriteria: [
              'Functionality (40%)',
              'Code Quality (30%)',
              'User Experience (20%)',
              'Documentation (10%)'
            ]
          },
          resources: [
            { type: 'tutorial', title: 'Building a MERN Stack App', url: 'https://www.mongodb.com/languages/mern-stack-tutorial' },
            { type: 'article', title: 'JWT Authentication Best Practices', url: 'https://blog.logrocket.com/jwt-authentication-best-practices/' },
            { type: 'video', title: 'Task App Tutorial', url: 'https://www.youtube.com/watch?v=0aPLk2e2Z3g' }
          ]
        }
      }
    ]);
  } else if (courseName.toLowerCase().includes('medical') || 
             courseName.toLowerCase().includes('medicine')) {
    // Add Medical specific content
    trailData = trailData.concat([
      {
        day: 2,
        title: 'Human Anatomy Basics',
        description: 'Introduction to the human body systems',
        duration: '45 min',
        type: 'interactive',
        content: 'https://example.com/interactive/anatomy-basics',
        quiz: {
          questions: [
            {
              id: 1,
              question: 'Which system is responsible for pumping blood throughout the body?',
              options: [
                'Respiratory System',
                'Cardiovascular System',
                'Nervous System',
                'Digestive System'
              ],
              correctAnswer: 1
            }
          ]
        }
      },
      // Add more Medical specific days
    ]);
  }
  
  // Ensure we have 14 days of content
  while (trailData.length < 14) {
    const dayNum = trailData.length + 1;
    trailData.push({
      day: dayNum,
      title: `${courseName || 'Career'} - Day ${dayNum}`,
      description: `Day ${dayNum} of your ${courseName || 'career'} learning journey`,
      duration: '30-45 min',
      type: 'mixed',
      content: `https://example.com/courses/${encodeURIComponent(courseName || 'general')}/day-${dayNum}`,
      quiz: {
        questions: [
          {
            id: 1,
            question: `What did you learn about ${courseName || 'your career path'} today?`,
            options: [
              'Key concepts and theories',
              'Practical applications',
              'Career opportunities',
              'All of the above'
            ],
            correctAnswer: 3
          }
        ]
      }
    });
  }

  return trailData;
};

const CourseTrail = () => {
  const location = useLocation();
  const { courseName } = location.state || {};
  const [currentDay, setCurrentDay] = useState(1);
  const [trailProgress, setTrailProgress] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  // Get course-specific trail data
  const courseTrailData = getCourseTrailData(courseName) || [];
  const currentDayData = (courseTrailData.find(day => day.day === currentDay) || courseTrailData[0]) || {};
  const isDayCompleted = trailProgress[currentDay]?.completed;

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = JSON.parse(localStorage.getItem('courseTrailProgress')) || {};
    setTrailProgress(savedProgress);
    setIsLoading(false);
  }, [courseName]);

  const handleCompleteDay = () => {
    if (currentDay === 14) {
      // For final day, just show project submission without marking as completed
      return;
    }

    const updatedProgress = {
      ...trailProgress,
      [currentDay]: { 
        completed: true, 
        completedAt: new Date().toISOString(),
        course: courseName || 'general'
      }
    };
    setTrailProgress(updatedProgress);
    localStorage.setItem('courseTrailProgress', JSON.stringify(updatedProgress));
    
    // Show quiz if there are quiz questions, otherwise move to next day
    if (currentDayData.quiz?.questions?.length > 0) {
      setShowQuiz(true);
    } else if (currentDay < 14) {
      setCurrentDay(currentDay + 1);
    }
  };

  const handleQuizSubmit = () => {
    // In a real app, you would calculate the score here
    const score = 100; // Placeholder for actual score calculation
    
    const updatedProgress = {
      ...trailProgress,
      [currentDay]: { 
        ...trailProgress[currentDay],
        quizScore: score,
        completed: true
      }
    };
    
    setTrailProgress(updatedProgress);
    localStorage.setItem('courseTrailProgress', JSON.stringify(updatedProgress));
    setShowQuiz(false);
    
    // Move to next day if not the last day
    if (currentDay < 14) {
      setCurrentDay(currentDay + 1);
    }
  };

  // No authentication check needed

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Handle case when no course is selected
  if (!courseName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Course Selected</h2>
          <p className="mb-6">Please select a course to start the learning trail.</p>
          <button
            onClick={() => window.location.href = '/test-course-trail'}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Select a Course
          </button>
        </div>
      </div>
    );
  }

  // Function to render content based on type
  const renderContent = () => {
    if (!currentDayData) return null;

    switch (currentDayData.type) {
      case 'video':
        return (
          <div className="mb-8">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                className="w-full h-[500px] rounded-lg shadow-md"
                src={currentDayData.content}
                title={currentDayData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {currentDayData.resources && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">📚 Additional Resources</h3>
                <div className="space-y-3">
                  {currentDayData.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">
                        {resource.type === 'video' ? '▶️' : '📄'}
                      </span>
                      {resource.title}
                      <span className="ml-2 text-sm text-gray-500">({resource.type})</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {currentDayData.exercise && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <h3 className="text-lg font-semibold mb-2">💡 {currentDayData.exercise.title}</h3>
                <p className="mb-3">{currentDayData.exercise.description}</p>
                <div className="bg-gray-800 text-green-400 p-4 rounded-md mb-3 overflow-x-auto">
                  <pre className="whitespace-pre-wrap">
                    <code>{currentDayData.exercise.solution}</code>
                  </pre>
                </div>
                {currentDayData.exercise.resources && (
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">Helpful resources:</p>
                    <div className="space-y-1">
                      {currentDayData.exercise.resources.map((res, idx) => (
                        <a
                          key={idx}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline flex items-center"
                        >
                          {res.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      
      default:
        return <p className="text-gray-700">{currentDayData.content}</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {courseName || 'Career Development Trail'}
            </h1>
            <p className="text-gray-600">
              Day {currentDay} of {courseTrailData.length}
            </p>
          </div>
          <Link 
            to="/test-course-trail" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← Back to Courses
          </Link>
        </div>
        
        {/* Progress Tracker */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <div className="flex flex-wrap gap-2">
            {courseTrailData.map((day) => {
              const isCompleted = trailProgress[day.day]?.completed;
              const isCurrent = day.day === currentDay;
              
              return (
                <button
                  key={day.day}
                  onClick={() => setCurrentDay(day.day)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium
                    ${isCurrent ? 'bg-blue-600 text-white' : ''}
                    ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-200'}
                    ${!isCurrent && !isCompleted ? 'hover:bg-gray-300' : ''}`}
                >
                  {day.day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Day Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Day {currentDay}: {currentDayData.title}</h2>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {currentDayData.duration}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{currentDayData.description}</p>
          
          {/* Render the appropriate content based on type */}
          {renderContent()}
          
          {currentDay === 14 ? (
            <div className="mt-6 space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="project-upload"
                  className="hidden"
                  onChange={(e) => {
                    // Handle file upload
                    const file = e.target.files[0];
                    if (file) {
                      // Handle the file upload here
                      console.log('File selected:', file);
                    }
                  }}
                />
                <label
                  htmlFor="project-upload"
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                >
                  Upload Project Files
                </label>
                <p className="mt-2 text-sm text-gray-500">Upload your project files (ZIP, PDF, or GitHub repository link)</p>
              </div>
              <button
                onClick={() => {
                  // Handle project submission
                  alert('Project submitted successfully!');
                  // You can add your submission logic here
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Submit Project
              </button>
            </div>
          ) : (
            <>
              {!isDayCompleted && !showQuiz && (
                <button
                  onClick={handleCompleteDay}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Mark as Completed
                </button>
              )}
              
              {isDayCompleted && !showQuiz && (
                <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-md">
                  <p className="font-medium">✓ Completed on {new Date(trailProgress[currentDay]?.completedAt).toLocaleDateString()}</p>
                  {trailProgress[currentDay]?.quizScore && (
                    <p className="mt-1">Quiz Score: {trailProgress[currentDay]?.quizScore}%</p>
                  )}
                  <button
                    onClick={() => setShowQuiz(true)}
                    className="mt-2 text-blue-600 hover:underline text-sm"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Quiz Section */}
        {showQuiz && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Quiz: {currentDayData.title}</h3>
            
            {currentDayData.quiz.questions.map((question, qIndex) => (
              <div key={qIndex} className="mb-6">
                <p className="font-medium mb-2">{qIndex + 1}. {question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label key={oIndex} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={(quizAnswers[question.id] === oIndex)}
                        onChange={() => setQuizAnswers(prev => ({
                          ...prev,
                          [question.id]: oIndex
                        }))}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setShowQuiz(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back to Content
              </button>
              <button
                onClick={handleQuizSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTrail;
