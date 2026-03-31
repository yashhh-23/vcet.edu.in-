import React, { useState, useEffect } from 'react';
import MMSLayout from '../../../components/mms/MMSLayout';
import { get, resolveApiUrl } from '../../../services/api';
import type { MMSStudentsLifeData } from '../../../admin/types';

const semesterIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'VAKEKAR', rank: '2nd' },
  { student: 'SANKE MANSI SANJAY', rank: '3rd' },
];

const semesterIIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'SHAIKH SHIRFANA SAYEED', rank: '2nd' },
  { student: 'SANKE MANSI SANJAY', rank: '3rd' },
];

const semesterIIIRankers = [
  { student: 'VINAY MAHENDRA MAYEKAR', rank: '1st' },
  { student: 'RAUT NEHA MAHESH', rank: '2nd' },
  { student: 'SHAIKH SHIRFANA SAYEED', rank: '2nd' },
  { student: 'AMBOKAR ANKITA SUBHASH', rank: '3rd' },
  { student: 'PUJARI OMKAR BHASKAR', rank: '3rd' },
];

function RankersTable({ title, rows }: { title: string; rows: Array<{ student: string; rank: string }> }) {
  return (
    <section className="space-y-3">
      <h3 className="text-center text-3xl font-display font-bold text-brand-navy sm:text-4xl">{title}</h3>
      <div className="overflow-hidden border border-brand-navy/25 bg-white shadow-[0_14px_30px_-22px_rgba(11,61,145,0.5)]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white">
              <th className="w-[78%] border border-[#0a325f] bg-[#2d4f78] px-3 py-3 text-center text-sm font-bold sm:text-lg">NAME OF THE STUDENT</th>
              <th className="w-[22%] border border-[#0a325f] bg-[#2d4f78] px-3 py-3 text-center text-sm font-bold sm:text-lg">RANK</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${title}-${row.student}`} className="bg-[#efefef]">     
                <td className="border border-slate-700/85 px-3 py-3 text-center text-sm text-slate-900 sm:text-[31px]">{row.student}</td>
                <td className="border border-slate-700/85 px-3 py-3 text-center text-sm text-slate-900 sm:text-[34px]">{row.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function MMSStudentsLifeRankers() {
  const [data, setData] = useState<MMSStudentsLifeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get<{ data: MMSStudentsLifeData }>('/pages/mms-students-life');
        setData(response.data);
      } catch (err) {
        console.error('Failed to fetch students life data:', err);
      }
    };
    fetchData();
  }, []);

  const dynamicRankers = data?.rankers || [];

  return (
    <MMSLayout title="RANKERS">
      <section className="space-y-6">
        <h2 className="text-center text-4xl font-display font-bold text-brand-navy sm:text-5xl">RANKERS</h2>

        <div className="grid grid-cols-1 gap-7 xl:grid-cols-2">
          <div className="space-y-7">
            <RankersTable title="Semester I Rankers" rows={semesterIRankers} /> 
            <RankersTable title="Semester II Rankers" rows={semesterIIRankers} />
          </div>

          <div>
            <RankersTable title="Semester III Rankers" rows={semesterIIIRankers} />
          </div>
        </div>

        {dynamicRankers.length > 0 && (
          <div className="pt-8">
            <h3 className="text-center text-3xl font-display font-bold text-brand-navy sm:text-4xl mb-6">Recent Achievers & Rankers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dynamicRankers.map((ranker, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white border border-brand-blue/20 rounded-none shadow-[0_8px_20px_-12px_rgba(11,61,145,0.4)]">
                  {ranker.image ? (
                    <img src={resolveApiUrl(ranker.image) || ''} alt={ranker.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#2d4f78] mb-4" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-[#2d4f78] mb-4 flex items-center justify-center">
                      <span className="text-slate-400 font-bold text-xl">{ranker.name.charAt(0)}</span>
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-slate-800 text-center uppercase">{ranker.name}</h4>
                  <p className="text-brand-gold font-bold text-md mt-1">{ranker.rank}</p>
                  {ranker.year && <p className="text-xs font-bold text-slate-400 mt-2 tracking-widest">{ranker.year}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </MMSLayout>
  );
}
