'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  Quote,
  Sparkles
} from 'lucide-react';

interface RuleCard {
  number: number;
  title: string;
  pages: string;
  coreRule: string;
  authorQuote: string;
  badExample: string;
  goodExample: string;
  rationale: string;
}

const RULES: RuleCard[] = [
  {
    number: 1,
    title: 'Spell Check & Grammar Check (The AI Homophone Trap)',
    pages: 'p. 201',
    coreRule: 'Do not rely blindly on computer spell checks; they cannot detect context errors between homophones.',
    authorQuote: 'Please understand and appreciate that Artificial Intelligence cannot replace lawyers. A computer may not detect the difference between a "Statue" and a "Statute", or "trail" and "trial", "abide" and "avoid". The difference could be as drastic as jail or bail.',
    badExample: 'The Petitioner undertakes to avoid any orders issued by this Hon\'ble Court.',
    goodExample: 'The Petitioner undertakes to abide by all orders issued by this Hon\'ble Court.',
    rationale: 'Contextual homophone errors can completely invert legal liability and result in disciplinary or professional embarrassment.'
  },
  {
    number: 2,
    title: 'No Marriage Mantras / Doctors\' Handwriting',
    pages: 'pp. 202-203',
    coreRule: 'Eliminate obscure legalese and incomprehensible legal chanting. The client and adjudicating court must understand the terms effortlessly.',
    authorQuote: 'In India, it is very common to see priests solemnising marriages by pronouncing mantras in Sanskrit... no one understands what is going on, but everyone nods in agreement. A lawyer\'s position cannot be akin to that.',
    badExample: 'WITNESSETH that the party of the first part doth hereby demise, grant, and enfeoff unto the party of the other part...',
    goodExample: 'The Lessor hereby leases the Property to the Lessee on the terms set forth herein.',
    rationale: 'Agreements are living commercial documents, not ceremonial prayers. Clarity enhances enforceability.'
  },
  {
    number: 3,
    title: 'The Balancing Act',
    pages: 'p. 204',
    coreRule: 'Avoid drafting one-sided agreements; a balanced initial draft builds trust and accelerates closing.',
    authorQuote: 'If you draft a completely one-sided agreement, it is bound to be rejected by the other party and your draft is going to be red-marked all over. Why be unreasonable in the first place?',
    badExample: 'Contractor shall indemnify Company for all damages including Company\'s own negligence. Company liability is strictly zero.',
    goodExample: 'Each Party shall indemnify the other Party against damages arising from its own gross negligence or material breach.',
    rationale: 'Balanced agreements preserve goodwill, reduce adversarial mark-up cycles, and withstand judicial unconscionability scrutiny.'
  },
  {
    number: 5,
    title: 'Cross Referencing & Dead Link Prevention',
    pages: 'pp. 206-207',
    coreRule: 'Minimize cross-referencing and eliminate dead references like "Clause 0" caused by clause deletions.',
    authorQuote: 'Having a lot of cross-references raises the possibility of erroneous or dead cross-references. Try to eliminate cross references as much as possible.',
    badExample: 'Subject to the provisions of Clause 0 and Schedule __ hereof...',
    goodExample: 'Subject to the transfer restrictions in Clause 4.2 (Permitted Transfers)...',
    rationale: 'Every cross-reference forces the reader to flip pages back and forth. If renumbered during negotiations, dead links create legal ambiguity.'
  },
  {
    number: 14,
    title: 'Abolish Capital Punishment in Writing',
    pages: 'p. 223',
    coreRule: 'Stop writing entire clauses or disclaimers in ALL CAPITAL LETTERS.',
    authorQuote: 'Writing in capital letters means you are shouting. It is very irritating to read and understand... Minimise the use of capital letters in your drafting.',
    badExample: 'IN NO EVENT SHALL EITHER PARTY BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, OR PUNITIVE DAMAGES...',
    goodExample: 'In no event shall either Party be liable for any consequential, incidental, or punitive damages...',
    rationale: 'All-caps reduces cognitive readability by 30%. Bold headers or indented blocks provide superior emphasis without visual aggression.'
  },
  {
    number: 15,
    title: 'Avoid Redundant Words, Pleonasms & Couplets',
    pages: 'pp. 224-225',
    coreRule: 'Excise repetitive word pairs ("couplets") that add zero substantive legal meaning.',
    authorQuote: 'Many words in the above phrases are useless and redundant. They add nothing to the meaning of adjoining words and merely emphasize. Avoid such words as much as possible.',
    badExample: 'Each and every party hereby agrees and undertakes by and between themselves for full and final settlement of all right, title, and interest...',
    goodExample: 'Each party agrees to final settlement of all rights...',
    rationale: 'Couplets like "aid and abet", "due and owing", "goods and chattel" are medieval tautologies that bloat contracts.'
  },
  {
    number: 18,
    title: 'Why Be Passive? (Use Active Voice)',
    pages: 'p. 228',
    coreRule: 'Draft obligations in the active voice so the responsible obligor is immediately identified.',
    authorQuote: 'Agreements, therefore, should be drafted in the active voice, as much as possible. This ensures brevity, makes language tighter, and clearly demonstrates as to what party does what.',
    badExample: 'The Products shall be delivered by the Supplier to the Client within 15 days.',
    goodExample: 'The Supplier shall deliver the Products to the Client within 15 days.',
    rationale: 'Passive voice places emphasis on the object rather than the obligor, obscuring contractual accountability.'
  },
  {
    number: 20,
    title: 'How to Write Dates (Spell Month in Words)',
    pages: 'p. 231',
    coreRule: 'Always spell the month in letters to prevent catastrophic international ambiguity between DD/MM/YYYY and MM/DD/YYYY.',
    authorQuote: 'If you were to write 09/11/2017, what date would it indicate? In India, it means 9 November; in the US, it means 11 September. To avoid confusion, write the month in words: 20th March 2024.',
    badExample: '04/05/2024 (Ambiguous: 4th May or 5th April?)',
    goodExample: '4th May 2024',
    rationale: 'A single misconstrued date can trigger accidental repudiation, wrongful termination, or missed limitation periods.'
  },
  {
    number: 21,
    title: 'How to Write Numbers (Figures + Words)',
    pages: 'p. 232',
    coreRule: 'State amounts in numerals followed by words in parentheses, and always specify interest per annum.',
    authorQuote: 'Write in numerals followed by words in brackets: USD 3,000 (Three thousand United States Dollars). Percentages should always mention per month or per annum.',
    badExample: 'Interest of 2% shall be charged for delayed payment.',
    goodExample: 'Late payments shall bear penal interest at the rate of 12% p.a. (twelve percent per annum).',
    rationale: 'Prevents fraudulent zero-alteration and resolves differences between Indian numbering (Lakhs/Crores) and Western commas/decimals.'
  },
  {
    number: 22,
    title: 'Agree Only Once',
    pages: 'p. 233',
    coreRule: 'Do not repeat "The parties hereby agree" in every single clause of the contract.',
    authorQuote: 'Every agreement starts with the clause "The Parties agree as under:", doesn\'t it? Indicating the parties\' agreement in different clauses doesn\'t add anything.',
    badExample: '1.1 The parties hereby agree that Supplier will deliver... 1.2 It is mutually agreed that Client will pay...',
    goodExample: '1.1 Supplier shall deliver... 1.2 Client shall pay...',
    rationale: 'The operative premise is established once in the Preamble. Repeating it inside sub-clauses is pointless padding.'
  }
];

