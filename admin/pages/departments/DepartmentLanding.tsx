import React from 'react';
import { Link } from 'react-router-dom';

/* ── Icons ────────────────────────────────────────────────────────────────── */
const FolderIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const departmentEditables = [
  {
    title: 'Department CMS',
    description: 'Create, edit, and manage comprehensive department pages including vision, mission, outcomes, syllabus, and news.',
    icon: <FolderIcon />,
    iconBg: 'bg-indigo-50 text-indigo-600',
    links: [{ label: 'Edit Departments', to: '/admin/pages/departments/list' }],
  },
  {
    title: 'Faculty Directory',
    description: 'Manage faculty profiles across all departments. Assign roles, qualifications, and keep information up to date.',
    icon: <UsersIcon />,
    iconBg: 'bg-emerald-50 text-emerald-600',
    links: [{ label: 'Manage Faculty', to: '/admin/pages/faculty' }],
  },
];

const DepartmentLanding: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Departments Hub</h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl">
          A centralized control center for all academic departments and faculty management. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departmentEditables.map((item) => (
          <div key={item.title} className="group bg-white border border-slate-200/60 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full border-b-4 hover:border-b-indigo-500">
            <div className={`w-16 h-16 ${item.iconBg} rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-sm`}>
              {item.icon}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{item.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-10 flex-1 text-base font-medium">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {item.links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex items-center px-8 py-4 rounded-2xl ${item.title.includes('CMS') ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95`}
                >
                  {link.label}
                  <ArrowRightIcon />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips or Info */}
      <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
         <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-500 border border-slate-100 shadow-sm shrink-0">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
               <h4 className="text-slate-900 font-bold mb-1">Navigation Tip</h4>
               <p className="text-slate-500 text-sm font-medium">Faculty are now managed exclusively through this hub to keep the sidebar streamlined. Ensure you select the correct department when adding new staff.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DepartmentLanding;
