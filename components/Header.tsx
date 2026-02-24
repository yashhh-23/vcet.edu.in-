import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Search, ChevronDown, ChevronRight } from 'lucide-react';

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   TYPE DEFINITIONS
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
interface SubItem {
  label: string;
  href: string;
}

interface DropdownItem {
  label: string;
  href?: string;
  subItems?: SubItem[];
  isGroupLabel?: boolean;
}

interface MenuGroup {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   NAVIGATION DATA
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const menuGroups: MenuGroup[] = [
  // 1. ABOUT US
  {
    label: 'About Us',
    dropdown: [
      { label: 'About VCET',              href: 'https://vcet.edu.in/about-us/' },
      { label: "President's Desk",         href: 'https://vcet.edu.in/presidents-desk/' },
      { label: "Principal's Desk",         href: 'https://vcet.edu.in/principle-page/' },
      { label: 'Governing Council',        href: 'https://vcet.edu.in/governing-council/' },
      { label: 'Organizational Structure', href: 'https://vcet.edu.in/organizational-structure/' },
      { label: 'Administration',           href: 'https://vcet.edu.in/administration-faculty/' },
      { label: 'Strategic Plan',           href: 'https://vcet.edu.in/strategic-plan/' },
      { label: 'Code of Conduct',          href: 'https://vcet.edu.in/code-of-conduct/' },
    ],
  },

  // 2. ADMISSION
  {
    label: 'Admission',
    dropdown: [
      { label: 'Courses and Intake',   href: 'https://vcet.edu.in/courses-and-intake/' },
      { label: 'Fees Structure 25-26', href: 'https://vcet.edu.in/fees-structure-fe-dse-mestructural-engineeringmms/' },
      { label: 'Scholarships',         href: 'https://vcet.edu.in/scholarships/' },
      { label: 'Brochure',             href: 'https://vcet.edu.in/brochure/' },
      { label: 'Documents Required',   href: 'https://vcet.edu.in/documents-required-fedsemestructural-engineeringmms/' },
      { label: 'Cut Off 24-25',        href: 'https://vcet.edu.in/cut-off/' },
    ],
  },

  // 3. DEPARTMENTS
  {
    label: 'Departments',
    dropdown: [
      { label: 'Computer Engineering',                        href: 'https://vcet.edu.in/computer-engineering/' },
      { label: 'CS & Engg. (Data Science)',                   href: 'https://vcet.edu.in/computer-science-and-engineering-data-science/' },
      { label: 'Information Technology',                      href: 'https://vcet.edu.in/information-technology/' },
      { label: 'AI & Data Science',                           href: 'https://vcet.edu.in/artificial-intelligence-and-data-science/' },
      { label: 'Mechanical Engineering',                      href: 'https://vcet.edu.in/mechanical-engineering/' },
      { label: 'Electronics & Telecomm. Engg.',               href: 'https://vcet.edu.in/electronics-and-telecommunication-engineering/' },
      { label: 'Civil Engineering',                           href: 'https://vcet.edu.in/civil-engineering-2/' },
      { label: 'First Year Engineering',                      href: 'https://vcet.edu.in/first-year-engineering/' },
    ],
  },

  // 4. ACADEMICS
  {
    label: 'Academics',
    dropdown: [
      { label: "Dean Academic's Desk",       href: 'https://vcet.edu.in/dean-academicss-desk/' },
      {
        label: 'Academic Calendar',
        subItems: [
          { label: 'EVEN SEM 2025-26 SE TE BE (Tentative)', href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'ODD SEM 2025-26 SE TE BE',               href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'EVEN SEM 2024-25',                        href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'ODD SEM 2024-25 FE ME',                   href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'ODD SEM 2024-25 SE TE BE',                href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'EVEN SEM 2023-24 SE TE BE',               href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'EVEN SEM 2022-23 SE TE BE',               href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'FE & ME EVEN SEM 2022-23',                href: 'https://vcet.edu.in/academic-calendar/' },
          { label: 'FE ODD SEM 2022-23',                       href: 'https://vcet.edu.in/academic-calendar/' },
        ],
      },
      { label: 'Teaching Learning Process',  href: 'https://vcet.edu.in/teaching-learning-proccess/' },
      { label: 'Swayam - NPTEL',             href: 'https://vcet.edu.in/swayam-nptel/' },
      {
        label: 'Honours / Minor Degree Program',
        subItems: [
          { label: 'Booklet Part 1', href: 'https://vcet.edu.in/honours-minor-degree-program/' },
          { label: 'Booklet Part 2', href: 'https://vcet.edu.in/honours-minor-degree-program/' },
        ],
      },
    ],
  },

  // 5. RESEARCH
  {
    label: 'Research',
    dropdown: [
      { label: 'Introduction',                          href: 'https://vcet.edu.in/research/' },
      { label: 'Funded Research',                       href: 'https://vcet.edu.in/funded-research/' },
      { label: 'Publications (Journals / Conf. / Books)', href: 'https://vcet.edu.in/publications-journals-conference-books-patents/' },
      { label: 'Parents',                               href: 'https://vcet.edu.in/parents/' },
      { label: 'Consultancy Projects',                  href: 'https://vcet.edu.in/consultancy-projects/' },
      { label: 'Research Facility',                     href: 'https://vcet.edu.in/research-facility/' },
      { label: 'Research Conventions',                  href: 'https://vcet.edu.in/research-conventions/' },
      { label: 'Research Policy',                       href: 'https://vcet.edu.in/research-policy-2/' },
      { label: 'IIC',                                   href: 'https://vcet.edu.in/iic/' },
      { label: 'NIRF',                                  href: 'https://vcet.edu.in/nirf/' },
      { label: 'Downloads',                             href: 'https://vcet.edu.in/downloads/' },
    ],
  },

  // 6. FACILITIES
  {
    label: 'Facilities',
    dropdown: [
      { label: 'Central Computing Facility',     href: 'https://vcet.edu.in/centeral-computing-facility/' },
      { label: 'Library',                         href: 'https://vcet.edu.in/library/' },
      { label: 'Counseling Cell',                 href: 'https://vcet.edu.in/counselling-room/' },
      { label: 'Ladies Common Room',              href: 'https://vcet.edu.in/ladies-common-room/' },
      { label: 'Sports & Gymkhana',               href: 'https://vcet.edu.in/sports-gymkhana/' },
      { label: 'Health Facilities',               href: 'https://vcet.edu.in/health-facilities/' },
      { label: 'Differently-Abled Facilities',    href: 'https://vcet.edu.in/differently-abled-facilities/' },
    ],
  },

  // 7. STUDENT LIFE
  {
    label: 'Student Life',
    dropdown: [
      { label: 'Career @ VCET',          href: 'https://vcet.edu.in/career-at-vcet/' },
      { label: 'Extra-Curricular',       isGroupLabel: true },
      { label: "Student's Council",      href: 'https://vcet.edu.in/students-council/' },
      { label: 'Cultural Committee',     href: 'https://vcet.edu.in/cultural-committee/' },
      { label: 'Sports Committee',       href: 'https://vcet.edu.in/sports-committee/' },
      { label: 'Literati',               href: 'https://vcet.edu.in/literati/' },
      { label: 'NSS',                    href: 'https://vcet.edu.in/nss/' },
      { label: 'EBSB',                   href: 'https://vcet.edu.in/ebsb/' },
      { label: 'Co-Curricular',          isGroupLabel: true },
      { label: 'IEEE',                   href: 'https://vcet.edu.in/ieee/' },
      { label: 'Students Club',          href: 'https://vcet.edu.in/students-club/' },
      { label: 'CSI',                    href: 'https://vcet.edu.in/csi/' },
      { label: 'IETE',                   href: 'https://vcet.edu.in/iete/' },
      { label: 'ISHRAE',                 href: 'https://vcet.edu.in/ishrae/' },
      { label: 'VMEA',                   href: 'https://vcet.edu.in/vmea/' },
      { label: 'Hackathon',              href: 'https://vcet.edu.in/hackathon/' },
      { label: 'NSDC',                   href: 'https://vcet.edu.in/nsdc/' },
      { label: 'IGBC',                   href: 'https://vcet.edu.in/igbc/' },
    ],
  },

  // 8. COMMITTEES
  {
    label: 'Committees',
    dropdown: [
      { label: 'College Development Committee', href: 'https://vcet.edu.in/college-development-committee/' },
      { label: 'IQAC',                           href: 'https://vcet.edu.in/iqac/' },
      {
        label: 'Statutory Committees',
        subItems: [
          { label: 'Grievance Redressal Committee', href: 'https://vcet.edu.in/grievance-redressal-committee/' },
          { label: 'SRGC Committee',                href: 'https://vcet.edu.in/srgc-committee/' },
          { label: 'Anti Ragging Committee',        href: 'https://vcet.edu.in/anti-ragging-committee/' },
          { label: 'SC â€“ ST Committee',             href: 'https://vcet.edu.in/sc-st-committee/' },
        ],
      },
      { label: 'Internal Complaint Committee',           href: 'https://vcet.edu.in/internal-complaint-committee/' },
      { label: 'Equal Opportunity Cell',                 href: 'https://vcet.edu.in/equal-opportunity-cell/' },
      { label: 'Socio-Economically Disadvantaged Groups Cell', href: 'https://vcet.edu.in/sedg-cell/' },
    ],
  },

  // 9. ALUMNI & EXAM
  {
    label: 'Alumni & Exam',
    dropdown: [
      { label: 'Alumni Portal', href: 'https://alumni.vcet.edu.in/' },
      { label: 'Exam Cell',     href: 'https://vcet.edu.in/exam/' },
    ],
  },

  // 10. NAAC ACCREDITATION
  {
    label: 'NAAC',
    dropdown: [
      { label: 'SSS',                  href: 'https://vcet.edu.in/sss/' },
      { label: 'SSS Report',           href: 'https://vcet.edu.in/sss-report/' },
      { label: 'SSR Cycle 1',          href: 'https://vcet.edu.in/ssr-cycle-1/' },
      {
        label: 'SSR Cycle 2',
        subItems: [
          { label: 'Research Convention', href: 'https://vcet.edu.in/research-conventions/' },
        ],
      },
      { label: 'Best Practices & Institutional Distinctiveness', href: 'https://vcet.edu.in/best-practices-and-institutional-distinctiveness/' },
      { label: 'NAAC Accreditation Score', href: 'https://vcet.edu.in/naac-accreditation-score/' },
    ],
  },

  // 11. CONTACT US
  {
    label: 'Contact',
    href: 'https://vcet.edu.in/contact-us-2/',
  },

  // 12. TRAINING & PLACEMENT
  {
    label: 'Training & Placemnet',
    dropdown: [
      { label: 'Placement', href: '#placements' },
      { label: 'Training',  href: 'https://vcet.edu.in/training/' },
      { label: 'E-CELL',    href: 'https://vcet.edu.in/e-cell/' },
      { label: 'IIIC',      href: 'https://vcet.edu.in/iiic/' },
    ],
  },
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   DESKTOP DROPDOWN ITEM
   Supports accordion for sub-items
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
interface DesktopDropdownItemProps {
  item: DropdownItem;
  /** flip sub-panel to left when parent dropdown is near right edge */
  flipSub?: boolean;
}
const DesktopDropdownItem: React.FC<DesktopDropdownItemProps> = ({ item, flipSub }) => {
  const [subOpen, setSubOpen] = useState(false);
  const subTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openSub  = () => { if (subTimer.current) clearTimeout(subTimer.current); setSubOpen(true); };
  const closeSub = () => { subTimer.current = setTimeout(() => setSubOpen(false), 200); };
  const keepSub  = () => { if (subTimer.current) clearTimeout(subTimer.current); };

  /* ── Section divider label (e.g. "Extra-Curricular") ── */
  if (item.isGroupLabel) {
    return (
      <div className="px-4 pt-3 pb-1.5">
        <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-brand-gold select-none">
          {item.label}
        </span>
        <div className="mt-1 h-px bg-brand-gold/20" />
      </div>
    );
  }

  /* ── Item with sub-items → hover flyout panel to the right ── */
  if (item.subItems && item.subItems.length > 0) {
    const subSide = flipSub ? 'right-full mr-1' : 'left-full ml-1';
    return (
      <div
        className="relative"
        onMouseEnter={openSub}
        onMouseLeave={closeSub}
      >
        {/* Trigger row */}
        <div className={`flex items-center justify-between px-4 py-2.5 cursor-pointer select-none transition-all duration-150 border-l-2 ${
          subOpen
            ? 'bg-brand-blue/8 text-brand-blue border-brand-blue'
            : 'text-slate-700 hover:text-brand-blue hover:bg-brand-blue/5 border-transparent hover:border-brand-gold'
        }`}>
          <span className="text-[11.5px] font-semibold">{item.label}</span>
          <ChevronRight
            className={`w-3.5 h-3.5 flex-shrink-0 ml-3 transition-all duration-250 ${
              subOpen ? 'text-brand-blue translate-x-1' : 'text-brand-gold/50'
            }`}
          />
        </div>

        {/* Sub-flyout panel */}
        <div
          onMouseEnter={keepSub}
          onMouseLeave={closeSub}
          className={`absolute top-0 ${subSide} z-[400] transition-all duration-250 ease-[cubic-bezier(0.34,1.18,0.64,1)] origin-left ${
            subOpen
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 -translate-x-2 pointer-events-none'
          }`}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 min-w-[240px] py-2 ring-1 ring-black/5">
            {/* Sub-panel header */}
            <div className="px-4 pb-1.5 pt-1">
              <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-brand-blue/50">
                {item.label}
              </span>
            </div>
            <div className="h-px bg-gray-100 mx-3 mb-1" />
            {item.subItems.map((sub) => (
              <a
                key={sub.label}
                href={sub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 text-[11.5px] text-slate-600 hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-150 border-l-2 border-transparent hover:border-brand-gold group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-150" />
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── Plain link ── */
  return (
    <a
      href={item.href}
      target={item.href?.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="block px-4 py-2.5 text-[11.5px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-brand-blue/5 transition-all duration-150 border-l-2 border-transparent hover:border-brand-gold"
    >
      {item.label}
    </a>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MOBILE ACCORDION ITEM
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
interface MobileAccordionItemProps {
  item: DropdownItem;
  onClose: () => void;
}
const MobileAccordionItem: React.FC<MobileAccordionItemProps> = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);

  if (item.isGroupLabel) {
    return (
      <div className="px-2 pt-3 pb-1">
        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-brand-gold/70 select-none">
          {item.label}
        </span>
      </div>
    );
  }

  if (item.subItems && item.subItems.length > 0) {
    return (
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? `${item.subItems.length * 44}px` : '0px' }}
        >
          <div className="pl-4 border-l border-brand-gold/30 ml-2 space-y-0.5">
            {item.subItems.map((sub) => (
              <a
                key={sub.label}
                href={sub.href}
                onClick={onClose}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-[12px] text-white/50 hover:text-brand-gold transition-colors"
              >
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={item.href}
      onClick={onClose}
      target={item.href?.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="block py-2.5 text-sm text-white/70 hover:text-brand-gold transition-colors"
    >
      {item.label}
    </a>
  );
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MAIN HEADER COMPONENT
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [searchOpen, setSearchOpen]         = useState(false);
  const [activeMenu, setActiveMenu]         = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const searchInputRef                      = useRef<HTMLInputElement>(null);
  const closeTimer                          = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, searchOpen]);

  /* focus search on open */
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 150);
  }, [searchOpen]);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 220);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  /* Last 5 items right-align their dropdown so it stays inside viewport */
  const getDropdownAlign = (idx: number) =>
    idx >= menuGroups.length - 5 ? 'right-0' : 'left-0';

  /* Sub-flyout flips left when the parent dropdown is near the right edge */
  const shouldFlipSub = (idx: number) =>
    idx >= menuGroups.length - 5;

  /* Estimate max-height for smooth dropdown animation */
  const getDropdownMaxH = (items: DropdownItem[]) => {
    const h = items.reduce((acc, it) => {
      if (it.isGroupLabel) return acc + 34;
      if (it.subItems)     return acc + 44;
      return acc + 40;
    }, 16);
    return Math.min(h, 520);
  };

  return (
    <>
      {/* â”€â”€â”€â”€â”€â”€â”€â”€ STICKY HEADER â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <header className="sticky top-0 w-full z-50 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 h-14 md:h-[4.2rem] flex items-center gap-2">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 mr-1">
            <img
              src="/Images/VCET%20logo.jpeg"
              alt="VCET Logo"
              className="h-10 md:h-11 w-auto rounded-sm"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </a>

          {/* â”€â”€â”€â”€ Desktop Nav â”€â”€â”€â”€ */}
          <nav className="hidden md:flex items-center flex-1 min-w-0" aria-label="Main navigation">
            <ul className="flex items-center w-full">
              {menuGroups.map((group, idx) => (
                <li key={group.label} className="relative flex-shrink-0">
                  {group.dropdown ? (
                    <>
                      {/* Hover trigger button */}
                      <button
                        onMouseEnter={() => openMenu(group.label)}
                        onMouseLeave={scheduleClose}
                        onFocus={() => openMenu(group.label)}
                        onBlur={scheduleClose}
                        aria-haspopup="true"
                        aria-expanded={activeMenu === group.label}
                        className={`flex items-center gap-0.5 px-[2px] md:px-[3px] lg:px-[5px] xl:px-[7px] py-1.5 lg:py-2 text-[6.5px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] font-bold uppercase tracking-wide rounded-md transition-all duration-200 whitespace-nowrap select-none ${
                          activeMenu === group.label
                            ? 'bg-brand-blue text-white'
                            : 'text-slate-700 hover:bg-brand-blue/8 hover:text-brand-blue'
                        }`}
                      >
                        {group.label}
                        <ChevronDown
                          className={`w-2 h-2 lg:w-2.5 lg:h-2.5 flex-shrink-0 transition-transform duration-300 ${
                            activeMenu === group.label ? 'rotate-180 opacity-100' : 'opacity-40'
                          }`}
                        />
                      </button>

                      {/* Dropdown panel â€” stays inside viewport */}
                      <div
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                        style={{ zIndex: 300 }}
                        className={`absolute top-full pt-2 ${getDropdownAlign(idx)} transition-all duration-300 ease-[cubic-bezier(0.34,1.18,0.64,1)] origin-top ${
                          activeMenu === group.label
                            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-y-90 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div
                          className="relative bg-white rounded-xl shadow-2xl border border-gray-100/90 min-w-[230px] max-w-[295px] overflow-y-auto py-2 ring-1 ring-black/5"
                          style={{ maxHeight: `${getDropdownMaxH(group.dropdown)}px`, zIndex: 2 }}
                        >
                          {group.dropdown.map((item) => (
                            <DesktopDropdownItem key={item.label} item={item} flipSub={shouldFlipSub(idx)} />
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={group.href}
                      target={group.href?.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="block px-[2px] md:px-[3px] lg:px-[5px] xl:px-[7px] py-1.5 lg:py-2 text-[6.5px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] font-bold uppercase tracking-wide rounded-md transition-all duration-200 whitespace-nowrap text-slate-700 hover:bg-brand-blue/8 hover:text-brand-blue"
                    >
                      {group.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions â€” search + apply */}
          <div className="hidden md:flex items-center gap-1 ml-auto flex-shrink-0">
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-slate-500 hover:bg-brand-blue/8 hover:text-brand-blue transition-all duration-200"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <a
              href="#admissions"
              className="ml-0.5 flex items-center gap-1 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-[7px] lg:text-[9px] xl:text-[10px] font-bold uppercase tracking-wide bg-brand-blue text-white hover:bg-brand-navy shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              Apply Now <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1 ml-auto text-slate-700">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-brand-blue/8 hover:text-brand-blue transition-all"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-brand-blue/8 hover:text-brand-blue transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€ MOBILE FULL-SCREEN MENU â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className={`fixed inset-0 bg-brand-dark/98 backdrop-blur-lg text-white z-[9999] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
          mobileOpen
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-full pointer-events-none'
        }`}
      >
        {/* Mobile top bar */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 flex-shrink-0">
          <span className="text-base font-bold tracking-tight">VCET Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:text-brand-gold transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <nav className="flex-1 overflow-y-auto px-5 py-5" aria-label="Mobile navigation">
          <div className="space-y-0.5">
            {menuGroups.map((group) => (
              <div key={group.label}>
                {group.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === group.label ? null : group.label)
                      }
                      className="w-full flex items-center justify-between py-3.5 text-[15px] font-semibold border-b border-white/8 hover:text-brand-gold transition-colors duration-200"
                    >
                      <span>{group.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 flex-shrink-0 transition-transform duration-350 ${
                          mobileExpanded === group.label ? 'rotate-180 text-brand-gold' : 'opacity-50'
                        }`}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-400 ease-in-out"
                      style={{
                        maxHeight:
                          mobileExpanded === group.label
                            ? `${group.dropdown.length * 50 + 20}px`
                            : '0px',
                        opacity: mobileExpanded === group.label ? 1 : 0,
                        transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out',
                      }}
                    >
                      <div className="pl-3 pr-1 pt-1 pb-3 rounded-b-lg space-y-0.5 mb-1 bg-white/3">
                        {group.dropdown.map((item) => (
                          <MobileAccordionItem
                            key={item.label}
                            item={item}
                            onClose={() => setMobileOpen(false)}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={group.href}
                    onClick={() => setMobileOpen(false)}
                    target={group.href?.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block py-3.5 text-[15px] font-semibold border-b border-white/8 hover:text-brand-gold transition-colors duration-200"
                  >
                    {group.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile footer actions */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <a
              href="#admissions"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-brand-gold text-brand-dark font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-brand-gold-light transition-colors text-sm"
            >
              Apply Now
            </a>
            <div className="mt-6 text-sm text-white/40 space-y-1">
              <p>vcet_inbox@vcet.edu.in</p>
              <p>+91 0250-2338234</p>
            </div>
          </div>
        </nav>
      </div>

      {/* â”€â”€â”€â”€â”€â”€â”€â”€ SEARCH OVERLAY â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        className={`fixed inset-0 z-[100] bg-brand-dark/97 backdrop-blur-xl transition-all duration-500 ${
          searchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-6 right-6 p-3 text-white/40 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="Close Search"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl">
            <label
              htmlFor="site-search"
              className="block text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              What are you looking for?
            </label>
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                id="site-search"
                className="w-full bg-transparent border-b-2 border-white/20 text-2xl md:text-4xl lg:text-5xl font-bold text-white py-4 pr-12 focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/10"
                placeholder="Search..."
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 text-white/20" />
            </div>
            <div className="mt-10">
              <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
                Popular
              </p>
              <div className="flex flex-wrap gap-2">
                {['Computer Engineering', 'Admissions 2025', 'Placements', 'Exam Cell', 'Faculty'].map(
                  (item) => (
                    <button
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
