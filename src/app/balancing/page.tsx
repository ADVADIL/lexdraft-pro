'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  ArrowRight, 
  Copy, 
  Check, 
  MessageSquareQuote, 
  ShieldAlert, 
  HelpCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const COMMON_ONE_SIDED_CLAUSES = [
  {
    name: 'Unilateral Indemnity Clause',
    type: 'Indemnity',
    bias: 'Adverse to Client',
    sample: `The Contractor shall defend, indemnify, and hold harmless the Company, its directors, officers, employees, and agents from and against any and all claims, demands, liabilities, damages, losses, and expenses (including attorney fees) of every kind and nature arising out of or resulting from the performance of the Services, regardless of whether caused in part by the negligence of the Company.`,
    whyBiased: 'Forces the Contractor to indemnify even for the Company\'s own contributory negligence. Does not contain reciprocal protection for the Contractor against Company IP infringement or default.',
    counterClause: `Each Party (as an "Indemnifying Party") shall indemnify, defend, and hold harmless the other Party and its directors, officers, and employees from and against any third-party claims, damages, and reasonable legal costs arising directly from: (a) any material breach of this Agreement; or (b) the gross negligence or wilful misconduct of the Indemnifying Party. Neither Party shall be liable to indemnify the other for losses resulting from the other Party's own negligence.`,
    talkingPoints: [
      'Indemnity must be reciprocal under common commercial practice.',
      'Under Indian jurisprudence, an indemnity cannot compel a party to indemnify another for their own intentional torts or negligence.',
      'Suggest mutual carve-outs for gross negligence and willful misconduct.'
    ]
  },
  {
    name: 'Uncapped Liability & Consequential Damages',
    type: 'Limitation of Liability',
    bias: 'Adverse to Service Provider',
    sample: `The Service Provider shall be fully liable for all direct, indirect, special, incidental, exemplary, punitive, and consequential damages, including loss of profits, downtime, or business interruption, suffered by the Client arising under or in connection with this Agreement.`,
    whyBiased: 'Service Provider takes on unbounded existential business risk far disproportionate to the transaction consideration.',
    counterClause: `To the maximum extent permitted by applicable law: (a) neither Party shall be liable to the other for any indirect, special, incidental, or consequential damages or lost profits; and (b) each Party's aggregate cumulative liability for all claims under this Agreement shall be capped at the total fees paid or payable by the Client during the twelve (12) months preceding the claim.`,
    talkingPoints: [
      'Reference Bhumesh Verma\'s dry-cleaner analogy: A ₹2,000 service fee cannot support replacing a ₹5,00,000 Armani suit.',
      'Insurance underwriters uniformly require mutual waiver of consequential damages and a 12-month trailing fee cap.',
      'Offer carve-outs for breach of confidentiality and willful misconduct to balance protection.'
    ]
  },
  {
    name: 'Unilateral Termination for Convenience',
    type: 'Termination',
    bias: 'Adverse to Vendor/Contractor',
    sample: `The Company may terminate this Agreement at any time for any reason or no reason whatsoever upon providing three (3) days written notice to the Vendor, without incurring any liability, break fee, or obligation to compensate the Vendor.`,
    whyBiased: 'Allows the buyer to walk away after the vendor has mobilized staff and committed capital, with inadequate notice and zero cost recovery.',
    counterClause: `Either Party may terminate this Agreement for convenience without cause upon providing not less than thirty (30) days prior written notice to the other Party. In such event, the Company shall pay the Vendor for all Services satisfactorily performed and non-cancellable third-party commitments incurred up to the effective date of termination.`,
    talkingPoints: [
      'Notice period must be reasonable (at least 30 days) to permit smooth disengagement and resource reallocation.',
      'Fundamental fairness requires reimbursement of all work performed and committed expenses up to termination.',
      'Make the right mutual or require a reasonable termination fee.'
    ]
  },
  {
    name: 'Perpetual Post-Termination Non-Compete',
    type: 'Restrictive Covenant',
    bias: 'Adverse to Employee / Consultant',
    sample: `The Consultant agrees that following the termination or expiration of this Agreement, for a period of three (3) years thereafter, the Consultant shall not directly or indirectly engage in, advise, establish, or work for any business or enterprise in competition with the Company anywhere in the territory of India.`,
    whyBiased: 'A 3-year post-termination restriction is overly oppressive and constitutes an unlawful restraint of trade under Indian law.',
    counterClause: `The Consultant agrees that during the term of this Agreement and for a period of six (6) months thereafter, the Consultant shall not directly or indirectly solicit any active clients of the Company with whom the Consultant personally had direct business contact during the preceding six (6) months. The parties acknowledge this covenant complies with Section 27 of the Indian Contract Act, 1872.`,
    talkingPoints: [
      'Section 27 of the Indian Contract Act, 1872 renders all post-service non-compete agreements void ab initio as restraints of trade.',
      'Supreme Court of India (Percept D\'Mark v. Zaheer Khan) reaffirmed that negative covenants extending beyond contract term are impermissible.',
      'Replace an unenforceable broad non-compete with an enforceable, narrow non-solicitation of clients.'
    ]
  }
];

export default function BalancingPage() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [copied, setCopied] = useState(false);

  const current = COMMON_ONE_SIDED_CLAUSES[selectedExample];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          <Scale className="w-4 h-4" />
          Part 10, Chapter 3 & Part 4, Chapter 1
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          The Balancing Act — Counterparty Draft & Redline Advisor
        </h1>
        <p className="text-slate-400 text-xs mt-1 max-w-3xl">
          "A good draft should be a balanced one... putting forth a balanced draft creates trust and expeditious negotiations." Convert aggressive clauses into fair, mutually protective language with advocate talking points.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {COMMON_ONE_SIDED_CLAUSES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelectedExample(idx);
              setCustomInput('');
            }}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedExample === idx && !customInput
                ? 'bg-emerald-950/40 border-emerald-500 ring-1 ring-emerald-500'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
              {item.type}
            </span>
            <h4 className="font-bold text-white text-xs mt-2">{item.name}</h4>
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{item.whyBiased}</p>
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Aggressive Opposing Clause */}
        <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" /> Opposing Draft (Adverse & One-Sided)
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-900/50 text-red-300 font-semibold">
                High Risk Exposure
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-red-900/40 font-mono text-xs text-red-200 leading-relaxed">
              {current.sample}
            </div>

            <div className="mt-4 space-y-2">
              <h5 className="text-xs font-bold text-white flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                Why this clause is biased against your client:
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.whyBiased}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-red-900/30 text-[11px] text-slate-400 italic">
            Bhumesh Verma: "If you draft a completely one-sided agreement, it is bound to be rejected. Start with a balanced premise."
          </div>
        </div>

        {/* Balanced Counter-Draft */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Recommended Counter-Clause (Balanced)
              </span>
              <button
                onClick={() => handleCopy(current.counterClause)}
                className="px-3 py-1 text-xs font-semibold rounded bg-emerald-600 hover:bg-emerald-500 text-slate-950 flex items-center gap-1 transition-all"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy Clause'}
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-emerald-900/40 font-mono text-xs text-emerald-200 leading-relaxed select-text">
              {current.counterClause}
            </div>

            {/* Negotiation Talking Points */}
            <div className="mt-4 space-y-2">
              <h5 className="text-xs font-bold text-white flex items-center gap-1">
                <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
                Advocate's Negotiation Arguments:
              </h5>
              <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                {current.talkingPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-900/30 text-[11px] text-slate-400 italic">
            Ready to insert into your counter-draft mark-up with justification notes for opposing counsel.
          </div>
        </div>
      </div>
    </div>
  );
}
