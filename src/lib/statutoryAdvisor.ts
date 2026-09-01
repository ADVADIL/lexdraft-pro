import { StatutoryComplianceCheck } from './types';

export function checkStatutoryCompliance(contractType: string, text: string): StatutoryComplianceCheck {
  const lowerText = text.toLowerCase();
  const lowerType = contractType.toLowerCase();

  // Check 5 IT Act Exclusions
  let isExcluded = false;
  let exclusionNotice: string | undefined = undefined;

  if (/will|testament|codicil/.test(lowerType) || /last will and testament/.test(lowerText)) {
    isExcluded = true;
    exclusionNotice = "EXCLUSION UNDER IT ACT 2000: Wills and testamentary dispositions cannot be executed via electronic signatures or as e-contracts. Physical paper execution attested by 2 witnesses is mandatory under the Indian Succession Act, 1925.";
  } else if (/power of attorney|poa/.test(lowerType) || /appoints.*attorney/.test(lowerText) && /power of attorney/i.test(text)) {
    isExcluded = true;
    exclusionNotice = "EXCLUSION UNDER IT ACT 2000: Powers of Attorney are excluded from electronic transactions under the First Schedule of IT Act, 2000. Must be executed on physical non-judicial stamp paper and notarized/registered.";
  } else if (/trust/.test(lowerType) || /trust deed/.test(lowerText)) {
    isExcluded = true;
    exclusionNotice = "EXCLUSION UNDER IT ACT 2000: Trust Deeds under the Indian Trusts Act, 1882 cannot be created electronically.";
  } else if (/promissory note|bill of exchange/.test(lowerType) || /promises to pay to the order of/.test(lowerText)) {
    isExcluded = true;
    exclusionNotice = "EXCLUSION UNDER IT ACT 2000: Negotiable instruments (other than cheques) are excluded from e-contract validity under Section 1(4) of IT Act, 2000.";
  } else if (/conveyance|sale deed.*immovable|transfer of property/.test(lowerType) || /conveyance deed/.test(lowerText)) {
    isExcluded = true;
    exclusionNotice = "EXCLUSION UNDER IT ACT 2000: Sale deeds, conveyances, and title transfers of immovable property are excluded from IT Act, 2000. Physical execution, stamp duty, and registration under Section 17 & 23 of Registration Act, 1908 are strictly compulsory.";
  }

  // Registration requirements
  let registrationRequirement: 'Compulsory' | 'Optional' | 'Exempt' = 'Optional';
  if (/lease|conveyance|sale deed|immovable|gift|mortgage/.test(lowerType) || /term.*exceeding.*1.*year/i.test(lowerText)) {
    registrationRequirement = 'Compulsory';
  } else if (/llp agreement|partnership|arbitration agreement/.test(lowerType)) {
    registrationRequirement = 'Compulsory';
  }

  // Stamp Duty guidance (Section 27 & 35 Indian Stamp Act 1899)
  const stampDutyNote = "Under Section 27 of the Indian Stamp Act, 1899, all consideration, discounts, and market value must be fully and truly set forth. Under Section 35, an unstamped or deficiently stamped agreement is inadmissible in evidence before any civil court or arbitrator, unless impounded with up to 10x penalty.";

  const governingActs = [
    "Indian Contract Act, 1872 (Sections 10, 11, 12, 23, 27, 73, 74)",
    "Specific Relief Act, 1963 (Injunctions & Specific Performance)",
    "Indian Stamp Act, 1899 (Stamp Duty Admissibility)",
    "Registration Act, 1908 (Section 23: 4-Month Longstop for Registration)",
    "Arbitration and Conciliation Act, 1996 (Section 7, 8 & 9)"
  ];

  if (!isExcluded) {
    governingActs.push("Information Technology Act, 2000 (Section 10-A: Validity of Contracts Formed Electronically)");
    governingActs.push("Bharatiya Sakshya Adhiniyam, 2023 (Section 63) / Indian Evidence Act, 1872 (Section 65B)");
  }

  return {
    isExcludedUnderITAct: isExcluded,
    exclusionNotice,
    stampDutyNote,
    registrationRequirement,
    registrationDeadline: "Section 23, Registration Act, 1908: Must be presented for registration within 4 (four) months from the date of execution.",
    governingActs,
    evidenceCertificateRequired: !isExcluded
  };
}

export function generateEvidenceCertificate(params: {
  affiantName: string;
  designation: string;
  organization: string;
  deviceDetails: string;
  contractTitle: string;
  dateOfExecution: string;
  hashOrIdentifier?: string;
}): string {
  return `CERTIFICATE UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023
(CORRESPONDING TO SECTION 65B OF THE INDIAN EVIDENCE ACT, 1872)

I, ${params.affiantName}, aged about [•] years, residing at [•], currently holding the position of ${params.designation} at ${params.organization}, do hereby solemnly state and affirm on oath as under:

1. That I am the ${params.designation} of ${params.organization} and in that capacity, I am in lawful charge and control of the electronic records, computer systems, email servers, and digital communications relating to the transaction titled "${params.contractTitle}".

2. That the electronic document titled "${params.contractTitle}" dated ${params.dateOfExecution} produced herewith as Exhibit-A is a true and accurate printout / electronic copy of the record generated, transmitted, and received through our computer systems in the ordinary course of business.

3. That throughout the material period during which the said electronic record was generated and stored, the computer system, printer, and digital communication devices (specifically: ${params.deviceDetails}) were operating properly and in normal working condition. If there were any interruptions or technical interventions, they did not affect the contents or accuracy of the said electronic record.

4. That the contents of the said electronic record reproduce faithfully and accurately the electronic communications, offer, acceptance, and terms exchanged between the parties without any manipulation, fabrication, or tampering.
${params.hashOrIdentifier ? `5. Digital Hash / Transmission Identifier: ${params.hashOrIdentifier}` : ''}

DEPONENT

VERIFICATION:
Verified at [Place] on this [Date] day of [Month, Year], that the contents of the above certificate are true and correct to the best of my knowledge, information derived from lawful electronic records, and belief. No material fact has been concealed.

DEPONENT
`;
}
