'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileSearch, 
  Sparkles, 
  AlertOctagon, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  Copy, 
  Download, 
  RefreshCw, 
  BookOpen, 
  ShieldAlert, 
  FileText,
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';
import { auditContract, autoFixDraft } from '@/lib/checkerEngine';
import { generateRiskMemo } from '@/lib/riskMemoGenerator';
import { AuditResult, ContractIssue } from '@/lib/types';

const SAMPLE_BAD_CONTRACT = `PRELIMINARY AGREEMENT

This Agreement is made and entered into on 09/11/2023 by and between:

1. ACME TECHNOLOGIES PRIVATE LIMITED, a company incorporated under the Companies Act, 2013, with CIN U72200DL2018PTC123456, PAN AABCA1234F, having its registered office at Connaught Place, New Delhi (hereinafter referred to as "the Company"); and

2. MR. RAJESH KUMAR, son of Shri Ramesh Kumar, residing at MG Road, Bangalore 560001, PAN BKPPR9876K ("Consultant").

WHEREAS, the Company is engaged in software development;
AND WHEREAS, the Consultant has agreed to provide services;
NOW THIS AGREEMENT WITNESSETH AND THE PARTIES AGREE AS FOLLOWS:

1. Definitions
"Effective Date" means and includes 09/11/2023.
"Confidential Information" shall mean and include all true facts, technical data, client lists, and intellectual property.
"OrphanedTerm" means any legacy software component not referenced elsewhere.

2. Services and Consideration
2.1 The Consultant agrees and undertakes that each and every service shall be delivered with utmost care.
2.2 Payment of consideration shall be INR 50000 per month without delay.
2.3 It is mutually agreed by and between the parties that no services shall be rendered by the Consultant without advance intimation.

3. Restrictive Covenants
3.1 During the term of this Agreement and for a period of 5 years thereafter, the Consultant shall not engage in any competing business anywhere in India.
3.2 The Consultant shall convey and transfer all right, title, and interest in and to all deliverables.

4. Non-Disclosure
4.1 The Consultant shall hold in strictest confidence all Confidential Information for a period of 2 years.
4.2 All materials shall be returned upon full and final settlement.

5. Miscellaneous
5.1 This Agreement is subject to the terms of Clause 0 and Schedule __.
5.2 IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING HEREUNDER.`;

