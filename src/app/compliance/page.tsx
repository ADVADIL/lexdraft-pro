'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertOctagon, 
  FileCheck, 
  Download, 
  Copy, 
  Check, 
  Clock, 
  Landmark, 
  FileText
} from 'lucide-react';
import { checkStatutoryCompliance, generateEvidenceCertificate } from '@/lib/statutoryAdvisor';
import { IT_ACT_EXCLUSIONS } from '@/lib/contractRules';

export default function CompliancePage() {
  const [docType, setDocType] = useState('Commercial Service Agreement');
  const [affiantName, setAffiantName] = useState('Baswanth Mohan');
  const [designation, setDesignation] = useState('Head of Legal & IT Systems');
  const [companyName, setCompanyName] = useState('Corp Comm Technologies Pvt. Ltd.');
  const [deviceDetails, setDeviceDetails] = useState('Dell PowerEdge Server (IP 192.168.1.10) running Google Workspace Mail Server and HP LaserJet Enterprise M608');
  const [contractTitle, setContractTitle] = useState('Master Software Services Agreement dated 15th October 2024');
  const [executionDate, setExecutionDate] = useState('15th October 2024');
  const [hash, setHash] = useState('SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  const [copied, setCopied] = useState(false);

  const certText = generateEvidenceCertificate({
    affiantName,
    designation,
    organization: companyName,
    deviceDetails,
    contractTitle,
    dateOfExecution: executionDate,
    hashOrIdentifier: hash
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(certText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([certText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Section_63_BSA_Certificate.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
          <ShieldCheck className="w-4 h-4" />
          Part 9 E-Contracts & Statutory Compliance Matrix
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Statutory Enforceability & Electronic Evidence Studio
        </h1>
        <p className="text-slate-400 text-xs mt-1 max-w-3xl">
          Check legal validity of e-contracts under the Information Technology Act, 2000, enforce the 4-month Registration Act deadline, and generate courtroom-ready Electronic Evidence Certificates under Section 63 BSA 2023 (formerly Section 65B Evidence Act).
        </p>
      </div>

      {/* IT Act 5 Exclusions Alert */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 text-red-400" />
          The 5 Statutory Exclusions from Electronic Execution (First Schedule, IT Act 2000)
        </h3>
        <p className="text-xs text-slate-300">
          Under Section 1(4) of the Information Technology Act, 2000, electronic records and digital signatures are strictly forbidden for the following instruments. Any digital execution of these documents is void:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-1">
          {IT_ACT_EXCLUSIONS.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-xs space-y-1.5">
              <span className="font-bold text-red-300 block">{item.instrument}</span>
              <p className="text-[11px] text-slate-300 leading-snug">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory Guidelines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Landmark className="w-4 h-4" />
            Indian Stamp Act, 1899 (Sec. 27 & 35)
          </div>
          <p className="text-slate-300 leading-relaxed">
            Section 27 mandates that consideration and all facts affecting stamp duty must be fully stated. Under Section 35, an unstamped or under-stamped instrument cannot be admitted into evidence for any purpose, nor acted upon by an arbitrator or court, until impounded and 10x penalty paid.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-bold">
            <Clock className="w-4 h-4" />
            Registration Act, 1908 (Sec. 23)
          </div>
          <p className="text-slate-300 leading-relaxed">
            Section 23 sets a strict maximum window of <span className="text-white font-semibold">four (4) months</span> from the execution date for presenting compulsorily registrable instruments (such as real estate leases &gt; 1 year or sales) to the Sub-Registrar.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <FileCheck className="w-4 h-4" />
            IT Act, 2000 (Section 10-A)
          </div>
          <p className="text-slate-300 leading-relaxed">
            Contracts formed through electronic means (email, clickwrap, website order forms) are recognized as valid and legally enforceable agreements under Section 10-A, provided the fundamental requirements of offer, acceptance, and consideration under the Contract Act are fulfilled.
          </p>
        </div>
      </div>

      {/* Electronic Evidence Certificate Generator */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Judicial Admissibility Generator
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Electronic Evidence Certificate (Section 63 BSA 2023 / Sec 65B Evidence Act)
            </h3>
            <p className="text-xs text-slate-400">
              When producing printouts of emails, electronic contracts, or digital transactions in Indian courts or arbitral tribunals.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Affidavit'}
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md shadow-purple-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              Download Certificate
            </button>
          </div>
        </div>

        {/* Certificate Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Deponent / Affiant Full Name</label>
            <input
              type="text"
              value={affiantName}
              onChange={(e) => setAffiantName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Designation / Role</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Company / Organization</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-slate-400 block text-[11px] mb-1">Electronic Record & Devices Description</label>
            <input
              type="text"
              value={deviceDetails}
              onChange={(e) => setDeviceDetails(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Cryptographic Hash / Message-ID</label>
            <input
              type="text"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-white text-xs font-mono"
            />
          </div>
        </div>

        {/* Certificate Text Preview */}
        <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 leading-relaxed whitespace-pre-wrap select-text">
          {certText}
        </div>
      </div>
    </div>
  );
}
