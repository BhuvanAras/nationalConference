
import React from 'react';
import { IMPORTANT_DATES, TRACKS, CONFERENCE_INFO, FEES, PATRONAGE, PAPER_FORMAT } from '../constants';

const Details: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section on Details */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 serif mb-4">{CONFERENCE_INFO.title}</h1>
          <p className="text-xl text-blue-800 font-medium italic">{CONFERENCE_INFO.subtitle}</p>
        </div>

        {/* Section: About the Conference */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-6 border-l-4 border-blue-900 pl-4 uppercase tracking-tight">About the Conference</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As India approaches the centenary of its independence in 2047, the national vision of <strong>Viksit Bharat @2047</strong> calls for inclusive growth driven by innovation, knowledge, and sustainability. Achieving this vision requires active participation from academic institutions as creators of knowledge and responsible innovation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Bharat Synapse @2047</strong> is conceived as a national interdisciplinary academic platform that brings together faculty members, researchers, and scholars from diverse domains to engage in dialogue on India's future. The conference aims to integrate technology, management, and sustainability to foster research that contributes to national development and societal well-being.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
             <h3 className="font-bold text-blue-900 mb-2">Vision Alignment: Viksit Bharat @2047</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-800">
               <li>• Knowledge-driven economic growth</li>
               <li>• Digital public infrastructure and innovation</li>
               <li>• Human capital development</li>
               <li>• Sustainable and inclusive development</li>
               <li>• Ethical and responsible use of technology</li>
             </ul>
          </div>
        </div>

        {/* Section: Call for Paper & Scope */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-6">Call for Paper</h2>
            <p className="text-gray-600 text-sm mb-4">
              Faculty members, researchers, doctoral scholars, and postgraduate students are invited to submit original and unpublished research papers aligned with the conference themes.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Conceptual, empirical, and case-based studies are welcome
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Interdisciplinary and practice-oriented research is encouraged
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Selected papers will be published in the conference proceedings
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-6 uppercase tracking-tight">Important Dates</h2>
            <div className="space-y-4">
              {IMPORTANT_DATES.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-600 text-sm">{item.event}</span>
                  <span className="text-blue-900 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Format of Paper */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-8 uppercase tracking-tight">Format of Paper</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="border-b md:border-b-0 md:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Document Format</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.format}</p>
            </div>
            <div className="border-b md:border-b-0 lg:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Full Paper Length</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.fullPaperLength}</p>
            </div>
            <div className="border-b lg:border-b-0 p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Abstract Word Count</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.abstractLength}</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Font & Body</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.fontType}, {PAPER_FORMAT.bodyText}</p>
            </div>
            <div className="border-b md:border-b-0 lg:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Title Format</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.titleFormat}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-400 font-bold uppercase text-[10px] mb-1">Plagiarism Limit</p>
              <p className="font-semibold text-red-600">{PAPER_FORMAT.plagiarismLimit}</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-8 text-sm">
             <div><span className="text-gray-400">Line Spacing:</span> <span className="font-bold">{PAPER_FORMAT.lineSpacing}</span></div>
             <div><span className="text-gray-400">References Style:</span> <span className="font-bold">{PAPER_FORMAT.referenceStyle}</span></div>
          </div>
        </div>

        {/* Section: Themes */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-8 uppercase tracking-tight">Themes & Tracks</h2>
          <div className="space-y-12">
            {TRACKS.map((track, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center text-sm">{i+1}</span>
                  {track.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {track.topics.map((topic, j) => (
                    <div key={j} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                      <span className="text-blue-400 mt-1 font-bold">{j+1}.</span>
                      <p className="text-xs text-gray-700 leading-tight">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Patronage */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-10 text-center uppercase tracking-widest border-b border-gray-100 pb-4">Patronage</h2>
          
          <div className="mb-12">
            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest text-center mb-6">Chief Patrons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PATRONAGE.chiefPatrons.map((p, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{p.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">General Chair</h3>
              <div className="space-y-4">
                {PATRONAGE.generalChairs.map((p, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-xl">
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">Conference Chair</h3>
              <div className="space-y-4">
                {PATRONAGE.conferenceChairs.map((p, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-xl">
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Registration Fees */}
        <div className="bg-blue-900 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
          <h2 className="text-2xl font-bold serif mb-8 uppercase tracking-widest text-center">Registration Fee</h2>
          <div className="max-w-md mx-auto space-y-4">
             <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl border border-white/10">
                <span className="font-medium">Research Scholar</span>
                <span className="text-2xl font-bold text-blue-200">₹{FEES['Research Scholar']}</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl border border-white/10">
                <span className="font-medium">Industry Delegates</span>
                <span className="text-2xl font-bold text-blue-200">₹{FEES['Industry Delegates']}</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl border border-white/10">
                <span className="font-medium">Academician/Faculty</span>
                <span className="text-2xl font-bold text-blue-200">₹{FEES['Academician/Faculty']}</span>
             </div>
             <div className="flex justify-between items-center p-4 bg-white/10 rounded-2xl border border-white/10">
                <span className="font-medium">Observer</span>
                <span className="text-2xl font-bold text-blue-200">₹{FEES['Observer']}</span>
             </div>
          </div>
          <p className="mt-8 text-center text-xs text-blue-300 italic">
            * Registration includes conference kit, certificate, and participation in all sessions.
          </p>
        </div>

        {/* Section: Certification */}
        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-yellow-900 mb-4 serif uppercase tracking-tight">Certification</h3>
          <p className="text-yellow-800 text-sm max-w-2xl mx-auto leading-relaxed">
            Certificates will be issued only to <strong>registered participants</strong>. Certificates will be awarded for Participation, Paper Presentation, Session Chair, and Panelist roles.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Details;
