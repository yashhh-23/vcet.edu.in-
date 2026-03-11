import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Calendar, MapPin, Users, Award, Lightbulb, GraduationCap, Mic2 } from 'lucide-react';

const conventions = [
  { title: 'National Conference on Emerging Trends in Engineering (NCETE)',               type: 'National Conference',     date: 'March 2024',   dept: 'Multi-disciplinary',   description: 'Annual multi-disciplinary conference bringing together researchers, faculty, and students to present innovative research across engineering domains.' },
  { title: 'International Conference on Advances in Computing and Technology (ICACT)',     type: 'International Conference', date: 'January 2024', dept: 'Computer Engineering',  description: 'A platform for international researchers to present cutting-edge work in computing, AI, data science, and information technology.' },
  { title: 'Workshop on Research Methodology & Technical Writing',                         type: 'Workshop',                date: 'November 2023', dept: 'All Departments',       description: 'Hands-on workshops covering research methodologies, academic writing, literature review techniques, and publication strategies.' },
  { title: 'Research Convention & Paper Presentation',                                     type: 'In-House Convention',     date: 'September 2023', dept: 'Multi-disciplinary',   description: 'Annual in-house research convention encouraging students and faculty to present their ongoing research projects and findings.' },
  { title: 'Symposium on Sustainable Infrastructure & Green Technologies',                  type: 'National Symposium',      date: 'July 2023',    dept: 'Civil Engineering',     description: 'Focused symposium on sustainable building practices, green concrete, and environmental engineering solutions.' },
  { title: 'FDP on Machine Learning & Data Science Applications',                           type: 'FDP',                     date: 'April 2023',   dept: 'AI & Data Science',     description: 'Faculty development programme covering practical ML & DS applications with hands-on sessions on Python, TensorFlow and real datasets.' },
];

const highlights = [
  { label: 'Annual Events',      value: '5+' },
  { label: 'Participants',        value: '500+' },
  { label: 'Papers Presented',    value: '200+' },
  { label: 'Keynote Speakers',    value: '30+' },
];

const typeColor = (t: string) => {
  if (t.includes('International'))  return 'border-[#fdb813] text-[#1a4b7c] bg-[#fdb813]';
  if (t.includes('National'))       return 'border-[#1a4b7c] text-[#1a4b7c] bg-[#1a4b7c]';
  if (t.includes('Workshop') || t.includes('FDP')) return 'border-[#3a6fa8] text-[#3a6fa8] bg-[#3a6fa8]';
  return 'border-[#6B7280] text-[#6B7280] bg-[#6B7280]';
};

const ResearchConventions: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Conventions"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Conventions' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
                Events &amp; Conferences
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
                Research Conventions at&nbsp;VCET
              </h2>
              <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-4 text-[17px]">
                VCET organizes and hosts national and international conferences, research
                conventions, and workshops that serve as platforms for knowledge exchange,
                collaboration, and dissemination of cutting-edge research findings.
              </p>
              <p className="text-[#1A1A1A]/70 leading-[1.85] text-[17px]">
                These events attract eminent researchers, industry experts, and academicians
                from across the country and abroad, fostering a vibrant research community
                within the institution.
              </p>
            </div>

            {/* Placeholder */}
            <div className="reveal" style={{ transitionDelay: '0.12s' }}>
              <div className="aspect-[4/3] bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-[#1a4b7c]/15 mx-auto mb-2" />
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.15em]">research-conventions.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats — solid ruled bar ── */}
      <section className="bg-[#1a4b7c]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {highlights.map((s, i) => (
              <div key={s.label} className="reveal py-8 text-center" style={{ transitionDelay: `${i * 0.06}s` }}>
                <p className="text-3xl font-display font-bold text-white tracking-tight">{s.value}</p>
                <p className="text-white/40 text-[17px] uppercase tracking-[0.15em] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline with diamond markers + paper-note cards ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[900px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              Conferences &amp; Events
            </h2>
          </div>

          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-[#E5E7EB]" />

            <div className="space-y-6">
              {conventions.map((evt, idx) => {
                const color = typeColor(evt.type);
                const bgClass = color.split(' ')[2];
                return (
                  <div
                    key={idx}
                    className="reveal relative pl-14 md:pl-16"
                    style={{ transitionDelay: `${idx * 0.06}s` }}
                  >
                    {/* Diamond marker */}
                    <div className="absolute left-5 md:left-6 -translate-x-1/2 top-6 z-10">
                      <div className={`w-3 h-3 rotate-45 ${bgClass}`} />
                    </div>

                    {/* Paper-note card with hard shadow */}
                    <div className="group relative">
                      <div className="absolute inset-0 bg-[#E5E7EB] translate-x-1 translate-y-1" />
                      <div className="relative bg-white border border-[#E5E7EB] p-5 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-300">
                        {/* Date stamp */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-[14px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 bg-[#fdb813] text-[#1a4b7c]">
                            {evt.date}
                          </span>
                          <span className={`text-[14px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 border ${color.split(' ').slice(0, 2).join(' ')}`}>
                            {evt.type}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-[#1a4b7c] text-[17px] leading-snug mb-2">
                          {evt.title}
                        </h3>
                        <p className="text-[17px] text-[#6B7280] leading-relaxed mb-3">{evt.description}</p>

                        <span className="text-[14px] font-bold text-[#3a6fa8] uppercase tracking-[0.1em]">
                          {evt.dept}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchConventions;
