'use client';

import React, { useState } from 'react';
import { 
  Library, 
  Search, 
  Copy, 
  Check, 
  BookOpen, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { MASTER_CLAUSE_BANK } from '@/lib/clauseBank';

export default function ClausesPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Operative - Risk Allocation', 'Operative - Restrictive Covenants', 'Operative - Performance', 'Operative - Remedies', 'Boilerplate - Dispute Resolution', 'Boilerplate - Miscellaneous'];

  const filtered = MASTER_CLAUSE_BANK.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase()) ||
                          item.balancedClause.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
            <Library className="w-4 h-4" />
            Parts 6 & 7 Master Precedents
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Master Precedent Clause Bank
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-3xl">
            Vetted operative and boilerplate clauses with side-by-side variations (Balanced vs Pro-Client vs Pro-Counterparty) and statutory annotations from Bhumesh Verma's book.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search clauses (indemnity, cap...)"
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
              selectedCategory === cat 
                ? 'bg-rose-600 text-white font-bold' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Clauses Cards */}
      <div className="space-y-6">
        {filtered.map((item) => (
          <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-rose-400 border border-slate-700">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.chapterRef}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
              </div>

              <button
                onClick={() => handleCopy(item.id, item.balancedClause)}
                className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedId === item.id ? 'Copied Balanced' : 'Copy Balanced'}
              </button>
            </div>

            {/* Three Variations Tabbed/Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs pt-2">
              {/* Balanced */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-400">Balanced / Standard Compromise</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Recommended</span>
                  </div>
                  <pre className="font-mono text-[11px] text-slate-200 whitespace-pre-wrap leading-relaxed">
                    {item.balancedClause}
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`${item.id}_bal`, item.balancedClause)}
                  className="mt-3 text-[11px] text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <Copy className="w-3 h-3" /> Copy this version
                </button>
              </div>

              {/* Pro-Discloser */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-amber-400">Pro-Discloser / Provider</span>
                  </div>
                  <pre className="font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {item.proDisclosingOrLicensor}
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`${item.id}_pro1`, item.proDisclosingOrLicensor)}
                  className="mt-3 text-[11px] text-amber-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <Copy className="w-3 h-3" /> Copy this version
                </button>
              </div>

              {/* Pro-Recipient */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-400">Pro-Recipient / Client</span>
                  </div>
                  <pre className="font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {item.proRecipientOrLicensee}
                  </pre>
                </div>
                <button
                  onClick={() => handleCopy(`${item.id}_pro2`, item.proRecipientOrLicensee)}
                  className="mt-3 text-[11px] text-blue-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <Copy className="w-3 h-3" /> Copy this version
                </button>
              </div>
            </div>

            {/* Negotiation Tips */}
            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300 flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Bhumesh Verma's Practice Tip: </span>
                {item.negotiationTips.join(' • ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
