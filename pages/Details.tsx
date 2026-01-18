
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IMPORTANT_DATES, TRACKS, CONFERENCE_INFO, FEES, PATRONAGE, PAPER_FORMAT, CHIEF_GUEST, GUESTS } from '../constants';

const Details: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const state = (location.state || {}) as { section?: string };
    const targetSection = state.section;
    if (!targetSection) return;

    const idMap: { [key: string]: string } = {
      tracks: 'themes-tracks-section',
      patronage: 'patronage-section',
      guidelines: 'guidelines-section'
    };

    const targetId = idMap[targetSection];
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div
      className="bg-gray-50 py-16 text-justify text-[17px]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section on Details */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 serif mb-4">{CONFERENCE_INFO.title}</h1>
          <p className="text-xl text-amber-400 font-medium italic">{CONFERENCE_INFO.subtitle}</p>
        </div>

      {/* Section: About the College */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-6 border-l-4 border-amber-400 pl-4 uppercase tracking-tight">About the College</h2>
            <p className="text-black leading-relaxed mb-6">
            <strong>IFIM College,</strong> Bengaluru, is a premier institution committed to academic excellence,
innovation, and societal impact. Through its focus on technology education,
management studies, and applied research, IFIM College aims to nurture future-ready
professionals and responsible leaders. The institution actively promotes research,
collaboration, and knowledge dissemination through conferences, seminars, workshops,
and academic initiatives at national and international levels. The IFIM School of
Technology actively promotes interdisciplinary research, industry collaboration, and
innovation-driven learning aligned with national priorities such as Viksit Bharat
@2047.
</p>
           
            {/* <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
               <h3 className="font-bold text-amber-900 mb-2">Vision Alignment: Viksit Bharat @2047</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-800">
                 <li>• Knowledge-driven economic growth</li>
                 <li>• Digital public infrastructure and innovation</li>
                 <li>• Human capital development</li>
                 <li>• Sustainable and inclusive development</li>
                 <li>• Ethical and responsible use of technology</li>
               </ul>
            </div> */}
          </div>
        </div>


{/* Section: About School of Technology */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-6 border-l-4 border-amber-400 pl-4 uppercase tracking-tight">About School of Technology</h2>
            <p className="text-black leading-relaxed mb-6">
              The School of Technology at IFIM Institutions nurtures technically skilled, innovative,
and industry-ready professionals with a strong foundation in computing, ethics, and
research. The curriculum aligns with industry standards and emerging technologies,
offering hands-on experience in software development, data science, artificial
intelligence, cloud computing, cybersecurity, and web technologies. Through projectbased learning, internships, and industry collaboration, students apply theory to realworld challenges and develop critical thinking, innovation, and lifelong learning skills.
            </p>
            
            {/* <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
               <h3 className="font-bold text-amber-900 mb-2">Vision Alignment: Viksit Bharat @2047</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-800">
                 <li>• Knowledge-driven economic growth</li>
                 <li>• Digital public infrastructure and innovation</li>
                 <li>• Human capital development</li>
                 <li>• Sustainable and inclusive development</li>
                 <li>• Ethical and responsible use of technology</li>
               </ul>
            </div> */}
          </div>
        </div>











        {/* Section: About the Conference */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-6 border-l-4 border-amber-400 pl-4 uppercase tracking-tight">About the Conference</h2>
            <p className="text-black leading-relaxed mb-6">
              As India approaches the centenary of its independence in 2047, the national vision of <strong>Viksit Bharat @2047</strong> calls for inclusive growth driven by innovation, knowledge, and sustainability. Achieving this vision requires active participation from academic institutions as creators of knowledge and responsible innovation.
            </p>
            <p className="text-black leading-relaxed mb-6">
              <strong>Bharat Synapse@2047</strong> is conceived as a national interdisciplinary academic platform that brings together faculty members, researchers, and scholars from diverse domains to engage in dialogue on India's future. The conference aims to integrate technology, management, and sustainability to foster research that contributes to national development and societal well-being.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
               <h3 className="font-bold text-amber-900 mb-2">Vision Alignment: Viksit Bharat @2047</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-amber-800">
                 <li>• Knowledge-driven economic growth</li>
                 <li>• Digital public infrastructure and innovation</li>
                 <li>• Human capital development</li>
                 <li>• Sustainable and inclusive development</li>
                 <li>• Ethical and responsible use of technology</li>
               </ul>
            </div>
          </div>
        </div>

        {/* Section: Call for Paper & Scope */}
        <div id="guidelines-section" className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 serif mb-6">Call for Paper</h2>
              <p className="text-black text-base mb-4">
                Faculty members, researchers, doctoral scholars, and postgraduate students are invited to submit original and unpublished research papers aligned with the conference themes.
              </p>
              <ul className="space-y-3 text-black text-base">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  Conceptual, empirical, and case-based studies are welcome
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  Interdisciplinary and practice-oriented research is encouraged
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  Selected papers will be published in the conference proceedings
                </li>
              </ul>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 serif mb-6 uppercase tracking-tight">Important Dates</h2>
              <div className="space-y-4">
                {IMPORTANT_DATES.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 text-base">
                    <span className="text-gray-600">{item.event}</span>
                    <span className="text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Format of Paper */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-8 uppercase tracking-tight">Format of Paper</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-base">
            <div className="border-b md:border-b-0 md:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Document Format</p>
              <p className="font-semibold text-gray-8 00">{PAPER_FORMAT.format}</p>
            </div>
            <div className="border-b md:border-b-0 lg:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Full Paper Length</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.fullPaperLength}</p>
            </div>
            <div className="border-b lg:border-b-0 p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Abstract Word Count</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.abstractLength}</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Font & Body</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.fontType}, {PAPER_FORMAT.bodyText}</p>
            </div>
            <div className="border-b md:border-b-0 lg:border-r border-gray-100 p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Title Format</p>
              <p className="font-semibold text-gray-800">{PAPER_FORMAT.titleFormat}</p>
            </div>
            <div className="p-4">
              <p className="text-gray-400 font-bold uppercase text-[14px] mb-1">Plagiarism Limit</p>
              <p className="font-semibold text-red-600">{PAPER_FORMAT.plagiarismLimit}</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-8 text-base">
             <div><span className="text-gray-400">Line Spacing:</span> <span className="font-bold">{PAPER_FORMAT.lineSpacing}</span></div>
             <div><span className="text-gray-400">References Style:</span> <span className="font-bold">{PAPER_FORMAT.referenceStyle}</span></div>
          </div>
          </div>
        </div>

        {/* Section: Themes */}
        <div id="themes-tracks-section" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 serif mb-8 uppercase tracking-tight">Themes & Tracks</h2>
          <div className="space-y-12">
            {TRACKS.map((track, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
                <div className="relative">
                  <span className="inline-block px-3 py-1 bg-white-100 text-amber-400 text-[20px] font-bold uppercase rounded-full mb-4">
                    Track {i+1}
                  </span>
                  <h3 className="text-xl font-bold mb-6 text-gray-900 serif leading-tight">
                    {track.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {track.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 hover:border-amber-400 transition-colors">
                        <span className="text-amber-400 mt-1 font-bold">{j+1}.</span>
                        <p className="text-sm text-gray-700 leading-tight">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: About Patronage */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-4 uppercase tracking-widest text-gray-8  00">Chief Guest</h2>
            <div className="flex flex-col items-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg mb-4">
                <img
                  src={CHIEF_GUEST.photo}
                  alt={CHIEF_GUEST.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-2xl font-bold text-gray-900 serif mb-1">{CHIEF_GUEST.name}</p>
              <p className="text-sm text-gray-500 italic max-w-xl">{CHIEF_GUEST.role}</p>
            </div>
            <p className="text-black leading-relaxed mb-4 text-justify">
              Prof. Das completed his doctorate (Ph.D.) in Immunology - Host pathogen relationship,
 from the Institute of Microbial Technology, Chandigarh in 1997. He is associated with
 reputed professional organizations such as Molecular Immunology Forum, and Guha
 Research Council. Prof. Das also holds editorial positions as associate editor in various
 prestigious journals
            </p>
            <p className="text-black leading-relaxed text-justify">
               Prof. Das’s inspirational leadership has the potential to create a ripple effect of positive
 change in the institute. By fostering a culture of innovation, collaboration, personal
 growth, and adaptability, the institute can experience significant growth and development
 under his guidance
            </p>
             <p className="text-black leading-relaxed text-justify">
            Prof. Das also holds honorary positions as Adjunct Professor, Houston Methodist
 Research Institute, Houston, USA, and Adjunct Professor, Shoochow University,
 Suzhou, China. Previously, he served as visiting Professor in many renowned Universities
 amongst the world. He visited USA, Canada, Australia, Japan, China, Finland, Greece,
 England with various task.</p>
          </div>
        </div>

        {/* Section: Guests */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-amber-400 serif mb-4 uppercase tracking-widest text-gray-800">Guests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {GUESTS.map((guest, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-amber-400">
                    <img src={guest.photo} alt={guest.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-bold text-gray-900 text-lg mb-1">{guest.name}</p>
                  <p className="text-sm text-gray-500 mb-3">{guest.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: Patronage */}
        <div id="patronage-section" className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-10 text-center uppercase tracking-widest border-b border-gray-100 pb-4">Patronage</h2>
            
            <div className="mb-12">
              <h3 className="text-amber-600 font-bold uppercase text-s tracking-widest text-center mb-6">Chief Patrons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PATRONAGE.chiefPatrons.map((p, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-400">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-amber-600 font-bold uppercase text-s tracking-widest text-center mb-6">Patron</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PATRONAGE.Patron.map((p, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-400">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-amber-600 font-bold uppercase text-s tracking-widest text-center mb-6">Conference Chair</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PATRONAGE.conferenceChairs.map((p, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-400">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-amber-600 font-bold uppercase text-s tracking-widest text-center mb-6">Advisory Committee</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PATRONAGE.AdvisoryCommittee.map((p, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-400">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-amber-600 font-bold uppercase text-s tracking-widest text-center mb-8">Organizing Committee Members</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PATRONAGE.organizingCommittee.map((p, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-3 border-2 border-amber-400">
                      <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">{p.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Registration Fees */}
        <div className="group bg-white p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 serif mb-8 uppercase tracking-widest text-center">Registration Fee</h2>
            <div className="max-w-md mx-auto space-y-4">
               <div className="flex justify-between items-center p-4 bg-white rounded-2xl border-2 border-amber-400">
                  <span className="font-medium text-gray-800">Research Scholar</span>
                  <span className="text-2xl font-bold text-amber-500">₹{FEES['Research Scholar']}</span>
               </div>
               <div className="flex justify-between items-center p-4 bg-white rounded-2xl border-2 border-amber-400">
                  <span className="font-medium text-gray-800">Industry Delegates</span>
                  <span className="text-2xl font-bold text-amber-500">₹{FEES['Industry Delegates']}</span>
               </div>
               <div className="flex justify-between items-center p-4 bg-white rounded-2xl border-2 border-amber-400">
                  <span className="font-medium text-gray-800">Academician/Faculty</span>
                  <span className="text-2xl font-bold text-amber-500">₹{FEES['Academician/Faculty']}</span>
               </div>
               <div className="flex justify-between items-center p-4 bg-white rounded-2xl border-2 border-amber-400">
                  <span className="font-medium text-gray-800">Observer</span>
                  <span className="text-2xl font-bold text-amber-500">₹{FEES['Observer']}</span>
               </div>
            </div>
            <p className="mt-8 text-center text-sm text-gray-500 italic">
              * Registration includes conference kit, certificate, and participation in all sessions.
            </p>
          </div>
        </div>

        {/* Section: Certification */}
        <div className="group bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150"></div>
          <div className="relative">
            <h3 className="text-xl font-bold text-amber-700 mb-4 serif uppercase tracking-tight">Certification</h3>
            <p className="text-gray-700 text-base max-w-2xl mx-auto leading-relaxed">
              Certificates will be issued only to <strong>registered participants</strong>. Certificates will be awarded for Participation, Paper Presentation, Session Chair, and Panelist roles.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
