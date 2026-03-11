import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { FileText, Download, FolderOpen, FileSpreadsheet, FileCheck, File } from 'lucide-react';

const downloadCategories = [
  {
    title: 'Research Policy & Guidelines',
    color: '#1a4b7c',
    files: [
      { name: 'Research Policy Document', type: 'PDF', icon: FileText },
      { name: 'IPR & Patent Policy', type: 'PDF', icon: FileText },
      { name: 'Research Ethics Guidelines', type: 'PDF', icon: FileCheck },
    ],
  },
  {
    title: 'NIRF Data & Reports',
    color: '#3a6fa8',
    files: [
      { name: 'NIRF Data Submission 2024', type: 'PDF', icon: FileSpreadsheet },
      { name: 'NIRF Data Submission 2023', type: 'PDF', icon: FileSpreadsheet },
      { name: 'NIRF Data Submission 2022', type: 'PDF', icon: FileSpreadsheet },
    ],
  },
  {
    title: 'Research Formats & Templates',
    color: '#1a4b7c',
    files: [
      { name: 'Funded Research Proposal Format', type: 'DOCX', icon: File },
      { name: 'Consultancy Project Proposal', type: 'DOCX', icon: File },
      { name: 'Patent Application Format', type: 'PDF', icon: FileText },
    ],
  },
  {
    title: 'Publications & Achievements',
    color: '#3a6fa8',
    files: [
      { name: 'Faculty Publication List', type: 'XLSX', icon: FileSpreadsheet },
      { name: 'Patent Registry', type: 'PDF', icon: FileCheck },
      { name: 'Research Convention Reports', type: 'PDF', icon: FileText },
    ],
  },
];

const ResearchDownloads: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Downloads"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Downloads' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal max-w-2xl">
            <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
              Resources
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a4b7c] leading-[1.15] mb-6 tracking-tight">
              Research Downloads
            </h2>
            <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
            <p className="text-[#1A1A1A]/70 leading-[1.85] text-[17px]">
              Access research-related documents, policies, templates, and reports. 
              All files are organized by category for easy reference and download.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filing Cabinet Drawers ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[900px]">
          <div className="space-y-8">
            {downloadCategories.map((cat, catIdx) => (
              <div
                key={catIdx}
                className="reveal"
                style={{ transitionDelay: `${catIdx * 0.08}s` }}
              >
                {/* Drawer label */}
                <div
                  className="flex items-center gap-3 px-5 py-3 text-white"
                  style={{ backgroundColor: cat.color }}
                >
                  <FolderOpen className="w-4 h-4" />
                  <span className="text-[17px] font-bold uppercase tracking-[0.15em]">{cat.title}</span>
                </div>

                {/* Drawer contents — file rows */}
                <div className="border border-[#E5E7EB] border-t-0">
                  {cat.files.map((file, fIdx) => (
                    <div
                      key={fIdx}
                      className="group flex items-center gap-4 px-5 py-3.5 bg-white border-b border-[#E5E7EB] last:border-b-0 hover:bg-[#F7F9FC] transition-colors duration-200 cursor-pointer"
                    >
                      {/* File icon */}
                      <div className="w-8 h-8 border border-[#E5E7EB] flex items-center justify-center flex-shrink-0 group-hover:border-[#fdb813] transition-colors">
                        <file.icon className="w-4 h-4 text-[#3a6fa8]" />
                      </div>

                      {/* File info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[17px] font-medium text-[#1A1A1A] truncate">{file.name}</p>
                      </div>

                      {/* Type badge */}
                      <span className="flex-shrink-0 text-[14px] font-mono font-bold text-[#6B7280] border border-[#E5E7EB] px-2 py-0.5">
                        {file.type}
                      </span>

                      {/* Download btn */}
                      <div className="flex-shrink-0 w-8 h-8 border border-[#E5E7EB] flex items-center justify-center hover:border-[#fdb813] hover:bg-[#fdb813]/5 transition-colors">
                        <Download className="w-3.5 h-3.5 text-[#6B7280] group-hover:text-[#3a6fa8] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchDownloads;
