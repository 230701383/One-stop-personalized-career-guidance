import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CalendarIcon, 
  ClockIcon, 
  MagnifyingGlassIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Timeline = () => {
  const { t } = useTranslation();
  const [allEvents, setAllEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [monthFilter, setMonthFilter] = useState('all');

  const generateTimelineEvents = () => {
    const events = [];
    let id = 1;

    // NEET Related Events
    events.push(
      {
        id: id++,
        title: "NEET 2025 Registration",
        category: "Medical",
        type: "Registration",
        date: "2025-02-09",
        endDate: "2025-03-09",
        description: "Online registration for NEET UG 2025 examination",
        status: "upcoming",
        priority: "high",
        website: "https://neet.nta.nic.in"
      },
    {
      id: 2,
      title: "NEET 2025 Exam",
      category: "Medical",
      type: "Exam",
      date: "2025-05-05",
      description: "National Eligibility cum Entrance Test for medical courses",
      status: "upcoming",
      priority: "high",
      website: "https://neet.nta.nic.in"
    },
    {
      id: 3,
      title: "NEET Result Declaration",
      category: "Medical",
      type: "Result",
      date: "2025-06-04",
      description: "NEET UG 2025 result announcement",
      status: "upcoming",
      priority: "medium",
      website: "https://neet.nta.nic.in"
    },
    {
      id: 4,
      title: "NEET Counselling Registration",
      category: "Medical",
      type: "Counselling",
      date: "2025-07-06",
      endDate: "2025-07-20",
      description: "MCC NEET UG counselling registration for medical seats",
      status: "upcoming",
      priority: "high",
      website: "https://mcc.nic.in"
    },
    
    // JEE Related
    {
      id: 5,
      title: "JEE Main 2025 Session 1 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-01-01",
      endDate: "2025-01-31",
      description: "Online registration for JEE Main 2025 Session 1",
      status: "completed",
      priority: "high",
      website: "https://jeemain.nta.nic.in"
    },
    {
      id: 6,
      title: "JEE Main 2025 Session 1 Exam",
      category: "Engineering",
      type: "Exam",
      date: "2025-01-24",
      endDate: "2025-02-01",
      description: "JEE Main 2025 Session 1 examination",
      status: "completed",
      priority: "high",
      website: "https://jeemain.nta.nic.in"
    },
    {
      id: 7,
      title: "JEE Main 2025 Session 2 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-02-02",
      endDate: "2025-03-02",
      description: "Online registration for JEE Main 2025 Session 2",
      status: "upcoming",
      priority: "high",
      website: "https://jeemain.nta.nic.in"
    },
    {
      id: 8,
      title: "JEE Main 2025 Session 2 Exam",
      category: "Engineering",
      type: "Exam",
      date: "2025-04-01",
      endDate: "2025-04-15",
      description: "JEE Main 2025 Session 2 examination",
      status: "upcoming",
      priority: "high",
      website: "https://jeemain.nta.nic.in"
    },
    {
      id: 9,
      title: "JEE Advanced 2025 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-04-30",
      endDate: "2025-05-09",
      description: "Registration for JEE Advanced 2025 (IIT entrance)",
      status: "upcoming",
      priority: "high",
      website: "https://jeeadv.ac.in"
    },
    {
      id: 10,
      title: "JEE Advanced 2025 Exam",
      category: "Engineering",
      type: "Exam",
      date: "2025-05-26",
      description: "JEE Advanced 2025 examination for IIT admission",
      status: "upcoming",
      priority: "high",
      website: "https://jeeadv.ac.in"
    },
    {
      id: 11,
      title: "JoSAA Counselling 2025",
      category: "Engineering",
      type: "Counselling",
      date: "2025-06-10",
      endDate: "2025-07-24",
      description: "Joint Seat Allocation Authority counselling for IIT/NIT/IIIT",
      status: "upcoming",
      priority: "high",
      website: "https://josaa.nic.in"
    },

    // Scholarships
    {
      id: 12,
      title: "National Scholarship Portal Registration",
      category: "Scholarship",
      type: "Registration",
      date: "2025-08-01",
      endDate: "2025-10-31",
      description: "Registration for various government scholarships",
      status: "upcoming",
      priority: "medium",
      website: "https://scholarships.gov.in"
    },
    {
      id: 13,
      title: "INSPIRE Scholarship Application",
      category: "Scholarship",
      type: "Application",
      date: "2025-06-01",
      endDate: "2025-07-31",
      description: "Innovation in Science Pursuit for Inspired Research scholarship",
      status: "upcoming",
      priority: "medium",
      website: "https://online-inspire.gov.in"
    },
    {
      id: 14,
      title: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
      category: "Scholarship",
      type: "Registration",
      date: "2025-07-15",
      endDate: "2025-08-15",
      description: "Fellowship program for students pursuing research in science",
      status: "upcoming",
      priority: "medium",
      website: "http://kvpy.iisc.ernet.in"
    },
    {
      id: 15,
      title: "Post Matric Scholarship SC/ST",
      category: "Scholarship",
      type: "Application",
      date: "2025-08-01",
      endDate: "2025-10-15",
      description: "Post matric scholarship for SC/ST students",
      status: "upcoming",
      priority: "medium",
      website: "https://scholarships.gov.in"
    },

    // State Level Exams
    {
      id: 16,
      title: "MHT CET 2025 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-01-22",
      endDate: "2025-03-16",
      description: "Maharashtra Common Entrance Test registration",
      status: "upcoming",
      priority: "medium",
      website: "https://cetcell.mahacet.org"
    },
    {
      id: 17,
      title: "KCET 2025 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-02-15",
      endDate: "2025-03-18",
      description: "Karnataka Common Entrance Test registration",
      status: "upcoming",
      priority: "medium",
      website: "https://kea.kar.nic.in"
    },
    {
      id: 18,
      title: "EAMCET 2025 Registration",
      category: "Engineering",
      type: "Registration",
      date: "2025-03-01",
      endDate: "2025-04-04",
      description: "Andhra Pradesh Engineering, Agriculture & Medical CET",
      status: "upcoming",
      priority: "medium",
      website: "https://apeamcet.nic.in"
    },

    // Management Exams
    {
      id: 19,
      title: "CAT 2025 Registration",
      category: "Management",
      type: "Registration",
      date: "2025-07-31",
      endDate: "2025-09-13",
      description: "Common Admission Test for MBA programs",
      status: "upcoming",
      priority: "high",
      website: "https://iimcat.ac.in"
    },
    {
      id: 20,
      title: "CAT 2025 Exam",
      category: "Management",
      type: "Exam",
      date: "2025-11-24",
      description: "CAT 2025 examination",
      status: "upcoming",
      priority: "high",
      website: "https://iimcat.ac.in"
    },

    // Other Important Exams
    {
      id: 21,
      title: "CLAT 2025 Registration",
      category: "Law",
      type: "Registration",
      date: "2025-01-01",
      endDate: "2025-04-15",
      description: "Common Law Admission Test registration",
      status: "upcoming",
      priority: "medium",
      website: "https://consortiumofnlus.ac.in"
    },
      {
        id: id++,
        title: "NATA 2025 Registration",
        category: "Architecture",
        type: "Registration",
        date: "2025-02-26",
        endDate: "2025-03-25",
        description: "National Aptitude Test in Architecture",
        status: "upcoming",
        priority: "medium",
        website: "https://nata.in"
      }
    );

    // State Level Engineering Exams (50+ events)
    const stateExams = [
      { state: "Maharashtra", exam: "MHT CET", regStart: "2025-01-22", regEnd: "2025-03-16", examDate: "2025-05-02", website: "https://cetcell.mahacet.org" },
      { state: "Karnataka", exam: "KCET", regStart: "2025-02-15", regEnd: "2025-03-18", examDate: "2025-04-18", website: "https://kea.kar.nic.in" },
      { state: "Andhra Pradesh", exam: "EAMCET", regStart: "2025-03-01", regEnd: "2025-04-04", examDate: "2025-05-16", website: "https://apeamcet.nic.in" },
      { state: "Telangana", exam: "TS EAMCET", regStart: "2025-03-05", regEnd: "2025-04-08", examDate: "2025-05-20", website: "https://eamcet.tsche.ac.in" },
      { state: "Tamil Nadu", exam: "TNEA", regStart: "2025-05-15", regEnd: "2025-06-15", examDate: "2025-07-01", website: "https://tneaonline.org" },
      { state: "Kerala", exam: "KEAM", regStart: "2025-03-10", regEnd: "2025-04-10", examDate: "2025-06-05", website: "https://cee.kerala.gov.in" },
      { state: "West Bengal", exam: "WBJEE", regStart: "2025-02-20", regEnd: "2025-03-22", examDate: "2025-04-30", website: "https://wbjeeb.nic.in" },
      { state: "Gujarat", exam: "GUJCET", regStart: "2025-03-15", regEnd: "2025-04-15", examDate: "2025-05-25", website: "https://gseb.org" },
      { state: "Rajasthan", exam: "REAP", regStart: "2025-04-01", regEnd: "2025-05-01", examDate: "2025-06-10", website: "https://reap2025.org" },
      { state: "Madhya Pradesh", exam: "MP JEE", regStart: "2025-02-25", regEnd: "2025-03-25", examDate: "2025-05-08", website: "https://jeecup.admissions.nic.in" },
      { state: "Uttar Pradesh", exam: "UPSEE", regStart: "2025-03-20", regEnd: "2025-04-20", examDate: "2025-06-15", website: "https://upsee.nic.in" },
      { state: "Bihar", exam: "BCECE", regStart: "2025-03-12", regEnd: "2025-04-12", examDate: "2025-05-30", website: "https://bceceboard.bihar.gov.in" },
      { state: "Odisha", exam: "OJEE", regStart: "2025-04-05", regEnd: "2025-05-05", examDate: "2025-06-20", website: "https://ojee.nic.in" },
      { state: "Jharkhand", exam: "JCECE", regStart: "2025-03-18", regEnd: "2025-04-18", examDate: "2025-06-08", website: "https://jceceb.jharkhand.gov.in" },
      { state: "Haryana", exam: "JEE Main Haryana", regStart: "2025-04-10", regEnd: "2025-05-10", examDate: "2025-06-25", website: "https://hstes.org.in" },
      { state: "Punjab", exam: "JEE Main Punjab", regStart: "2025-04-15", regEnd: "2025-05-15", examDate: "2025-07-02", website: "https://punjabteched.com" },
      { state: "Himachal Pradesh", exam: "JEE Main HP", regStart: "2025-04-20", regEnd: "2025-05-20", examDate: "2025-07-08", website: "https://himachal.nic.in" },
      { state: "Uttarakhand", exam: "JEEP", regStart: "2025-04-25", regEnd: "2025-05-25", examDate: "2025-07-12", website: "https://jeep.uk.gov.in" },
      { state: "Assam", exam: "CEE Assam", regStart: "2025-05-01", regEnd: "2025-06-01", examDate: "2025-07-18", website: "https://cee.assam.gov.in" },
      { state: "Manipur", exam: "MANIPUR CET", regStart: "2025-05-05", regEnd: "2025-06-05", examDate: "2025-07-22", website: "https://manipur.gov.in" },
      { state: "Tripura", exam: "TRIPURA JEE", regStart: "2025-05-10", regEnd: "2025-06-10", examDate: "2025-07-25", website: "https://tripura.gov.in" },
      { state: "Meghalaya", exam: "MEGHALAYA CET", regStart: "2025-05-12", regEnd: "2025-06-12", examDate: "2025-07-28", website: "https://meghalaya.gov.in" },
      { state: "Nagaland", exam: "NAGALAND CET", regStart: "2025-05-15", regEnd: "2025-06-15", examDate: "2025-08-01", website: "https://nagaland.gov.in" },
      { state: "Mizoram", exam: "MIZORAM CET", regStart: "2025-05-18", regEnd: "2025-06-18", examDate: "2025-08-05", website: "https://mizoram.gov.in" },
      { state: "Arunachal Pradesh", exam: "ARUNACHAL JEE", regStart: "2025-05-20", regEnd: "2025-06-20", examDate: "2025-08-08", website: "https://arunachal.nic.in" },
      { state: "Sikkim", exam: "SIKKIM CET", regStart: "2025-05-22", regEnd: "2025-06-22", examDate: "2025-08-12", website: "https://sikkim.gov.in" },
      { state: "Goa", exam: "GOA CET", regStart: "2025-05-25", regEnd: "2025-06-25", examDate: "2025-08-15", website: "https://goa.gov.in" },
      { state: "Chhattisgarh", exam: "CG JEE", regStart: "2025-04-28", regEnd: "2025-05-28", examDate: "2025-07-15", website: "https://cgvyapam.choice.gov.in" },
      { state: "Delhi", exam: "DELHI CET", regStart: "2025-06-01", regEnd: "2025-07-01", examDate: "2025-08-20", website: "https://delhi.gov.in" },
      { state: "Jammu & Kashmir", exam: "JK CET", regStart: "2025-06-05", regEnd: "2025-07-05", examDate: "2025-08-25", website: "https://jkbose.ac.in" }
    ];

    stateExams.forEach(exam => {
      events.push(
        {
          id: id++,
          title: `${exam.exam} ${exam.state} Registration`,
          category: "Engineering",
          type: "Registration",
          date: exam.regStart,
          endDate: exam.regEnd,
          description: `${exam.state} Common Entrance Test registration for engineering admissions`,
          status: "upcoming",
          priority: "medium",
          website: exam.website
        },
        {
          id: id++,
          title: `${exam.exam} ${exam.state} Exam`,
          category: "Engineering",
          type: "Exam",
          date: exam.examDate,
          description: `${exam.state} engineering entrance examination`,
          status: "upcoming",
          priority: "high",
          website: exam.website
        }
      );
    });

    // Medical State Exams
    const medicalStateExams = [
      { state: "Karnataka", exam: "NEET Karnataka Counselling", date: "2025-07-15", endDate: "2025-08-15" },
      { state: "Tamil Nadu", exam: "NEET TN Counselling", date: "2025-07-20", endDate: "2025-08-20" },
      { state: "Andhra Pradesh", exam: "NEET AP Counselling", date: "2025-07-25", endDate: "2025-08-25" },
      { state: "Telangana", exam: "NEET TS Counselling", date: "2025-07-28", endDate: "2025-08-28" },
      { state: "Maharashtra", exam: "NEET MH Counselling", date: "2025-08-01", endDate: "2025-09-01" },
      { state: "Kerala", exam: "NEET Kerala Counselling", date: "2025-08-05", endDate: "2025-09-05" },
      { state: "West Bengal", exam: "NEET WB Counselling", date: "2025-08-08", endDate: "2025-09-08" },
      { state: "Gujarat", exam: "NEET Gujarat Counselling", date: "2025-08-10", endDate: "2025-09-10" },
      { state: "Rajasthan", exam: "NEET Rajasthan Counselling", date: "2025-08-12", endDate: "2025-09-12" },
      { state: "Madhya Pradesh", exam: "NEET MP Counselling", date: "2025-08-15", endDate: "2025-09-15" }
    ];

    medicalStateExams.forEach(exam => {
      events.push({
        id: id++,
        title: exam.exam,
        category: "Medical",
        type: "Counselling",
        date: exam.date,
        endDate: exam.endDate,
        description: `${exam.state} state quota NEET counselling process`,
        status: "upcoming",
        priority: "high",
        website: "https://mcc.nic.in"
      });
    });

    // Scholarship Programs (20+ events)
    const scholarships = [
      { name: "Prime Minister's Scholarship Scheme", date: "2025-07-01", endDate: "2025-08-31", amount: "₹2,500/month" },
      { name: "Central Sector Scholarship", date: "2025-08-01", endDate: "2025-09-30", amount: "₹20,000/year" },
      { name: "Merit cum Means Scholarship", date: "2025-08-15", endDate: "2025-10-15", amount: "₹20,000/year" },
      { name: "Girl Child Protection Scheme", date: "2025-09-01", endDate: "2025-10-31", amount: "₹36,000/year" },
      { name: "Minority Scholarship", date: "2025-09-15", endDate: "2025-11-15", amount: "₹20,000/year" },
      { name: "Begum Hazrat Mahal Scholarship", date: "2025-10-01", endDate: "2025-11-30", amount: "₹12,000/year" },
      { name: "Maulana Azad National Fellowship", date: "2025-10-15", endDate: "2025-12-15", amount: "₹25,000/month" },
      { name: "Rajiv Gandhi Fellowship", date: "2025-11-01", endDate: "2025-12-31", amount: "₹25,000/month" },
      { name: "UGC NET JRF Fellowship", date: "2025-06-01", endDate: "2025-07-31", amount: "₹31,000/month" },
      { name: "CSIR NET JRF Fellowship", date: "2025-06-15", endDate: "2025-08-15", amount: "₹31,000/month" },
      { name: "DST INSPIRE Fellowship", date: "2025-07-01", endDate: "2025-08-31", amount: "₹35,000/month" },
      { name: "ICMR JRF Fellowship", date: "2025-07-15", endDate: "2025-09-15", amount: "₹31,000/month" },
      { name: "DBT JRF Fellowship", date: "2025-08-01", endDate: "2025-09-30", amount: "₹31,000/month" },
      { name: "ICAR JRF Fellowship", date: "2025-08-15", endDate: "2025-10-15", amount: "₹25,000/month" },
      { name: "Swami Vivekananda Merit Scholarship", date: "2025-09-01", endDate: "2025-10-31", amount: "₹5,000/month" },
      { name: "Kanyashree Prakalpa", date: "2025-09-15", endDate: "2025-11-15", amount: "₹25,000/year" },
      { name: "Mukhyamantri Medhavi Vidyarthi Yojana", date: "2025-10-01", endDate: "2025-11-30", amount: "Full Fee" },
      { name: "Pragati Scholarship for Girls", date: "2025-10-15", endDate: "2025-12-15", amount: "₹50,000/year" },
      { name: "Saksham Scholarship", date: "2025-11-01", endDate: "2025-12-31", amount: "₹50,000/year" },
      { name: "Aditya Birla Scholarship", date: "2025-05-01", endDate: "2025-06-30", amount: "₹175,000/year" }
    ];

    scholarships.forEach(scholarship => {
      events.push({
        id: id++,
        title: `${scholarship.name} Application`,
        category: "Scholarship",
        type: "Application",
        date: scholarship.date,
        endDate: scholarship.endDate,
        description: `Apply for ${scholarship.name} - Amount: ${scholarship.amount}`,
        status: "upcoming",
        priority: "medium",
        website: "https://scholarships.gov.in"
      });
    });

    // Professional Course Exams (15+ events)
    const professionalExams = [
      { name: "CA Foundation", regStart: "2025-01-15", regEnd: "2025-02-15", examDate: "2025-05-12", website: "https://icai.org" },
      { name: "CA Intermediate", regStart: "2025-02-01", regEnd: "2025-03-01", examDate: "2025-05-03", website: "https://icai.org" },
      { name: "CA Final", regStart: "2025-02-15", regEnd: "2025-03-15", examDate: "2025-05-02", website: "https://icai.org" },
      { name: "CS Foundation", regStart: "2025-01-20", regEnd: "2025-02-20", examDate: "2025-06-01", website: "https://icsi.edu" },
      { name: "CS Executive", regStart: "2025-02-05", regEnd: "2025-03-05", examDate: "2025-06-01", website: "https://icsi.edu" },
      { name: "CS Professional", regStart: "2025-02-20", regEnd: "2025-03-20", examDate: "2025-06-01", website: "https://icsi.edu" },
      { name: "CMA Foundation", regStart: "2025-01-25", regEnd: "2025-02-25", examDate: "2025-06-08", website: "https://icmai.in" },
      { name: "CMA Intermediate", regStart: "2025-02-10", regEnd: "2025-03-10", examDate: "2025-06-08", website: "https://icmai.in" },
      { name: "CMA Final", regStart: "2025-02-25", regEnd: "2025-03-25", examDate: "2025-06-08", website: "https://icmai.in" },
      { name: "ACCA", regStart: "2025-02-01", regEnd: "2025-04-29", examDate: "2025-06-03", website: "https://accaglobal.com" },
      { name: "CFA Level 1", regStart: "2025-01-01", regEnd: "2025-04-09", examDate: "2025-05-15", website: "https://cfainstitute.org" },
      { name: "CFA Level 2", regStart: "2025-01-15", regEnd: "2025-04-23", examDate: "2025-05-21", website: "https://cfainstitute.org" },
      { name: "CFA Level 3", regStart: "2025-02-01", regEnd: "2025-05-07", examDate: "2025-05-25", website: "https://cfainstitute.org" },
      { name: "FRM Part 1", regStart: "2025-01-01", regEnd: "2025-04-01", examDate: "2025-05-11", website: "https://garp.org" },
      { name: "FRM Part 2", regStart: "2025-01-15", regEnd: "2025-04-15", examDate: "2025-05-18", website: "https://garp.org" }
    ];

    professionalExams.forEach(exam => {
      events.push(
        {
          id: id++,
          title: `${exam.name} Registration`,
          category: "Professional",
          type: "Registration",
          date: exam.regStart,
          endDate: exam.regEnd,
          description: `${exam.name} course registration for professional certification`,
          status: "upcoming",
          priority: "medium",
          website: exam.website
        },
        {
          id: id++,
          title: `${exam.name} Exam`,
          category: "Professional",
          type: "Exam",
          date: exam.examDate,
          description: `${exam.name} professional certification examination`,
          status: "upcoming",
          priority: "high",
          website: exam.website
        }
      );
    });

    // International Exams (10+ events)
    const internationalExams = [
      { name: "SAT", regStart: "2025-02-01", regEnd: "2025-04-19", examDate: "2025-05-04", website: "https://collegeboard.org" },
      { name: "SAT Subject Tests", regStart: "2025-02-15", regEnd: "2025-05-03", examDate: "2025-06-01", website: "https://collegeboard.org" },
      { name: "GRE General", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-06-15", website: "https://ets.org" },
      { name: "GRE Subject", regStart: "2025-08-01", regEnd: "2025-09-12", examDate: "2025-10-12", website: "https://ets.org" },
      { name: "GMAT", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-07-01", website: "https://mba.com" },
      { name: "IELTS Academic", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-06-08", website: "https://ielts.org" },
      { name: "IELTS General", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-06-22", website: "https://ielts.org" },
      { name: "TOEFL iBT", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-06-29", website: "https://ets.org" },
      { name: "PTE Academic", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-07-06", website: "https://pearsonpte.com" },
      { name: "Duolingo English Test", regStart: "2025-01-01", regEnd: "2025-12-31", examDate: "2025-07-13", website: "https://englishtest.duolingo.com" }
    ];

    internationalExams.forEach(exam => {
      events.push(
        {
          id: id++,
          title: `${exam.name} Registration`,
          category: "International",
          type: "Registration",
          date: exam.regStart,
          endDate: exam.regEnd,
          description: `${exam.name} international examination registration`,
          status: "upcoming",
          priority: "medium",
          website: exam.website
        },
        {
          id: id++,
          title: `${exam.name} Exam`,
          category: "International",
          type: "Exam",
          date: exam.examDate,
          description: `${exam.name} international standardized test`,
          status: "upcoming",
          priority: "high",
          website: exam.website
        }
      );
    });

    // Board Exam Deadlines (5+ events)
    const boardExams = [
      { board: "CBSE Class 10", regStart: "2025-09-01", regEnd: "2025-09-30", examDate: "2025-02-15", website: "https://cbse.gov.in" },
      { board: "CBSE Class 12", regStart: "2025-09-01", regEnd: "2025-09-30", examDate: "2025-02-15", website: "https://cbse.gov.in" },
      { board: "ICSE Class 10", regStart: "2025-09-15", regEnd: "2025-10-15", examDate: "2025-02-27", website: "https://cisce.org" },
      { board: "ISC Class 12", regStart: "2025-09-15", regEnd: "2025-10-15", examDate: "2025-02-27", website: "https://cisce.org" },
      { board: "State Board Class 10", regStart: "2025-10-01", regEnd: "2025-10-31", examDate: "2025-03-01", website: "https://stateboard.gov.in" }
    ];

    boardExams.forEach(exam => {
      events.push(
        {
          id: id++,
          title: `${exam.board} Registration`,
          category: "Board",
          type: "Registration",
          date: exam.regStart,
          endDate: exam.regEnd,
          description: `${exam.board} examination registration`,
          status: "upcoming",
          priority: "high",
          website: exam.website
        },
        {
          id: id++,
          title: `${exam.board} Exam`,
          category: "Board",
          type: "Exam",
          date: exam.examDate,
          description: `${exam.board} board examination`,
          status: "upcoming",
          priority: "high",
          website: exam.website
        }
      );
    });

    return events;
  };

  const timelineEvents = generateTimelineEvents();

  useEffect(() => {
    setAllEvents(timelineEvents);
    setDisplayedEvents(timelineEvents);
  }, []);

  // Simple and clean filtering logic
  const applyFilters = () => {
    let result = [...allEvents];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(event => event.category === categoryFilter);
    }

    // Month filter
    if (monthFilter !== 'all') {
      const monthIndex = parseInt(monthFilter);
      result = result.filter(event => {
        const eventMonth = new Date(event.date).getMonth();
        return eventMonth === monthIndex;
      });
    }

    // Sort by date
    result.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return result;
  };

  // Apply filters whenever inputs change
  useEffect(() => {
    const filtered = applyFilters();
    setDisplayedEvents(filtered);
  }, [searchQuery, categoryFilter, monthFilter, allEvents]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'upcoming':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'urgent':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const categories = ['all', 'Medical', 'Engineering', 'Management', 'Scholarship', 'Law', 'Architecture', 'Professional', 'International', 'Board'];
  const months = [
    { value: 'all', label: 'All Months' },
    { value: '0', label: 'January' },
    { value: '1', label: 'February' },
    { value: '2', label: 'March' },
    { value: '3', label: 'April' },
    { value: '4', label: 'May' },
    { value: '5', label: 'June' },
    { value: '6', label: 'July' },
    { value: '7', label: 'August' },
    { value: '8', label: 'September' },
    { value: '9', label: 'October' },
    { value: '10', label: 'November' },
    { value: '11', label: 'December' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="section-title">Educational Timeline</h1>
          <p className="text-gray-600">Track important deadlines for admissions, exams, and scholarships</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events, exams, scholarships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Filter */}
            <div>
              <select
                value={monthFilter}
                onChange={(e) => setMonthFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none cursor-pointer"
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Timeline Events */}
        <div className="space-y-4">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-sm border-l-4 ${getPriorityColor(event.priority)} p-6 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {getStatusIcon(event.status)}
                    <h3 className="text-lg font-semibold text-gray-900 ml-2">{event.title}</h3>
                    <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                      event.category === 'Medical' ? 'bg-red-100 text-red-800' :
                      event.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                      event.category === 'Management' ? 'bg-purple-100 text-purple-800' :
                      event.category === 'Scholarship' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">{event.type}</span>
                    </div>
                    {event.priority === 'high' && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        High Priority
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="ml-4">
                  {event.website && (
                    <a
                      href={event.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedEvents.length === 0 && (
          <div className="text-center py-12">
            <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
