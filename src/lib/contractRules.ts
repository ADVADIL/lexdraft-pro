import { IssueCategory, IssueSeverity } from './types';

export interface DraftingRule {
  id: string;
  name: string;
  category: IssueCategory;
  severity: IssueSeverity;
  bookChapterRef: string;
  pattern: RegExp;
  description: string;
  explanation: string;
  replacementGenerator?: (match: string) => string;
}

export const PLEONASM_AND_COUPLETS_RULES: DraftingRule[] = [
  {
    id: 'couplet_each_and_every',
    name: 'Redundant Couplet: "each and every"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\beach and every\b/gi,
    description: 'Use "each" or "every", not both. Redundant couplet adding zero legal effect.',
    explanation: 'Bhumesh Verma explains that couplets like "each and every" are relics of pleonasm that bloat contracts without adding precision.',
    replacementGenerator: () => 'each'
  },
  {
    id: 'couplet_by_and_between',
    name: 'Redundant Couplet: "by and between"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\bby and between\b/gi,
    description: 'Use "between" (or "among" for 3+ parties). "By and between" is a useless redundant couplet.',
    explanation: 'In Part 10 Ch 15, the author stresses: "Many words in the above phrases are useless and redundant... avoid such words as much as possible."',
    replacementGenerator: () => 'between'
  },
  {
    id: 'couplet_right_title_interest',
    name: 'Redundant Triplet: "right, title, and interest"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\bright(,|\s+and)?\s+title(,|\s+and)?\s+(and\s+)?(all\s+)?interest(s)?(\s+in\s+and\s+to)?\b/gi,
    description: 'Use "rights" or "title". Listing right, title, and interest is tautological under Indian law.',
    explanation: 'Unless specifically differentiating beneficial interest from legal title, standard transfers only require "all rights in" or "title to".',
    replacementGenerator: () => 'all rights in'
  },
  {
    id: 'couplet_due_and_owing',
    name: 'Redundant Couplet: "due and owing" / "due and payable"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\bdue and owing\b/gi,
    description: 'Simplify to "due". "Owing" adds no extra legal duty.',
    explanation: 'Verma explicitly identifies "due and owing" as an archaic couplet to eliminate.',
    replacementGenerator: () => 'due'
  },
  {
    id: 'couplet_full_and_final',
    name: 'Redundant Couplet: "full and final"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\bfull and final(\s+settlement)?\b/gi,
    description: 'Use "final" or "complete settlement". "Full and final" is a clichéd couplet.',
    explanation: '"Full" adds no enforceable meaning that "final" does not already encapsulate.',
    replacementGenerator: () => 'final settlement'
  },
  {
    id: 'couplet_agree_and_undertake',
    name: 'Redundant Couplet: "agree and undertake"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\b(agrees and undertakes|agree and undertake|covenants and agrees)\b/gi,
    description: 'Use "agrees" or "shall". Agreeing to an obligation legally embodies the undertaking.',
    explanation: 'Adding "and undertakes" or "and covenants" creates wordiness without expanding the promisor\'s liability.',
    replacementGenerator: () => 'agrees'
  },
  {
    id: 'couplet_goods_and_chattel',
    name: 'Archaic English: "goods and chattel"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\bgoods and chattels?\b/gi,
    description: 'Replace with "goods" or "movable property". "Chattel" is obsolete in contemporary Indian commercial drafting.',
    explanation: 'The Sale of Goods Act, 1930 governs "goods"; medieval Norman-French terms should be excised.',
    replacementGenerator: () => 'movable property'
  },
  {
    id: 'pleonasm_true_facts',
    name: 'Pleonasm: "true facts" / "basic fundamentals"',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 15 (pp. 224-225)',
    pattern: /\b(true facts|basic fundamentals|past history|unexpected surprise|free gift)\b/gi,
    description: 'A fact is by definition true; fundamentals are basic. Avoid tautological emphasis.',
    explanation: 'Pleonastic phrases dilute the authoritative, clean tone expected of legal counsel.',
    replacementGenerator: (match) => {
      if (/true facts/i.test(match)) return 'facts';
      if (/basic fundamentals/i.test(match)) return 'fundamentals';
      if (/past history/i.test(match)) return 'history';
      if (/free gift/i.test(match)) return 'gift';
      return 'surprise';
    }
  }
];

