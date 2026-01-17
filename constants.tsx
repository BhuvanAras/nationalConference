
import React from 'react';

export const CONFERENCE_INFO = {
  title: "Bharat Synapse @2047",
  subtitle: "Contours of a future-ready bharat",
  type: "1st National Conference on National Interdisciplinary Conference",
  organizedBy: "IFIM School of Technology, IFIM College",
  venue: "IFIM College, Bengaluru",
  dates: "5–6 March, 2026",
  mode: "Hybrid (Online/Offline)",
  coordinator: {
    name: "Dr. Sunethra Chatterjee",
    email: "conference.coord@ifim.edu.in",
    phone: "+91 98765 43210"
  }
};

export const PATRONAGE = {
  chiefPatrons: [
    { name: "Mr. Sanjay Padode", role: "Chairman, CDE" },
    { name: "Mrs. Kalpana Padode", role: "Secretary, CDE" },
    { name: "Pranav Padode", role: "Chief Executive Officer" },
    { name: "Kritika Padode Bhandari", role: "Founding Team Member" },
    { name: "Edwin Moses", role: "Chief Executive Officer, CDE" },
    { name: "Dr. A V Arun Kumar", role: "Director, IFIM College" }
  ],
  generalChairs: [
    { name: "Dr. Sridevi Varanasi", role: "Principal and Director, IFIM College" },
    { name: "Prof. Dr. Sakkthivel Annamalai Manickam", role: "Dean of Management, IFIM College" },
    { name: "Dr. Salur Srikant Patnaik", role: "Dean of School of Technology, IFIM College" }
  ],
  conferenceChairs: [
    { name: "Dr. Sunethra Chatterjee", role: "Assistant Professor, IFIM College" },
    { name: "Dr. Vishal C", role: "Associate Professor, IFIM College" }
  ]
};

export const PAPER_FORMAT = {
  format: "PDF Document",
  fullPaperLength: "6–10 pages",
  abstractLength: "300–500 words",
  fontType: "Times New Roman",
  bodyText: "12 pt",
  titleFormat: "14 pt, Bold, Centre",
  lineSpacing: "1.5",
  plagiarismLimit: "Less than 10% (excluding references)",
  referenceStyle: "APA / IEEE"
};

export const IMPORTANT_DATES = [
  { event: "Extended Abstract Submission Deadline", date: "10 February 2026" },
  { event: "Notification of Acceptance", date: "12 February 2026" },
  { event: "Full Paper Submission Deadline", date: "1 March 2026" },
  { event: "Conference Dates", date: "5–6 March 2026" }
];

export const FEES = {
  [ 'Research Scholar' ]: 1000,
  [ 'Academician/Faculty' ]: 1500,
  [ 'Observer' ]: 500,
  [ 'Industry Delegates' ]: 3000
};

export const TRACKS = [
  {
    name: "Track 1: Next-Gen Technologies",
    topics: [
      "Technology Pathways for a Developed India by 2047",
      "Digital Public Infrastructure as a Foundation for India's High-Growth, Inclusive Economy by 2047",
      "Artificial Intelligence, Automation, and the Future of Work in India @2047",
      "Technological Sovereignty and Strategic Autonomy: Semiconductors, AI, and Critical Technologies",
      "Next-Generation Healthcare Systems: Digital Health, AI, and Universal Access by 2047",
      "Smart, Secure, and Resilient Cities for India's Growth"
    ]
  },
  {
    name: "Track 2: From MSMEs to Global Champions",
    topics: [
      "Achieving Vikshit Bharat 2047: Institutions, Markets & Human Capital",
      "Building World-Class Institutions for India @2047: Governance Reforms, Accountability, and State Capacity",
      "Transforming India's Human Capital for a Knowledge Economy by 2047",
      "MSMEs to Global Champions: Strategic Pathways for Competitive Indian Enterprises by 2047",
      "Public Policy Design for Inclusive and Sustainable Economic Growth in India @2047",
      "Future-Ready Leadership and Workforce Management in India's Transition to a High-Income Economy"
    ]
  },
  {
    name: "Track 3: Systems for Prosperity",
    topics: [
      "Sustainable Development Pathways for Vikshit Bharat 2047",
      "India's Energy Transition Pathway to Net-Zero and Energy Security by 2047",
      "Climate-Resilient Agriculture and Food Systems for India's Future Population",
      "Sustainable Urbanization and Infrastructure for India @2047",
      "Circular Economy and Resource Efficiency as Pillars of India's Long-Term Growth",
      "Water Security, Climate Risk, and Institutional Solutions for India @2047"
    ]
  }
];
