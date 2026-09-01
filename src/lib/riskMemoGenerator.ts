import { ClientRiskMemo } from './types';

export function generateRiskMemo(params: {
  contractText: string;
  clientRole: string;
  counterpartyName?: string;
}): ClientRiskMemo {
  const text = params.contractText;
  const lower = text.toLowerCase();

  // Extract Contract Title
  const titleMatch = text.match(/^([A-Z\s]{4,60}(?:AGREEMENT|DEED|CONTRACT|LETTER))/m);
  const contractTitle = titleMatch ? titleMatch[1].trim() : 'Commercial Agreement';

  // Liability Cap Analysis
  let liabilityCap = 'UNCAPPED / NOT FOUND - High Financial Exposure';
  const capMatch = text.match(/(?:liability|aggregate liability|in no event shall).*?(?:not exceed|limited to|capped at)\s+([^.;\n]+)/i);
  if (capMatch) {
    liabilityCap = capMatch[1].trim();
  }

  // Indemnity Scope
  let indemnityScope = 'Standard Indemnity';
  if (/each party.*indemnify.*other party/i.test(text) || /mutual.*indemnity/i.test(text)) {
    indemnityScope = 'Mutual Indemnification (Balanced)';
  } else if (/shall indemnify, defend, and hold harmless the company/i.test(text)) {
    indemnityScope = 'One-Sided Indemnity in favor of Counterparty (Adverse)';
  } else if (!/indemnify|indemnification/i.test(text)) {
    indemnityScope = 'No Express Indemnity Clause Found';
  }

  // Termination Rights
  let terminationRights = 'Mutual Termination for Cause with notice';
  if (/terminate.*for convenience/i.test(text) || /without cause/i.test(text)) {
    const noticeMatch = text.match(/(?:providing|giving|upon)\s+(\d+|\w+)\s+days?['\s]+(?:prior\s+)?written notice/i);
    terminationRights = `Termination for Convenience permitted (${noticeMatch ? noticeMatch[1] + ' days notice' : 'check notice period'})`;
  }

  // Lock-In Duration
  let lockInDuration = 'None specified';
  const lockMatch = text.match(/(?:lock-in|lock in|initial restriction).*?(?:period of|for)\s+([^.;\n]+)/i);
  if (lockMatch) {
    lockInDuration = lockMatch[1].trim();
  }

  // Non-Compete
  let nonCompetePeriod = 'None';
  const ncMatch = text.match(/(?:non-compete|competitive activities|not engage).*?(?:period of|for)\s+(\d+\s*(?:months?|years?))/i);
  if (ncMatch) {
    nonCompetePeriod = ncMatch[1].trim();
  }

  // Dispute Forum
  let disputeResolutionForum = 'Courts of competent jurisdiction';
  const arbMatch = text.match(/arbitration.*?(?:at|in|seat.*?)\s+([A-Z][a-zA-Z\s]{3,25})/i);
  if (arbMatch) {
    disputeResolutionForum = `Arbitration under Act of 1996 (Seat: ${arbMatch[1].trim()})`;
  }

  // Red Flags
  const redFlags: string[] = [];
  if (liabilityCap.includes('UNCAPPED')) {
    redFlags.push('No aggregate financial liability cap found. Client exposed to unlimited claims.');
  }
  if (/sole and absolute discretion/i.test(text)) {
    redFlags.push('Counterparty possesses unilateral "sole and absolute discretion" in key provisions.');
  }
  if (!/force majeure/i.test(text)) {
    redFlags.push('Missing Force Majeure clause: no protection against pandemics, regulatory shutdowns, or acts of God.');
  }
  if (/means and includes/i.test(text)) {
    redFlags.push('Defective definition structure ("means and includes") creates ambiguity in interpretation.');
  }
  if (nonCompetePeriod !== 'None' && /years/i.test(nonCompetePeriod)) {
    redFlags.push(`Post-termination non-compete of ${nonCompetePeriod} may be challenged under Section 27 of Indian Contract Act.`);
  }

  const recommendations: string[] = [
    'Ensure liability is explicitly capped to 100% of 12 months contract value.',
    'Require mutual 30-day notice and cure period before any termination for default.',
    'Insert statutory exclusions to confidentiality and limitation of liability carve-outs.',
    'Verify true consideration disclosure under Section 27 of Indian Stamp Act, 1899 to avoid Section 35 evidence inadmissibility.'
  ];

  return {
    contractTitle,
    clientRole: params.clientRole,
    counterparty: params.counterpartyName || 'Counterparty',
    liabilityCap,
    indemnityScope,
    terminationRights,
    lockInDuration,
    nonCompetePeriod,
    disputeResolutionForum,
    criticalRedFlags: redFlags,
    recommendations
  };
}
