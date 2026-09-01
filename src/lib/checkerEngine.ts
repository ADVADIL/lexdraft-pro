import { AuditResult, ContractIssue, IssueSeverity } from './types';
import {
  PLEONASM_AND_COUPLETS_RULES,
  DRAFTING_HYGIENE_RULES,
  IT_ACT_EXCLUSIONS,
  CRUCIAL_BOILERPLATE_CHECKLIST
} from './contractRules';

export function auditContract(text: string): AuditResult {
  if (!text || text.trim().length === 0) {
    return {
      score: 100,
      grade: 'A+',
      summary: 'No text provided for vetting.',
      issues: [],
      metrics: {
        wordCount: 0,
        sentenceCount: 0,
        readingEaseScore: 100,
        definedTermsCount: 0,
        orphanDefinitionsCount: 0,
        brokenReferencesCount: 0,
        passiveSentenceCount: 0,
        longSentenceCount: 0
      },
      definedTerms: [],
      orphanDefinitions: [],
      brokenReferences: [],
      missingCrucialClauses: []
    };
  }

  const issues: ContractIssue[] = [];
  const lines = text.split(/\r?\n/);
  const words = text.match(/\b[a-zA-Z0-9_-]+\b/g) || [];
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);

  // 1. Run Pleonasm & Couplet Rules
  for (const rule of PLEONASM_AND_COUPLETS_RULES) {
    let match;
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    while ((match = regex.exec(text)) !== null) {
      const lineIdx = text.substring(0, match.index).split(/\r?\n/).length;
      issues.push({
        id: `${rule.id}_${match.index}`,
        ruleId: rule.id,
        severity: rule.severity,
        category: rule.category,
        title: rule.name,
        description: rule.description,
        bookChapterRef: rule.bookChapterRef,
        matchedText: match[0],
        replacementText: rule.replacementGenerator ? rule.replacementGenerator(match[0]) : undefined,
        startIndex: match.index,
        endIndex: match.index + match[0].length,
        lineNumber: lineIdx,
        explanation: rule.explanation
      });
    }
  }

  // 2. Run Drafting Hygiene Rules
  for (const rule of DRAFTING_HYGIENE_RULES) {
    let match;
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    while ((match = regex.exec(text)) !== null) {
      const lineIdx = text.substring(0, match.index).split(/\r?\n/).length;
      issues.push({
        id: `${rule.id}_${match.index}`,
        ruleId: rule.id,
        severity: rule.severity,
        category: rule.category,
        title: rule.name,
        description: rule.description,
        bookChapterRef: rule.bookChapterRef,
        matchedText: match[0],
        replacementText: rule.replacementGenerator ? rule.replacementGenerator(match[0]) : undefined,
        startIndex: match.index,
        endIndex: match.index + match[0].length,
        lineNumber: lineIdx,
        explanation: rule.explanation
      });
    }
  }

  // 3. IT Act Section 1(4) Statutory Exclusions
  for (const exclusion of IT_ACT_EXCLUSIONS) {
    if (exclusion.keyword.test(text)) {
      issues.push({
        id: `it_act_exclusion_${exclusion.instrument}`,
        ruleId: 'it_act_exclusion',
        severity: 'fatal',
        category: 'statutory_exclusion',
        title: `Statutory Warning: ${exclusion.instrument}`,
        description: `${exclusion.instrument} is barred from electronic/digital execution under Indian law.`,
        bookChapterRef: 'Part 9, Chapter 1 (pp. 191-200)',
        matchedText: exclusion.instrument,
        explanation: `${exclusion.reason} Ref: ${exclusion.statutoryRef}`
      });
    }
  }

  // 4. Missing Crucial Clauses (Boilerplate & Operative)
  const missingClauses: string[] = [];
  for (const check of CRUCIAL_BOILERPLATE_CHECKLIST) {
    if (!check.pattern.test(text)) {
      missingClauses.push(check.name);
      issues.push({
        id: `missing_${check.id}`,
        ruleId: `missing_clause_${check.id}`,
        severity: 'high_risk',
        category: 'missing_essential_clause',
        title: `Missing Crucial Provision: ${check.name}`,
        description: `This contract draft does not appear to have an explicit "${check.name}" clause.`,
        bookChapterRef: check.chapterRef,
        matchedText: check.name,
        explanation: `Bhumesh Verma emphasizes in ${check.chapterRef} that omitting "${check.name}" creates critical liability exposure and leaves enforcement open to judicial conjecture.`
      });
    }
  }

  // 5. Parse Defined Terms & Detect Orphan Definitions (Part 5, Ch 14)
  const definedTermsRegex = /["“]([A-Z][a-zA-Z0-9\s]{1,40})["”](\s+(means|shall mean|includes|shall include))/g;
  const definedTermsFound = new Set<string>();
  let defMatch;
  while ((defMatch = definedTermsRegex.exec(text)) !== null) {
    const term = defMatch[1].trim();
    if (term.length > 1) {
      definedTermsFound.add(term);
    }
  }

  const orphanDefinitions: string[] = [];
  definedTermsFound.forEach((term) => {
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matches = text.match(new RegExp(`\\b${escapedTerm}\\b`, 'g'));
    const count = matches ? matches.length : 0;
    if (count <= 1) {
      orphanDefinitions.push(term);
      issues.push({
        id: `orphan_def_${term}`,
        ruleId: 'orphan_definition',
        severity: 'ambiguity',
        category: 'orphan_definition',
        title: `Orphan Definition: "${term}"`,
        description: `The term "${term}" is defined in the agreement but never used anywhere in the operative body.`,
        bookChapterRef: 'Part 5, Chapter 14 (p. 69) & Part 10, Ch 17',
        matchedText: `"${term}"`,
        explanation: 'Bhumesh Verma cautions: "Do not define a term unless you use it in the agreement. It is a familiar sight that an agreement\'s definition clause is flooded with definitions from templates not used anywhere. Delete the definition."'
      });
    }
  });

  // 6. Detect Passive Voice Sentences (Part 10, Ch 18)
  const passiveVoiceRegex = /\b(is|are|was|were|be|been|being)\s+([a-z]{3,15}ed|[a-z]{3,15}en)\s+by\b/gi;
  let passiveSentenceCount = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(passiveVoiceRegex);
    if (match) {
      passiveSentenceCount++;
      issues.push({
        id: `passive_voice_${i}`,
        ruleId: 'passive_voice',
        severity: 'style',
        category: 'passive_voice',
        title: 'Passive Voice Construction',
        description: `Clause uses passive construction ("${match[0]}"). Prefer active voice to clearly demarcate the obligor.`,
        bookChapterRef: 'Part 10, Chapter 18 (pp. 228)',
        matchedText: match[0],
        lineNumber: i + 1,
        explanation: 'Verma writes: "Why be passive? Agreements should be drafted in the active voice. Active voice sentences are more concise and clearly demonstrate as to what party does what."'
      });
    }
  }

  // 7. Detect Run-on Sentences (>45 words) (Part 10, Ch 19)
  let longSentenceCount = 0;
  for (let i = 0; i < sentences.length; i++) {
    const s = sentences[i].trim();
    const wordList = s.match(/\b[a-zA-Z0-9_-]+\b/g) || [];
    if (wordList.length > 45) {
      longSentenceCount++;
      issues.push({
        id: `run_on_${i}`,
        ruleId: 'run_on_sentence',
        severity: 'ambiguity',
        category: 'run_on_sentence',
        title: `Run-on Sentence (${wordList.length} words)`,
        description: 'Sentence exceeds 45 words. Causes cognitive strain and ambiguous interpretation.',
        bookChapterRef: 'Part 10, Chapter 19 (pp. 229-230)',
        matchedText: s.substring(0, 60) + '...',
        explanation: 'Bhumesh Verma notes: "Long sentences are a strain on the brain. If a sentence is too long, the reader tends to lose track. Break long sentences into two or more smaller sentences or sub-clauses."'
      });
    }
  }

  // 8. Broken references
  const brokenReferences: string[] = [];
  issues.filter(i => i.category === 'dead_cross_ref').forEach(i => {
    brokenReferences.push(i.matchedText);
  });

  // 9. Calculate Scoring
  let deductions = 0;
  for (const issue of issues) {
    if (issue.severity === 'fatal') deductions += 25;
    else if (issue.severity === 'high_risk') deductions += 12;
    else if (issue.severity === 'ambiguity') deductions += 5;
    else if (issue.severity === 'style') deductions += 2;
  }

  const score = Math.max(10, Math.min(100, 100 - deductions));

  let grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' = 'A+';
  if (score >= 95) grade = 'A+';
  else if (score >= 85) grade = 'A';
  else if (score >= 70) grade = 'B';
  else if (score >= 55) grade = 'C';
  else if (score >= 40) grade = 'D';
  else grade = 'F';

  let summary = `Draft Health Score: ${score}/100 (Grade ${grade}). Found ${issues.length} potential improvements across statutory compliance, drafting hygiene, and structural completeness.`;
  if (score < 60) {
    summary += ' Warning: Document contains severe risks or missing essential statutory protections under Indian Law.';
  }

  return {
    score,
    grade,
    summary,
    issues,
    metrics: {
      wordCount: words.length,
      sentenceCount: sentences.length,
      readingEaseScore: Math.max(20, Math.min(100, Math.round(206.835 - 1.015 * (words.length / Math.max(1, sentences.length)) - 25))),
      definedTermsCount: definedTermsFound.size,
      orphanDefinitionsCount: orphanDefinitions.length,
      brokenReferencesCount: brokenReferences.length,
      passiveSentenceCount,
      longSentenceCount
    },
    definedTerms: Array.from(definedTermsFound),
    orphanDefinitions,
    brokenReferences,
    missingCrucialClauses: missingClauses
  };
}

export function autoFixDraft(originalText: string, issues: ContractIssue[]): string {
  let modified = originalText;
  
  const fixable = issues
    .filter(i => i.replacementText !== undefined && i.matchedText)
    .sort((a, b) => b.matchedText.length - a.matchedText.length);

  for (const issue of fixable) {
    if (issue.replacementText !== undefined) {
      const regex = new RegExp(issue.matchedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      modified = modified.replace(regex, issue.replacementText);
    }
  }

  return modified;
}
