export type IssueSeverity = 'fatal' | 'high_risk' | 'ambiguity' | 'style';

export type IssueCategory = 
  | 'statutory_exclusion'
  | 'pleonasm_couplet'
  | 'means_and_includes'
  | 'capital_punishment'
  | 'date_format'
  | 'number_format'
  | 'dead_cross_ref'
  | 'orphan_definition'
  | 'undefined_term'
  | 'passive_voice'
  | 'run_on_sentence'
  | 'repetitive_agree'
  | 'missing_essential_clause'
  | 'unilateral_clause';

export interface ContractIssue {
  id: string;
  ruleId: string;
  severity: IssueSeverity;
  category: IssueCategory;
  title: string;
  description: string;
  bookChapterRef: string;
  matchedText: string;
  replacementText?: string;
  startIndex?: number;
  endIndex?: number;
  lineNumber?: number;
  explanation: string;
}

export interface AuditResult {
  score: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
  summary: string;
  issues: ContractIssue[];
  metrics: {
    wordCount: number;
    sentenceCount: number;
    readingEaseScore: number;
    definedTermsCount: number;
    orphanDefinitionsCount: number;
    brokenReferencesCount: number;
    passiveSentenceCount: number;
    longSentenceCount: number;
  };
  definedTerms: string[];
  orphanDefinitions: string[];
  brokenReferences: string[];
  missingCrucialClauses: string[];
}

export interface SpecimenAgreement {
  id: string;
  title: string;
  category: 'Commercial' | 'Corporate & Investment' | 'Employment & HR' | 'IP & Technology' | 'Real Estate & Infrastructure';
  pages: string;
  chapter: string;
  description: string;
  defaultTemplate: string;
  recommendedParties: {
    firstPartyRole: string;
    secondPartyRole: string;
    thirdPartyRole?: string;
  };
  keyProvisions: string[];
}

export interface ClauseBankItem {
  id: string;
  category: string;
  title: string;
  chapterRef: string;
  description: string;
  balancedClause: string;
  proDisclosingOrLicensor: string;
  proRecipientOrLicensee: string;
  negotiationTips: string[];
}

export interface StatutoryComplianceCheck {
  isExcludedUnderITAct: boolean;
  exclusionNotice?: string;
  stampDutyNote: string;
  registrationRequirement: 'Compulsory' | 'Optional' | 'Exempt';
  registrationDeadline: string;
  governingActs: string[];
  evidenceCertificateRequired: boolean;
}

export interface ClientRiskMemo {
  contractTitle: string;
  clientRole: string;
  counterparty: string;
  liabilityCap: string;
  indemnityScope: string;
  terminationRights: string;
  lockInDuration: string;
  nonCompetePeriod: string;
  disputeResolutionForum: string;
  criticalRedFlags: string[];
  recommendations: string[];
}
