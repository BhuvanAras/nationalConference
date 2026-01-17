import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONFERENCE_INFO, TRACKS, IMPORTANT_DATES, PATRONAGE, FEES, PAPER_FORMAT } from '../constants';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeFZTZrYBeP0iqixb9CHqhdd-lOwhLl_w6z2uvMZqWU_pbB3w/viewform?usp=publish-editor';

const Landing: React.FC = () => {
  const [patronSlide, setPatronSlide] = useState(0);

  const scrollToDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('details-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const patronageItems = PATRONAGE.chiefPatrons;
  const patronsPerSlide = 3;
  const patronSlides = Math.ceil(patronageItems.length / patronsPerSlide);

  useEffect(() => {
    const id = setInterval(() => {
      setPatronSlide(prev => (prev + 1) % patronSlides);
    }, 4000);
    return () => clearInterval(id);
  }, [patronSlides]);

  return (
    <div className="relative scroll-smooth -mt-28">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/clg.jpg" 
            alt="Conference Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full min-h-screen justify-between">
          <div className="flex flex-col items-center justify-center flex-grow">
            <p className="text-blue-200 font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
              {CONFERENCE_INFO.type}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 serif tracking-tight">
              {CONFERENCE_INFO.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl font-light italic">
              "{CONFERENCE_INFO.subtitle}"
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pb-12">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-amber-400 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] transform hover:scale-105"
            >
              Register Now
            </a>
            <button 
              onClick={scrollToDetails}
              className="px-10 py-4 bg-white/10 text-white backdrop-blur-sm rounded-full font-bold hover:bg-white/20 transition-all border border-white/30 transform hover:scale-105"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Details Container - Targeted by scroll */}
      <div id="details-section">
        {/* Quick About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 serif mb-8">About the Conference</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              As India approaches its independence centenary, the vision of <strong>Viksit Bharat @2047</strong> calls for inclusive growth driven by innovation and sustainability. This conference brings together faculty, researchers, and scholars to engage in dialogue on India's future.
            </p>
          </div>
        </section>

        {/* Themes & Tracks Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 serif mb-4">Themes & Tracks</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Focusing on Next-Gen Technologies, Business Growth, and Sustainability</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {TRACKS.map((track, i) => (
                <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-white-100 text-amber-500 text-[20px] font-bold uppercase rounded-full mb-4">Track {i+1}</span>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 serif leading-tight">{track.name}</h3>
                    <ul className="space-y-3">
                      {track.topics.slice(0, 3).map((topic, j) => (
                        <li key={j} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Link to="/details" className="mt-6 inline-flex items-center text-amber-500 font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                      View Full Track <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates Timeline */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 serif mb-6">Important Dates</h2>
                <p className="text-gray-600 mb-8">Mark your calendars for these critical milestones. Timely submission is key to paper acceptance.</p>
                <div className="bg-amber-500 text-white p-6 rounded-2xl shadow-lg">
                  <p className="text-xs text-white uppercase font-bold mb-2">Paper Format</p>
                  <ul className="text-sm space-y-2  text-white" >
                    <li>• MS Word document</li>
                    <li>• 150-200 Words Abstract</li>
                    <li>• 6-10 Pages Full Paper</li>
                    <li>• Less than 10% Plagiarism</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-2/3 w-full">
                <div className="grid gap-6">
                  {IMPORTANT_DATES.map((date, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amber-500 transition-all group">
                      <div className="w-16 h-16 bg-white shadow-sm border border-amber-500 rounded-full flex flex-col items-center justify-center text-black group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <span className="text-[10px] font-bold uppercase">{date.date.split(' ')[1].substring(0, 3)}</span>
                        <span className="text-xl font-bold">{date.date.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{date.event}</h4>
                        <p className="text-sm text-gray-500">{date.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Fee */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 serif">Registration Fee</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
              <div className="p-8 bg-white rounded-3xl border-2 border-amber-400 shadow-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-700 uppercase text-xs font-bold tracking-widest mb-4">Research Scholar</h4>
                  <p className="text-4xl font-extrabold mb-6">₹{FEES['Research Scholar']}</p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl border-2 border-amber-400 text-amber-700 font-bold bg-white hover:bg-amber-50 transition-colors"
                >
                  Select Category
                </a>
              </div>
              <div className="p-8 bg-white rounded-3xl border-2 border-amber-400 shadow-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-700 uppercase text-xs font-bold tracking-widest mb-4">Industry Delegates</h4>
                  <p className="text-4xl font-extrabold mb-6">₹{FEES['Industry Delegates']}</p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl border-2 border-amber-400 text-amber-700 font-bold bg-white hover:bg-amber-50 transition-colors"
                >
                  Select Category
                </a>
              </div>
              <div className="p-8 bg-white rounded-3xl border-2 border-amber-400 shadow-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-700 uppercase text-xs font-bold tracking-widest mb-4">Academician/Faculty</h4>
                  <p className="text-4xl font-extrabold mb-6">₹{FEES['Academician/Faculty']}</p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl border-2 border-amber-400 text-amber-700 font-bold bg-white hover:bg-amber-50 transition-colors"
                >
                  Select Category
                </a>
              </div>
              <div className="p-8 bg-white rounded-3xl border-2 border-amber-400 shadow-lg flex flex-col justify-between">
                <div>
                  <h4 className="text-gray-700 uppercase text-xs font-bold tracking-widest mb-4">Observer</h4>
                  <p className="text-4xl font-extrabold mb-6">₹{FEES['Observer']}</p>
                </div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl border-2 border-amber-400 text-amber-700 font-bold bg-white hover:bg-amber-50 transition-colors"
                >
                  Select Category
                </a>
              </div>
            </div>
            <p className="mt-8 text-black text-sm italic">* Certificates will be awarded for Participation, Paper Presentation, and Session Chair roles.</p>
          </div>
        </section>

        {/* Patronage Wall */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 serif mb-4">Conference Patronage</h2>
              <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            </div>
            
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700"
                  style={{ transform: `translateX(-${patronSlide * 100}%)` }}
                >
                  {Array.from({ length: patronSlides }).map((_, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-3 gap-8"
                    >
                      {patronageItems
                        .slice(
                          slideIndex * patronsPerSlide,
                          (slideIndex + 1) * patronsPerSlide
                        )
                        .map((patron, i) => (
                          <div key={i} className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
                              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <p className="text-sm font-bold text-gray-900 leading-tight mb-1">
                              {patron.name}
                            </p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                              {patron.role}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>


              

              <div className="flex justify-center mt-10 space-x-2">
                {Array.from({ length: patronSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPatronSlide(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === patronSlide ? 'bg-blue-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
               <Link to="/details" className="text-blue-900 font-bold hover:underline decoration-blue-900 decoration-2 underline-offset-4">
                 View All Chairs & General Committees
               </Link>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold text-gray-900 serif mb-6">Ready to Contribute?</h2>
           <p className="text-gray-600 text-lg mb-10">Join IFIM School of Technology for an interdisciplinary dialogue that shapes the future of Bharat.</p>
           <div className="flex flex-wrap justify-center gap-4">
             <a
               href={GOOGLE_FORM_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-800 transition-all"
             >
               Start Registration
             </a>
             <Link to="/details" className="bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Read Guidelines</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
