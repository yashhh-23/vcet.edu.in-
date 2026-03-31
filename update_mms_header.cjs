const fs = require('fs');

const path = 'C:/Users/sunanda.AMFIIND/Desktop/shubham/VCET BACKEND_and_FRONTEND/vcet.edu.in/components/mms/MMSHeader.tsx';
let source = fs.readFileSync(path, 'utf8');

// 1. Add imports
source = source.replace(
  "import { Menu, X } from 'lucide-react';",
  "import { Menu, X } from 'lucide-react';\nimport { useEffect } from 'react';\nimport { get, resolveApiUrl } from '../../services/api';\nimport type { MMSSyllabusData } from '../../admin/types';"
);

// 2. Rename navItems to defaultNavItems
source = source.replace('const navItems: NavItem[] = [', 'const defaultNavItems: NavItem[] = [');

// 3. Update the component logic
const hookInjection = export default function MMSHeader() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>(defaultNavItems);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const response = await get<{ data: MMSSyllabusData }>('/pages/mms-syllabus');
        const data = response.data;
        if (data && (data.firstYearPdf?.url || data.secondYearPdf?.url)) {
          setNavItems(prevItems => {
            const newItems = [...prevItems];
            const syllabusIndex = newItems.findIndex(i => i.label === 'SYLLABUS');
            if (syllabusIndex !== -1) {
              const subLinks = [];
              if (data.firstYearPdf?.url) {
                subLinks.push({ label: data.firstYearPdf.label || 'First Year', href: resolveApiUrl(data.firstYearPdf.url), newTab: true });
              }
              if (data.secondYearPdf?.url) {
                subLinks.push({ label: data.secondYearPdf.label || 'Second Year', href: resolveApiUrl(data.secondYearPdf.url), newTab: true });
              }
              newItems[syllabusIndex] = {
                ...newItems[syllabusIndex],
                href: subLinks.length > 0 ? subLinks[0].href : newItems[syllabusIndex].href,
                subLinks
              };
            }
            return newItems;
          });
        }
      } catch (err) {
        console.warn('Could not fetch syllabus links:', err);
      }
    };
    fetchSyllabus();
  }, []);;

source = source.replace(
  /export default function MMSHeader\(\) \{\s*const location = useLocation\(\);\s*const \[isMobileMenuOpen, setIsMobileMenuOpen\] = useState\(false\);/,
  hookInjection
);

fs.writeFileSync(path, source, 'utf8');
