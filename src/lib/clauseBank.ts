import { ClauseBankItem } from './types';

export const MASTER_CLAUSE_BANK: ClauseBankItem[] = [
  {
    id: 'indemnity_defense',
    category: 'Operative - Risk Allocation',
    title: 'Indemnity & Defense Clause',
    chapterRef: 'Part 6, Chapter 18 (pp. 116-117)',
    description: 'Delineates primary indemnification obligations, distinction from secondary guarantees, defense obligations, and settlement controls.',
    balancedClause: `Each Party (as an "Indemnifying Party") shall indemnify, defend, and hold harmless the other Party and its directors, officers, employees, and affiliates (collectively, "Indemnified Parties") from and against all actual third-party claims, liabilities, losses, damages, and reasonable legal costs incurred arising directly from: (a) any material breach of this Agreement or representation and warranty; or (b) the gross negligence or wilful misconduct of the Indemnifying Party. 

The Indemnified Party shall provide prompt written notice of any claim. The Indemnifying Party shall have the right to control the defense, provided that no settlement admitting liability or imposing financial burden on the Indemnified Party shall be agreed without the prior written consent of the Indemnified Party.`,
    proDisclosingOrLicensor: `The Counterparty shall defend, indemnify, and hold harmless the Company, its parent entities, subsidiaries, affiliates, directors, officers, and employees from and against any and all claims, demands, liabilities, damages, penalties, fines, and legal costs (including full attorney fees) arising directly or indirectly from any act, omission, breach of warranty, negligence, or failure to comply with statutory regulations by the Counterparty or its personnel.`,
    proRecipientOrLicensee: `The Counterparty shall indemnify the Client against all third-party claims alleging infringement of intellectual property, regulatory non-compliance, or breach of confidentiality resulting from the materials, systems, or instructions supplied by the Counterparty. Client's liability under this Agreement shall in all events be strictly limited to direct damages and subject to the Limitation of Liability cap.`,
    negotiationTips: [
      'Indemnity creates a primary obligation under Section 124 of the Indian Contract Act; it does not require a prior third-party default like a guarantee.',
      'Always insert a prompt notice requirement and bar settlements without mutual consent.',
      'Exclude indirect, consequential, and punitive damages from indemnification.'
    ]
  },
  {
    id: 'limitation_of_liability',
    category: 'Operative - Risk Allocation',
    title: 'Limitation of Liability & Liability Cap',
    chapterRef: 'Part 6, Chapter 28 (pp. 150-152)',
    description: 'Caps aggregate financial exposure and waives special, indirect, or consequential damages.',
    balancedClause: `To the maximum extent permitted by applicable law:
(a) In no event shall either Party be liable to the other Party for any indirect, incidental, special, exemplary, punitive, or consequential damages, or loss of profits, revenue, goodwill, or business opportunity, arising out of or in connection with this Agreement.
(b) The aggregate cumulative liability of either Party for all claims arising under or related to this Agreement, whether in contract, tort (including negligence), or otherwise, shall not exceed the total fees actually received by or paid to the Service Provider under this Agreement during the twelve (12) months immediately preceding the event giving rise to liability.
(c) The limitations in this Clause shall not apply to breaches of confidentiality obligations, infringement of intellectual property rights, or liabilities arising from gross negligence or wilful misconduct.`,
    proDisclosingOrLicensor: `The aggregate cumulative liability of the Licensor/Provider under this Agreement shall in no event exceed the total fees actually received by the Licensor in the preceding three (3) months or INR 50,000 (Fifty Thousand Rupees), whichever is less. In no event shall Licensor be liable for any lost profits, downtime, or indirect damages.`,
    proRecipientOrLicensee: `The Service Provider shall have unlimited liability for any breach of confidentiality, data protection obligations, regulatory fines, and third-party intellectual property indemnity claims. The general liability cap for other claims shall be equal to twice the total contract value.`,
    negotiationTips: [
      'Uncapped liability can cause company insolvency over a small commercial fee.',
      'Always include explicit carve-outs for confidentiality breach and gross negligence to ensure enforceability in court.',
      'Under Indian law, complete exoneration for fraud or intentional wrongdoing is void as against public policy.'
    ]
  },
  {
    id: 'force_majeure_tripartite',
    category: 'Operative - Performance',
    title: 'Force Majeure (Non-Political & Political)',
    chapterRef: 'Part 6, Chapter 27 (pp. 144-149)',
    description: 'Comprehensive force majeure clause distinguishing natural acts of god from political/statutory disruptions, with 30-day notice and 120-day termination.',
    balancedClause: `1. Neither Party shall be liable for any delay or failure to perform its obligations (other than payment obligations) if such failure results from a Force Majeure Event beyond its reasonable control.
2. "Force Majeure Event" means:
   (a) Non-Political Events: Acts of God, earthquake, cyclone, flood, epidemic, fire, explosion, or nationwide infrastructure blackout;
   (b) Political Events: Unlawful revocation of permits, early statutory changes, embargoes, war, invasion, or civil commotion.
3. The Affected Party shall notify the other Party in writing within seven (7) days of the occurrence, specifying reasonable mitigation measures.
4. If a Force Majeure Event continues for a continuous period exceeding ninety (90) days, either Party may terminate this Agreement by giving thirty (30) days prior written notice without liability, except for accrued obligations.`,
    proDisclosingOrLicensor: `If any Force Majeure event persists for more than thirty (30) days, the Service Provider shall have the unilateral right to terminate the project and be paid for all work performed and costs committed up to the date of suspension.`,
    proRecipientOrLicensee: `The occurrence of a Force Majeure event shall excuse Client from minimum purchase commitments and permit Client to procure equivalent services from alternative vendors during the period of suspension without penalty.`,
    negotiationTips: [
      'Always explicitly exclude payment obligations from Force Majeure suspension.',
      'Specify a Long-Stop termination threshold (typically 90 to 120 days) to prevent perpetual contractual limbo.',
      'Ensure the affected party has a duty to mitigate loss and keep the other party updated weekly.'
    ]
  },
  {
    id: 'confidentiality_5_exceptions',
    category: 'Operative - Restrictive Covenants',
    title: 'Confidentiality & 5 Standard Carve-Outs',
    chapterRef: 'Part 6, Chapter 10 (pp. 98-101) & Part 10, Ch 12',
    description: 'Binds recipient to standard of care, provides the 5 customary exceptions, mandatory return/destruction, and compelled disclosure protocol.',
    balancedClause: `1. "Confidential Information" means all non-public technical, commercial, financial, or proprietary information disclosed by one Party ("Disclosing Party") to the other ("Receiving Party") in connection with this Agreement.
2. Exclusions: Confidential Information shall not include information that:
   (i) is or becomes publicly known through no breach of this Agreement by the Receiving Party;
   (ii) was in lawful possession of the Receiving Party prior to disclosure without confidentiality restrictions;
   (iii) is rightfully acquired from a third party who owes no duty of confidence;
   (iv) is independently developed by the Receiving Party without reference to the Disclosing Party's information; or
   (v) is approved for release by prior written authorization of the Disclosing Party.
3. The Receiving Party shall protect Confidential Information with the same degree of care it uses for its own confidential data, but not less than a reasonable standard of care, and shall disclose it only to employees with a bona fide need-to-know.
4. Compelled Disclosure: If legally ordered by a court or governmental authority to disclose, the Receiving Party shall provide prompt written notice to enable the Disclosing Party to seek a protective order.
5. This obligation shall survive for three (3) years following termination of this Agreement. Within seven (7) days of written request, the Receiving Party shall return or securely destroy all materials.`,
    proDisclosingOrLicensor: `Confidential Information shall include all trade secrets, source code, client lists, and pricing models. The Receiving Party shall keep the information confidential in perpetuity. Any breach shall entitle the Disclosing Party to liquidated damages and immediate ex-parte injunctive relief without proving actual damages.`,
    proRecipientOrLicensee: `Only information clearly marked as "CONFIDENTIAL" in writing at the time of disclosure shall be protected. Oral disclosures must be confirmed in writing within fifteen (15) days. Confidentiality obligations shall terminate strictly upon two (2) years from disclosure.`,
    negotiationTips: [
      'The 5 exclusions are market standard in Indian and cross-border commercial practice.',
      'Ensure the burden of proving that an exception applies rests on the receiving party.',
      'Set an explicit timeline (e.g. 2 to 7 days) for return or destruction of materials post-termination.'
    ]
  },
  {
    id: 'non_compete_sec_27',
    category: 'Operative - Restrictive Covenants',
    title: 'Non-Compete & Reasonableness (Section 27 ICA)',
    chapterRef: 'Part 6, Chapter 12 (pp. 103-104) & Part 4, Ch 3',
    description: 'Drafted in compliance with Section 27 of the Indian Contract Act, 1872 (agreements in restraint of trade).',
    balancedClause: `During the subsistence of this Agreement and for a period of one (1) year following the Effective Date of termination, the Consultant/Partner agrees not to, directly or indirectly, engage in, advise, or promote any business activity that directly competes with the specific core business of the Company within the Territory, provided that: (a) this restriction shall apply only within the geographical territory where the Company operates; and (b) holding up to two percent (2%) in equity of a publicly listed company without management control shall not constitute a violation of this covenant.`,
    proDisclosingOrLicensor: `The Employee/Promoter shall not for a period of two (2) years post-termination engage in any business similar to that of the Company anywhere in India or abroad, nor invest in, manage, or advise any competing enterprise.`,
    proRecipientOrLicensee: `The non-compete covenant shall apply solely during the active term of this engagement and shall immediately cease and expire upon termination, in strict accordance with Section 27 of the Indian Contract Act, 1872.`,
    negotiationTips: [
      'Under Indian law (Section 27 Contract Act), post-employment non-compete clauses are generally void unless falling under the narrow statutory exception of sale of goodwill.',
      'During the term of employment/partnership, exclusivity covenants are valid and enforceable.',
      'Always limit geographic scope and define the restricted business precisely.'
    ]
  },
  {
    id: 'tiered_dispute_resolution',
    category: 'Boilerplate - Dispute Resolution',
    title: 'Tiered Dispute Resolution & Multi-Seat Arbitration',
    chapterRef: 'Part 7, Chapter 11 (pp. 173-175)',
    description: 'Tiered escalation from amicable CEO discussions to mediation and sole/tribunal arbitration under the Indian Arbitration and Conciliation Act, 1996.',
    balancedClause: `1. Amicable Settlement: In the event of any dispute, claim, or difference arising out of or in connection with this Agreement ("Dispute"), the Parties shall first endeavor to resolve the Dispute amicably through mutual discussions between senior executive officers (CEOs/Managing Directors) of each Party within thirty (30) days of written notice.
2. Arbitration: If the Dispute is not resolved through senior discussions within thirty (30) days, the Dispute shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.
3. The arbitral tribunal shall consist of a sole arbitrator mutually agreed upon by the Parties within thirty (30) days. Failing mutual agreement, the arbitrator shall be appointed in accordance with the Act.
4. The seat and venue of arbitration shall be New Delhi, India. The language of arbitration shall be English.
5. The award of the arbitrator shall be final, reasoned, and binding on both Parties. Each Party shall bear its own legal fees, and the arbitrator's costs shall be shared equally unless awarded otherwise.`,
    proDisclosingOrLicensor: `All disputes shall be submitted to an arbitral tribunal of three (3) arbitrators at Mumbai, conducted under LCIA/SIAC rules, with the prevailing party entitled to full reimbursement of all attorney fees and expenses.`,
    proRecipientOrLicensee: `All disputes shall be referred to a sole arbitrator in Chennai appointed by the Chief Justice of the Madras High Court. Emergency interim relief under Section 9 of the Act may be sought from competent civil courts having jurisdiction over the Client's registered office.`,
    negotiationTips: [
      'For agreements under INR 5 Crores, always designate a sole arbitrator to prevent ruinous tribunal costs.',
      'Specify the "Seat" of arbitration, which determines the supervisory court jurisdiction (following the Supreme Court ruling in BALCO).',
      'Ensure the clause provides for interim relief under Section 9 of the 1996 Act.'
    ]
  },
  {
    id: 'liquidated_damages',
    category: 'Operative - Remedies',
    title: 'Liquidated Damages & Sole Remedy',
    chapterRef: 'Part 6, Chapter 15 (pp. 110-112)',
    description: 'Establishes genuine pre-estimate of loss under Section 74 of the Indian Contract Act, 1872, avoiding penal characterization.',
    balancedClause: `1. The Parties acknowledge and agree that failure by the Contractor to deliver the Milestones within the agreed schedules will cause substantial financial loss and operational disruption to the Company, the exact monetary value of which would be difficult to calculate at the time of contracting.
2. Accordingly, in lieu of actual damages, the Contractor agrees to pay as liquidated damages a sum equal to 0.5% (zero point five percent) of the contract price for each week of delay, capped at a maximum of 10% (ten percent) of the total contract price.
3. The Parties expressly agree that this amount represents a genuine and reasonable pre-estimate of anticipated damages and is not intended as a penalty.
4. Liquidated damages under this Clause shall constitute the Company's sole and exclusive financial remedy for delayed delivery, without limiting the Company's right to terminate for material breach.`,
    proDisclosingOrLicensor: `Delayed delivery shall attract liquidated damages of 2% per day of the total contract value, payable immediately without prejudice to the Company's right to claim additional unliquidated consequential damages.`,
    proRecipientOrLicensee: `Liquidated damages shall apply only after a grace cure period of fifteen (15) days from notice of delay and shall be capped at 5% of the affected milestone value. Delay caused by client dependency shall proportionately extend the schedule.`,
    negotiationTips: [
      'Section 74 of the Indian Contract Act allows reasonable compensation not exceeding the penalty stipulated (Kailash Nath Associates case).',
      'The clause must state that the amount is a genuine pre-estimate of damages due to difficulty in exact estimation.',
      'Pair liquidated damages as the "sole and exclusive remedy" for that specific breach to avoid double-dipping.'
    ]
  },
  {
    id: 'entire_agreement',
    category: 'Boilerplate - Miscellaneous',
    title: 'Entire Agreement & Supersession of MOUs',
    chapterRef: 'Part 7, Chapter 12 & 13 (pp. 176-178)',
    description: 'Cancels and supersedes all prior Letters of Intent, MOUs, and oral negotiations.',
    balancedClause: `This Agreement, together with its Schedules, Annexures, and exhibits, constitutes the complete, final, and exclusive agreement between the Parties regarding the subject matter hereof and supersedes and cancels all prior negotiations, understandings, proposals, Letters of Intent (LOI), Memoranda of Understanding (MOU), and agreements, whether oral or written. No representation, warranty, or promise not expressly set forth in this Agreement shall be binding upon either Party.`,
    proDisclosingOrLicensor: `This Agreement supersedes all prior communications. Counterparty acknowledges it has not relied on any representation, warranty, or collateral statement not expressly set forth herein.`,
    proRecipientOrLicensee: `This Agreement supersedes prior arrangements, provided that representations contained in the approved proposal and technical specifications dated [•] shall remain valid and binding.`,
    negotiationTips: [
      'Essential to terminate non-binding MOUs and preliminary term sheets.',
      'Pair with a "No Reliance" clause to preclude misrepresentation claims regarding pre-contract discussions.'
    ]
  }
];
