# LexDraft Pro ⚖️
### Commercial Contract Drafting, Vetting & Precedent Suite for Advocates and Corporate Counsel

> Built directly on the legal jurisprudence, drafting heuristics, and 22 specimen commercial agreements from the 600-page treatise:  
> **"Practical Guide to Drafting Commercial Contracts" (2nd Edition, OakBridge, 2020)**  
> by **Bhumesh Verma** (Advocate & Managing Partner, Corp Comm Legal).

---

## 🌟 Overview

**LexDraft Pro** is a modern, privacy-first legal technology platform tailored specifically for advocates, transactional lawyers, in-house counsel, and law students dealing with commercial contracts in India and common-law jurisdictions.

Rather than generic grammar checking, LexDraft enforces **Indian statutory compliance**, **adversarial negotiation balancing**, **judicial evidence admissibility**, and **the author's 29 cardinal drafting principles ("The Craft of the Draft")**.

---

## 🚀 Key Features

### 1. 🔍 The Drafter's Audit & Vetting Studio
- **Indian Law Compliance Engine**:
  - Flags instruments barred from digital execution under **Section 1(4) of the Information Technology Act, 2000** (Wills, Trusts, Powers of Attorney, Negotiable Instruments, Real Estate Sale Deeds).
  - Enforces consideration disclosure standards under **Section 27 of the Indian Stamp Act, 1899** to avoid Section 35 evidence inadmissibility and 10x penalty.
  - Warns against indefinite covenants in restraint of trade under **Section 27 of the Indian Contract Act, 1872**.
- **Bhumesh Verma's 29 Drafting Rules Linter**:
  - **Dead Cross-Reference & "Clause 0" Sentinel**: Automatically detects broken links caused by clause deletions and renumbering.
  - **Defined Terms Cross-Referencer**: Catches *Orphan Definitions* (defined in Clause 1 from an old template, but never used) and *Undefined Capitalized Terms*.
  - **"Means and Includes" Detector**: Eliminates the common conflation of restrictive *means* with non-exhaustive *includes*.
  - **Pleonasm & Couplet Cleaner**: Removes redundant pairs (*"each and every"*, *"by and between"*, *"right, title, and interest"*, *"aid and abet"*, *"due and owing"*, *"full and final"*).
  - **Capital Punishment (ALL CAPS)**: Highlights shouting clauses and restores professional typography.
  - **Ambiguous Date & Number Formats**: Enforces written-out months (e.g., `20th March 2024` instead of `09/11/2023`) and figures with words in parentheses (`INR 50,000 (Fifty Thousand Rupees)`).
  - **Agree Only Once**: Purges repetitive *"the parties agree"* phrases from individual operative clauses.
  - **Passive Voice & Run-on Sentence Detector**: Recommends active voice to demarcate the obligor and splits sentences exceeding 45 words.
- **1-Click Auto-Fix**: Automatically replaces fixable pleonasms, couplets, shouting text, and formatting traps.
- **Drafting Health Score**: Generates a 0–100 score, letter grade (A+ to F), and severity breakdowns.

### 2. 📝 22 Specimen Commercial Agreement Generator
Interactive generator for all 22 full contracts from **Part 11 of the book (pp. 249–600)**:
1. Advertising Agreement
2. Arbitration Agreement
3. Asset Purchase Agreement
4. Assignment and Assumption Agreement
5. Business Centre Agreement
6. Business Transfer Agreement (Slump Sale)
7. Change of Control Agreement
8. Loan Agreement & Secured Promissory Note (Exhibit A)
9. Construction Agreement
10. Consulting Agreement
11. Employment Agreement (Executive/CEO)
12. Appointment Letter
13. Joint Venture Agreement (50:50 JVA)
14. Master Service Agreement (MSA)
15. Master Software Development Services Agreement (with SOW Exhibit)
16. Master Software License Agreement (MSLA)
17. Non-Disclosure Agreement (Mutual NDA)
18. Shareholders' Agreement (Institutional SHA)
19. Share Subscription and Shareholders' Agreement (SSHA)
20. Share Subscription Agreement (SSA)
21. Technical Licence Agreement
22. Limited Liability Partnership (LLP) Agreement

### 3. ⚖️ The Balancing Act (Counterparty Draft & Redline Advisor)
- Confronted with an aggressive counterparty draft?
- Detects one-sided indemnities, uncapped liabilities, and unreasonable non-competes.
- Generates **balanced counter-draft clauses** and provides **Harvard Negotiation Project talking points** for deal calls.

### 4. 🛡️ Statutory Matrix & Electronic Evidence Certificate
- **Section 63 Bharatiya Sakshya Adhiniyam, 2023 (BSA)** / **Section 65B Indian Evidence Act, 1872**: Generates a customized, court-ready Electronic Evidence Affidavit for email/e-contract admissibility in litigation or arbitration.
- **Registration Act, 1908 (Sec. 23)**: 4-month presentation deadline tracker.

### 5. 📑 Client Executive Risk Memo
- Instant 1-page executive summary for corporate decision-makers (Managing Director, CEO, CFO, General Counsel).
- Extracts Deal Value, Liability Cap exposure, Indemnity Scope, Lock-in terms, Non-Compete duration, and Top Red Flags.

### 6. 📚 Master Precedent Clause Bank & Book Guide
- Searchable library of operative and boilerplate clauses with side-by-side Pro-Party, Pro-Counterparty, and Balanced compromises.
- Digital digest of the author's 29 cardinal drafting principles.

---

## 🔒 Confidentiality & Privacy

**100% Client-Side Processing**:
All contract parsing, AST rule evaluation, and document generation occur entirely within the user's web browser. No contract text is transmitted to external servers or cloud APIs, preserving strict **Attorney-Client Privilege** and client confidentiality.

---

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **UI**: React 18, Tailwind CSS, Lucide Icons
- **Language**: TypeScript 5.7+
- **Architecture**: Zero external analytics or tracking; pure client-side deterministic evaluation.

---

## 💻 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/<your-username>/lexdraft.git

# Navigate into directory
cd lexdraft

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📖 Citation & Legal Reference
- Treatise: *Practical Guide to Drafting Commercial Contracts* (2nd Edition, 2020)
- Author: **Bhumesh Verma**, Advocate, Delhi Bar Council, Managing Partner of Corp Comm Legal.
- Publisher: **OakBridge Publishing Pvt. Ltd.** (ISBN: 978-93-89176-47-6).

---

## 📄 License
MIT License. Created for advocates, transactional attorneys, corporate legal counsel, and law students.