export default function VettingPage() {
  const [text, setText] = useState(SAMPLE_BAD_CONTRACT);
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [copied, setCopied] = useState(false);
  const [showRiskMemo, setShowRiskMemo] = useState(false);

  useEffect(() => {
    setAudit(auditContract(text));
  }, [text]);

  const handleAutoFix = () => {
    if (!audit) return;
    const fixed = autoFixDraft(text, audit.issues);
    setText(fixed);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vetted_Agreement.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredIssues = audit?.issues.filter((issue) => {
    if (selectedSeverity === 'all') return true;
    return issue.severity === selectedSeverity;
  }) || [];

  const fatalCount = audit?.issues.filter(i => i.severity === 'fatal').length || 0;
  const highRiskCount = audit?.issues.filter(i => i.severity === 'high_risk').length || 0;
  const ambiguityCount = audit?.issues.filter(i => i.severity === 'ambiguity').length || 0;
  const styleCount = audit?.issues.filter(i => i.severity === 'style').length || 0;

  const riskMemo = text ? generateRiskMemo({ contractText: text, clientRole: 'Company' }) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <FileSearch className="w-4 h-4" />
            Bhumesh Verma Contract Audit Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            The Drafter's Audit & Vetting Studio
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-2xl">
            Real-time linter checking Indian statutory exclusions (IT Act Sec 1(4)), broken cross-references ("Clause 0"), orphan definitions, pleonasms, and one-sided liabilities.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setText(SAMPLE_BAD_CONTRACT)}
            className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5"
            title="Load sample flawed contract"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Load Sample
          </button>
          <button
            onClick={handleAutoFix}
            className="px-3.5 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            1-Click Auto-Fix
          </button>
          <button
            onClick={() => setShowRiskMemo(!showRiskMemo)}
            className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/20"
          >
            <FileText className="w-3.5 h-3.5" />
            Executive Risk Memo
          </button>
        </div>
      </div>

      {/* Score and Metrics Bar */}
      {audit && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Health Score</p>
              <p className="text-2xl font-black text-white mt-0.5">{audit.score}<span className="text-xs text-slate-400 font-normal">/100</span></p>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
              audit.grade === 'A+' || audit.grade === 'A' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
              audit.grade === 'B' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40' :
              audit.grade === 'C' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' :
              'bg-red-500/20 text-red-400 border border-red-500/40'
            }`}>
              {audit.grade}
            </div>
          </div>

          <button 
            onClick={() => setSelectedSeverity('fatal')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedSeverity === 'fatal' ? 'bg-red-950/40 border-red-500 ring-1 ring-red-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <p className="text-[11px] text-red-400 font-semibold flex items-center gap-1">
              <AlertOctagon className="w-3 h-3" /> Fatal Defects
            </p>
            <p className="text-2xl font-bold text-white mt-0.5">{fatalCount}</p>
          </button>

          <button 
            onClick={() => setSelectedSeverity('high_risk')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedSeverity === 'high_risk' ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <p className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> High Risk
            </p>
            <p className="text-2xl font-bold text-white mt-0.5">{highRiskCount}</p>
          </button>

          <button 
            onClick={() => setSelectedSeverity('ambiguity')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedSeverity === 'ambiguity' ? 'bg-sky-950/40 border-sky-500 ring-1 ring-sky-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <p className="text-[11px] text-sky-400 font-semibold flex items-center gap-1">
              <Info className="w-3 h-3" /> Ambiguities
            </p>
            <p className="text-2xl font-bold text-white mt-0.5">{ambiguityCount}</p>
          </button>

          <button 
            onClick={() => setSelectedSeverity('style')}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedSeverity === 'style' ? 'bg-slate-800/80 border-slate-500 ring-1 ring-slate-500' : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <p className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3 h-3" /> Pleonasms/Style
            </p>
            <p className="text-2xl font-bold text-white mt-0.5">{styleCount}</p>
          </button>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p className="text-[11px] text-slate-400 font-medium">Orphan Definitions</p>
            <p className="text-2xl font-bold text-amber-400 mt-0.5">{audit.metrics.orphanDefinitionsCount}</p>
          </div>
        </div>
      )}

      {/* Main Split-Pane Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor Pane (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span className="font-semibold text-slate-200">Contract Draft Editor</span>
            <div className="flex items-center gap-3">
              <span>{audit?.metrics.wordCount || 0} words</span>
              <span>•</span>
              <span>{audit?.metrics.sentenceCount || 0} sentences</span>
              <button
                onClick={handleCopy}
                className="hover:text-white transition-colors flex items-center gap-1"
                title="Copy current text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button
                onClick={handleDownload}
                className="hover:text-white transition-colors flex items-center gap-1"
                title="Download text file"
              >
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
            </div>
          </div>

          <div className="relative rounded-xl border border-slate-800 bg-slate-900/90 shadow-inner overflow-hidden flex-1 min-h-[550px]">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your commercial contract draft here for instant auditing..."
              className="w-full h-full p-5 bg-transparent font-mono text-xs leading-relaxed text-slate-200 resize-none focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Audit Report Pane (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-200">Drafter's Audit Findings</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold">
                {filteredIssues.length}
              </span>
            </div>

            {selectedSeverity !== 'all' && (
              <button 
                onClick={() => setSelectedSeverity('all')}
                className="text-[11px] text-amber-400 hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Missing Essential Clauses Alert */}
          {audit && audit.missingCrucialClauses.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs">
              <p className="font-bold text-amber-300 flex items-center gap-1.5 mb-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                Missing Standard Safeguards ({audit.missingCrucialClauses.length})
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {audit.missingCrucialClauses.map((clause, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-amber-900/40 text-amber-200 border border-amber-500/20 text-[10px]">
                    + {clause}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Issues List */}
          <div className="space-y-3 overflow-y-auto max-h-[580px] pr-1">
            {filteredIssues.length === 0 ? (
              <div className="p-8 text-center rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-400">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="font-semibold text-white text-sm">No issues found in this filter!</p>
                <p className="text-xs text-slate-400 mt-1">The draft complies with Bhumesh Verma's core drafting heuristics.</p>
              </div>
            ) : (
              filteredIssues.map((issue) => (
                <div
                  key={issue.id}
                  className={`p-4 rounded-xl border transition-all ${
                    issue.severity === 'fatal' ? 'bg-red-950/20 border-red-500/40' :
                    issue.severity === 'high_risk' ? 'bg-amber-950/20 border-amber-500/40' :
                    issue.severity === 'ambiguity' ? 'bg-sky-950/20 border-sky-500/40' :
                    'bg-slate-900/80 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {issue.severity === 'fatal' && <AlertOctagon className="w-4 h-4 text-red-400 shrink-0" />}
                      {issue.severity === 'high_risk' && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
                      {issue.severity === 'ambiguity' && <Info className="w-4 h-4 text-sky-400 shrink-0" />}
                      {issue.severity === 'style' && <Filter className="w-4 h-4 text-slate-400 shrink-0" />}
                      <span className="font-bold text-xs text-white">{issue.title}</span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                      {issue.bookChapterRef}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                    {issue.description}
                  </p>

                  <div className="mt-2.5 p-2 rounded bg-slate-950/60 border border-slate-800 font-mono text-[11px] text-amber-300 break-all">
                    "{issue.matchedText}"
                  </div>

                  {issue.replacementText && (
                    <div className="mt-2 text-xs flex items-center justify-between text-emerald-400">
                      <span className="font-medium text-[11px]">Recommended: "{issue.replacementText}"</span>
                    </div>
                  )}

                  <p className="text-[11px] text-slate-400 mt-2.5 pt-2 border-t border-slate-800/60 italic">
                    {issue.explanation}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Executive Risk Memo Modal / Drawer */}
      {showRiskMemo && riskMemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Advocate Briefing Document
                </span>
                <h2 className="text-xl font-bold text-white mt-1">Client Executive Risk Memo</h2>
                <p className="text-xs text-slate-400">Prepared for Corporate Decision-Makers (Managing Director / CFO / General Counsel)</p>
              </div>
              <button
                onClick={() => setShowRiskMemo(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-3 py-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Contract Title</p>
                <p className="text-white font-bold text-sm mt-0.5">{riskMemo.contractTitle}</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Dispute Forum & Seat</p>
                <p className="text-white font-bold text-sm mt-0.5">{riskMemo.disputeResolutionForum}</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Liability Cap Exposure</p>
                <p className={`font-bold text-sm mt-0.5 ${riskMemo.liabilityCap.includes('UNCAPPED') ? 'text-red-400' : 'text-emerald-400'}`}>
                  {riskMemo.liabilityCap}
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Indemnification Balance</p>
                <p className="text-white font-bold text-sm mt-0.5">{riskMemo.indemnityScope}</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Lock-In Duration</p>
                <p className="text-white font-bold text-sm mt-0.5">{riskMemo.lockInDuration}</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                <p className="text-slate-400 font-medium">Post-Termination Non-Compete</p>
                <p className="text-white font-bold text-sm mt-0.5">{riskMemo.nonCompetePeriod}</p>
              </div>
            </div>

            {/* Critical Red Flags */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
              <h4 className="font-bold text-red-300 flex items-center gap-1.5 mb-2 text-sm">
                <AlertOctagon className="w-4 h-4 text-red-400" />
                Critical Commercial Red Flags
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-red-200">
                {riskMemo.criticalRedFlags.map((flag, idx) => (
                  <li key={idx}>{flag}</li>
                ))}
              </ul>
            </div>

            {/* Advocate Recommendations */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <h4 className="font-bold text-amber-400 flex items-center gap-1.5 mb-2 text-sm">
                <BookOpen className="w-4 h-4" />
                Counsel Recommendations for Negotiation
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                {riskMemo.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  const memoText = `EXECUTIVE RISK MEMO - ${riskMemo.contractTitle}\n\nLiability Cap: ${riskMemo.liabilityCap}\nIndemnity: ${riskMemo.indemnityScope}\nDispute Forum: ${riskMemo.disputeResolutionForum}\n\nRed Flags:\n${riskMemo.criticalRedFlags.map(f => '- ' + f).join('\n')}\n\nRecommendations:\n${riskMemo.recommendations.map(r => '- ' + r).join('\n')}`;
                  navigator.clipboard.writeText(memoText);
                  alert('Risk memo copied to clipboard!');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
              >
                Copy Memo
              </button>
              <button
                onClick={() => setShowRiskMemo(false)}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
