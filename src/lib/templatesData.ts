import { SpecimenAgreement } from './types';

export const SPECIMEN_AGREEMENTS: SpecimenAgreement[] = [
  {
    id: 'nda',
    title: 'Non-Disclosure Agreement (Mutual NDA)',
    category: 'Commercial',
    pages: 'pp. 392-395',
    chapter: 'Part 11, Specimen 17',
    description: 'Mutual non-disclosure agreement for commercial negotiations, joint ventures, and evaluation of corporate opportunities.',
    recommendedParties: {
      firstPartyRole: 'Disclosing Party / Company',
      secondPartyRole: 'Receiving Party / Corporation'
    },
    keyProvisions: ['Definition of Confidential Information', '5 Customary Exclusions', 'Compelled Disclosure Notice', 'Return/Destruction within 15 Days', '3-Year Term'],
    defaultTemplate: `NON-DISCLOSURE AGREEMENT

This NON-DISCLOSURE AGREEMENT (the "Agreement") is made on this [•] day of [Month], [Year] (the "Effective Date") at [Place]:

BETWEEN:
1. [Company Name] Private Limited, a company incorporated under the Companies Act, 2013, with CIN [•], PAN [•] and having its registered office located at [Address] (hereinafter referred to as the "Company"); and

2. [Corporation Name] Limited, a company incorporated under the laws of [•], with CIN/Registration No. [•], PAN [•] and its registered office located at [Address] (hereinafter referred to as the "Corporation").

(The Company and the Corporation are hereinafter individually referred to as a "Party" and collectively as the "Parties".)

RECITALS
WHEREAS:
A. The Parties are in commercial discussions for the purpose of [Purpose of Discussion, e.g. evaluating a strategic transaction or joint venture] in India (the "Project");
B. In the course of such discussions, each Party may disclose to the other certain proprietary and non-public information; and
C. In order to protect the confidentiality and proprietary nature of such information, the Parties desire to enter into this Agreement.

NOW, THEREFORE, the Parties agree as follows:

1. Confidential Information
1.1 During the course of discussions related to the Project, a Party ("Disclosing Party") may disclose to the other Party ("Receiving Party") certain non-public business, financial, technical, or operational information marked as confidential or disclosed under circumstances reasonably indicating confidentiality ("Confidential Information").
1.2 Any information disclosed orally shall be treated as Confidential Information, provided it is identified as confidential at the time of oral disclosure and confirmed in writing within fifteen (15) days.

2. Exclusions
Confidential Information shall not include information that:
(a) is or becomes publicly available through no breach of this Agreement by the Receiving Party;
(b) was in the lawful possession of the Receiving Party prior to disclosure without any confidentiality obligation;
(c) is rightfully received from a third party not bound by a confidentiality duty;
(d) is independently developed by the Receiving Party without reference to or use of the Confidential Information; or
(e) is approved for release by prior written consent of the Disclosing Party.

3. Standard of Care & Permitted Use
3.1 The Receiving Party shall protect Confidential Information with at least the same degree of care as it uses for its own confidential information of like nature, but in no event less than a reasonable degree of care.
3.2 The Receiving Party shall use Confidential Information solely for evaluating and performing the Project and shall disclose it only to its directors, officers, and professional advisors on a strict need-to-know basis.

4. Compelled Disclosure
If required by law or a valid court order to disclose Confidential Information, the Receiving Party shall provide prompt written notice to the Disclosing Party to enable the Disclosing Party to seek a protective order.

5. Term & Return of Materials
5.1 This Agreement shall remain in effect for a period of three (3) years from the Effective Date.
5.2 Upon written request or termination, the Receiving Party shall promptly return or securely destroy all originals and copies of Confidential Information within seven (7) days.

6. Governing Law & Arbitration
6.1 This Agreement shall be governed by and construed in accordance with the laws of India.
6.2 Any dispute arising out of this Agreement shall be referred to and resolved by a sole arbitrator in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be [City, e.g. New Delhi], and proceedings shall be in English.

IN WITNESS WHEREOF, the Parties have executed this Agreement by their authorized representatives.

For [Company Name] Private Limited:
By: ______________________
Name: [•]
Title: [•]

For [Corporation Name] Limited:
By: ______________________
Name: [•]
Title: [•]`
  },
  {
    id: 'consulting',
    title: 'Consulting Agreement',
    category: 'Commercial',
    pages: 'pp. 300-309',
    chapter: 'Part 11, Specimen 10',
    description: 'Agreement for retention of expert consultant with work-for-hire IP assignment, confidentiality, non-compete, and fee milestones.',
    recommendedParties: {
      firstPartyRole: 'Client / Company',
      secondPartyRole: 'Independent Consultant'
    },
    keyProvisions: ['Scope of Services', 'Consulting Fees & Tax Deductions', 'IP Work-for-Hire Assignment', 'Independent Contractor Status', 'Non-Compete & Non-Solicit'],
    defaultTemplate: `CONSULTING AGREEMENT

This Consulting Agreement (the "Agreement") is entered into on this [•] day of [Month], [Year] (the "Effective Date") at [Place]:

BY AND BETWEEN:
1. [Company Name] Private Limited, a company incorporated under the Companies Act, 2013, having CIN: [•], PAN: [•] and registered office at [Address] (hereinafter referred to as the "Company"); and

2. Mr./Ms. [Consultant Name], son/daughter of [•], having PAN: [•], Aadhar: [•] and residing at [Address] (hereinafter referred to as the "Consultant").

(The Company and the Consultant are hereinafter referred to individually as a "Party" and collectively as "the Parties".)

RECITALS
WHEREAS:
A. The Company is engaged in the business of [Business Description];
B. The Consultant possesses specialized expertise in [Consulting Field] and desires to render advisory services to the Company; and
C. The Parties wish to reduce their understanding into writing.

NOW THEREFORE, the Parties agree as follows:

1. Engagement & Scope of Services
1.1 The Company hereby engages the Consultant to perform the consulting services described in Annexure 1 (the "Services"), and the Consultant accepts such engagement.
1.2 The Consultant shall perform the Services diligently, professionally, and in accordance with highest ethical standards.
1.3 Independent Contractor: The Consultant shall act as an independent contractor. Nothing herein creates an employer-employee, partnership, or agency relationship.

2. Term & Termination
2.1 This Agreement shall commence on the Effective Date and continue for a term of one (1) year, unless terminated earlier.
2.2 Either Party may terminate this Agreement without cause by giving thirty (30) days prior written notice.
2.3 The Company may terminate immediately for cause upon: (a) material breach uncured within seven (7) days of notice; (b) fraud or wilful misconduct; or (c) insolvency.

3. Fees & Expenses
3.1 In consideration of the Services, the Company shall pay the Consultant a monthly fee of INR [•] (Rupees [•] only) within fifteen (15) days of receipt of monthly invoice.
3.2 All payments shall be subject to statutory withholding of tax at source (TDS) under applicable Indian income tax laws.

4. Intellectual Property Assignment
4.1 All ideas, inventions, reports, software, data, drawings, and work product developed or delivered by the Consultant in performing the Services (the "Work Product") shall be deemed "work made for hire" and belong exclusively to the Company.
4.2 To the extent any Work Product does not qualify as work made for hire, the Consultant hereby irrevocably and perpetually assigns all worldwide intellectual property rights in such Work Product to the Company.

5. Confidentiality & Non-Solicitation
5.1 The Consultant shall hold all Company confidential information in strict confidence during the term and for three (3) years thereafter.
5.2 For one (1) year following termination, the Consultant shall not solicit any employee, customer, or vendor of the Company.

6. Governing Law & Jurisdiction
This Agreement shall be governed by Indian law. Courts at [City] shall have exclusive jurisdiction.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For [Company Name] Private Limited:
By: ______________________
Name: [•]
Title: Director

[Consultant Name]:
Signature: ______________________`
  },
  {
    id: 'employment',
    title: 'Employment Agreement (Executive / CEO)',
    category: 'Employment & HR',
    pages: 'pp. 310-318',
    chapter: 'Part 11, Specimen 11',
    description: 'Executive employment agreement for CEO/Managing Director with detailed termination for cause, non-compete, and confidentiality.',
    recommendedParties: {
      firstPartyRole: 'Employer / Company',
      secondPartyRole: 'Executive / Employee'
    },
    keyProvisions: ['Appointment & Duties', 'Remuneration & Deductions', 'Termination for Cause vs Convenience', 'IP Assignment', 'Non-Compete Restrictions'],
    defaultTemplate: `EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is executed at [City] as of [Date]:

BY AND BETWEEN:
1. [Company Name] Limited, a company incorporated under the Companies Act, 2013, CIN [•], PAN [•] having its registered office at [Address] (the "Company"); and

2. Mr. [Employee Name], son of [•], residing at [Address], PAN [•], Aadhar [•] ("the Executive").

WHEREAS:
A. The Company desires to employ the Executive as Chief Executive Officer ("CEO"), and the Executive has agreed to serve in such capacity;
B. The Board of Directors of the Company has approved this appointment by resolution dated [•];

NOW THIS AGREEMENT WITNESSES AS FOLLOWS:

1. Appointment & Tenure
1.1 The Company hereby appoints the Executive as Chief Executive Officer for a term of three (3) years commencing on [Start Date] ("Effective Date").
1.2 The Executive shall devote full business time and best efforts to the affairs of the Company and report directly to the Board of Directors.

2. Remuneration & Benefits
2.1 In consideration of services, the Company shall pay the Executive a gross monthly salary of INR [•] (Rupees [•] only) subject to statutory deductions including Tax Deducted at Source (TDS) and Provident Fund.
2.2 The Executive shall be entitled to annual performance incentives as determined by the Nomination and Remuneration Committee.

3. Termination of Employment
3.1 Termination for Cause: The Company may terminate employment immediately without notice or severance for Cause (fraud, moral turpitude, wilful disobedience, gross misconduct, or material breach).
3.2 Termination for Convenience: Either Party may terminate employment by giving three (3) months prior written notice or payment of basic salary in lieu thereof.

4. Intellectual Property Rights
All works of authorship, inventions, software code, and improvements developed by the Executive during the course of employment shall be "works made for hire" under the Copyright Act, 1957, and belong exclusively to the Company.

5. Restrictive Covenants
During employment and for a period of one (1) year following termination, the Executive shall not: (a) engage in any competing business; (b) solicit employees of the Company; or (c) disclose any confidential trade secrets.

6. Governing Law & Arbitration
This Agreement shall be governed by Indian laws. Disputes shall be resolved by arbitration in [City] under the Arbitration and Conciliation Act, 1996.

IN WITNESS WHEREOF, the Parties have signed this Agreement.

For [Company Name] Limited:
By: ______________________
Director

Executive:
Signature: ______________________`
  },
  {
    id: 'joint_venture',
    title: 'Joint Venture Agreement (JVA)',
    category: 'Corporate & Investment',
    pages: 'pp. 323-351',
    chapter: 'Part 11, Specimen 13',
    description: 'Comprehensive 50:50 Joint Venture Agreement establishing a new Indian corporate entity, board constitution, reserved matters, deadlock, ROFR, and tag-along rights.',
    recommendedParties: {
      firstPartyRole: 'Foreign / Technical Partner',
      secondPartyRole: 'Indian Commercial Partner'
    },
    keyProvisions: ['JVC Incorporation & Capitalization', 'Board Composition & Quorum', 'Reserved Matters (Supermajority)', 'Deadlock Escalation', 'ROFR & Tag Along'],
    defaultTemplate: `JOINT VENTURE AGREEMENT

This Joint Venture Agreement (the "Agreement") is made on this [•] day of [Month, Year] at [Place]:

BY AND BETWEEN:
1. [Foreign Partner Name] Inc./Limited, a company incorporated under the laws of [Country], having its corporate office at [Address] (hereinafter referred to as "Partner A"); and

2. [Indian Partner Name] Private Limited, a company incorporated under the Companies Act, 2013, CIN [•], PAN [•], having its registered office at [Address] (hereinafter referred to as "Partner B").

WHEREAS:
A. Partner A possesses advanced proprietary technology in [Sector/Product];
B. Partner B possesses manufacturing infrastructure and distribution networks in India;
C. The Parties desire to incorporate a joint venture company ("JVC") in India with equal (50:50) shareholding;

NOW THEREFORE, the Parties agree as follows:

1. Incorporation of Joint Venture Company
1.1 The Parties shall incorporate a private limited company under the Companies Act, 2013 named "[Proposed Name] Private Limited".
1.2 The initial authorized share capital shall be INR [•] divided into [•] equity shares of INR 10/- each.

2. Management & Board of Directors
2.1 The Board of Directors shall comprise four (4) directors. Partner A and Partner B shall each nominate two (2) directors.
2.2 Quorum: Valid quorum requires at least one (1) nominee director of Partner A and one (1) nominee director of Partner B.
2.3 The Chairman shall alternate annually between the nominees of each Party.

3. Reserved Matters
No action relating to capital increase, borrowing exceeding INR [•], M&A, related party transactions, or amendment of Charter Documents shall be taken without unanimous affirmative approval of both Parties.

4. Deadlock Resolution
If the Board fails to resolve any matter within two consecutive meetings, the matter shall be referred to the respective CEOs for thirty (30) days. If unresolved, either Party may trigger a reciprocal Buy-Sell mechanism or initiate arbitration.

5. Transfer of Shares & Exit
Neither Party shall transfer shares for a lock-in period of two (2) years from Closing. Thereafter, any proposed transfer shall be subject to Right of First Refusal (ROFR) and Tag-Along Rights.

6. Governing Law & Dispute Resolution
Governing law shall be the laws of India. Disputes shall be resolved by an arbitral tribunal of three arbitrators under the Arbitration and Conciliation Act, 1996 at [Seat, e.g. New Delhi].

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For [Partner A]:
Signature: ______________________

For [Partner B]:
Signature: ______________________`
  },
  {
    id: 'master_services_agreement',
    title: 'Master Service Agreement (MSA)',
    category: 'Commercial',
    pages: 'pp. 352-359',
    chapter: 'Part 11, Specimen 14',
    description: 'Standard framework agreement governing multiple Statements of Work (SOWs), deliverable acceptance, service warranties, and IP ownership.',
    recommendedParties: {
      firstPartyRole: 'Client / Customer',
      secondPartyRole: 'Supplier / Service Provider'
    },
    keyProvisions: ['Framework SOW Structure', 'Acceptance Procedure (15 Days)', 'Deliverable Ownership vs Supplier IP', 'Limitation of Liability Cap', '180-Day Transition Support'],
    defaultTemplate: `MASTER SERVICE AGREEMENT

This MASTER SERVICE AGREEMENT (the "Agreement") is made on [Date] at [Place]:

BETWEEN:
1. [Client Company Name] Private Limited, CIN [•], PAN [•], having registered office at [Address] ("the Company"); and
2. [Service Provider Name] Private Limited, CIN [•], PAN [•], having registered office at [Address] ("the Supplier").

WHEREAS:
The Company desires to engage Supplier for technical and operational services, and Supplier agrees to provide services under individual Statements of Work ("SOWs").

THE PARTIES AGREE AS FOLLOWS:

1. Framework & Scope
1.1 Specific services, deliverables, milestones, and fees shall be detailed in sequentially numbered SOWs executed under this Agreement.
1.2 Each SOW shall form part of this Agreement. In the event of conflict, the SOW shall prevail for that specific engagement.

2. Deliverable Acceptance
2.1 Upon completion of Deliverables, Supplier shall submit them to Company.
2.2 Company shall verify and give notice of acceptance or specific defects within fifteen (15) days. Failure to object within 15 days constitutes deemed acceptance.

3. Intellectual Property
3.1 Deliverables developed specifically for the Company under an SOW shall be owned exclusively by the Company upon payment of fees.
3.2 Pre-existing tools and background IP of the Supplier shall remain the property of the Supplier, with a perpetual license granted to Company to use the Deliverables.

4. Limitation of Liability
Total cumulative liability of either Party under this Agreement shall not exceed the fees paid under the applicable SOW in the twelve (12) months preceding the claim.

5. Governing Law & Arbitration
Governing law shall be the laws of India. Disputes shall be settled by a sole arbitrator under the Arbitration and Conciliation Act, 1996 in [City].

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For [Company Name]: ______________________
For [Supplier Name]: ______________________`
  },
  {
    id: 'software_license',
    title: 'Master Software License Agreement (MSLA)',
    category: 'IP & Technology',
    pages: 'pp. 382-391',
    chapter: 'Part 11, Specimen 16',
    description: 'Software license agreement governing license grant, license keys, open-source warranties, IP infringement indemnity, and audit rights.',
    recommendedParties: {
      firstPartyRole: 'Licensor / Software Owner',
      secondPartyRole: 'Licensee / Corporate User'
    },
    keyProvisions: ['Non-exclusive License Grant', 'Restrictions on Reverse Engineering', '60-Day Software Warranty', 'IP Infringement Indemnity', 'Software Audit Rights'],
    defaultTemplate: `MASTER SOFTWARE LICENSE AGREEMENT

This MASTER SOFTWARE LICENSE AGREEMENT is entered into on [Date] at [Place]:

BETWEEN:
1. [Licensor Name] Private Limited, CIN [•], PAN [•], having its registered office at [Address] ("Licensor"); and
2. [Licensee Name] Private Limited, CIN [•], PAN [•], having its registered office at [Address] ("Licensee").

WHEREAS Licensor has proprietary rights in [Software Name] software, and Licensee desires to obtain a license to use the Software.

THE PARTIES AGREE AS FOLLOWS:

1. License Grant
1.1 Licensor grants Licensee a non-exclusive, non-transferable license to install and use the Software within the Territory ([e.g. India]) solely for internal business operations.
1.2 Restrictions: Licensee shall not: (a) reverse engineer or decompile the Software; (b) distribute, sublicense, or rent the Software; (c) remove proprietary markings.

2. Warranty & Remedies
Licensor warrants that for sixty (60) days following delivery, the Software will conform in all material respects to the Documentation. Licensor's sole obligation for breach is to repair or replace the defective software.

3. IP Infringement Indemnity
Licensor shall defend and indemnify Licensee against any third-party claim that the Software infringes any registered Indian patent or copyright, provided Licensee gives prompt notice and control of defense.

4. Governing Law & Jurisdiction
This Agreement shall be governed by Indian law. Courts at [City] have exclusive jurisdiction.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For Licensor: ______________________
For Licensee: ______________________`
  },
  {
    id: 'shareholders_agreement',
    title: 'Shareholders\' Agreement (SHA)',
    category: 'Corporate & Investment',
    pages: 'pp. 396-445',
    chapter: 'Part 11, Specimen 18',
    description: 'Institutional investor Shareholders\' Agreement covering board representation, affirmative voting matters (25 items), ROFR, ROFO, Tag-Along, Drag-Along, and liquidation preference.',
    recommendedParties: {
      firstPartyRole: 'Investor',
      secondPartyRole: 'Promoter',
      thirdPartyRole: 'Target Company'
    },
    keyProvisions: ['Board Nomination & Quorum', '25 Reserved Matters', 'Anti-Dilution Weighted Average', 'ROFR & Tag Along', 'Drag Along & Liquidity Exit'],
    defaultTemplate: `SHAREHOLDERS' AGREEMENT

This Shareholders\' Agreement (the "Agreement") is executed on this [•] day of [Month, Year] at [Place]:

AMONG:
1. [Company Name] Private Limited, CIN [•], having registered office at [Address] ("the Company");
2. Mr. [Promoter Name], residing at [Address], PAN [•] ("the Promoter"); and
3. [Investor Name] Fund/Pte. Ltd., having its office at [Address] ("the Investor").

WHEREAS the Investor has agreed to subscribe to Equity Securities of the Company, and the Parties desire to define governance, share transfer restrictions, and exit rights.

THE PARTIES AGREE AS FOLLOWS:

1. Board Governance & Observers
1.1 The Board shall comprise [Number] directors. The Investor shall have the right to nominate [Number] Investor Directors and one non-voting Board Observer.
1.2 Quorum: No Board meeting shall proceed without the presence of at least one Investor Director.

2. Affirmative Voting Matters (Reserved Matters)
No decision relating to capital alterations, debt incurrence above INR [•], M&A, related party transactions, auditor changes, or budget deviations >10% shall be taken without prior written consent of the Investor.

3. Transfer Restrictions & Pre-emptive Rights
3.1 Promoter Lock-In: The Promoter shall not transfer shares for five (5) years from Closing without Investor consent.
3.2 Right of First Refusal (ROFR) & Tag-Along: If Promoter proposes to sell shares to a third party, the Investor shall have ROFR to purchase such shares or Tag-Along rights to sell proportionately.

4. Exit Mechanism
If the Company fails to achieve a Qualified IPO within five (5) years, the Investor shall be entitled to exercise Drag-Along rights or require a Buy-Back of shares at Fair Market Value.

5. Governing Law & Arbitration
Governing law is Indian law. Disputes shall be resolved by a sole arbitrator in New Delhi under the Arbitration and Conciliation Act, 1996.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For the Company: ______________________
For the Promoter: ______________________
For the Investor: ______________________`
  },
  {
    id: 'llp_agreement',
    title: 'Limited Liability Partnership (LLP) Agreement',
    category: 'Corporate & Investment',
    pages: 'pp. 566-576',
    chapter: 'Part 11, Specimen 22',
    description: 'Comprehensive LLP Agreement under Section 23(1) of the Limited Liability Partnership Act, 2008 with Designated Partners, profit-sharing ratio, contribution refunds, and winding up.',
    recommendedParties: {
      firstPartyRole: 'Designated Partner 1',
      secondPartyRole: 'Designated Partner 2'
    },
    keyProvisions: ['Capital Contribution & Profit Ratio', 'Designated Partners Powers & Limits', '75% Majority Rule for Decisions', 'Admission & Retirement', 'Indemnity & Defense'],
    defaultTemplate: `LIMITED LIABILITY PARTNERSHIP AGREEMENT

THIS LIMITED LIABILITY PARTNERSHIP AGREEMENT is executed on this [•] day of [Month, Year] at [Place]:

BETWEEN:
1. Mr. [Partner 1 Name], aged [•] years, residing at [Address], PAN [•] ("Partner 1"); and
2. Mr. [Partner 2 Name], aged [•] years, residing at [Address], PAN [•] ("Partner 2").

WHEREAS the Parties have agreed to form a Limited Liability Partnership under the Limited Liability Partnership Act, 2008 under the name "[LLP Name] LLP".

THE PARTIES AGREE AS FOLLOWS:

1. Business & Registered Office
1.1 The business of the LLP shall be [Business Purpose].
1.2 The registered office of the LLP shall be situated at [Address].

2. Capital Contribution & Profit/Loss Sharing
2.1 Partner 1 Contribution: INR [•] ([•]%).
2.2 Partner 2 Contribution: INR [•] ([•]%).
2.3 Net profits and losses shall be divided between the Partners in the ratio of their capital contributions.

3. Designated Partners
Both Partners shall be Designated Partners holding valid DPINs and shall be responsible for statutory compliances under the Act.

4. Limits on Partner Authority
No Partner shall without written consent of other Partner: (a) pledge LLP assets; (b) compromise debts; or (c) sign cheques exceeding INR [•].

5. Dispute Resolution
All disputes shall be referred to a sole arbitrator in [City] under the Arbitration and Conciliation Act, 1996.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

Partner 1: ______________________
Partner 2: ______________________`
  },
  {
    id: 'business_transfer',
    title: 'Business Transfer Agreement (Slump Sale)',
    category: 'Corporate & Investment',
    pages: 'pp. 276-281',
    chapter: 'Part 11, Specimen 6',
    description: 'Slump sale agreement transferring an entire business undertaking as a going concern with assumed liabilities, non-compete, and employee handover.',
    recommendedParties: {
      firstPartyRole: 'Seller Company',
      secondPartyRole: 'Purchaser Company'
    },
    keyProvisions: ['Sale as a Going Concern', 'Lump Sum Purchase Price', 'Assumed vs Excluded Liabilities', 'Seller Non-Compete & Non-Solicit', 'Closing Deliverables'],
    defaultTemplate: `BUSINESS TRANSFER AGREEMENT

This Business Transfer Agreement (the "Agreement") is executed on this [•] day of [Month, Year] at [Place]:

BETWEEN:
1. [Seller Company Name] Limited, CIN [•], PAN [•], having its registered office at [Address] (the "Seller"); and
2. [Purchaser Company Name] Limited, CIN [•], PAN [•], having its registered office at [Address] (the "Purchaser").

WHEREAS Seller owns the business undertaking known as [Business Unit Name] ("the Business"), and Purchaser agrees to purchase the Business as a going concern on a slump sale basis.

THE PARTIES AGREE AS FOLLOWS:

1. Transfer of Business
The Seller hereby transfers, conveys, and sells the Business as a going concern, together with all licenses, contracts, assets, and transferred employees, to the Purchaser as of the Closing Date.

2. Purchase Price & Allocation
The purchase price for the Business shall be a lump sum of INR [•] (Rupees [•] only) payable by wire transfer on Closing Date.

3. Assumed vs Excluded Liabilities
Purchaser assumes only those operational liabilities expressly listed in Schedule A ("Assumed Liabilities"). All historical tax liabilities and claims prior to Closing Date remain Excluded Liabilities of the Seller.

4. Non-Compete & Non-Solicit
Seller agrees not to engage in or solicit customers of the Business for three (3) years following Closing.

5. Governing Law & Arbitration
Indian laws shall apply. Disputes shall be resolved by arbitration in [City] under the Arbitration and Conciliation Act, 1996.

IN WITNESS WHEREOF, the Parties have signed this Agreement.

For Seller: ______________________
For Purchaser: ______________________`
  },
  {
    id: 'loan_agreement',
    title: 'Commercial Loan Agreement (with Promissory Note)',
    category: 'Commercial',
    pages: 'pp. 287-292',
    chapter: 'Part 11, Specimen 8',
    description: 'Secured term loan agreement with collateral security, affirmative covenants, repayment schedules, and Exhibit A Promissory Note.',
    recommendedParties: {
      firstPartyRole: 'Lender / Bank',
      secondPartyRole: 'Borrower Company'
    },
    keyProvisions: ['Line of Credit & Interest Rates', 'Collateral Security Pledge', 'Conditions Precedent to Drawdown', 'Affirmative & Negative Covenants', 'Exhibit A Promissory Note'],
    defaultTemplate: `LOAN AGREEMENT

This Loan Agreement is made on this [•] day of [Month, Year] at [Place]:

BETWEEN:
1. [Lender Bank/NBFC Name] Limited, CIN [•], having registered office at [Address] ("the Lender"); and
2. [Borrower Company Name] Private Limited, CIN [•], PAN [•], having registered office at [Address] ("the Borrower").

WHEREAS Borrower requested a term loan facility for [Purpose], and Lender agreed to sanction the loan on terms herein.

THE PARTIES AGREE AS FOLLOWS:

1. Facility & Disbursement
1.1 The Lender grants a credit facility of INR [•] (Rupees [•] only) repayable over [Number] years.
1.2 Interest shall be charged at [•]% per annum on a reducing balance basis, payable quarterly.
1.3 As collateral security, Borrower deposits [Description of Collateral].

2. Affirmative Covenants
Borrower shall: (a) pay all taxes punctually; (b) maintain insurance on all assets; (c) keep company in good standing.

3. Events of Default
Failure to pay interest or principal within fifteen (15) days of due date shall constitute an Event of Default, entitling Lender to enforce collateral.

4. Governing Law
Governing law shall be the laws of India. Courts at [City] shall have exclusive jurisdiction.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

For Lender: ______________________
For Borrower: ______________________`
  }
];
