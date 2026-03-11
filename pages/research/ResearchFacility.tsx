import React from 'react';
import PageLayout from '../../components/PageLayout';
import PageBanner from '../../components/PageBanner';
import { Microscope, Cpu, Beaker, Server, Wrench, Wifi, MonitorSmartphone, ChevronRight } from 'lucide-react';

const facilities = [
  { icon: Cpu,                title: 'Advanced Computing Lab',             description: 'High-performance computing infrastructure with GPU clusters, cloud computing access, and AI/ML workstations for cutting-edge research.',                       equipment: ['NVIDIA A100 GPUs', 'Cloud VM Cluster', 'ML Workstations', 'HPC Server'],             dept: 'Computer Engineering' },
  { icon: Microscope,         title: 'Material Testing Lab',               description: 'Equipped with UTM, hardness testers, and microstructure analysis tools for civil and mechanical engineering research.',                                          equipment: ['Universal Testing Machine', 'Rockwell Hardness Tester', 'Metallurgical Microscope'], dept: 'Civil Engineering' },
  { icon: Beaker,             title: 'Environmental Engineering Lab',      description: 'Facilities for water quality testing, air pollution monitoring, and environmental impact assessment studies.',                                                    equipment: ['Spectrophotometer', 'BOD Incubator', 'Air Sampler', 'pH Meters'],                    dept: 'Civil Engineering' },
  { icon: Wifi,               title: 'IoT & Embedded Systems Lab',         description: 'Comprehensive IoT prototyping lab with sensors, microcontrollers, FPGA boards, and wireless communication modules.',                                             equipment: ['Arduino & Raspberry Pi Kits', 'FPGA Boards', 'Sensor Arrays', 'LoRa Modules'],       dept: 'Electronics & Telecomm' },
  { icon: Server,             title: 'Networking & Cybersecurity Lab',     description: 'Network simulation tools, firewalls, and cybersecurity testing infrastructure for security research.',                                                             equipment: ['Cisco Routers & Switches', 'Firewall Appliances', 'Kali Linux Workstations'],        dept: 'Information Technology' },
  { icon: Wrench,             title: 'Workshop & Fabrication Lab',         description: '3D printers, CNC machines, laser cutters, and traditional workshop equipment for prototyping and fabrication.',                                                     equipment: ['3D Printers', 'CNC Machine', 'Laser Cutter', 'Lathe & Milling'],                     dept: 'Mechanical Engineering' },
  { icon: MonitorSmartphone,  title: 'Software Development Lab',           description: 'Modern software development environment with licensed tools, version control, and CI/CD infrastructure for research projects.',                                   equipment: ['Licensed IDEs', 'Git Servers', 'Docker & Kubernetes', 'CI/CD Pipelines'],            dept: 'Computer Engineering' },
];

const borderColors = ['border-l-[#1a4b7c]', 'border-l-[#3a6fa8]', 'border-l-[#fdb813]', 'border-l-[#1a4b7c]', 'border-l-[#3a6fa8]', 'border-l-[#fdb813]', 'border-l-[#1a4b7c]'];

const ResearchFacility: React.FC = () => {
  return (
    <PageLayout>
      <PageBanner
        title="Research Facilities"
        breadcrumbs={[
          { label: 'Research', href: '/research' },
          { label: 'Research Facilities' },
        ]}
      />

      {/* ── Intro ── */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="max-w-3xl reveal">
            <span className="inline-block text-[14px] font-bold uppercase tracking-[0.3em] text-[#fdb813] border-b-2 border-[#fdb813] pb-1 mb-6">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a4b7c] mb-6 tracking-tight leading-[1.15]">
              State-of-the-Art Research Facilities
            </h2>
            <div className="w-16 h-[3px] bg-[#1a4b7c] mb-6" />
            <p className="text-[#1A1A1A]/70 leading-[1.85] max-w-2xl text-[17px]">
              VCET provides well-equipped research laboratories and infrastructure across
              departments to support faculty and student research activities. Our modern
              facilities enable cutting-edge research in diverse engineering and technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lab Showcase — wide editorial panels with thick left border ── */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1000px]">
          <div className="space-y-6">
            {facilities.map((lab, idx) => (
              <div
                key={lab.title}
                className={`reveal group bg-white border border-[#E5E7EB] border-l-4 ${borderColors[idx]} hover:shadow-[4px_4px_0_#E5E7EB] transition-all duration-300`}
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Image placeholder */}
                  <div className="md:col-span-1 bg-[#F7F9FC] border-r border-[#E5E7EB] flex items-center justify-center min-h-[180px]">
                    <div className="text-center p-6">
                      <lab.icon className="w-10 h-10 text-[#1a4b7c]/15 mx-auto mb-2" />
                      <p className="text-[14px] text-[#6B7280] uppercase tracking-[0.15em]">lab-photo.jpg</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-[#1a4b7c] text-lg leading-tight">{lab.title}</h3>
                        <span className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#fdb813]">{lab.dept}</span>
                      </div>
                      <span className="flex-shrink-0 text-[14px] font-mono text-[#6B7280] border border-[#E5E7EB] px-2 py-0.5">
                        LAB-{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-[17px] text-[#6B7280] leading-relaxed mb-4">{lab.description}</p>

                    {/* Equipment — monospace specs */}
                    <div className="border-t border-dashed border-[#E5E7EB] pt-3">
                      <p className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#6B7280] mb-2">Equipment</p>
                      <div className="flex flex-wrap gap-2">
                        {lab.equipment.map((eq) => (
                          <span key={eq} className="inline-block px-2.5 py-1 border border-[#E5E7EB] bg-[#F7F9FC] text-[17px] font-mono text-[#1a4b7c]">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1a4b7c] border-t border-[#1a4b7c]">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="reveal py-14 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight">
              Interested in utilizing our research facilities?
            </h3>
            <p className="text-white/40 text-[17px] mb-6 max-w-lg mx-auto">
              Faculty, students, and industry partners are welcome to explore collaborative opportunities.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#fdb813] text-[#1a4b7c] text-[17px] font-bold hover:shadow-[4px_4px_0_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Contact Research Cell
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchFacility;
