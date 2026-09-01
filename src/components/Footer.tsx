import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-slate-200">
              LexDraft Pro — Commercial Contract Drafting, Vetting & Precedent Suite
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Methodology and legal guidelines synthesized from <span className="text-amber-400 font-medium">"Practical Guide to Drafting Commercial Contracts" (2nd Ed.)</span> by <span className="text-slate-200">Bhumesh Verma</span> (Managing Partner, Corp Comm Legal | OakBridge).
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/guide" className="hover:text-amber-400 transition-colors">Book Digest</Link>
            <span className="text-slate-700">•</span>
            <Link href="/checklist" className="hover:text-amber-400 transition-colors">Due Diligence Checklist</Link>
            <span className="text-slate-700">•</span>
            <Link href="/compliance" className="hover:text-amber-400 transition-colors">IT Act & BSA 2023 Rules</Link>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-900 text-[10px] text-slate-400 text-center">
          Crafted for advocates, in-house counsel, transactional law firms, and law students across India and common-law jurisdictions. Zero client data stored on external servers — 100% client-side confidentiality.
        </div>
      </div>
    </footer>
  );
}