export const DRAFTING_HYGIENE_RULES: DraftingRule[] = [
  {
    id: 'means_and_includes',
    name: 'Confusion of "means and includes"',
    category: 'means_and_includes',
    severity: 'high_risk',
    bookChapterRef: 'Part 5, Chapter 14 (pp. 71)',
    pattern: /\b(means and includes|shall mean and include)\b/gi,
    description: '"Means" is exhaustive and restrictive; "includes" is illustrative and non-exhaustive. They cannot be used together.',
    explanation: 'Bhumesh Verma stresses: "Means and includes cannot be the same. If a term means something, its meaning is restricted to that alone. If it includes something, it means other things in addition. Using both together is confusing and legally defective."',
    replacementGenerator: () => 'means'
  },
  {
    id: 'capital_punishment',
    name: 'Capital Punishment (ALL CAPS Text)',
    category: 'capital_punishment',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 14 (pp. 223) & Part 5, Ch 14 (p. 70)',
    pattern: /^[A-Z0-9\s,;.:\(\)’'"\-]{80,}$/gm,
    description: 'Clause written in ALL CAPS. In digital contracts, shouting text reduces readability and judicial favor.',
    explanation: 'Verma writes: "Writing in capital letters means you are shouting. It is very irritating to read and understand... Abolish capital punishment in writing."',
    replacementGenerator: (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
  },
  {
    id: 'ambiguous_numeric_date',
    name: 'Ambiguous Numeric Date Format',
    category: 'date_format',
    severity: 'high_risk',
    bookChapterRef: 'Part 10, Chapter 20 (p. 231)',
    pattern: /\b(0?[1-9]|1[0-2])[\/\-.](0?[1-9]|[12]\d|3[01])[\/\-.](\d{4}|\d{2})\b|\b(0?[1-9]|[12]\d|3[01])[\/\-.](0?[1-9]|1[0-2])[\/\-.](\d{4}|\d{2})\b/g,
    description: 'Slash/dot date formats like DD/MM/YYYY vs MM/DD/YYYY cause major transnational litigation confusion.',
    explanation: 'Verma illustrates: "If you write 09/11/2017, in India it means 9th November, in the US it means 11th September. Always spell the month in words: e.g. 20th March 2024."',
    replacementGenerator: (match) => match + ' [Spelled Month Recommended, e.g. 15th October 2024]'
  },
  {
    id: 'repetitive_agree_only_once',
    name: 'Repetitive "The parties agree"',
    category: 'repetitive_agree',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 22 (p. 233)',
    pattern: /\b(The parties hereby agree that|It is mutually agreed by and between the parties that|The parties expressly agree that)\b/gi,
    description: 'Repeatedly asserting "The parties agree" throughout clauses is redundant. Agree only once in the Preamble.',
    explanation: 'Every agreement starts with "The Parties agree as follows:" or "NOW THIS DEED WITNESSETH". Repeating it inside sub-clauses is unnecessary.',
    replacementGenerator: () => ''
  },
  {
    id: 'dead_cross_reference_zero',
    name: 'Dead Cross-Reference ("Clause 0" / Placeholder)',
    category: 'dead_cross_ref',
    severity: 'fatal',
    bookChapterRef: 'Part 10, Chapter 5 (pp. 206-207) & Part 10, Ch 4',
    pattern: /\b(Clause 0(\(\w+\))*|Article 0|Section 0|Article \[•\]|Clause \[•\]|Schedule __|Annexure __)\b/g,
    description: 'Broken cross-reference or unpopulated placeholder detected! Will cause dispute deadlock.',
    explanation: 'Caused by clause deletion, renumbering, or unfinalized drafts. Courts have held agreements ambiguous when key rights refer to dead provisions.'
  },
  {
    id: 'archaic_legalese',
    name: 'Archaic Legalese / Unnecessary Jargon',
    category: 'pleonasm_couplet',
    severity: 'style',
    bookChapterRef: 'Part 10, Chapter 2 (pp. 202) & Ch 28-29',
    pattern: /\b(hereinbefore|hereinafter|witnesseth|aforementioned|inter alia|nemo dat quod non habet|pari passu)\b/gi,
    description: 'Avoid outdated "marriage mantras" and archaic legalese where simple modern English suffices.',
    explanation: '"An agreement is a way of talking to the reader... Your job is not to impress anyone with legal verbosity, but to ensure enforceability in plain language."'
  }
];

export const IT_ACT_EXCLUSIONS = [
  {
    keyword: /\b(will|testament|codicil)\b/i,
    instrument: 'Will or Testamentary Disposition',
    statutoryRef: 'Section 1(4), First Schedule, Information Technology Act, 2000',
    reason: 'Wills and codicils are legally excluded from electronic signatures and digital execution under Indian law. Must be executed in physical ink on paper and attested by two witnesses.'
  },
  {
    keyword: /\b(power of attorney|poa|general power of attorney|special power of attorney)\b/i,
    instrument: 'Power of Attorney (POA)',
    statutoryRef: 'Section 1(4), First Schedule, Information Technology Act, 2000',
    reason: 'Powers of Attorney cannot be executed via clickwrap, e-mail, or digital signature under Section 1(4) IT Act. Physical execution and notarization/stamping are mandatory.'
  },
  {
    keyword: /\b(trust deed|deed of trust|settlement of trust)\b/i,
    instrument: 'Trust Deed',
    statutoryRef: 'Section 1(4), First Schedule, Information Technology Act, 2000',
    reason: 'Creation of a trust under the Indian Trusts Act, 1882 cannot be done electronically.'
  },
  {
    keyword: /\b(promissory note|bill of exchange|negotiable instrument)\b/i,
    instrument: 'Negotiable Instrument (other than cheque)',
    statutoryRef: 'Section 1(4), First Schedule, Information Technology Act, 2000',
    reason: 'Promissory notes and bills of exchange under the Negotiable Instruments Act, 1881 cannot be validly executed as e-contracts.'
  },
  {
    keyword: /\b(sale deed|conveyance deed|transfer of immovable property)\b/i,
    instrument: 'Sale / Conveyance of Immovable Property',
    statutoryRef: 'Section 1(4), First Schedule, Information Technology Act, 2000',
    reason: 'Contracts for sale or conveyance of real estate / immovable property or any interest therein are excluded from electronic execution and require compulsory stamping and registration under Section 17 & 23 Registration Act, 1908.'
  }
];

export const CRUCIAL_BOILERPLATE_CHECKLIST = [
  { id: 'governing_law', name: 'Governing Law & Jurisdiction', pattern: /\b(governing law|jurisdiction|laws of india)\b/i, chapterRef: 'Part 7, Ch 8' },
  { id: 'dispute_resolution', name: 'Dispute Resolution / Arbitration', pattern: /\b(arbitration|dispute resolution|arbitrator|arbitration and conciliation act)\b/i, chapterRef: 'Part 7, Ch 11' },
  { id: 'entire_agreement', name: 'Entire Agreement / Completeness', pattern: /\b(entire agreement|whole agreement|supersedes all prior)\b/i, chapterRef: 'Part 7, Ch 12' },
  { id: 'severability', name: 'Severability', pattern: /\b(severability|severable|invalidity or unenforceability)\b/i, chapterRef: 'Part 7, Ch 7' },
  { id: 'limitation_of_liability', name: 'Limitation of Liability (Cap)', pattern: /\b(limitation of liability|aggregate liability|in no event shall.*exceed)\b/i, chapterRef: 'Part 6, Ch 28' },
  { id: 'force_majeure', name: 'Force Majeure', pattern: /\b(force majeure|act of god|beyond.*reasonable control)\b/i, chapterRef: 'Part 6, Ch 27' },
  { id: 'confidentiality', name: 'Confidentiality & Exclusions', pattern: /\b(confidential information|non-disclosure|strictest confidence)\b/i, chapterRef: 'Part 6, Ch 10' },
  { id: 'termination', name: 'Termination & Cure Period', pattern: /\b(termination|material breach|cure period|notice to cure)\b/i, chapterRef: 'Part 6, Ch 23' },
  { id: 'survival', name: 'Survival of Clauses', pattern: /\b(survival|survive (any )?termination|survive expiration)\b/i, chapterRef: 'Part 6, Ch 25' },
  { id: 'indemnity', name: 'Indemnity & Defense', pattern: /\b(indemnify|indemnification|hold harmless)\b/i, chapterRef: 'Part 6, Ch 18' }
];
