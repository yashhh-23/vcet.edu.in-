import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { FileText, Download, ExternalLink, CheckCircle, FolderOpen, BookOpen, Shield, Target } from 'lucide-react';

const policyObjectives = [
  'Promote a culture of research and innovation among faculty and students',
  'Encourage interdisciplinary and collaborative research activities',
  'Support publication in high-impact peer-reviewed journals',
  'Facilitate patent filing and intellectual property protection',
  'Provide research incentives and seed grants for innovative projects',
  'Establish research collaborations with industries and academic institutions',
  'Ensure ethical conduct and integrity in all research activities',
  'Develop state-of-the-art research infrastructure and facilities',
];

const policyDocuments = [
  { title: 'Research Policy Document',      description: 'Comprehensive guidelines covering funded research, publications, consultancy and ethics.',  icon: FileText, href: 'https://vcet.edu.in/research-policy-2/' },
  { title: 'IPR & Patent Policy',           description: 'Procedures for patent filing, IP ownership, revenue sharing and commercialisation.',         icon: Shield,   href: 'https://vcet.edu.in/research-policy-2/' },
  { title: 'Research Ethics Policy',        description: 'Guidelines on ethical conduct, plagiarism prevention, and responsible research practices.',  icon: BookOpen, href: 'https://vcet.edu.in/research-policy-2/' },
  { title: 'Consultancy Guidelines',        description: 'Framework for faculty consultancy, project approvals, fund management and deliverables.',    icon: Target,   href: 'https://vcet.edu.in/research-policy-2/' },
];

const tabColors = ['bg-[#1a4b7c]', 'bg-[#3a6fa8]', 'bg-[#fdb813]', 'bg-[#1a4b7c]'];

const ResearchPolicy: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Policy"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Policy' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="reveal">
              <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
                Policy Document
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
                VCET Research Policy
              </h2>
              <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-4 text-[17px]">
                VCET has established a comprehensive research policy that provides a structured
                framework for promoting and managing research activities across all departments.
                The policy outlines guidelines for funded research, publications, patent filing,
                consultancy, and ethical practices.
              </p>
              <p className="text-[#1A1A1A]/70 leading-[1.85] mb-6 text-[17px]">
                The research policy is aligned with the institution's vision of becoming a
                center of excellence in engineering education and research, and is periodically
                updated to reflect evolving academic and industry standards.
              </p>
              <a
                href="https://vcet.edu.in/research-policy-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4b7c] text-white text-[17px] font-bold hover:shadow-[4px_4px_0_#E5E7EB] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Research Policy PDF
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Decorative policy card — sharp edges */}
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="bg-[#F7F9FC] border border-[#E5E7EB] p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1a4b7c] flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#1a4b7c] text-lg">Research Policy</h3>
                    <p className="text-[17px] text-[#6B7280] uppercase tracking-[0.1em]">Official Policy Document</p>
                  </div>
                </div>
                <div className="space-y-3 border-t border-dashed border-[#E5E7EB] pt-4">
                  {['Covers all research activities and guidelines', 'Updated periodically per AICTE/UGC norms', 'Applicable to all departments and programs'].map((t, i) => (
                    <div key={t} className="flex items-center gap-3 text-[17px] text-[#1A1A1A]/70">
                      <span className="w-1.5 h-1.5 bg-[#fdb813] flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Folder-style Document Cards — sharp tabs ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal mb-10">
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1">Documents</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] mt-4 tracking-tight">
              Policy Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyDocuments.map((doc, idx) => (
              <a
                key={idx}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative block"
                style={{ transitionDelay: `${idx * 0.07}s` }}
              >
                {/* Sharp folder tab */}
                <div className={`absolute -top-3 left-4 w-20 h-3 ${tabColors[idx]}`} />
                {/* Folder body — sharp edges */}
                <div className="relative bg-white border border-[#E5E7EB] p-6 pt-4 hover:shadow-[4px_4px_0_#E5E7EB] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <div className="w-10 h-10 mb-4 border-2 border-[#E5E7EB] flex items-center justify-center group-hover:border-[#fdb813] transition-colors">
                    <doc.icon className="w-5 h-5 text-[#3a6fa8]" />
                  </div>
                  <h3 className="font-display font-bold text-[#1a4b7c] text-[17px] mb-2 leading-snug">
                    {doc.title}
                  </h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">{doc.description}</p>
                  <div className="flex items-center gap-1 text-[17px] font-bold text-[#3a6fa8] uppercase tracking-[0.1em]">
                    <FolderOpen className="w-3.5 h-3.5" />
                    Open Document
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Objectives — numbered bordered list ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-[800px]">
          <div className="reveal text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] tracking-tight">
              Key Objectives
            </h2>
          </div>

          <div className="space-y-0 border border-[#E5E7EB]">
            {policyObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="reveal flex items-start gap-4 px-5 py-4 bg-white border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F7F9FC] transition-colors duration-200"
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <span className="flex-shrink-0 w-6 h-6 border-2 border-[#fdb813] flex items-center justify-center text-[14px] font-bold text-[#1a4b7c]">
                  {idx + 1}
                </span>
                <p className="text-[17px] text-[#1A1A1A] font-medium">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchPolicy;
