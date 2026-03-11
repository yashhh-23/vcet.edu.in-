import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Briefcase, Users, Settings, CheckCircle, Building2, Calendar, ArrowRight } from 'lucide-react';

/* ── Consultancy Project Data ── */
const consultancyProjects = [
  { company: 'Tata Consultancy Services', title: 'Network Security Audit & Penetration Testing', dept: 'Information Technology', faculty: 'Dr. N. Gupta', duration: '2023 – 2024' },
  { company: 'Larsen & Toubro', title: 'Structural Analysis of Pre-stressed Concrete Members', dept: 'Civil Engineering', faculty: 'Dr. A. Desai', duration: '2023 – 2024' },
  { company: 'Reliance Industries', title: 'Industrial IoT Solutions for Process Monitoring', dept: 'Electronics & Telecomm', faculty: 'Dr. S. Patil', duration: '2022 – 2023' },
  { company: 'Godrej & Boyce', title: 'CNC Machine Vibration Analysis & Optimization', dept: 'Mechanical Engineering', faculty: 'Dr. V. Naik', duration: '2022 – 2023' },
  { company: 'Infosys Foundation', title: 'AI-Based Resume Screening System', dept: 'Computer Engineering', faculty: 'Dr. R. Sharma', duration: '2023 – 2024' },
  { company: 'MSRDC Maharashtra', title: 'Environmental Impact Assessment for Highway Project', dept: 'Civil Engineering', faculty: 'Dr. A. Desai, Ms. P. Sawant', duration: '2022 – 2023' },
];

const services = [
  { icon: Settings,  title: 'Technical Consulting',   description: 'Expert technical advice and problem-solving for industry challenges in engineering and technology domains.' },
  { icon: Briefcase, title: 'Testing & Analysis',     description: 'Access to advanced laboratory equipment for material testing, structural analysis, and quality assessment.' },
  { icon: Users,     title: 'Training Programs',      description: 'Customized training and skill development programs designed for industry professionals and corporates.' },
];

const benefits = [
  'Access to specialized faculty expertise across departments',
  'State-of-the-art laboratory facilities and equipment',
  'Cost-effective solutions for industry partners',
  'Confidentiality and IP protection assured',
  'Collaborative research leading to publications and patents',
  'Industry-academia knowledge exchange',
];

const ConsultancyProjects: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Consultancy Projects"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Consultancy Projects' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
                Industry Collaboration
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
                Faculty Consultancy Services
              </h2>
              <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-4 text-[17px]">
                VCET faculty members offer their domain expertise to industry through consultancy
                projects spanning multiple engineering and technology disciplines. These
                collaborations bridge the gap between academia and industry, providing
                practical solutions to real-world challenges.
              </p>
              <p className="text-[#1A1A1A]/70 leading-[1.85] text-[17px]">
                The institution has a dedicated consultancy cell that facilitates industry
                partnerships, manages project agreements, and ensures timely delivery of
                consultancy services while maintaining the highest quality standards.
              </p>
            </div>

            {/* Placeholder */}
            <div className="reveal" style={{ transitionDelay: '0.12s' }}>
              <div className="aspect-[4/3] bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                  <Briefcase className="w-12 h-12 text-[#1a4b7c]/15 mx-auto mb-2" />
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.15em]">consultancy-projects.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — thick left-border panels ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Services Offered</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              Our Consultancy Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB]">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className="reveal group bg-white p-6 border-r border-[#E5E7EB] last:border-r-0 border-b md:border-b-0 last:border-b-0 hover:bg-[#1a4b7c] transition-colors duration-300"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="w-10 h-10 border-2 border-[#1a4b7c] flex items-center justify-center mb-4 group-hover:border-[#fdb813] transition-colors">
                  <svc.icon className="w-5 h-5 text-[#1a4b7c] group-hover:text-[#fdb813] transition-colors" />
                </div>
                <h3 className="font-display font-bold text-[#1a4b7c] text-lg mb-2 group-hover:text-white transition-colors">{svc.title}</h3>
                <p className="text-[17px] text-[#6B7280] leading-relaxed group-hover:text-white/60 transition-colors">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Ledger ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1000px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Projects</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              Recent Consultancy Projects
            </h2>
          </div>

          {/* Ledger header */}
          <div className="hidden md:grid grid-cols-12 gap-0 border-b-2 border-[#1a4b7c] pb-2 mb-0 text-[14px] font-bold uppercase tracking-[0.15em] text-[#6B7280]">
            <div className="col-span-4 px-4">Project</div>
            <div className="col-span-3 px-4">Company</div>
            <div className="col-span-2 px-4">Faculty</div>
            <div className="col-span-2 px-4">Duration</div>
            <div className="col-span-1 px-4">Dept</div>
          </div>

          {/* Ledger rows */}
          <div className="border border-[#E5E7EB] border-t-0">
            {consultancyProjects.map((proj, idx) => (
              <div
                key={idx}
                className={`reveal group grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F7F9FC] transition-colors duration-200 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFBFC]'
                }`}
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                {/* Left accent bar */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#fdb813] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="col-span-4 px-4 py-4 md:border-r border-[#E5E7EB]">
                  <p className="font-display font-bold text-[#1a4b7c] text-[17px] leading-snug">{proj.title}</p>
                </div>
                <div className="col-span-3 px-4 py-4 md:border-r border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#fdb813] flex-shrink-0" />
                    <span className="text-[17px] text-[#1A1A1A] font-medium">{proj.company}</span>
                  </div>
                </div>
                <div className="col-span-2 px-4 py-4 md:border-r border-[#E5E7EB]">
                  <span className="text-[17px] text-[#6B7280]">{proj.faculty}</span>
                </div>
                <div className="col-span-2 px-4 py-4 md:border-r border-[#E5E7EB]">
                  <span className="text-[17px] font-mono text-[#6B7280]">{proj.duration}</span>
                </div>
                <div className="col-span-1 px-4 py-4">
                  <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#3a6fa8]">{proj.dept.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Partner — numbered list ── */}
      <section className="py-20 bg-[#F7F9FC] border-t border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
          <div className="reveal mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a4b7c] tracking-tight">
              Why Partner with VCET?
            </h2>
          </div>

          <div className="space-y-0 border border-[#E5E7EB]">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="reveal flex items-start gap-4 px-5 py-4 bg-white border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F7F9FC] transition-colors duration-200"
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <span className="flex-shrink-0 w-6 h-6 border-2 border-[#fdb813] flex items-center justify-center text-[14px] font-bold text-[#1a4b7c]">
                  {idx + 1}
                </span>
                <p className="text-[17px] text-[#1A1A1A] font-medium">{b}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal text-center mt-10">
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1a4b7c] text-white text-[17px] font-bold hover:shadow-[4px_4px_0_#E5E7EB] transition-all duration-300"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ConsultancyProjects;
