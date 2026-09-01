'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FileSearch, 
  FileText, 
  Scale, 
  BookOpen, 
  ShieldCheck, 
  CheckSquare, 
  Library,
  Receipt,
  Printer,
  Package
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const primaryLinks = [
    { href: '/vetting', label: "Drafter's Audit", icon: FileSearch },
    { href: '/report', label: 'Client Vetting Report', icon: Printer, highlight: true },
    { href: '/generator', label: '22 Precedents', icon: FileText },
    { href: '/balancing', label: 'The Balancing Act', icon: Scale },
    { href: '/billing', label: 'Fee Proposal Builder', icon: Receipt },
    { href: '/packages', label: 'Deal Packages', icon: Package },
    { href: '/compliance', label: 'BSA Evidence & IT Act', icon: ShieldCheck },
    { href: '/clauses', label: 'Clause Bank', icon: Library },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                ⚖
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-amber-200 to-slate-100 bg-clip-text text-transparent">
                  LexDraft <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold ml-1">Pro</span>
                </span>
                <p className="text-[10px] text-slate-400 font-medium">Advocate Practice & Commercial Drafting Suite</p>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center space-x-1">
            {primaryLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : item.highlight 
                      ? 'text-amber-300 hover:text-white hover:bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${item.highlight ? 'text-amber-400' : ''}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/report"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/10 transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              Client Report
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile / Compact scroll bar */}
      <div className="xl:hidden flex overflow-x-auto py-2 px-4 gap-1.5 bg-slate-900/90 border-t border-slate-800">
        {primaryLinks.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex whitespace-nowrap items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium ${
                isActive ? 'bg-amber-500/20 text-amber-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-3 h-3" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
