import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Lightbulb, Award, Rocket, Users, Calendar, Star, CheckCircle, TrendingUp, Target, Zap } from 'lucide-react';

const activities = [
  { icon: Lightbulb, title: 'Innovation & Ideation',       description: 'Regular ideation workshops, brainstorming sessions, and innovation challenges to nurture creative thinking among students.' },
  { icon: Rocket,    title: 'Hackathons & Competitions',   description: 'Organizing and participating in hackathons like Smart India Hackathon (SIH), Toycathon, and internal innovation challenges.' },
  { icon: Award,     title: 'IPR & Patent Support',        description: 'Workshops on intellectual property rights, patent drafting, and filing support for innovative ideas and inventions.' },
  { icon: Users,     title: 'Mentoring & Incubation',      description: 'Start-up mentoring, pre-incubation support, and connections with investors and industry mentors for aspiring entrepreneurs.' },
  { icon: Star,      title: 'Seminars & Guest Lectures',   description: 'Expert talks by successful entrepreneurs, innovators, and industry leaders to inspire and motivate students.' },
  { icon: Calendar,  title: 'Annual Innovation Week',      description: 'A week-long celebration of innovation featuring exhibitions, poster presentations, and prototype demonstrations.' },
];

const stats = [
  { value: '40+',    label: 'Activities Conducted' },
  { value: '3.5★',   label: 'Star Rating by MoE' },
  { value: '500+',   label: 'Students Engaged' },
  { value: '10+',    label: 'Startups Mentored' },
];

const highlights = [
  'Established under the Ministry of Education, Government of India',
  'Star rating awarded by MoE Innovation Cell for consistent performance',
  'Conducted 40+ innovation and entrepreneurship activities',
  'Active participation in Smart India Hackathon (SIH)',
  'Mentoring student start-ups and incubation support',
  'Collaboration with AICTE, MIC, and startup ecosystem partners',
];

/* Slight alternating tilt for bulletin board effect */
const tilts = ['rotate-[0.5deg]', '-rotate-[0.4deg]', 'rotate-[0.3deg]', '-rotate-[0.5deg]', 'rotate-[0.2deg]', '-rotate-[0.3deg]'];
const pinColors = ['bg-[#fdb813]', 'bg-[#1a4b7c]', 'bg-[#3a6fa8]', 'bg-[#fdb813]', 'bg-[#1a4b7c]', 'bg-[#3a6fa8]'];

const ResearchIIC: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Institution's Innovation Council (IIC)"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'IIC' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
                Innovation Council
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
                IIC at VCET
              </h2>
              <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-4 text-[17px]">
                The Institution's Innovation Council (IIC) at VCET has been established under the
                Ministry of Education's Innovation Cell (MIC), Government of India. The IIC aims
                to systematically foster the culture of innovation among students and faculty by
                conducting various innovation and entrepreneurship-related activities.
              </p>
              <p className="text-[#1A1A1A]/70 leading-[1.85] text-[17px]">
                VCET's IIC has been consistently performing with high ratings, organizing numerous
                hackathons, ideation workshops, seminars, and startup mentoring programs that
                empower students to transform their innovative ideas into impactful solutions.
              </p>
            </div>

            {/* Placeholder */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="aspect-[4/3] bg-[#F7F9FC] border border-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb className="w-12 h-12 text-[#1a4b7c]/15 mx-auto mb-2" />
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.15em]">iic.jpg</p>
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
            {stats.map((s, idx) => (
              <div key={idx} className="reveal py-8 text-center" style={{ transitionDelay: `${idx * 0.06}s` }}>
                <p className="text-3xl md:text-4xl font-display font-bold text-[#fdb813] tracking-tight">{s.value}</p>
                <p className="text-white/40 text-[17px] uppercase tracking-[0.15em] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights — bordered list with check marks ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
          <div className="reveal text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a4b7c] tracking-tight">
              IIC Highlights
            </h2>
          </div>

          <div className="space-y-0 border border-[#E5E7EB]">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="reveal flex items-start gap-4 px-5 py-4 bg-white border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F7F9FC] transition-colors duration-200"
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <span className="flex-shrink-0 w-2.5 h-2.5 bg-[#fdb813] mt-1.5" />
                <p className="text-[17px] text-[#1A1A1A] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activity Cards — Bulletin Board with pinned items ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Programs</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              Innovation Activities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, idx) => (
              <div
                key={a.title}
                className={`reveal group relative ${tilts[idx]}`}
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                {/* Pin marker */}
                <div className={`absolute -top-1.5 left-6 w-3 h-3 ${pinColors[idx]} z-10 shadow-sm`} style={{ clipPath: 'circle(50%)' }} />

                {/* Paper shadow */}
                <div className="absolute inset-0 bg-[#E5E7EB] translate-x-1 translate-y-1" />

                {/* Card */}
                <div className="relative bg-white border border-[#E5E7EB] p-6 group-hover:rotate-0 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 border-2 border-[#1a4b7c] flex items-center justify-center mb-4 group-hover:border-[#fdb813] transition-colors">
                    <a.icon className="w-5 h-5 text-[#1a4b7c] group-hover:text-[#fdb813] transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-[#1a4b7c] text-[17px] mb-2">{a.title}</h3>
                  <p className="text-[17px] text-[#6B7280] leading-relaxed">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchIIC;
