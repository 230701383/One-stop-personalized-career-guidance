export const collegesData = [
  // IITs
  {
    id: 1,
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    type: "Government",
    category: "Engineering",
    location: "Mumbai, Maharashtra",
    address: "Powai, Mumbai, Maharashtra 400076",
    coordinates: { lat: 19.1334, lng: 72.9133 },
    established: 1958,
    ranking: {
      nirf: 3,
      qs: 149,
      times: "301-350"
    },
    fees: {
      tuition: "₹2,08,000/year",
      hostel: "₹15,000/year",
      total: "₹2,23,000/year"
    },
    cutoff: {
      general: 63,
      obc: 1563,
      sc: 2319,
      st: 1164
    },
    courses: ["B.Tech", "M.Tech", "PhD", "Dual Degree"],
    specializations: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Aerospace"],
    placements: {
      averagePackage: "₹19.17 LPA",
      highestPackage: "₹1.68 CPA",
      placementRate: "95%"
    },
    facilities: ["Library", "Labs", "Sports Complex", "Hostels", "Medical Center", "Wi-Fi Campus"],
    website: "https://www.iitb.ac.in",
    admissionProcess: "JEE Advanced",
    description: "Premier engineering institute known for excellence in technology and research."
  },
  {
    id: 2,
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    type: "Government",
    category: "Engineering",
    location: "New Delhi, Delhi",
    address: "Hauz Khas, New Delhi, Delhi 110016",
    coordinates: { lat: 28.5449, lng: 77.1928 },
    established: 1961,
    ranking: {
      nirf: 2,
      qs: 197,
      times: "401-500"
    },
    fees: {
      tuition: "₹2,08,000/year",
      hostel: "₹18,000/year",
      total: "₹2,26,000/year"
    },
    cutoff: {
      general: 144,
      obc: 2263,
      sc: 3567,
      st: 1808
    },
    courses: ["B.Tech", "M.Tech", "PhD", "Dual Degree"],
    specializations: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Textile"],
    placements: {
      averagePackage: "₹17.82 LPA",
      highestPackage: "₹1.2 CPA",
      placementRate: "92%"
    },
    facilities: ["Central Library", "Research Labs", "Sports Facilities", "Hostels", "Health Center"],
    website: "https://www.iitd.ac.in",
    admissionProcess: "JEE Advanced",
    description: "Leading technical university with strong industry connections and research focus."
  },
  {
    id: 3,
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    type: "Government",
    category: "Engineering",
    location: "Chennai, Tamil Nadu",
    address: "Sardar Patel Road, Adyar, Chennai, Tamil Nadu 600036",
    coordinates: { lat: 12.9915, lng: 80.2337 },
    established: 1959,
    ranking: {
      nirf: 1,
      qs: 285,
      times: "501-600"
    },
    fees: {
      tuition: "₹2,08,000/year",
      hostel: "₹12,000/year",
      total: "₹2,20,000/year"
    },
    cutoff: {
      general: 89,
      obc: 1789,
      sc: 2845,
      st: 1456
    },
    courses: ["B.Tech", "M.Tech", "PhD", "Dual Degree"],
    specializations: ["Computer Science", "Electrical", "Mechanical", "Civil", "Chemical", "Ocean Engineering"],
    placements: {
      averagePackage: "₹21.48 LPA",
      highestPackage: "₹1.98 CPA",
      placementRate: "94%"
    },
    facilities: ["Central Library", "Research Park", "Sports Complex", "Hostels", "Medical Facilities"],
    website: "https://www.iitm.ac.in",
    admissionProcess: "JEE Advanced",
    description: "India's top-ranked engineering institute with excellence in research and innovation."
  },

  // NITs
  {
    id: 4,
    name: "National Institute of Technology Trichy",
    shortName: "NIT Trichy",
    type: "Government",
    category: "Engineering",
    location: "Tiruchirappalli, Tamil Nadu",
    address: "National Highway 67, Tiruchirappalli, Tamil Nadu 620015",
    coordinates: { lat: 10.7590, lng: 78.8147 },
    established: 1964,
    ranking: {
      nirf: 9,
      qs: "651-700",
      times: "801-1000"
    },
    fees: {
      tuition: "₹1,25,000/year",
      hostel: "₹25,000/year",
      total: "₹1,50,000/year"
    },
    cutoff: {
      general: 1245,
      obc: 3567,
      sc: 5678,
      st: 2890
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    specializations: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical", "Production"],
    placements: {
      averagePackage: "₹10.8 LPA",
      highestPackage: "₹40 LPA",
      placementRate: "88%"
    },
    facilities: ["Library", "Labs", "Sports Complex", "Hostels", "Medical Center"],
    website: "https://www.nitt.edu",
    admissionProcess: "JEE Main",
    description: "Premier NIT known for quality education and strong alumni network."
  },
  {
    id: 5,
    name: "National Institute of Technology Warangal",
    shortName: "NIT Warangal",
    type: "Government",
    category: "Engineering",
    location: "Warangal, Telangana",
    address: "Kazipet, Warangal, Telangana 506004",
    coordinates: { lat: 17.9784, lng: 79.5305 },
    established: 1959,
    ranking: {
      nirf: 19,
      qs: "801-1000",
      times: "1001+"
    },
    fees: {
      tuition: "₹1,25,000/year",
      hostel: "₹22,000/year",
      total: "₹1,47,000/year"
    },
    cutoff: {
      general: 1567,
      obc: 4234,
      sc: 6789,
      st: 3456
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    specializations: ["Computer Science", "Electronics", "Mechanical", "Civil", "Chemical", "Metallurgy"],
    placements: {
      averagePackage: "₹13.5 LPA",
      highestPackage: "₹52 LPA",
      placementRate: "85%"
    },
    facilities: ["Central Library", "Research Labs", "Sports Facilities", "Hostels"],
    website: "https://www.nitw.ac.in",
    admissionProcess: "JEE Main",
    description: "Renowned engineering institute with strong research culture and industry partnerships."
  },

  // Medical Colleges
  {
    id: 6,
    name: "All Institute of Medical Sciences Delhi",
    shortName: "AIIMS Delhi",
    type: "Government",
    category: "Medical",
    location: "New Delhi, Delhi",
    address: "Ansari Nagar, New Delhi, Delhi 110029",
    coordinates: { lat: 28.5672, lng: 77.2100 },
    established: 1956,
    ranking: {
      nirf: 1,
      qs: "251-300",
      times: "401-500"
    },
    fees: {
      tuition: "₹1,466/year",
      hostel: "₹1,200/year",
      total: "₹2,666/year"
    },
    cutoff: {
      general: 50,
      obc: 9359,
      sc: 107983,
      st: 40712
    },
    courses: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
    specializations: ["General Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology", "Oncology"],
    placements: {
      averagePackage: "₹12 LPA",
      highestPackage: "₹25 LPA",
      placementRate: "100%"
    },
    facilities: ["Hospital", "Research Labs", "Library", "Hostels", "Sports Complex"],
    website: "https://www.aiims.edu",
    admissionProcess: "NEET UG/PG",
    description: "India's premier medical institute with world-class healthcare and research facilities."
  },
  {
    id: 7,
    name: "Christian Medical College Vellore",
    shortName: "CMC Vellore",
    type: "Private",
    category: "Medical",
    location: "Vellore, Tamil Nadu",
    address: "Ida Scudder Road, Vellore, Tamil Nadu 632004",
    coordinates: { lat: 12.9249, lng: 79.1353 },
    established: 1900,
    ranking: {
      nirf: 2,
      qs: "451-500",
      times: "601-800"
    },
    fees: {
      tuition: "₹75,000/year",
      hostel: "₹35,000/year",
      total: "₹1,10,000/year"
    },
    cutoff: {
      general: 164,
      obc: 15678,
      sc: 125678,
      st: 67890
    },
    courses: ["MBBS", "MD", "MS", "DM", "MCh"],
    specializations: ["Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology"],
    placements: {
      averagePackage: "₹10 LPA",
      highestPackage: "₹20 LPA",
      placementRate: "98%"
    },
    facilities: ["Multi-specialty Hospital", "Research Center", "Library", "Hostels"],
    website: "https://www.cmch-vellore.edu",
    admissionProcess: "NEET UG",
    description: "Prestigious medical college known for excellence in medical education and patient care."
  },

  // Management Colleges
  {
    id: 8,
    name: "Indian Institute of Management Ahmedabad",
    shortName: "IIM Ahmedabad",
    type: "Government",
    category: "Management",
    location: "Ahmedabad, Gujarat",
    address: "Vastrapur, Ahmedabad, Gujarat 380015",
    coordinates: { lat: 23.0347, lng: 72.5020 },
    established: 1961,
    ranking: {
      nirf: 1,
      qs: 51,
      times: "101-125"
    },
    fees: {
      tuition: "₹25,00,000/2 years",
      hostel: "₹2,00,000/2 years",
      total: "₹27,00,000/2 years"
    },
    cutoff: {
      general: 99.5,
      obc: 96.5,
      sc: 85,
      st: 75
    },
    courses: ["MBA", "PhD", "Executive MBA", "Fellow Programme"],
    specializations: ["Finance", "Marketing", "Operations", "Strategy", "HR", "Entrepreneurship"],
    placements: {
      averagePackage: "₹34.36 LPA",
      highestPackage: "₹1.15 CPA",
      placementRate: "100%"
    },
    facilities: ["Library", "Case Study Rooms", "Sports Complex", "Hostels", "Dining Halls"],
    website: "https://www.iima.ac.in",
    admissionProcess: "CAT",
    description: "India's premier management institute with global recognition and top-tier placements."
  },
  {
    id: 9,
    name: "Indian Institute of Management Bangalore",
    shortName: "IIM Bangalore",
    type: "Government",
    category: "Management",
    location: "Bangalore, Karnataka",
    address: "Bannerghatta Road, Bangalore, Karnataka 560076",
    coordinates: { lat: 12.8449, lng: 77.6690 },
    established: 1973,
    ranking: {
      nirf: 3,
      qs: 76,
      times: "126-150"
    },
    fees: {
      tuition: "₹24,50,000/2 years",
      hostel: "₹1,80,000/2 years",
      total: "₹26,30,000/2 years"
    },
    cutoff: {
      general: 99,
      obc: 95,
      sc: 82,
      st: 72
    },
    courses: ["MBA", "PhD", "Executive MBA"],
    specializations: ["Finance", "Marketing", "Operations", "Consulting", "Technology Management"],
    placements: {
      averagePackage: "₹33.82 LPA",
      highestPackage: "₹89.21 LPA",
      placementRate: "100%"
    },
    facilities: ["Library", "Computer Labs", "Sports Facilities", "Hostels"],
    website: "https://www.iimb.ac.in",
    admissionProcess: "CAT",
    description: "Leading business school known for innovation and strong industry connections."
  },

  // State Universities
  {
    id: 10,
    name: "Delhi University",
    shortName: "DU",
    type: "Government",
    category: "Multi-disciplinary",
    location: "New Delhi, Delhi",
    address: "University Enclave, Delhi 110007",
    coordinates: { lat: 28.6869, lng: 77.2090 },
    established: 1922,
    ranking: {
      nirf: 11,
      qs: 521,
      times: "601-800"
    },
    fees: {
      tuition: "₹15,000/year",
      hostel: "₹25,000/year",
      total: "₹40,000/year"
    },
    cutoff: {
      general: 95,
      obc: 90,
      sc: 85,
      st: 80
    },
    courses: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "PhD"],
    specializations: ["Arts", "Science", "Commerce", "Social Sciences", "Languages"],
    placements: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹25 LPA",
      placementRate: "70%"
    },
    facilities: ["Libraries", "Labs", "Sports Complex", "Hostels", "Cultural Centers"],
    website: "https://www.du.ac.in",
    admissionProcess: "CUET",
    description: "Premier central university offering diverse undergraduate and postgraduate programs."
  },

  // Tamil Nadu Government Colleges - Engineering
  {
    id: 11,
    name: "College of Engineering Guindy",
    shortName: "CEG",
    type: "Government",
    category: "Engineering",
    location: "Chennai, Tamil Nadu",
    address: "Sardar Patel Road, Guindy, Chennai, Tamil Nadu 600025",
    coordinates: { lat: 13.0067, lng: 80.2206 },
    established: 1794,
    ranking: {
      nirf: 35,
      qs: "801-1000",
      times: "1001+"
    },
    fees: {
      tuition: "₹25,000/year",
      hostel: "₹15,000/year",
      total: "₹40,000/year"
    },
    cutoff: {
      general: 2500,
      obc: 4500,
      sc: 8500,
      st: 5500
    },
    courses: ["B.E", "B.Tech", "M.E", "M.Tech", "PhD"],
    specializations: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Production"],
    placements: {
      averagePackage: "₹8.5 LPA",
      highestPackage: "₹45 LPA",
      placementRate: "85%"
    },
    facilities: ["Library", "Labs", "Workshop", "Sports Complex", "Hostels", "Canteen"],
    website: "https://www.ceg.ac.in",
    admissionProcess: "TNEA",
    description: "One of the oldest engineering colleges in India with rich heritage and strong alumni network."
  },
  {
    id: 12,
    name: "Madras Institute of Technology",
    shortName: "MIT Chennai",
    type: "Government",
    category: "Engineering",
    location: "Chennai, Tamil Nadu",
    address: "Chromepet, Chennai, Tamil Nadu 600044",
    coordinates: { lat: 12.9516, lng: 80.1462 },
    established: 1949,
    ranking: {
      nirf: 45,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹25,000/year",
      hostel: "₹18,000/year",
      total: "₹43,000/year"
    },
    cutoff: {
      general: 3200,
      obc: 5800,
      sc: 9500,
      st: 6200
    },
    courses: ["B.Tech", "M.Tech", "PhD"],
    specializations: ["Aeronautical", "Electronics", "Instrumentation", "Computer Science", "Information Technology"],
    placements: {
      averagePackage: "₹7.8 LPA",
      highestPackage: "₹38 LPA",
      placementRate: "82%"
    },
    facilities: ["Aerospace Lab", "Library", "Research Centers", "Hostels", "Sports Ground"],
    website: "https://www.mitindia.edu",
    admissionProcess: "TNEA",
    description: "Premier institute for aeronautical and electronics engineering with strong industry connections."
  },
  {
    id: 13,
    name: "Government College of Technology Coimbatore",
    shortName: "GCT Coimbatore",
    type: "Government",
    category: "Engineering",
    location: "Coimbatore, Tamil Nadu",
    address: "Kalapatti Road, Coimbatore, Tamil Nadu 641013",
    coordinates: { lat: 11.0168, lng: 76.9558 },
    established: 1945,
    ranking: {
      nirf: 55,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹25,000/year",
      hostel: "₹20,000/year",
      total: "₹45,000/year"
    },
    cutoff: {
      general: 4500,
      obc: 7200,
      sc: 12000,
      st: 8500
    },
    courses: ["B.E", "M.E", "M.Tech", "PhD"],
    specializations: ["Mechanical", "Civil", "Electrical", "Electronics", "Computer Science", "Textile Technology"],
    placements: {
      averagePackage: "₹6.5 LPA",
      highestPackage: "₹32 LPA",
      placementRate: "78%"
    },
    facilities: ["Central Library", "Labs", "Workshop", "Hostels", "Sports Complex"],
    website: "https://www.gctcbe.ac.in",
    admissionProcess: "TNEA",
    description: "Leading government engineering college in western Tamil Nadu with strong textile engineering program."
  },
  {
    id: 14,
    name: "Thiagarajar College of Engineering",
    shortName: "TCE Madurai",
    type: "Government",
    category: "Engineering",
    location: "Madurai, Tamil Nadu",
    address: "Thiruparankundram, Madurai, Tamil Nadu 625015",
    coordinates: { lat: 9.8612, lng: 78.0809 },
    established: 1957,
    ranking: {
      nirf: 65,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹25,000/year",
      hostel: "₹22,000/year",
      total: "₹47,000/year"
    },
    cutoff: {
      general: 5200,
      obc: 8500,
      sc: 14000,
      st: 9800
    },
    courses: ["B.E", "M.E", "M.Tech", "PhD"],
    specializations: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical", "Information Technology"],
    placements: {
      averagePackage: "₹6.2 LPA",
      highestPackage: "₹28 LPA",
      placementRate: "75%"
    },
    facilities: ["Library", "Computer Labs", "Workshop", "Hostels", "Playground"],
    website: "https://www.tce.edu",
    admissionProcess: "TNEA",
    description: "Autonomous engineering college in Madurai with focus on quality technical education."
  },

  // Tamil Nadu Government Colleges - Medical
  {
    id: 15,
    name: "Madras Medical College",
    shortName: "MMC Chennai",
    type: "Government",
    category: "Medical",
    location: "Chennai, Tamil Nadu",
    address: "Park Town, Chennai, Tamil Nadu 600003",
    coordinates: { lat: 13.0878, lng: 80.2785 },
    established: 1835,
    ranking: {
      nirf: 8,
      qs: "451-500",
      times: "601-800"
    },
    fees: {
      tuition: "₹8,000/year",
      hostel: "₹12,000/year",
      total: "₹20,000/year"
    },
    cutoff: {
      general: 580,
      obc: 12500,
      sc: 85000,
      st: 45000
    },
    courses: ["MBBS", "MD", "MS", "DM", "MCh"],
    specializations: ["General Medicine", "Surgery", "Pediatrics", "Gynecology", "Orthopedics", "Cardiology"],
    placements: {
      averagePackage: "₹8 LPA",
      highestPackage: "₹18 LPA",
      placementRate: "95%"
    },
    facilities: ["Rajiv Gandhi Government General Hospital", "Research Labs", "Library", "Hostels"],
    website: "https://www.tnmgrmu.ac.in",
    admissionProcess: "NEET UG",
    description: "One of Asia's largest medical colleges with attached government hospital."
  },
  {
    id: 16,
    name: "Coimbatore Medical College",
    shortName: "CMC Coimbatore",
    type: "Government",
    category: "Medical",
    location: "Coimbatore, Tamil Nadu",
    address: "Avinashi Road, Coimbatore, Tamil Nadu 641014",
    coordinates: { lat: 11.0015, lng: 76.9662 },
    established: 1966,
    ranking: {
      nirf: 25,
      qs: "801-1000",
      times: "1001+"
    },
    fees: {
      tuition: "₹8,000/year",
      hostel: "₹15,000/year",
      total: "₹23,000/year"
    },
    cutoff: {
      general: 1250,
      obc: 18500,
      sc: 125000,
      st: 68000
    },
    courses: ["MBBS", "MD", "MS"],
    specializations: ["Medicine", "Surgery", "Pediatrics", "Gynecology", "Anesthesia", "Radiology"],
    placements: {
      averagePackage: "₹7.5 LPA",
      highestPackage: "₹15 LPA",
      placementRate: "92%"
    },
    facilities: ["Coimbatore Medical College Hospital", "Library", "Labs", "Hostels"],
    website: "https://www.cmch-vellore.edu",
    admissionProcess: "NEET UG",
    description: "Leading government medical college in western Tamil Nadu with excellent clinical training."
  },

  // Tamil Nadu Government Colleges - Arts & Science
  {
    id: 17,
    name: "Presidency College Chennai",
    shortName: "Presidency Chennai",
    type: "Government",
    category: "Arts & Sciences",
    location: "Chennai, Tamil Nadu",
    address: "Kamarajar Salai, Triplicane, Chennai, Tamil Nadu 600005",
    coordinates: { lat: 13.0594, lng: 80.2707 },
    established: 1840,
    ranking: {
      nirf: 45,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹5,000/year",
      hostel: "₹8,000/year",
      total: "₹13,000/year"
    },
    cutoff: {
      general: 85,
      obc: 80,
      sc: 75,
      st: 70
    },
    courses: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "PhD"],
    specializations: ["Physics", "Chemistry", "Mathematics", "Economics", "History", "English"],
    placements: {
      averagePackage: "₹4.5 LPA",
      highestPackage: "₹15 LPA",
      placementRate: "65%"
    },
    facilities: ["Central Library", "Science Labs", "Computer Center", "Hostels", "Auditorium"],
    website: "https://www.presidencychennai.ac.in",
    admissionProcess: "Merit Based",
    description: "Historic institution known for excellence in arts, science and commerce education."
  },
  {
    id: 18,
    name: "Government Arts College Coimbatore",
    shortName: "GAC Coimbatore",
    type: "Government",
    category: "Arts & Sciences",
    location: "Coimbatore, Tamil Nadu",
    address: "Nava India, Coimbatore, Tamil Nadu 641018",
    coordinates: { lat: 11.0401, lng: 76.9294 },
    established: 1875,
    ranking: {
      nirf: 85,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹4,500/year",
      hostel: "₹10,000/year",
      total: "₹14,500/year"
    },
    cutoff: {
      general: 80,
      obc: 75,
      sc: 70,
      st: 65
    },
    courses: ["BA", "BSc", "MA", "MSc", "MPhil", "PhD"],
    specializations: ["Tamil", "English", "History", "Economics", "Mathematics", "Physics"],
    placements: {
      averagePackage: "₹3.8 LPA",
      highestPackage: "₹12 LPA",
      placementRate: "58%"
    },
    facilities: ["Library", "Labs", "Computer Center", "Hostels", "Sports Ground"],
    website: "https://www.gaccbe.ac.in",
    admissionProcess: "Merit Based",
    description: "One of the oldest arts colleges in Tamil Nadu with strong academic tradition."
  },

  // Tamil Nadu Government Colleges - Agriculture
  {
    id: 19,
    name: "Tamil Nadu Agricultural University",
    shortName: "TNAU Coimbatore",
    type: "Government",
    category: "Agriculture",
    location: "Coimbatore, Tamil Nadu",
    address: "Lawley Road, Coimbatore, Tamil Nadu 641003",
    coordinates: { lat: 11.0183, lng: 76.9725 },
    established: 1971,
    ranking: {
      nirf: 15,
      qs: "801-1000",
      times: "1001+"
    },
    fees: {
      tuition: "₹15,000/year",
      hostel: "₹18,000/year",
      total: "₹33,000/year"
    },
    cutoff: {
      general: 3500,
      obc: 5500,
      sc: 8500,
      st: 6000
    },
    courses: ["B.Sc Agriculture", "B.Tech Food Technology", "M.Sc", "M.Tech", "PhD"],
    specializations: ["Agronomy", "Horticulture", "Plant Breeding", "Soil Science", "Agricultural Engineering"],
    placements: {
      averagePackage: "₹5.2 LPA",
      highestPackage: "₹22 LPA",
      placementRate: "72%"
    },
    facilities: ["Research Farms", "Labs", "Library", "Hostels", "Experimental Stations"],
    website: "https://www.tnau.ac.in",
    admissionProcess: "TNAU Entrance",
    description: "Premier agricultural university with extensive research facilities and farm lands."
  },

  // Tamil Nadu Government Colleges - Veterinary
  {
    id: 20,
    name: "Madras Veterinary College",
    shortName: "MVC Chennai",
    type: "Government",
    category: "Veterinary",
    location: "Chennai, Tamil Nadu",
    address: "Vepery, Chennai, Tamil Nadu 600007",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    established: 1903,
    ranking: {
      nirf: 8,
      qs: "1001+",
      times: "1001+"
    },
    fees: {
      tuition: "₹12,000/year",
      hostel: "₹15,000/year",
      total: "₹27,000/year"
    },
    cutoff: {
      general: 2800,
      obc: 4500,
      sc: 7500,
      st: 5200
    },
    courses: ["BVSc & AH", "MVSc", "PhD"],
    specializations: ["Veterinary Medicine", "Animal Husbandry", "Veterinary Surgery", "Pathology"],
    placements: {
      averagePackage: "₹4.8 LPA",
      highestPackage: "₹18 LPA",
      placementRate: "68%"
    },
    facilities: ["Veterinary Hospital", "Research Labs", "Library", "Hostels", "Animal Farm"],
    website: "https://www.tanuvas.ac.in",
    admissionProcess: "NEET UG",
    description: "Oldest veterinary college in India with comprehensive animal healthcare facilities."
  }
];

export const collegeCategories = [
  "All",
  "Engineering",
  "Medical",
  "Management",
  "Multi-disciplinary",
  "Arts & Sciences",
  "Law",
  "Agriculture",
  "Veterinary"
];

export const collegeTypes = [
  "All",
  "Government",
  "Private",
  "Deemed"
];

export const locations = [
  "All",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Coimbatore",
  "Madurai",
  "Tamil Nadu"
];
