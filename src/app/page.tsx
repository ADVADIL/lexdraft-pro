import React from 'react';
import Link from 'next/link';
import { 
  FileSearch, 
  FileText, 
  Scale, 
  Library, 
  ShieldCheck, 
  CheckSquare, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Award,
  AlertTriangle,
  FileCheck,
  Building,
  Gavel
} from 'lucide-react';

export default function HomePage() {
  const tools = [
    {
      title: "The Drafter's Audit & Vetting Engine",
      description: "Real-time legal linter flagging 20+ drafting hazards: redundant couplets ('each and every'), 'means & includes' confusion, broken cross-references ('Clause 0'), orphan definitions, and passive voice.",
      icon: FileSearch,
      href: "/vetting",
      badge: "Flagship Tool",
      color: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400"
    },
    {
      title: "22 Precedent Agreement Generator",
      description: "Generate complete, legally sound commercial contracts from Part 11 of the book—NDAs, Joint Ventures, Employment, Master Services, Software Licenses, SHAs, and LLPs with verified Indian KYC particulars.",
      icon: FileText,
      href: "/generator",
      badge: "22 Specimen Contracts",
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400"
    },
    {
      title: "The Balancing Act (Counterparty Draft Advisor)",
      description: "Confronted with an aggressive counterparty draft? Detect one-sided indemnities, uncapped liabilities, and unreasonable non-competes. Generate balanced fallback language and advocate talking points.",
      icon: Scale,
      href: "/balancing",
      badge: "Negotiation Power",
      color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Statutory Matrix & Electronic Evidence Cert",
      description: "Verify IT Act 2000 Section 1(4) exclusions (Wills, Trusts, POAs, Real Estate). Generate instant Section 65B Evidence Act / Section 63 BSA 2023 electronic evidence certificates for digital contracts.",
      icon: ShieldCheck,
      href: "/compliance",
      badge: "BSA 2023 & IT Act",
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400"
    },
    {
      title: "Master Precedent Clause Bank",
      description: "Curated repository of operative and boilerplate clauses with side-by-side Pro-Party, Pro-Counterparty, and Balanced compromises straight from the book.",
      icon: Library,
      href: "/clauses",
      badge: "Vetted Clauses",
      color: "from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400"
    },
    {
      title: "Pre-Drafting Due Diligence Checklist",
      description: "Interactive lawyer checklist based on Part 4: party competence (Sections 11 & 12 ICA), legality of object (Section 23), and consideration disclosure (Section 27 Stamp Act).",
      icon: CheckSquare,
      href: "/checklist",
      badge: "Client Intake",
      color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400"
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-6">
            <Award className="w-3.5 h-3.5" />
            Synthesized from Bhumesh Verma's "Practical Guide to Drafting Commercial Contracts" (2nd Ed.)
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            The Commercial Contract <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Drafting & Vetting Studio
            </span> <br />
            Built for Advocates.
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl leading-relaxed">
            Eliminate professional liability, purge archaic legalese, catch broken cross-references, ensure Indian statutory compliance, and craft airtight commercial agreements in minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href="/vetting"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileSearch className="w-5 h-5" />
              Launch Drafter's Audit
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/generator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-5 h-5 text-amber-400" />
              Explore 22 Specimen Contracts
            </Link>
          </div>

          {/* Key statutory badges */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Indian Contract Act, 1872</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>IT Act, 2000 (Sec 10-A & 1(4))</span>
            </div>
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sec 63 BSA 2023 / 65B Evidence</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Companies Act 2013 & Stamp Act</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            A Specialized Legal Arsenal for Commercial Practitioners
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Everything an advocate, in-house counsel, or law firm partner needs to draft, negotiate, and audit high-stakes commercial agreements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group p-6 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg border ${tool.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400/90 font-medium group-hover:text-amber-300">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quote / Jurisprudence Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-8xl text-amber-500/5 font-serif select-none pointer-events-none">
            “
          </div>
          <p className="text-slate-200 italic text-base sm:text-lg leading-relaxed font-serif">
            "An agreement is never drafted for the academic pleasure of its author. An agreement is a living thing—it has to live and face the scrutiny of several interested parties: the client, counterparty, and adjudicating authorities. Every word should deserve its place in your sentence. Not a word more, not a word less."
          </p>
          <div className="mt-4 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-amber-400">Bhumesh Verma</span>
              <span className="text-slate-400 ml-2">Managing Partner, Corp Comm Legal | Author</span>
            </div>
            <Link href="/guide" className="text-amber-400 hover:underline flex items-center gap-1 font-medium">
              Read 29 Drafting Principles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
