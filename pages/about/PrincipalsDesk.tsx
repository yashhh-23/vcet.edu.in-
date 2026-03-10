import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Quote, GraduationCap, Briefcase, Users, Star, BookOpen, Heart, Trophy } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, value: 'Ph.D.',    label: 'Doctorate Holder' },
  { icon: Briefcase,     value: '20+',      label: 'Years of Experience' },
  { icon: Users,         value: '3000+',    label: 'Students Guided' },
  { icon: Star,          value: 'NAAC B++', label: 'Accredited Institution' },
];

const PrincipalsDesk: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Principal's Desk"
        breadcrumbs={[
          { label: 'About Us', href: '/about-us' },
          { label: "Principal's Desk" },
        ]}
      />

      {/* ── Profile + Message ── */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(27,58,92,0.04),transparent_60%)]" />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,1) 1px,transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

              {/* ── Profile Card ── */}
              <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 reveal">
                <div className="sticky top-28">

                  {/* Card */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-[0_24px_64px_-8px_rgba(27,58,92,0.28)] border border-brand-blue/10">

                    {/* ── Photo frame (drop real image here) ── */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light">
                      <img
                        src="/Images/principal-photo.jpg"
                        alt="Dr. Rakesh Himte – Principal, VCET"
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Gradient overlay at bottom so name reads on top of any photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/10 to-transparent" />

                      {/* Name + badge pinned over the photo bottom */}
                      <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10">
                        <h3 className="text-2xl font-display font-extrabold text-white leading-tight drop-shadow-md">
                          Dr. Rakesh Himte
                        </h3>
                        <div className="mt-2.5 inline-flex items-center gap-2 bg-brand-gold px-5 py-1.5 rounded-full shadow-lg shadow-brand-gold/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/60" />
                          <span className="text-xs font-black text-brand-navy uppercase tracking-[0.28em]">Principal</span>
                        </div>
                      </div>
                    </div>

                    {/* ── Info section ── */}
                    <div className="px-5 py-5">
                      <p className="text-sm text-slate-500 font-medium text-center mb-5 leading-relaxed">
                        Vidyavardhini's College of Engineering &amp; Technology, Vasai
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mb-5" />

                      {/* Quick facts */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-brand-light border border-brand-blue/8 rounded-xl p-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Qualification</p>
                          <p className="text-base font-extrabold text-brand-navy">Ph.D.</p>
                        </div>
                        <div className="bg-brand-light border border-brand-blue/8 rounded-xl p-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Experience</p>
                          <p className="text-base font-extrabold text-brand-navy">20+ Years</p>
                        </div>
                        <div className="col-span-2 bg-gradient-to-r from-brand-navy/5 to-brand-gold/5 border border-brand-gold/15 rounded-xl p-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Affiliated To</p>
                          <p className="text-sm font-bold text-brand-navy leading-snug">Mumbai University, Maharashtra</p>
                        </div>
                      </div>
                    </div>

                    {/* Gold bottom accent bar */}
                    <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-blue to-brand-navy" />
                  </div>

                  {/* Decorative strip below card */}
                  <div className="mt-4 h-1 mx-8 rounded-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
                </div>
              </div>

              {/* ── Message Content ── */}
              <div className="flex-1 min-w-0">
                {/* Section eyebrow */}
                <div className="reveal flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-brand-gold" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">
                    Message from the Principal
                  </span>
                </div>

                {/* Pull-quote card */}
                <div className="reveal relative bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-7 md:p-8 overflow-hidden shadow-lg mb-10">
                  {/* Ghost large quote mark */}
                  <div className="absolute -top-2 right-5 opacity-[0.06] select-none pointer-events-none">
                    <Quote className="w-28 h-28 text-white" />
                  </div>
                  <Quote className="w-7 h-7 text-brand-gold mb-4" />
                  <p className="text-xl md:text-2xl font-display font-semibold text-white leading-relaxed">
                    Our cherished motto is the 'overall empowerment of students'
                    for their all-round development.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-8 h-px bg-brand-gold/60" />
                    <p className="text-sm font-semibold text-brand-gold/90 tracking-wide">Dr. Rakesh Himte</p>
                  </div>
                </div>

                {/* ── Section 1: Vision & Growth ── */}
                <div className="reveal mb-8" style={{ transitionDelay: '0.08s' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-brand-blue" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Vision &amp; Academic Growth</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 to-transparent" />
                  </div>
                  <div className="pl-11 space-y-4 text-slate-700 leading-[1.9] text-base">
                    <p>
                      As a proud VCETite, our cherished motto is the{' '}
                      <em className="not-italic font-semibold text-brand-navy">'overall empowerment of students'</em>{' '}
                      for their all-round development. Today, education means much more than merely
                      acquiring knowledge. Our focus has been on the acquisition of knowledge and skills,
                      building character and improving employability of our young talent. I am sure that
                      VCET's culture, and an inherent strong foundation that the institution has provided
                      to our students, has assisted them to march ahead and achieve their educational
                      objectives ensuring a stronger and brighter future.
                    </p>
                    <p>
                      This year on the academic front, we were able to maintain the same reputation and
                      promised ourselves to remain consistent throughout the coming years. At the
                      infrastructure level, we have renovated Ground and 1st Floors and renovation of
                      other floors is in progress. In addition to that there are many more changes that
                      surely added a class in the ambience of VCET.
                    </p>
                  </div>
                </div>

                {/* ── Section 2: Social Responsibility ── */}
                <div className="reveal mb-8" style={{ transitionDelay: '0.14s' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Social Responsibility</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/20 to-transparent" />
                  </div>
                  <div className="pl-11 space-y-4 text-slate-700 leading-[1.9] text-base">
                    <p>
                      I am also proud to share that this year we wholeheartedly responded to the appeal
                      from the government to contribute to the society with open arms and in turn started
                      a community services wing{' '}
                      <strong className="font-semibold text-brand-blue">'UDAAN'</strong>. Throughout the
                      year we followed the 'Swachha Bhaarat Abhiyaan' by maintaining personal hygiene,
                      spreading awareness and taking extra efforts to keep our surroundings clean and
                      green.
                    </p>
                    <p>
                      A clothes donation campaign resulted in a great success and trusts like Anand
                      Ashram-Vasai and Dadasaheb Tatke Ashram-Thane benefited a lot. Also our volunteers
                      started teaching Maths and English to students from Swagat Ashram Orphanage,
                      Malad. We also organized a street play under the title{' '}
                      <strong className="font-semibold text-brand-blue">"#RespectHer"</strong> in college
                      premises. This helped us realize our social responsibilities and the true meaning of
                      being an 'Indian'.
                    </p>
                  </div>
                </div>

                {/* ── Section 3: Achievements ── */}
                <div className="reveal mb-10" style={{ transitionDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Achievements &amp; Placements</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent" />
                  </div>
                  <div className="pl-11 space-y-4 text-slate-700 leading-[1.9] text-base">
                    <p>
                      An excellent track record to mention as part of this year's achievement was the
                      Training and Placement Committee's performance. This year, with the wholehearted
                      support from Management and members of teaching and non-teaching staff including
                      the students, we were able to set a high placement record. This effort was
                      acknowledged by stalwarts from various companies through their positive feedbacks
                      praising the P.A.T. committee's hard work and sincere efforts.
                    </p>
                    <p>
                      The measures initiated by the management, the steps taken by college
                      administration, the willing contribution of the teaching and non-teaching staff and
                      the overwhelming response of students and the college activities in the past all
                      vouch for this grand success. With such a steady stream of initiatives taken, it
                      makes me proud to be the principal of this wonderful institution.
                    </p>
                  </div>
                </div>

                {/* ── Closing note ── */}
                <div className="reveal mb-10" style={{ transitionDelay: '0.26s' }}>
                  <div className="bg-brand-light border border-brand-gold/20 rounded-2xl px-7 py-6 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-brand-gold to-brand-blue" />
                    <p className="text-slate-700 leading-[1.9] text-base italic">
                      "At this point I would like to appeal to all of you one more time to give your best
                      and make this institution one of the best learning centers among its peers. I wish
                      you all good luck and greater success in your future endeavors. Proud VCETites,
                      keep that energy and spirit alive as we write more and more of our success stories
                      together."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Strip ── */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-navy">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className="reveal flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-3 ring-1 ring-white/10">
                    <h.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <p className="text-white font-display font-bold text-2xl">{h.value}</p>
                  <p className="text-white/60 text-sm mt-1 tracking-wide">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrincipalsDesk;
