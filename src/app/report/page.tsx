'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  UserCheck, 
  AlertTriangle,
  Building,
  Scale
} from 'lucide-react';
import { auditContract } from '@/lib/checkerEngine';

export default function ClientReportPage() {
  const [advocateName, setAdvocateName] = useState('Mohamed Adil, Advocate');
  const [chambersName, setChambersName] = useState('Adil & Associates | Advocates & Legal Consultants');
  const [enrolmentNo, setEnrolmentNo] = useState('D/1452/2018 (Bar Council of Delhi)');
  const [clientName, setClientName] = useState('Nexus Retail Solutions Pvt. Ltd.');
  const [counterpartyName, setCounterpartyName] = useState('Global Logistics India Limited');
  const [contractTitle, setContractTitle] = useState('Master Vendor & Distribution Agreement');
  const [contractText, setContractText] = useState(`MASTER VENDOR & DISTRIBUTION AGREEMENT

This Agreement is made on 09/11/2023 by and between Global Logistics India Limited ("Company") and Nexus Retail Solutions Pvt. Ltd. ("Vendor").

1. Term: The Agreement shall commence on 09/11/2023 and shall automatically renew for successive 3 year terms unless terminated.
2. Services: Vendor agrees and undertakes that each and every service shall be delivered strictly as instructed by Company.
3. Consideration: Company shall pay INR 200000 within 45 days of invoice.
4. Indemnity: Vendor shall defend, indemnify, and hold harmless Company from any and all claims, losses, damages, or costs arising out of this Agreement, including Company's own negligence.
5. Non-Compete: During the term and for 3 years post-termination, Vendor shall not engage in any similar business anywhere in India.
6. Liability: IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY DAMAGES. Vendor liability shall be uncapped.
7. Definitions: "Effective Date" means and includes 09/11/2023. "OrphanTerm" means legacy processes.`);

  const [copied, setCopied] = useState(false);

  const audit = auditContract(contractText);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const reportText = `LEGAL VETTING OPINION & RISK REPORT
Prepared by: ${advocateName} (${chambersName})
Client: ${clientName}
Document: ${contractTitle}
Health Score: ${audit.score}/100 (Grade ${audit.grade})
Issues Identified: ${audit.issues.length}

EXECUTIVE SUMMARY:
The subject draft contains significant commercial and legal asymmetries that require structural negotiation prior to execution. Crucially, the indemnity is unilateral, liability is uncapped for our client, and the post-termination non-compete is void under Section 27 of the Indian Contract Act, 1872.

KEY RECOMMENDATIONS:
1. Enforce mutual limitation of liability capped at 12 months contract value.
2. Convert unilateral indemnity to mutual gross-negligence standard.
3. Replace 3-year post-termination non-compete with an enforceable 6-month non-solicitation of active clients.
4. Correct ambiguous date formats and definition conflations.`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print:p-0 print:max-w-none">
      {/* Configuration Header - Hidden during print */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Award className="w-4 h-4" />
            Monetized Advocate Deliverable
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Client Legal Vetting & Risk Audit Report Generator
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-2xl">
            Generate a formal, high-value Legal Due Diligence Opinion on your firm's letterhead to bill corporate clients and startup founders (₹15,000 – ₹50,000 per vetting).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Summary' : 'Copy Summary'}
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Editor & Metadata Controls - Hidden during print */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs print:hidden">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Advocate Letterhead
          </h3>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Advocate Name & Title</label>
            <input
              type="text"
              value={advocateName}
              onChange={(e) => setAdvocateName(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Chambers / Firm Name</label>
            <input
              type="text"
              value={chambersName}
              onChange={(e) => setChambersName(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Bar Council Enrolment No.</label>
            <input
              type="text"
              value={enrolmentNo}
              onChange={(e) => setEnrolmentNo(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-blue-400" /> Client & Matter Particulars
          </h3>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Counterparty Name</label>
            <input
              type="text"
              value={counterpartyName}
              onChange={(e) => setCounterpartyName(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Document Subject</label>
            <input
              type="text"
              value={contractTitle}
              onChange={(e) => setContractTitle(e.target.value)}
              className="w-full px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-white text-xs"
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-emerald-400" /> Audit Parameters
          </h3>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Health Score:</span>
              <span className="font-mono font-bold text-white text-base">{audit.score}/100 ({audit.grade})</span>
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[11px]">
              <span className="text-slate-400">Total Defects Found:</span>
              <span className="font-bold text-amber-400">{audit.issues.length}</span>
            </div>
            <div className="flex justify-between items-center mt-1 text-[11px]">
              <span className="text-slate-400">Missing Safeguards:</span>
              <span className="font-bold text-red-400">{audit.missingCrucialClauses.length}</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400">
            Paste any contract text below to instantly generate a branded formal opinion report.
          </p>
        </div>
      </div>

      {/* Contract Text Input - Collapsible / Hidden during print */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 print:hidden">
        <label className="text-xs font-bold text-slate-300 block">
          Counterparty Contract Draft to Vet (Paste Text Below)
        </label>
        <textarea
          value={contractText}
          onChange={(e) => setContractText(e.target.value)}
          rows={5}
          className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-500"
          placeholder="Paste agreement text here..."
        />
      </div>

      {/* FORMAL PRINTABLE LEGAL OPINION REPORT (Styling optimized for white paper / print) */}
      <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-8 sm:p-12 space-y-8 print:shadow-none print:p-0 font-serif">
        {/* Letterhead Header */}
        <div className="border-b-2 border-slate-900 pb-6 text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-950 font-serif">
            {chambersName}
          </h2>
          <p className="text-sm font-semibold text-slate-700">
            {advocateName} • {enrolmentNo}
          </p>
          <p className="text-xs text-slate-600 font-sans">
            Offices at New Delhi • Mumbai • Bangalore | High Court & Supreme Court of India
          </p>
        </div>

        {/* Matter Reference & Classification */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-sans border-b border-slate-200 pb-4 gap-2">
          <div>
            <p className="font-bold text-slate-800">FOR THE EXCLUSIVE ATTENTION OF:</p>
            <p className="text-sm font-bold text-slate-950">{clientName}</p>
            <p className="text-slate-600">Attn: Managing Director / Board of Directors</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 font-bold uppercase text-[10px] rounded tracking-wider mb-1">
              Privileged & Confidential Legal Opinion
            </span>
            <p className="text-slate-600">Date of Opinion: 1st September 2026</p>
            <p className="text-slate-600">Matter: Vetting of {contractTitle}</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-1">
            1. Executive Summary & Risk Assessment
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed font-serif">
            We have conducted a thorough legal review and forensic audit of the proposed draft of the <strong>{contractTitle}</strong> presented by <strong>{counterpartyName}</strong>. Based on the established principles of Indian commercial law and contract drafting jurisprudence (formulated in <em>Bhumesh Verma's Practical Guide to Drafting Commercial Contracts</em>), the draft in its current form is <strong>substantially one-sided and presents serious commercial risks to {clientName}</strong>.
          </p>

          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center font-sans">
            <div>
              <p className="text-slate-500 font-medium text-[11px]">Drafting Health Score</p>
              <p className="text-xl font-bold text-slate-900 mt-0.5">{audit.score}/100 ({audit.grade})</p>
            </div>
            <div>
              <p className="text-slate-500 font-medium text-[11px]">Legal Exposure Level</p>
              <p className="text-xl font-bold text-red-600 mt-0.5">High / Critical</p>
            </div>
            <div>
              <p className="text-slate-500 font-medium text-[11px]">Recommended Action</p>
              <p className="text-xl font-bold text-amber-700 mt-0.5">Redline & Counter</p>
            </div>
          </div>
        </div>

        {/* Core Legal Red Flags */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            2. Major Financial & Legal Vulnerabilities
          </h3>
          <div className="space-y-2 text-xs font-serif text-slate-800">
            <div className="p-3 bg-red-50/70 border-l-4 border-red-600 rounded">
              <p className="font-bold text-red-900 font-sans">A. Unilateral & Uncapped Indemnity (Clause 4)</p>
              <p className="text-slate-700 mt-1">
                The draft forces {clientName} to indemnify {counterpartyName} even for damages arising from {counterpartyName}'s own contributory negligence, while providing zero reciprocal indemnity for our client. Under Indian contract law, this creates existential exposure and should be strictly rewritten on a mutual, gross-negligence standard.
              </p>
            </div>

            <div className="p-3 bg-amber-50/70 border-l-4 border-amber-600 rounded">
              <p className="font-bold text-amber-900 font-sans">B. Unlawful Post-Termination Non-Compete (Clause 5)</p>
              <p className="text-slate-700 mt-1">
                The 3-year nationwide post-termination restraint is void ab initio under <strong>Section 27 of the Indian Contract Act, 1872</strong> (reaffirmed by the Supreme Court of India in <em>Percept D'Mark v. Zaheer Khan</em>). We advise replacing this with an enforceable 6-month client non-solicitation covenant.
              </p>
            </div>

            <div className="p-3 bg-blue-50/70 border-l-4 border-blue-600 rounded">
              <p className="font-bold text-blue-900 font-sans">C. Absence of Reciprocal Limitation of Liability (Clause 6)</p>
              <p className="text-slate-700 mt-1">
                While {counterpartyName} completely disclaims all damages, our client's liability is left completely uncapped. Following standard commercial jurisprudence, we recommend capping liability at 100% of the aggregate fees paid in the preceding 12 months.
              </p>
            </div>
          </div>
        </div>

        {/* Clause-by-Clause Mark-Up Table */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
            3. Clause-by-Clause Recommended Redlines & Counter-Draft
          </h3>

          <div className="border border-slate-300 rounded-lg overflow-hidden text-xs">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                <tr>
                  <th className="p-3 w-1/4">Clause / Subject</th>
                  <th className="p-3 w-1/3">Defect in Counterparty Draft</th>
                  <th className="p-3 w-5/12">Advocate's Proposed Counter-Clause</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                <tr>
                  <td className="p-3 font-bold text-slate-900">Clause 1 (Definitions)</td>
                  <td className="p-3 text-red-700">Uses "means and includes" conflation; contains orphan definition ("OrphanTerm").</td>
                  <td className="p-3 font-serif bg-emerald-50/50 text-slate-900">
                    "Effective Date" means [Date]. Delete "OrphanTerm" entirely to preserve brevity.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Clause 2 (Services)</td>
                  <td className="p-3 text-red-700">Contains archaic pleonastic couplets: "agrees and undertakes", "each and every".</td>
                  <td className="p-3 font-serif bg-emerald-50/50 text-slate-900">
                    "Vendor shall perform the Services described in Schedule A with professional diligence."
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Clause 4 (Indemnity)</td>
                  <td className="p-3 text-red-700">One-sided indemnification covering even Company's own negligence.</td>
                  <td className="p-3 font-serif bg-emerald-50/50 text-slate-900">
                    "Each Party shall indemnify the other Party against actual third-party damages arising directly from its own gross negligence or material breach."
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Clause 5 (Non-Compete)</td>
                  <td className="p-3 text-red-700">3-year post-termination restraint void under Sec 27 ICA.</td>
                  <td className="p-3 font-serif bg-emerald-50/50 text-slate-900">
                    "Vendor agrees not to solicit active clients of Company for a period of six (6) months following termination."
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-900">Clause 6 (Liability)</td>
                  <td className="p-3 text-red-700">ALL CAPS shouting; zero liability for Company and uncapped for Client.</td>
                  <td className="p-3 font-serif bg-emerald-50/50 text-slate-900">
                    "Neither Party shall be liable for indirect or consequential damages. Aggregate liability of either Party shall not exceed fees paid in prior 12 months."
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Statutory Stamp Duty & Evidence Advisory */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs font-sans space-y-1.5">
          <p className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            4. Statutory Stamp Duty & Enforceability Compliance
          </p>
          <p className="text-slate-700 font-serif leading-relaxed">
            Pursuant to <strong>Section 27 of the Indian Stamp Act, 1899</strong>, all monetary consideration must be truly and accurately reflected in the body of the agreement. Please note that if this agreement is executed electronically via email exchange, an electronic evidence affidavit under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam, 2023</strong> (formerly Section 65B of the Indian Evidence Act) must be prepared and preserved at the time of transmission to ensure full evidentiary admissibility in arbitration or court proceedings.
          </p>
        </div>

        {/* Advocate Signature & Seal */}
        <div className="pt-6 border-t-2 border-slate-900 flex justify-between items-end font-sans">
          <div className="text-xs text-slate-500">
            <p>Report Ref: ADIL/CR/2026/09/01</p>
            <p>Chambers of Mohamed Adil & Associates</p>
          </div>
          <div className="text-right">
            <div className="border-b border-slate-400 w-48 mb-2"></div>
            <p className="font-bold text-slate-900 text-sm">{advocateName}</p>
            <p className="text-xs text-slate-600">{enrolmentNo}</p>
            <p className="text-[11px] text-slate-500">Managing Partner, Corporate & Commercial Practice</p>
          </div>
        </div>
      </div>
    </div>
  );
}
