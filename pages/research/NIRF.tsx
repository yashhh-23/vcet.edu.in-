import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Award, BarChart3, TrendingUp, ExternalLink, FileText, Users, BookOpen, Download } from 'lucide-react';

const parameters = [
  { label: 'Teaching, Learning & Resources', weight: '0.30', pct: 30 },
  { label: 'Research & Professional Practice', weight: '0.30', pct: 30 },
  { label: 'Graduation Outcomes', weight: '0.20', pct: 20 },
  { label: 'Outreach & Inclusivity', weight: '0.10', pct: 10 },
  { label: 'Perception', weight: '0.10', pct: 10 },
];

const barColors = ['bg-[#1a4b7c]', 'bg-[#3a6fa8]', 'bg-[#fdb813]', 'bg-[#1a4b7c]', 'bg-[#3a6fa8]'];

const nirfReports = [
  { year: '2024', title: 'NIRF Data Submission 2024', description: 'Latest institutional data submitted to NIRF portal.' },
  { year: '2023', title: 'NIRF Data Submission 2023', description: 'Annual institutional data and performance metrics.' },
  { year: '2022', title: 'NIRF Data Submission 2022', description: 'Comprehensive data covering all ranking parameters.' },
];

const aboutCards = [
  { label: 'Framework', value: 'National Institutional Ranking Framework', desc: 'Approved by the Ministry of Education, Government of India' },
  { label: 'Parameters', value: '5 Key Parameters', desc: 'Teaching, Research, Graduation, Outreach & Perception' },
  { label: 'Category', value: 'Engineering', desc: 'VCET participates in the Engineering category of NIRF rankings' },
];

const NIRF: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="NIRF"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'NIRF' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3 reveal">
              <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
                Rankings
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
                National Institutional Ranking Framework
              </h2>
              <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-4 text-[17px]">
                VCET actively participates in the National Institutional Ranking Framework (NIRF)
                established by the Ministry of Education, Government of India. NIRF provides a
                methodology for ranking institutions across the country based on objective criteria
                and data-driven parameters.
              </p>
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-6 text-[17px]">
                The framework evaluates institutions on five broad parameters covering teaching,
                learning, research, graduation outcomes, outreach, inclusivity, and overall
                perception. VCET's participation reflects its commitment to transparency and
                continuous improvement.
              </p>
              <a
                href="https://www.nirfindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4b7c] text-white text-[17px] font-bold hover:shadow-[4px_4px_0_#E5E7EB] transition-all duration-300"
              >
                Visit NIRF Portal
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Certificate Placeholder */}
            <div className="lg:col-span-2 reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="aspect-[3/4] bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-12 h-12 text-[#1a4b7c]/15 mx-auto mb-2" />
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.15em]">nirf-certificate.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About NIRF — three info cells ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Overview</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              About NIRF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E5E7EB]">
            {aboutCards.map((d, idx) => (
              <div
                key={idx}
                className="reveal bg-white p-6 border-r border-[#E5E7EB] last:border-r-0 border-b md:border-b-0 last:border-b-0"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#fdb813] mb-2">{d.label}</p>
                <h3 className="font-display font-bold text-[#1a4b7c] text-lg mb-2 leading-snug">{d.value}</h3>
                <p className="text-[17px] text-[#6B7280] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parameters — data table with horizontal bars ── */}
      <section className="bg-[#1a4b7c] py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
          <div className="reveal text-center mb-10">
            <h2 className="text-2xl font-display font-bold text-white tracking-tight mb-2">NIRF Ranking Parameters</h2>
            <p className="text-white/40 text-[17px] uppercase tracking-[0.15em]">The five pillars of institutional evaluation</p>
          </div>

          <div className="space-y-4">
            {parameters.map((p, idx) => (
              <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.06}s` }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[17px] text-white/80 font-medium">{p.label}</span>
                  <span className="text-[17px] font-display font-bold text-[#fdb813]">{p.weight}</span>
                </div>
                <div className="h-2 bg-white/10 w-full">
                  <div
                    className={`h-full ${barColors[idx]} transition-all duration-700`}
                    style={{ width: `${p.pct * 3.33}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIRF Reports — download rows ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-[700px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Reports</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              NIRF Reports
            </h2>
          </div>

          <div className="border border-[#E5E7EB]">
            {nirfReports.map((r, idx) => (
              <div
                key={idx}
                className="reveal flex items-center gap-4 px-5 py-4 border-b border-[#E5E7EB] last:border-b-0 bg-white hover:bg-[#F7F9FC] transition-colors duration-200 group"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                {/* Year stamp */}
                <span className="flex-shrink-0 text-[14px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 bg-[#fdb813] text-[#1a4b7c]">
                  {r.year}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-[#1a4b7c] text-[17px]">{r.title}</h3>
                  <p className="text-[14px] text-[#6B7280]">{r.description}</p>
                </div>

                <a
                  href="https://www.nirfindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-9 h-9 border border-[#E5E7EB] flex items-center justify-center hover:border-[#fdb813] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#3a6fa8]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NIRF;
