'use client';

import React, { useState } from 'react';
import { 
  Package, 
  Layers, 
  Copy, 
  Check, 
  Download, 
  ArrowRight, 
  Rocket, 
  Cpu, 
  Briefcase, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import { SPECIMEN_AGREEMENTS } from '@/lib/templatesData';
import Link from 'next/link';

interface DealPackage {
  id: string;
  name: string;
  badge: string;
  icon: any;
  targetClient: string;
  typicalFeeRange: string;
  description: string;
  includedContracts: { id: string; title: string; purpose: string }[];
  governingPriorityRule: string;
}

const PACKAGES: DealPackage[] = [
  {
    id: 'startup_pack',
    name: 'Startup Founder & Seed Financing Suite',
    badge: 'High Demand',
    icon: Rocket,
    targetClient: 'Early-stage Founders, Incubators, Seed Investors',
    typicalFeeRange: 'INR 65,000 – 1,25,000',
    description: 'Complete legal armor for incorporating, capitalizing, and securing proprietary technology before investor dilution.',
    includedContracts: [
      { id: 'shareholders_agreement', title: 'Shareholders Agreement (SHA)', purpose: 'Governs equity ratio, affirmative voting matters, and lock-in.' },
      { id: 'employment', title: 'Executive Employment & Inventions Assignment', purpose: 'Ensures all software and inventions belong to company as work made for hire.' },
      { id: 'nda', title: 'Mutual Non-Disclosure Agreement', purpose: 'Protects confidential business metrics during investor pitching.' },
      { id: 'consulting', title: 'Advisory & Consulting Agreement', purpose: 'Retains key technical advisors with clear equity vesting.' }
    ],
    governingPriorityRule: 'In the event of conflict, the Shareholders Agreement (SHA) shall prevail over all other transactional agreements and the Articles of Association.'
  },
  {
    id: 'tech_saas_pack',
    name: 'Enterprise SaaS & Technology Vendor Suite',
    badge: 'Recurring B2B',
    icon: Cpu,
    targetClient: 'Software Companies, Cloud Vendors, IT Service Firms',
    typicalFeeRange: 'INR 50,000 – 95,000',
    description: 'Framework contracts for licensing enterprise software, deploying engineers, and governing client SOWs with liability caps.',
    includedContracts: [
      { id: 'master_services_agreement', title: 'Master Service Agreement (MSA)', purpose: 'Master legal terms governing all future project work orders.' },
      { id: 'software_license', title: 'Master Software License Agreement (MSLA)', purpose: 'Licenses proprietary software with IP infringement indemnities.' },
      { id: 'consulting', title: 'Technical Staff Secondment / Consulting', purpose: 'Deploys specialized engineers with strict non-solicitation.' }
    ],
    governingPriorityRule: 'General provisions of the Master Service Agreement govern, except where an individual SOW explicitly varies a specific milestone or service level.'
  },
  {
    id: 'mna_slump_sale_pack',
    name: 'M&A Business Transfer & Slump Sale Suite',
    badge: 'Premium Deal',
    icon: Briefcase,
    targetClient: 'Business Acquirers, Selling Promoters, Private Equity',
    typicalFeeRange: 'INR 1,50,000 – 3,50,000',
    description: 'End-to-end documentation for acquiring a going concern, carving out legacy liabilities, and securing commercial continuity.',
    includedContracts: [
      { id: 'business_transfer', title: 'Business Transfer Agreement (Slump Sale)', purpose: 'Conveys the entire undertaking, customer lists, and staff.' },
      { id: 'loan_agreement', title: 'Commercial Loan & Secured Promissory Note', purpose: 'Seller financing / bridge credit facility for acquisition.' },
      { id: 'joint_venture', title: 'Post-Acquisition Governance / JVA', purpose: 'Defines board management and earn-out equity distribution.' }
    ],
    governingPriorityRule: 'The Business Transfer Agreement is definitive and supersedes all term sheets, escrow side-letters, and informal memos.'
  }
];

export default function PackagesPage() {
  const [selectedPackId, setSelectedPackId] = useState('startup_pack');
  const [copied, setCopied] = useState(false);

  const pack = PACKAGES.find(p => p.id === selectedPackId) || PACKAGES[0];

  const handleCopyScope = () => {
    const text = `PROPOSAL: ${pack.name.toUpperCase()}\nTarget: ${pack.targetClient}\nStandard Retainer Fee: ${pack.typicalFeeRange}\n\nINCLUDED TRANSACTION DOCUMENTS:\n${pack.includedContracts.map(c => `• ${c.title}: ${c.purpose}`).join('\n')}\n\nHIERARCHY OF DOCUMENTS (Part 10, Ch 8):\n${pack.governingPriorityRule}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <Package className="w-4 h-4" />
            High-Value Advocate Deal Bundles
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Commercial Transaction Packages & Retainer Bundler
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-3xl">
            Package multiple coordinated contracts together as complete transaction suites. Enforces Part 10, Chapter 8 ("Multiple Transaction Documents — Which Shall Prevail?") for cross-document consistency.
          </p>
        </div>

        <button
          onClick={handleCopyScope}
          className="self-start md:self-auto px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 active:scale-95"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied Scope' : 'Copy Package Proposal'}
        </button>
      </div>

      {/* Package Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PACKAGES.map((p) => {
          const Icon = p.icon;
          const isSelected = p.id === selectedPackId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPackId(p.id)}
              className={`p-6 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-950/30 border-amber-500 ring-1 ring-amber-500 shadow-xl shadow-amber-500/10'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                    {p.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base">{p.name}</h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{p.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Billable Range:</span>
                <span className="font-mono font-bold text-xs text-emerald-400">{p.typicalFeeRange}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Package Details */}
      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Coordinated Suite
            </span>
            <h2 className="text-xl font-bold text-white mt-1.5">{pack.name}</h2>
            <p className="text-xs text-slate-400">Ideal for: {pack.targetClient}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Suggested Retainer Fee</p>
            <p className="text-xl font-extrabold text-emerald-400 font-mono">{pack.typicalFeeRange}</p>
          </div>
        </div>

        {/* Included Contracts List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            Included Coordinated Agreements ({pack.includedContracts.length})
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {pack.includedContracts.map((contract) => (
              <div key={contract.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                <div>
                  <h5 className="font-bold text-white text-xs">{contract.title}</h5>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{contract.purpose}</p>
                </div>
                <Link
                  href="/generator"
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-colors"
                >
                  Draft <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Order of Precedence Clause (Part 10, Ch 8) */}
        <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30 space-y-2">
          <h4 className="text-xs font-bold text-blue-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Bhumesh Verma's Rule: Which Document Shall Prevail? (Part 10, Ch 8)
          </h4>
          <p className="text-xs text-slate-300 font-mono leading-relaxed">
            "{pack.governingPriorityRule}"
          </p>
          <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800">
            When executing a multi-contract transaction, always specify the order of precedence to avoid fatal litigation when different agreements have conflicting terms.
          </p>
        </div>
      </div>
    </div>
  );
}
