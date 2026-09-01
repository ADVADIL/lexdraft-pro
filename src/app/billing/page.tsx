'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Receipt, 
  Copy, 
  Check, 
  Printer, 
  Briefcase, 
  BadgePercent, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

interface FeeBreakdown {
  baseFee: number;
  negotiationFee: number;
  turnaroundSurcharge: number;
  subtotal: number;
  gstAmount: number;
  totalFee: number;
}

export default function BillingPage() {
  const [advocateName, setAdvocateName] = useState('Mohamed Adil, Advocate');
  const [lawFirm, setLawFirm] = useState('Adil & Associates Legal Chambers');
  const [clientName, setClientName] = useState('Acme Ventures Pvt. Ltd.');
  const [contractType, setContractType] = useState('Share Subscription & Shareholders Agreement (SSHA)');
  const [dealValue, setDealValue] = useState('mid'); // 'micro' | 'small' | 'mid' | 'large'
  const [serviceScope, setServiceScope] = useState('draft_and_negotiate'); // 'vetting' | 'drafting' | 'draft_and_negotiate'
  const [negotiationRounds, setNegotiationRounds] = useState(2);
  const [turnaround, setTurnaround] = useState('standard'); // 'standard' | 'express'
  const [copied, setCopied] = useState(false);

  // Compute fees
  const calculateFees = (): FeeBreakdown => {
    let base = 25000;
    if (contractType.includes('SSHA') || contractType.includes('Joint Venture') || contractType.includes('Business Transfer')) {
      base = 75000;
    } else if (contractType.includes('License') || contractType.includes('Master Service') || contractType.includes('Asset Purchase')) {
      base = 45000;
    } else if (contractType.includes('NDA') || contractType.includes('Appointment')) {
      base = 15000;
    }

    if (dealValue === 'small') base *= 1.2;
    else if (dealValue === 'mid') base *= 1.5;
    else if (dealValue === 'large') base *= 2.5;

    if (serviceScope === 'vetting') base *= 0.65;
    
    let negFee = 0;
    if (serviceScope === 'draft_and_negotiate') {
      negFee = negotiationRounds * 15000;
    }

    let surcharge = 0;
    if (turnaround === 'express') {
      surcharge = (base + negFee) * 0.35;
    }

    const subtotal = Math.round(base + negFee + surcharge);
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    return {
      baseFee: Math.round(base),
      negotiationFee: negFee,
      turnaroundSurcharge: Math.round(surcharge),
      subtotal,
      gstAmount: gst,
      totalFee: total
    };
  };

  const fees = calculateFees();

  const proposalLetter = `CHAMBERS OF ${advocateName.toUpperCase()}
${lawFirm.toUpperCase()}
Advocates & Legal Consultants | High Court of Delhi / Mumbai
____________________________________________________________________

Date: 1st September 2026

To:
The Board of Directors / Management
${clientName}

SUBJECT: PROPOSAL & TERMS OF ENGAGEMENT FOR LEGAL CONTRACTUAL ADVISORY

Dear Sirs/Madams,

We thank you for considering our Chambers for your commercial transaction requirements. We are pleased to set forth our professional scope of work, deliverables, and fee structure for the legal advisory in relation to the:

MATTER: ${contractType}

1. SCOPE OF SERVICES & WORK PRODUCT
Depending upon your selected instructions, our engagement shall encompass:
• In-depth factual and legal analysis of the proposed commercial transaction;
• Drafting / forensic vetting of the definitive ${contractType};
• Alignment with Indian statutory requirements (Indian Contract Act 1872, Companies Act 2013, Information Technology Act 2000, and Indian Stamp Act 1899);
• Identification of commercial red flags, uncapped liabilities, and adverse indemnities;
• Preparation of marked-up revisions and strategic counter-clauses ("The Balancing Act");
• Up to ${negotiationRounds} rounds of legal negotiation and coordination with opposing counsel.

2. PROFESSIONAL FEE STRUCTURE
• Primary Drafting & Vetting Fee: INR ${fees.baseFee.toLocaleString('en-IN')}/-
• Negotiation Support (${negotiationRounds} rounds): INR ${fees.negotiationFee.toLocaleString('en-IN')}/-
${fees.turnaroundSurcharge > 0 ? `• Express Turnaround Surcharge (24-48 hours): INR ${fees.turnaroundSurcharge.toLocaleString('en-IN')}/-\n` : ''}• Professional Subtotal: INR ${fees.subtotal.toLocaleString('en-IN')}/-
• Applicable Goods & Services Tax (GST @ 18%): INR ${fees.gstAmount.toLocaleString('en-IN')}/-
• TOTAL ESTIMATED PROFESSIONAL FEE: INR ${fees.totalFee.toLocaleString('en-IN')}/- (Rupees [•] only)

3. PAYMENT MILESTONES
• 50% advance retainer payable upon execution of this Engagement Letter prior to commencement;
• 50% balance payable upon submission of the final execution-ready agreement.

4. CONFIDENTIALITY & PRIVILEGE
All communications, drafts, and business materials shared with our Chambers shall be protected under strict statutory Attorney-Client Privilege under Section 126 of the Indian Evidence Act, 1872 / Bharatiya Sakshya Adhiniyam, 2023.

We look forward to facilitating a commercially robust and legally secure transaction for your organisation.

Sincerely,

_________________________
${advocateName}
Managing Partner
${lawFirm}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(proposalLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Calculator className="w-4 h-4" />
            Advocate Practice Monetization & Billing
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Contract Fee Calculator & Engagement Proposal Builder
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-3xl">
            Never under-charge or quote haphazardly. Calculate standardized commercial contract drafting fees based on deal size and Indian market practice, and generate formal **Terms of Engagement Letters** to close clients immediately.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="self-start md:self-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20 active:scale-95"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied Proposal' : 'Copy Engagement Proposal'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Parameter Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              Matter & Deal Parameters
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block text-[11px] mb-1">Contract Type</label>
                <select
                  value={contractType}
                  onChange={(e) => setContractType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="Share Subscription & Shareholders Agreement (SSHA)">Shareholders / Investment Agreement (SSHA/SHA)</option>
                  <option value="Joint Venture Agreement (JVA)">Joint Venture Agreement (50:50 JVA)</option>
                  <option value="Business Transfer Agreement (Slump Sale)">Business Transfer Agreement (Slump Sale)</option>
                  <option value="Master Service Agreement (MSA)">Master Service Agreement (MSA) + SOW</option>
                  <option value="Master Software License Agreement (MSLA)">Master Software License Agreement (MSLA)</option>
                  <option value="Commercial Loan Agreement">Commercial Loan Agreement & Promissory Note</option>
                  <option value="Consulting Agreement">Consulting Agreement (Work for Hire)</option>
                  <option value="Executive Employment Agreement">Executive Employment Agreement (CEO/C-Suite)</option>
                  <option value="Non-Disclosure Agreement (Mutual NDA)">Mutual Non-Disclosure Agreement (NDA)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Deal Transaction Value</label>
                  <select
                    value={dealValue}
                    onChange={(e) => setDealValue(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  >
                    <option value="micro">Under ₹10 Lakhs</option>
                    <option value="small">₹10 Lakhs - ₹1 Crore</option>
                    <option value="mid">₹1 Crore - ₹10 Crores</option>
                    <option value="large">Above ₹10 Crores (High Stakes)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Service Scope</label>
                  <select
                    value={serviceScope}
                    onChange={(e) => setServiceScope(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  >
                    <option value="drafting">Drafting from Scratch</option>
                    <option value="vetting">Forensic Vetting & Redline</option>
                    <option value="draft_and_negotiate">Draft + Opposing Counsel Negotiation</option>
                  </select>
                </div>
              </div>

              {serviceScope === 'draft_and_negotiate' && (
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">
                    Negotiation Rounds Included: {negotiationRounds}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={6}
                    value={negotiationRounds}
                    onChange={(e) => setNegotiationRounds(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1 round</span>
                    <span>3 rounds</span>
                    <span>6 rounds</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Turnaround Time</label>
                  <select
                    value={turnaround}
                    onChange={(e) => setTurnaround(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  >
                    <option value="standard">Standard (3-5 Business Days)</option>
                    <option value="express">Express Priority (24-48 Hours +35%)</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-400 block text-[11px] mb-1">Client Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fee Calculation Summary Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 space-y-3">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider flex items-center justify-between">
              <span>Fee Quotation Summary</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Bar Standard</span>
            </h3>

            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex justify-between text-slate-300">
                <span>Base Drafting/Vetting:</span>
                <span className="font-mono">₹{fees.baseFee.toLocaleString('en-IN')}</span>
              </div>
              {fees.negotiationFee > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Negotiation Rounds ({negotiationRounds}):</span>
                  <span className="font-mono">₹{fees.negotiationFee.toLocaleString('en-IN')}</span>
                </div>
              )}
              {fees.turnaroundSurcharge > 0 && (
                <div className="flex justify-between text-amber-400">
                  <span>Express Surcharge:</span>
                  <span className="font-mono">₹{fees.turnaroundSurcharge.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Subtotal:</span>
                <span className="font-mono">₹{fees.subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>GST @ 18%:</span>
                <span className="font-mono">₹{fees.gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-white font-extrabold text-base pt-2 border-t border-emerald-500/30">
                <span>Total Fee Quotation:</span>
                <span className="font-mono text-emerald-400">₹{fees.totalFee.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Panel: Engagement Proposal Letter (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs px-1">
            <span className="font-bold text-white">Client Engagement Letter & Proposal</span>
            <span className="text-slate-400">Ready to Send to Prospective Client</span>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl min-h-[620px]">
            <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed select-text">
              {proposalLetter}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
