const fs = require('fs');

function generateComponent(name, title, subtitle, dataKey, fallbackImages) {
  const fallbackStr = fallbackImages.map(img => 
    `{ label: '${img.label}', src: '${img.src}' }`
  ).join(',\n    ');

  return `import React, { useState, useEffect, useMemo } from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { FacilitiesImageHolder, FacilitiesSectionCard } from './MMSFacilitiesShared';
import { get, resolveApiUrl } from '../../../services/api';
import type { MMSFacilitiesData } from '../../../admin/types';

const defaultImages = [
    ${fallbackStr}
];

export default function ${name}() {
  const [data, setData] = useState<MMSFacilitiesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get<{ data: MMSFacilitiesData }>('/pages/mms-facilities');
        setData(response.data);
      } catch (err) {
        console.error('Failed to fetch facilities data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const galleryItems = useMemo(() => {
    const remoteData = data?.${dataKey};
    if (remoteData && Array.isArray(remoteData) && remoteData.length > 0) {
      return remoteData.map((item, idx) => {
        const rawImage = item.image;
        const imageStr = rawImage && typeof rawImage === 'object' && 'url' in rawImage
          ? rawImage.url
          : (typeof rawImage === 'string' ? rawImage : null);
        
        return {
          label: item.label || \`\${title} \${idx + 1}\`,
          src: imageStr ? resolveApiUrl(imageStr) : defaultImages[idx % defaultImages.length]?.src || ''
        };
      });
    }
    return defaultImages;
  }, [data]);

  if (loading) {
    return (
      <MMSLayout title="${title}">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-brand-blue animate-spin"></div>
            <div className="text-slate-400 font-medium tracking-widest uppercase text-sm">Loading Content...</div>
          </div>
        </div>
      </MMSLayout>
    );
  }

  return (
    <MMSLayout title="${title}">
      <FacilitiesSectionCard title="${title}" subtitle="${subtitle}">
        <div className={\`grid grid-cols-1 gap-5 \${galleryItems.length > 4 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}\`}>
          {galleryItems.map((img, i) => (
            <FacilitiesImageHolder key={i} label={img.label} src={img.src} size={galleryItems.length > 4 ? 'large' : 'default'} />
          ))}
        </div>
      </FacilitiesSectionCard>
    </MMSLayout>
  );
}
`;
}

fs.writeFileSync('pages/mms/facilities/MMSFacilities.tsx', generateComponent(
  'MMSFacilities',
  'Computer Labs',
  'Technology-enabled lab ecosystem for practical management learning',
  'computerLabs',
  [
    { label: 'Computer Lab 1', src: '/images/Departments/MMS(MBA)/faciliteis/computerlabs-1.png' },
    { label: 'Computer Lab 2', src: '/images/Departments/MMS(MBA)/faciliteis/computerlabs-2.png' },
    { label: 'Computer Lab 3', src: '/images/Departments/MMS(MBA)/faciliteis/computerlabs-3.jpeg' }
  ]
));

fs.writeFileSync('pages/mms/facilities/MMSFacilitiesLibrary.tsx', generateComponent(
  'MMSFacilitiesLibrary',
  'Library',
  'Learning spaces, reading zones, and resources overview',
  'library',
  [
    { label: 'Library 01', src: '/images/Departments/MMS(MBA)/faciliteis/library-1.jpeg' },
    { label: 'Library 02', src: '/images/Departments/MMS(MBA)/faciliteis/library-2.jpeg' },
    { label: 'Library 03', src: '/images/Departments/MMS(MBA)/faciliteis/library-3.jpeg' },
    { label: 'Library 04', src: '/images/Departments/MMS(MBA)/faciliteis/library-4.jpeg' },
    { label: 'Library 05', src: '/images/Departments/MMS(MBA)/faciliteis/library-5.jpeg' },
    { label: 'Library 06', src: '/images/Departments/MMS(MBA)/faciliteis/library-6.jpeg' },
    { label: 'Library 07', src: '/images/Departments/MMS(MBA)/faciliteis/library-7.jpeg' },
    { label: 'Library 08', src: '/Images/Departments/MMS(MBA)/faciliteis/library-8.jpeg' }
  ]
));

fs.writeFileSync('pages/mms/facilities/MMSFacilitiesSeminarHall.tsx', generateComponent(
  'MMSFacilitiesSeminarHall',
  'Seminar Hall',
  'A state-of-the-art venue for workshops, guest lectures, and conferences',
  'seminarHall',
  [
    { label: 'Seminar Hall 01', src: '/images/Departments/MMS(MBA)/faciliteis/seminarhall-1.jpeg' },
    { label: 'Seminar Hall 02', src: '/images/Departments/MMS(MBA)/faciliteis/seminarhall-2.jpeg' }
  ]
));

fs.writeFileSync('pages/mms/facilities/MMSFacilitiesClassroom.tsx', generateComponent(
  'MMSFacilitiesClassroom',
  'Classroom',
  'Modern classroom infrastructure for interactive learning',
  'classrooms',
  [
    { label: 'Classroom 01', src: '/images/Departments/MMS(MBA)/faciliteis/classroom-1.jpeg' },
    { label: 'Classroom 02', src: '/images/Departments/MMS(MBA)/faciliteis/classroom_img_2.jpeg' },
    { label: 'Classroom 03', src: '/images/Departments/MMS(MBA)/faciliteis/classroom-1.jpeg' },
    { label: 'Classroom 04', src: '/images/Departments/MMS(MBA)/faciliteis/classroom_img_2.jpeg' }
  ]
));

fs.writeFileSync('pages/mms/facilities/MMSFacilitiesGymkhana.tsx', generateComponent(
  'MMSFacilitiesGymkhana',
  'Gymkhana',
  'Recreational areas and sports facilities for overall well-being',
  'gymkhana',
  [
    { label: 'Gymkhana 01', src: '/images/life/campus/gymkhana_1.jpg' },
    { label: 'Gymkhana 02', src: '/images/life/campus/gymkhana_2.jpg' },
    { label: 'Gymkhana 03', src: '/images/life/campus/gymkhana_3.jpg' }
  ]
));

console.log('Successfully updated all 5 components!');
