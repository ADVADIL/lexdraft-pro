'use client';

import React, { useState } from 'react';
import { 
  CheckSquare, 
  CheckCircle2, 
  Circle, 
  Copy, 
  Check, 
  BookOpen, 
  Download, 
  ShieldCheck, 
  Scale, 
  AlertCircle
} from 'lucide-react';

interface ChecklistCategory {
  title: string;
  chapterRef: string;
  description: string;
  items: { id: string; label: string; subtext: string }[];
}

const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    title: '1. Negotiation & Strategy (Part 4, Ch 1)',
    chapterRef: 'pp. 25-30',
    description: 'Harvard Negotiation Project 7 elements & deal objectives',
    items: [
      { id: 'batna', label: 'BATNA Established', subtext: 'Best Alternative to a Negotiated Agreement determined before sitting at the bargaining table.' },
      { id: 'non_neg', label: 'Non-Negotiables vs Concessions Mapped', subtext: 'List of absolute deal-breakers vs items available for offer-concession trade-offs.' },
      { id: 'first_mover', label: 'First-Mover Advantage Assessed', subtext: 'Advise client to take the drafting initiative if leverage allows (opt for batting on clean pitch).' }
    ]
  },
  {
    title: '2. Client Briefing & Laundry List (Part 4, Ch 2)',
    chapterRef: 'pp. 31-34',
    description: 'Core commercial particulars and expectations',
    items: [
      { id: 'client_goals', label: "Client's Commercial Goals & Tolerance Limits", subtext: 'Clear understanding of transaction criticality (one-off vs core strategic project).' },
      { id: 'prelim_docs', label: 'Preliminary Documents Collected (MOU / LOI / NDA)', subtext: 'Ensure definitive agreement captures all substantive terms and expressly supersedes non-binding heads.' },
      { id: 'query_hygiene', label: 'Query Burden Minimized', subtext: 'Bother client with supplementary requests no more than twice or thrice to maintain business velocity.' }
    ]
  },
  {
    title: '3. Legality of Object (Part 4, Ch 3)',
    chapterRef: 'pp. 35-36',
    description: 'Section 23 of the Indian Contract Act, 1872',
    items: [
      { id: 'sec23', label: 'Lawful Object & Public Policy Verification', subtext: 'Confirm object is not forbidden by law, fraudulent, injuring person/property, or opposed to public policy.' },
      { id: 'sec_regime', label: 'Special Statutory Regimes Screened', subtext: 'Verify compliance with RBI, FEMA, Companies Act deposit restrictions, and SEBI regulations.' },
      { id: 'credibility', label: 'Advocate Independence Preserved', subtext: 'Ensure counsel does not become conduit in facilitating questionable or unlawful deals.' }
    ]
  },
  {
    title: '4. Competence of Parties (Part 4, Ch 4)',
    chapterRef: 'pp. 37-39',
    description: 'Sections 11 & 12 of the Indian Contract Act, 1872',
    items: [
      { id: 'minority', label: 'Age of Majority Verified', subtext: 'Confirm natural persons are 18+ (or 21 under Guardians & Wards Act). Agreements with minors are void ab initio.' },
      { id: 'sound_mind', label: 'Rational Judgment Capacity (Sec 12)', subtext: 'Parties capable of understanding contract and its effects upon their interests at execution.' },
      { id: 'ultra_vires', label: 'Corporate Capacity & MOA Intra Vires Check', subtext: 'Verify transactions fall within the Main Object Clause of the Memorandum of Association.' },
      { id: 'disqualification', label: 'Disqualified Persons Screened', subtext: 'Confirm no insolvency proceedings, alien enemy status, convict imprisonment, or SEBI debarment.' }
    ]
  },
  {
    title: '5. Lawful Consideration & Stamping (Part 4, Ch 5)',
    chapterRef: 'pp. 40-41',
    description: 'Section 2(d) & 10 ICA and Section 27 Indian Stamp Act, 1899',
    items: [
      { id: 'true_consideration', label: 'Full and True Consideration Stated (Sec 27)', subtext: 'Avoid under-reporting consideration to prevent Section 35 evidence inadmissibility and 10x penalty.' },
      { id: 'tds_tax', label: 'TDS Withholding & Tax Certification Assigned', subtext: 'Fix responsibility of withholding and depositing tax at source under Indian Income Tax Act.' }
    ]
  }
];

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = CHECKLIST_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const handleCopyReport = () => {
    let report = `PRE-DRAFTING LEGAL DUE DILIGENCE CLEARANCE REPORT\nCompleted: ${completedItems}/${totalItems} items (${progressPercent}%)\n\n`;
    CHECKLIST_DATA.forEach(cat => {
      report += `${cat.title} [${cat.chapterRef}]\n`;
      cat.items.forEach(item => {
        report += ` [${checkedItems[item.id] ? 'COMPLIANT' : 'PENDING'}] ${item.label}: ${item.subtext}\n`;
      });
      report += '\n';
    });
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <CheckSquare className="w-4 h-4" />
            Part 4 Before You Draft
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Pre-Drafting Due Diligence Checklist
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-2xl">
            "An agreement is never created in a vacuum—it has to be formulated around the client, his requirements, and statutory competence."
          </p>
        </div>

        <button
          onClick={handleCopyReport}
          className="self-start md:self-auto px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-600/20 active:scale-95"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Report Copied' : 'Export Clearance Report'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-white">Pre-Drafting Verification Progress</span>
          <span className="font-mono font-bold text-cyan-400">{completedItems} of {totalItems} verified ({progressPercent}%)</span>
        </div>
        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-6">
        {CHECKLIST_DATA.map((cat, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="font-bold text-white text-sm">{cat.title}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{cat.description}</p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {cat.chapterRef}
              </span>
            </div>

            <div className="space-y-3">
              {cat.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-cyan-950/20 border-cyan-500/40 text-cyan-100'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                    <div>
                      <h4 className={`text-xs font-semibold ${isChecked ? 'text-cyan-200' : 'text-white'}`}>
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        {item.subtext}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