export default function GuidePage() {
  const [search, setSearch] = useState('');

  const filteredRules = RULES.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.coreRule.toLowerCase().includes(search.toLowerCase()) ||
    r.authorQuote.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <BookOpen className="w-4 h-4" />
            Bhumesh Verma's Legal Jurisprudence
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            The Craft of the Draft: Core Principles
          </h1>
          <p className="text-slate-400 text-xs mt-1 max-w-2xl">
            Key rules from Part 10 ("Do's and Don'ts") of *Practical Guide to Drafting Commercial Contracts*, designed to transform draft quality and prevent courtroom disputes.
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search principles..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Rules Cards */}
      <div className="space-y-6">
        {filteredRules.map((rule) => (
          <div key={rule.number} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center">
                  #{rule.number}
                </span>
                <h3 className="font-bold text-white text-base">{rule.title}</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                {rule.pages}
              </span>
            </div>

            <p className="text-xs font-semibold text-amber-300/90">
              {rule.coreRule}
            </p>

            {/* Author Quote */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 italic flex items-start gap-2.5">
              <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>"{rule.authorQuote}"</span>
            </div>

            {/* Bad vs Good */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
                <span className="font-bold text-red-400 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Avoid This (Defective)
                </span>
                <p className="font-mono text-[11px] text-red-200 mt-1">{rule.badExample}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Preferred (Draftsman\'s Choice)
                </span>
                <p className="font-mono text-[11px] text-emerald-200 mt-1">{rule.goodExample}</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
              <span className="font-semibold text-slate-300">Legal Rationale:</span> {rule.rationale}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
