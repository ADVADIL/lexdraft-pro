'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  Sliders, 
  Building2, 
  User, 
  ShieldAlert, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SPECIMEN_AGREEMENTS } from '@/lib/templatesData';
import Link from 'next/link';

export default function GeneratorPage() {
  const [selectedId, setSelectedId] = useState(SPECIMEN_AGREEMENTS[0].id);
  const selectedAgreement = SPECIMEN_AGREEMENTS.find(a => a.id === selectedId) || SPECIMEN_AGREEMENTS[0];

  // Parameters
  const [firstPartyName, setFirstPartyName] = useState('Apex Technologies Private Limited');
  const [firstPartyCin, setFirstPartyCin] = useState('U72200DL2019PTC112233');
  const [firstPartyPan, setFirstPartyPan] = useState('AAACA9876G');
  const [firstPartyAddress, setFirstPartyAddress] = useState('Barakhamba Road, Connaught Place, New Delhi - 110001');

  const [secondPartyName, setSecondPartyName] = useState('Mr. Vikramaditya Sharma');
  const [secondPartyPan, setSecondPartyPan] = useState('BMKPS4321H');
  const [secondPartyAddress, setSecondPartyAddress] = useState('Indiranagar, Bangalore, Karnataka - 560038');

  const [effectiveDate, setEffectiveDate] = useState('15th October 2024');
  const [executionPlace, setExecutionPlace] = useState('New Delhi');
  const [seatOfArbitration, setSeatOfArbitration] = useState('New Delhi');
  const [considerationAmount, setConsiderationAmount] = useState('INR 1,500,000 (Rupees Fifteen Lakhs only)');

  const [copied, setCopied] = useState(false);

  // Generate populated text
  const generatePopulatedText = () => {
    let raw = selectedAgreement.defaultTemplate;
    raw = raw.replace(/\[Company Name\]/g, firstPartyName.replace(/ Private Limited| Limited/i, ''));
    raw = raw.replace(/\[Corporation Name\]/g, secondPartyName.replace(/ Limited| Inc\./i, ''));
    raw = raw.replace(/\[Consultant Name\]/g, secondPartyName);
    raw = raw.replace(/\[Employee Name\]/g, secondPartyName);
    raw = raw.replace(/\[Partner 1 Name\]/g, firstPartyName);
    raw = raw.replace(/\[Partner 2 Name\]/g, secondPartyName);
    raw = raw.replace(/\[Seller Company Name\]/g, firstPartyName);
    raw = raw.replace(/\[Purchaser Company Name\]/g, secondPartyName);
    raw = raw.replace(/\[Lender Bank\/NBFC Name\]/g, firstPartyName);
    raw = raw.replace(/\[Borrower Company Name\]/g, secondPartyName);
    raw = raw.replace(/\[Licensor Name\]/g, firstPartyName);
    raw = raw.replace(/\[Licensee Name\]/g, secondPartyName);
    raw = raw.replace(/\[Investor Name\]/g, firstPartyName);
    raw = raw.replace(/\[Promoter Name\]/g, secondPartyName);
    raw = raw.replace(/\[Place\]|\[City\]/g, executionPlace);
    raw = raw.replace(/\[Date\]|\[•\] day of \[Month\], \[Year\]/g, effectiveDate);
    return raw;
  };

  const currentDraft = generatePopulatedText();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentDraft], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedAgreement.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <FileText className="w-4 h-4" />
            Part 11 Specimen Precedent Bank
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            22 Specimen Commercial Agreement Generator
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-3xl">
            Vetted precedents formatted according to Bhumesh Verma's drafting rules: active voice, no redundant couplets, clear consideration, and Indian dispute resolution clauses.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy Draft'}
          </button>
          <button
            onClick={handleDownload}
            className="px-3.5 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            Export Draft
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar: Contract Selection (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              Select Specimen Agreement
            </h3>
            
            <div className="space-y-1 max-h-[360px] overflow-y-auto pr-1">
              {SPECIMEN_AGREEMENTS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition-all flex flex-col gap-1 ${
                    selectedId === item.id 
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{item.pages}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{item.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Party KYC & Particulars Form */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              Party Particulars & KYC (Part 5, Ch 7)
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block text-[11px] mb-1">First Party (Company / Licensor / Employer)</label>
                <input
                  type="text"
                  value={firstPartyName}
                  onChange={(e) => setFirstPartyName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-xs"
                />
              </div>

              <div>
                <label className="text-slate-400 block text-[11px] mb-1">Second Party (Counterparty / Individual / Consultant)</label>
                <input
                  type="text"
                  value={secondPartyName}
                  onChange={(e) => setSecondPartyName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Execution Date</label>
                  <input
                    type="text"
                    value={effectiveDate}
                    onChange={(e) => setEffectiveDate(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Seat of Arbitration</label>
                  <input
                    type="text"
                    value={seatOfArbitration}
                    onChange={(e) => setSeatOfArbitration(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Area: Agreement Preview (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">{selectedAgreement.title}</span>
              <span className="text-[11px] text-amber-400 font-mono">({selectedAgreement.pages})</span>
            </div>
            <Link
              href="/vetting"
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
            >
              Open in Audit Studio <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Key Safeguards Pills */}
          <div className="flex flex-wrap gap-1.5">
            {selectedAgreement.keyProvisions.map((prov, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] text-slate-300">
                ✓ {prov}
              </span>
            ))}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden p-6 sm:p-8 min-h-[620px]">
            <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-text">
              {currentDraft}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
