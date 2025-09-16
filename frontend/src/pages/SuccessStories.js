import React from 'react';

const SuccessStories = () => {

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Software Engineer at Microsoft',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'From a small town to Microsoft - this platform showed me the way!',
      story: 'Coming from a small town with limited resources, I never thought I could make it to a top tech company. The career guidance and interview preparation resources helped me crack the Microsoft interview. The mock interviews were a game-changer!',
      before: 'Engineering graduate with no job prospects',
      after: 'SDE at Microsoft with ₹35 LPA package',
      time: '6 months',
      tags: ['Career Change', 'Tech', 'Interview Success']
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Data Scientist at Amazon',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'Transitioned from mechanical engineering to data science with confidence',
      story: 'As a mechanical engineer, I was struggling to switch to data science. The structured learning path and mentorship helped me gain the right skills. The project-based learning approach made all the difference in building my portfolio.',
      before: 'Mechanical Engineer looking to switch careers',
      after: 'Data Scientist at Amazon',
      time: '9 months',
      tags: ['Career Switch', 'Data Science', 'Upskilling']
    },
    {
      id: 3,
      name: 'Ananya Patel',
      role: 'Product Manager at Google',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      quote: 'From coding to product management - found my true calling',
      story: 'I was a developer but always felt drawn towards product thinking. The platform helped me understand the PM role, prepare case studies, and most importantly, build the confidence to make the switch. The mock PM interviews were invaluable!',
      before: 'Software Developer',
      after: 'Product Manager at Google',
      time: '1 year',
      tags: ['Product Management', 'Career Growth', 'Leadership']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real transformations. See how our platform has helped individuals achieve their career dreams.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    className="h-16 w-16 rounded-full object-cover mr-4" 
                    src={story.image} 
                    alt={story.name} 
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-indigo-600">{story.role}</p>
                  </div>
                </div>
                
                <blockquote className="mt-4 text-gray-600 italic">"{story.quote}"</blockquote>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Before</p>
                    <p className="text-gray-700">{story.before}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">After {story.time} on our platform</p>
                    <p className="text-gray-700 font-medium">{story.after}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-700 mb-3">{story.story}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {story.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-700 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to start your success story?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our platform.
          </p>
          <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
