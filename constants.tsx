
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
    email: " viksitbharat2026@ifim.edu.in",
    phone: "+91 824 098 1218",
    phone2: "+91 97421 11344"
  }
};

const CHIEF_PATRONS = [
  { name: "Mr. Sanjay Padode", role: "Chairman, CDE", photo: "/thumbnail.png" },
  { name: "Mrs. Kalpana Padode", role: "Secretary, CDE", photo: "/thumbnail1.png" },
  { name: "Pranav Padode", role: "Chief Executive Officer", photo: "/thumbnail2.png" },
  { name: "Kritika Padode Bhandari", role: "Founding Team Member", photo: "/thumbnail.png" },
  { name: "Edwin Moses", role: "Chief Executive Officer, CDE", photo: "/thumbnail1.png" },
  { name: "Dr. A V Arun Kumar", role: "Director, IFIM College", photo: "/thumbnail2.png" }
];

export const PATRONAGE = {
  chiefPatrons: CHIEF_PATRONS,
  Patron: [
    { name: "Dr. Sridevi Varanasi", role: "Principal and Director, IFIM College", photo: "/Sridevi.webp" },
    { name: "Prof. Dr. Sakkthivel Annamalai Manickam", role: "Dean of Management, IFIM College", photo: "/Prof.-Dr.-A.-M.-Sakkthivel.webp" },
    { name: "Dr. Salur Srikant Patnaik", role: "Dean of School of Technology, IFIM College", photo: "/srikanth.png" },
    { name: "Dr. Aswini Patro", role: "Principal, IFIM Law College", photo: "/aswini.webp" }
  ],
  conferenceChairs: [
    { name: "Dr. Vishal C", role: "Associate Professor, IFIM College", photo: "/Dr-Vishal-C.webp" },
    { name: "Dr. Sunethra Chatterjee", role: "Assistant Professor, IFIM College", photo: "/mam.jpeg" }
  ],
  AdvisoryCommittee: [
    { name: "Dr. Vidhya Pillai", role: "Asst. Dean, MBA, IFIM College", photo: "/Dr-Vidhya-Pillai .webp" },
    { name: "Prof. Swarnika Dixit", role: "Asst. Dean, BBA-B.COM, IFIM College", photo: "/Swarnika.webp" },
    { name: "Dr. H.S. Gitanjali", role: "Program Head, B.COM, IFIM College", photo: "/Dr-H.S.-Gitanjali-Shankarappa .webp" },
    { name: "Dr. Sathya Thangavel", role: "HOD, Language Dept, IFIM College", photo: "/english.webp" },
    { name: "Dr. Nataraja N S", role: "Area Chair, Analytics, IFIM College", photo: "/ns .webp" },
    { name: "Prof. Nikil Gupta", role: "Professor of Practice, IFIM College", photo: "/Prof-Nikhil-Gupta- .webp" },
    { name: "Prof. Pooja Ogale", role: "Asst. Professor, IFIM Law College", photo: "/Pooja-Ogle-Law-265x300.jpg" }
  ],
  organizingCommittee: [
    { name: "Dr. Raj Kumar", role: "Organizing Committee Member, IFIM College", photo: "/raj.webp" },
    { name: "Dr. Anant Jain", role: "Organizing Committee Member, IFIM College", photo: "/jain.jpeg" },
    { name: "Dr. Arpit D Yadav", role: "Organizing Committee Member, IFIM College", photo: "/Arpit-Yadav_.jpg" },
    { name: "Dr. Ajit M", role: "Organizing Committee Member, IFIM College", photo: "/thumbnail.png" },
    { name: "Prof. Parth Saarthi", role: "Organizing Committee Member, IFIM College", photo: "/parth.jpeg" },
    { name: "Prof. Haritha", role: "Organizing Committee Member, IFIM College", photo: "/thumbnail2.png" },
    { name: "Prof. Sinzy Silvester", role: "Organizing Committee Member, IFIM College", photo: "/Prof.-Sinzy-Silvester .webp" },
    { name: "Prof. Lakshmi Saranya", role: "Organizing Committee Member, IFIM College", photo: "/S-Lakshmi-Saranya-265x300.jpg" },
    { name: "Prof. Dilip B", role: "Organizing Committee Member, IFIM College", photo: "/Prof-Dilip-B.webp" },
    { name: "Prof. Sumiya", role: "Organizing Committee Member, IFIM College", photo: "/thumbnail.png" }
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
