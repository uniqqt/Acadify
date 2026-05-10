export const LAWS = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. 1987 PHILIPPINE CONSTITUTION
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'constitution',
    title: '1987 Philippine Constitution',
    shortTitle: 'Constitution',
    category: 'Constitutional Law',
    icon: 'Scale',
    year: '1987',
    description:
      'The fundamental law of the Philippines, ratified on February 2, 1987. It establishes the framework of government, protects civil liberties, and defines the relationship between the state and its citizens.',
    color: { light: '#fef3c7', dark: '#92400e', badge: '#d97706' },
    chapters: [
      {
        id: 'const-preamble',
        title: 'Preamble',
        sections: [
          {
            id: 'const-pre-1',
            number: '',
            title: 'Preamble',
            content:
              'We, the sovereign Filipino people, imploring the aid of Almighty God, in order to build a just and humane society and establish a Government that shall embody our ideals and aspirations, promote the common good, conserve and develop our patrimony, and secure to ourselves and our posterity the blessings of independence and democracy under the rule of law and a regime of truth, justice, freedom, love, equality, and peace, do ordain and promulgate this Constitution.',
            summary:
              'The Preamble is not a source of legal rights but it expresses the ideals and aspirations of the Filipino people. It identifies the sovereign — the Filipino people — and sets out the purposes of the Constitution: justice, common good, democracy, freedom, and peace.',
          },
        ],
      },
      {
        id: 'const-art1',
        title: 'Article I — National Territory',
        sections: [
          {
            id: 'const-art1-sec1',
            number: 'Section 1',
            title: 'National Territory',
            content:
              'The national territory comprises the Philippine archipelago, with all the islands and waters embraced therein, and all other territories over which the Philippines has sovereignty or jurisdiction, consisting of its terrestrial, fluvial, and aerial domains, including its territorial sea, the seabed, the subsoil, the insular shelves, and other submarine areas. The waters around, between, and connecting the islands of the archipelago, regardless of their breadth and dimensions, form part of the internal waters of the Philippines.',
            summary:
              'Defines the extent of Philippine territory: the archipelago and its waters (internal waters), the territorial sea, and submarine areas. The Philippines also claims sovereignty over territories by historic right or legal title — notably the Kalayaan Island Group (Spratlys) and Sabah.',
          },
        ],
      },
      {
        id: 'const-art2',
        title: 'Article II — Declaration of Principles and State Policies',
        sections: [
          {
            id: 'const-art2-sec1',
            number: 'Section 1',
            title: 'Democratic and Republican State',
            content:
              'The Philippines is a democratic and republican State. Sovereignty resides in the people and all government authority emanates from them.',
            summary:
              'The Philippines is a democracy where sovereign power belongs to the people. This is the foundation of popular sovereignty — the government derives its authority from the consent of the governed.',
          },
          {
            id: 'const-art2-sec2',
            number: 'Section 2',
            title: 'Renunciation of War',
            content:
              'The Philippines renounces war as an instrument of national policy, adopts the generally accepted principles of international law as part of the law of the land and adheres to the policy of peace, equality, justice, freedom, cooperation, and amity with all nations.',
            summary:
              'The Philippines adopts a pacifist foreign policy. International law (customary international law and treaties) is incorporated into Philippine law through the doctrine of transformation and incorporation.',
          },
          {
            id: 'const-art2-sec6',
            number: 'Section 6',
            title: 'Separation of Church and State',
            content:
              'The separation of Church and State shall be inviolable.',
            summary:
              'The State is secular — no religion may control government, and government may not establish or fund any church. This protects religious freedom and prevents theocracy.',
          },
          {
            id: 'const-art2-sec10',
            number: 'Section 10',
            title: 'Social Justice',
            content:
              'The State shall promote social justice in all phases of national development.',
            summary:
              'The State has an affirmative duty to promote social justice — the humanization of laws to favor the disadvantaged. Social justice requires equalization of economic, political, and social opportunities.',
          },
          {
            id: 'const-art2-sec12',
            number: 'Section 12',
            title: 'Sanctity of Family Life',
            content:
              'The State recognizes the sanctity of family life and shall protect and strengthen the family as a basic autonomous social institution. It shall equally protect the life of the mother and the life of the unborn from conception. The natural and primary right and duty of parents in the rearing of the youth for civic efficiency and the development of moral character shall receive the support of the Government.',
            summary:
              'The State protects the family and the unborn from conception. This section is the basis for anti-abortion policies in the Philippines and recognizes parents as primary in child-rearing.',
          },
        ],
      },
      {
        id: 'const-art3',
        title: 'Article III — Bill of Rights',
        sections: [
          {
            id: 'const-art3-sec1',
            number: 'Section 1',
            title: 'Due Process and Equal Protection',
            content:
              'No person shall be deprived of life, liberty, or property without due process of law, nor shall any person be denied the equal protection of the laws.',
            summary:
              'Two rights in one section: (1) Due process — the State must follow fair procedures before depriving anyone of life, liberty, or property (procedural due process), and must have a legitimate purpose and reasonable means (substantive due process). (2) Equal protection — similarly situated persons must be treated equally by the law.',
          },
          {
            id: 'const-art3-sec2',
            number: 'Section 2',
            title: 'Right Against Unreasonable Searches and Seizures',
            content:
              'The right of the people to be secure in their persons, houses, papers, and effects against unreasonable searches and seizures of whatever nature and for any purpose shall be inviolable, and no search warrant or warrant of arrest shall issue except upon probable cause to be determined personally by the judge after examination under oath or affirmation of the complainant and the witnesses he may produce, and particularly describing the place to be searched and the persons or things to be seized.',
            summary:
              'Warrants require: (1) personal determination by the judge; (2) probable cause; (3) examination under oath; (4) particular description of place to be searched and items to be seized. Evidence obtained in violation of this section is inadmissible (exclusionary rule / "fruit of the poisonous tree").',
          },
          {
            id: 'const-art3-sec3',
            number: 'Section 3',
            title: 'Privacy of Communication',
            content:
              '(1) The privacy of communication and correspondence shall be inviolable except upon lawful order of the court, or when public safety or order requires otherwise as prescribed by law. (2) Any evidence obtained in violation of this or the preceding section shall be inadmissible for any purpose in any proceeding.',
            summary:
              'Wiretapping and interception of communications are prohibited unless authorized by court order. Evidence obtained in violation of privacy rights (Secs. 2–3) is excluded from evidence — the exclusionary rule.',
          },
          {
            id: 'const-art3-sec4',
            number: 'Section 4',
            title: 'Freedom of Speech, Expression, and the Press',
            content:
              'No law shall be passed abridging the freedom of speech, of expression, or of the press, or the right of the people peaceably to assemble and petition the government for redress of grievances.',
            summary:
              'One of the most fundamental rights — freedom of expression is protected from government censorship (prior restraint is presumptively unconstitutional). This includes speech, press, assembly, and petition. Not absolute: obscenity, libel, and clear-and-present-danger speech may be regulated.',
          },
          {
            id: 'const-art3-sec5',
            number: 'Section 5',
            title: 'Freedom of Religion',
            content:
              'No law shall be made respecting an establishment of religion, or prohibiting the free exercise thereof. The free exercise and enjoyment of religious profession and worship, without discrimination or preference, shall forever be allowed. No religious test shall be required for the exercise of civil or political rights.',
            summary:
              'Two clauses: (1) Non-establishment — the State cannot make a law establishing a religion or preferring one over another; (2) Free exercise — individuals may freely practice their religion. No religious test may be required for public office or civil rights.',
          },
          {
            id: 'const-art3-sec12',
            number: 'Section 12',
            title: 'Rights of Persons Under Investigation (Miranda Rights)',
            content:
              '(1) Any person under investigation for the commission of an offense shall have the right to be informed of his right to remain silent and to have competent and independent counsel preferably of his own choice. If the person cannot afford the services of counsel, he must be provided with one. These rights cannot be waived except in writing and in the presence of counsel. (2) No torture, force, violence, threat, intimidation, or any other means which vitiate the free will shall be used against him. Secret detention places, solitary, incommunicado, or other similar forms of detention are prohibited. (3) Any confession or admission obtained in violation of this or Section 17 hereof shall be inadmissible in evidence against him.',
            summary:
              'These are the Philippine Miranda rights for custodial investigation: right to remain silent, right to independent counsel (provided free if unable to afford), and right to be informed of these rights. Any waiver must be in writing and with counsel present. Confessions obtained in violation are inadmissible.',
          },
          {
            id: 'const-art3-sec13',
            number: 'Section 13',
            title: 'Right to Bail',
            content:
              'All persons, except those charged with offenses punishable by reclusion perpetua when evidence of guilt is strong, shall, before conviction, be bailable by sufficient sureties, or be released on recognizance as may be provided by law. The right to bail shall not be impaired even when the privilege of the writ of habeas corpus is suspended. Excessive bail shall not be required.',
            summary:
              'Bail is a right except for capital offenses (reclusion perpetua/life imprisonment) when evidence of guilt is strong. The right to bail persists even during suspension of habeas corpus. Bail must not be excessive.',
          },
          {
            id: 'const-art3-sec14',
            number: 'Section 14',
            title: 'Presumption of Innocence and Right to Speedy Trial',
            content:
              '(1) No person shall be held to answer for a criminal offense without due process of law. (2) In all criminal prosecutions, the accused shall be presumed innocent until the contrary is proved, and shall enjoy the right to be heard by himself and counsel, to be informed of the nature and cause of the accusation against him, to have a speedy, impartial, and public trial, to meet the witnesses face to face, and to have compulsory process to secure the attendance of witnesses and the production of evidence in his behalf. However, after arraignment, trial may proceed notwithstanding the absence of the accused: Provided, that he has been duly notified and his failure to appear is unjustifiable.',
            summary:
              'Key rights of the accused: presumption of innocence (prosecution bears the burden of proof beyond reasonable doubt), right to counsel, right to be informed of the accusation, speedy impartial trial, confrontation of witnesses, and compulsory process.',
          },
          {
            id: 'const-art3-sec15',
            number: 'Section 15',
            title: 'Writ of Habeas Corpus',
            content:
              'The privilege of the writ of habeas corpus shall not be suspended except in cases of invasion or rebellion, when the public safety requires it.',
            summary:
              'Habeas corpus (Latin: "you shall have the body") is the right to be brought before a court to test the legality of one\'s detention. It can only be suspended during invasion or rebellion when public safety requires. The President may suspend it but Congress may revoke the suspension.',
          },
          {
            id: 'const-art3-sec17',
            number: 'Section 17',
            title: 'Right Against Self-Incrimination',
            content:
              'No person shall be compelled to be a witness against himself.',
            summary:
              'A person cannot be forced to testify or produce evidence that would incriminate themselves. This applies in all proceedings — criminal, civil, or administrative. However, it only protects testimonial evidence, not physical evidence (blood samples, DNA, etc.).',
          },
          {
            id: 'const-art3-sec21',
            number: 'Section 21',
            title: 'Double Jeopardy',
            content:
              'No person shall be twice put in jeopardy of punishment for the same offense. If an act is punished by a law and an ordinance, conviction or acquittal under either shall constitute a bar to another prosecution for the same act.',
            summary:
              'Once a person is acquitted or convicted of an offense, they cannot be tried again for the same offense. Double jeopardy attaches when: (1) there is a valid complaint/information; (2) filed before a competent court; (3) the accused has been arraigned and pleaded; and (4) the accused was convicted, acquitted, or the case was dismissed without his consent.',
          },
          {
            id: 'const-art3-sec22',
            number: 'Section 22',
            title: 'No Ex Post Facto Law or Bill of Attainder',
            content:
              'No ex post facto law or bill of attainder shall be enacted.',
            summary:
              'An ex post facto law makes a past act criminal, increases punishment for a past crime, or changes procedural rules to disadvantage the accused retroactively. A bill of attainder is a legislative act that declares someone guilty without a judicial trial. Both are prohibited.',
          },
        ],
      },
      {
        id: 'const-art6',
        title: 'Article VI — Legislative Department',
        sections: [
          {
            id: 'const-art6-sec1',
            number: 'Section 1',
            title: 'Legislative Power',
            content:
              'The legislative power shall be vested in the Congress of the Philippines which shall consist of a Senate and a House of Representatives, except to the extent reserved to the people by the provision on initiative and referendum.',
            summary:
              'Congress has two chambers: the Senate (24 senators, nationwide, 6-year terms) and the House of Representatives (district and party-list representatives, 3-year terms, max 3 consecutive terms).',
          },
          {
            id: 'const-art6-sec4',
            number: 'Section 4',
            title: 'Senate Composition and Term',
            content:
              'The Senate shall be composed of twenty-four Senators who shall be elected at large by the qualified voters of the Philippines, as may be provided by law.',
            summary:
              'The Senate has 24 members elected at-large (nationwide). Senators serve 6-year terms. No Senator shall serve more than two consecutive terms.',
          },
        ],
      },
      {
        id: 'const-art7',
        title: 'Article VII — Executive Department',
        sections: [
          {
            id: 'const-art7-sec1',
            number: 'Section 1',
            title: 'Executive Power',
            content:
              'The executive power shall be vested in the President of the Philippines.',
            summary:
              'All executive power — the power to enforce and execute laws — is vested in the President. The President is the head of state, head of government, and commander-in-chief of the armed forces.',
          },
          {
            id: 'const-art7-sec4',
            number: 'Section 4',
            title: 'Presidential Term',
            content:
              'The President and the Vice-President shall be elected by direct vote of the people for a term of six years which shall begin at noon on the thirtieth day of June next following the day of the election and shall end at noon of the same date, six years thereafter. The President shall not be eligible for any re-election.',
            summary:
              'The President serves a single 6-year term and is NOT eligible for re-election. The Vice-President may serve two consecutive terms. This is designed to prevent authoritarianism by limiting executive power.',
          },
        ],
      },
      {
        id: 'const-art8',
        title: 'Article VIII — Judicial Department',
        sections: [
          {
            id: 'const-art8-sec1',
            number: 'Section 1',
            title: 'Judicial Power',
            content:
              'The judicial power shall be vested in one Supreme Court and in such lower courts as may be established by law. Judicial power includes the duty of the courts of justice to settle actual controversies involving rights which are legally demandable and enforceable, and to determine whether or not there has been a grave abuse of discretion amounting to lack or excess of jurisdiction on the part of any branch or instrumentality of the Government.',
            summary:
              'Judicial power is expanded under the 1987 Constitution to include the power to strike down acts of government that constitute grave abuse of discretion. This is the basis for judicial review of executive and legislative acts.',
          },
          {
            id: 'const-art8-sec4',
            number: 'Section 4',
            title: 'Supreme Court Composition',
            content:
              'The Supreme Court shall be composed of a Chief Justice and fourteen Associate Justices. It may sit en banc or in its discretion, in division of three, five, or seven Members.',
            summary:
              'The Supreme Court has 15 members (1 Chief Justice + 14 Associate Justices). It sits en banc (all 15) for important constitutional questions, and in divisions for ordinary cases. Justices are appointed by the President from a shortlist by the Judicial and Bar Council (JBC).',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CIVIL CODE OF THE PHILIPPINES (Republic Act No. 386)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'civil-code',
    title: 'Civil Code of the Philippines',
    shortTitle: 'Civil Code',
    category: 'Civil Law',
    icon: 'BookOpen',
    year: '1950 (RA 386)',
    description:
      'The primary private law of the Philippines, covering persons, family relations, property, obligations, and contracts. Enacted on June 18, 1949 and effective August 30, 1950.',
    color: { light: '#f0fdf4', dark: '#166534', badge: '#16a34a' },
    chapters: [
      {
        id: 'civil-persons',
        title: 'Book I — Persons',
        sections: [
          {
            id: 'civil-art37',
            number: 'Article 37',
            title: 'Juridical Capacity and Capacity to Act',
            content:
              'Juridical capacity, which is the fitness to be the subject of legal relations, is inherent in every natural person and is lost only through death. Capacity to act, which is the power to do acts with legal effect, is acquired and may be lost.',
            summary:
              'All persons have juridical capacity (right to hold rights) from birth. Capacity to act (ability to exercise rights) can be restricted by minority, mental incapacity, etc. A still-born child has no juridical capacity.',
          },
          {
            id: 'civil-art40',
            number: 'Article 40',
            title: 'Commencement of Civil Personality',
            content:
              'Birth determines personality; but the conceived child shall be considered born for all purposes that are favorable to it, provided it be born later with the conditions specified in the following article.',
            summary:
              'Civil personality begins at birth. However, a conceived-but-unborn child (nasciturus) is deemed born for purposes beneficial to it — such as receiving inheritance or insurance proceeds — provided it is later born alive.',
          },
          {
            id: 'civil-art44',
            number: 'Article 44',
            title: 'Juridical Persons',
            content:
              'The following are juridical persons: (1) The State and its political subdivisions; (2) Other corporations, institutions and entities for public interest or purpose, created by law; their personality begins as soon as they have been constituted according to law; (3) Corporations, partnerships and associations for private interest or purpose to which the law grants a juridical personality, separate and distinct from that of each shareholder, partner or member.',
            summary:
              'Juridical persons (non-human legal entities) include: (1) the State and LGUs; (2) public entities by law; and (3) private corporations, partnerships, associations. Corporations have legal personality separate from their stockholders — the basis of limited liability.',
          },
        ],
      },
      {
        id: 'civil-obligations',
        title: 'Book IV — Obligations',
        sections: [
          {
            id: 'civil-art1156',
            number: 'Article 1156',
            title: 'Definition of Obligation',
            content:
              'An obligation is a juridical necessity to give, to do, or not to do.',
            summary:
              'An obligation has three possible objects: (1) to give (deliver a thing); (2) to do (perform an act); (3) not to do (abstain from an act). It is a "juridical necessity" because non-compliance results in legal consequences.',
          },
          {
            id: 'civil-art1157',
            number: 'Article 1157',
            title: 'Sources of Obligations',
            content:
              'Obligations arise from: (1) Law; (2) Contracts; (3) Quasi-contracts; (4) Acts or omissions punished by law; (5) Quasi-delicts.',
            summary:
              'The five sources: (1) Law — ex. obligation to pay taxes; (2) Contracts — ex. obligation under a sales agreement; (3) Quasi-contracts — ex. unjust enrichment (solutio indebiti); (4) Delicts — ex. criminal liability for theft; (5) Quasi-delicts — ex. liability for negligence without criminal intent.',
          },
          {
            id: 'civil-art1163',
            number: 'Article 1163',
            title: 'Obligation to Deliver Determinate Thing',
            content:
              'Every person obliged to give something is also obliged to take care of it with the proper diligence of a good father of a family, unless the law or the stipulation of the parties requires another standard of care.',
            summary:
              'The debtor must preserve a specific/determinate thing until delivery, using ordinary diligence (diligence of a good father of a family = ordinary care). Parties may agree on a higher (extraordinary) or lower (slight) standard.',
          },
          {
            id: 'civil-art1170',
            number: 'Article 1170',
            title: 'Grounds for Liability',
            content:
              'Those who in the performance of their obligations are guilty of fraud, negligence, or delay, and those who in any manner contravene the tenor thereof, are liable for damages.',
            summary:
              'Four grounds for breach-of-obligation liability: (1) Dolo/Fraud — deliberate evasion of obligation; (2) Culpa/Negligence — failure to exercise due care; (3) Mora/Delay — failure to perform on time after demand; (4) Contravention — performance contrary to the terms of the obligation.',
          },
          {
            id: 'civil-art1231',
            number: 'Article 1231',
            title: 'Extinguishment of Obligations',
            content:
              'Obligations are extinguished: (1) By payment or performance; (2) By the loss of the thing due; (3) By the condonation or remission of the debt; (4) By the confusion or merger of the rights of creditor and debtor; (5) By compensation; (6) By novation. Other causes of extinguishment of obligations, such as annulment, rescission, fulfillment of a resolutory condition, and prescription, are governed elsewhere in this Code.',
            summary:
              'The primary modes of extinguishing obligations: payment (most common), loss of the specific thing (fortuitous event), remission/condonation by the creditor, confusion (creditor and debtor become the same person), compensation (offsetting mutual debts), and novation (replacing the old obligation with a new one).',
          },
        ],
      },
      {
        id: 'civil-contracts',
        title: 'Book IV — Contracts',
        sections: [
          {
            id: 'civil-art1305',
            number: 'Article 1305',
            title: 'Definition of Contract',
            content:
              'A contract is a meeting of minds between two persons whereby one binds himself, with respect to the other, to give something or to render some service.',
            summary:
              'A contract requires a "meeting of minds" (consensus) between parties — offer and acceptance. One or both parties bind themselves to an obligation. Contracts are the law between the parties under the principle of autonomy of contracts.',
          },
          {
            id: 'civil-art1306',
            number: 'Article 1306',
            title: 'Autonomy of Contracts',
            content:
              'The contracting parties may establish such stipulations, clauses, terms and conditions as they may deem convenient, provided they are not contrary to law, morals, good customs, public order, or public policy.',
            summary:
              'Parties are free to stipulate whatever terms they agree on — freedom of contract / autonomy of will. However, the agreement must not violate: (1) law; (2) morals; (3) good customs; (4) public order; (5) public policy. Contracts violating these are void.',
          },
          {
            id: 'civil-art1318',
            number: 'Article 1318',
            title: 'Requisites of a Valid Contract',
            content:
              'There is no contract unless the following requisites concur: (1) Consent of the contracting parties; (2) Object certain which is the subject matter of the contract; (3) Cause of the obligation which is established.',
            summary:
              'The three essential elements (COC): (1) Consent — free, intelligent, and mutual agreement; vitiated consent (mistake, violence, intimidation, undue influence, fraud) makes a contract voidable; (2) Object — must be determinate, licit, possible, and transmissible; (3) Cause — the why of the contract (consideration), must be real and lawful.',
          },
          {
            id: 'civil-art1330',
            number: 'Article 1330',
            title: 'Vitiated Consent',
            content:
              'A contract where consent is given through mistake, violence, intimidation, undue influence, or fraud is voidable.',
            summary:
              'Contracts with vitiated consent are voidable (valid until annulled by the party whose consent was defective). MVIUF: (M)istake of fact or law, (V)iolence/force, (I)ntimidation/threat, (U)ndue influence, (F)raud/misrepresentation.',
          },
          {
            id: 'civil-art1409',
            number: 'Article 1409',
            title: 'Void Contracts',
            content:
              'The following contracts are inexistent and void from the beginning: (1) Those whose cause, object or purpose is contrary to law, morals, good customs, public order or public policy; (2) Those which are absolutely simulated or fictitious; (3) Those whose cause or object did not exist at the time of the transaction; (4) Those whose object is outside the commerce of men; (5) Those which contemplate an impossible service; (6) Those where the intention of the parties relative to the principal object of the contract cannot be ascertained; (7) Those expressly prohibited or declared void by law.',
            summary:
              'Void contracts produce no legal effect whatsoever — they cannot be ratified, confirmed, or enforced. Neither party can seek court enforcement. Distinguish from voidable contracts (which are valid until annulled) and unenforceable contracts (valid between parties but cannot be sued upon without evidence).',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. REVISED PENAL CODE (Act No. 3815)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'rpc',
    title: 'Revised Penal Code',
    shortTitle: 'RPC',
    category: 'Criminal Law',
    icon: 'Shield',
    year: '1930 (Act 3815)',
    description:
      'The primary criminal law of the Philippines, defining felonies and prescribing penalties. Enacted December 8, 1930 and effective January 1, 1932. Supplemented by numerous special penal laws.',
    color: { light: '#fef2f2', dark: '#991b1b', badge: '#dc2626' },
    chapters: [
      {
        id: 'rpc-book1',
        title: 'Book One — General Provisions on Felonies',
        sections: [
          {
            id: 'rpc-art3',
            number: 'Article 3',
            title: 'Felonies — Definition and Classification',
            content:
              'Acts and omissions punishable by law are felonies (delitos). Felonies are committed not only by means of deceit (dolo) but also by means of fault (culpa). There is deceit when the act is performed with deliberate intent; and there is fault when the wrongful act results from imprudence, negligence, lack of foresight, or lack of skill.',
            summary:
              'Felonies can be intentional (dolo — with malicious intent) or culpable (culpa — from negligence or imprudence). Intentional felonies require criminal intent (mens rea); culpable felonies require only negligence. This distinction is crucial for determining criminal liability and penalties.',
          },
          {
            id: 'rpc-art4',
            number: 'Article 4',
            title: 'Criminal Liability',
            content:
              'Criminal liability shall be incurred: (1) By any person committing a felony (delito) although the wrongful act done be different from that which he intended; (2) By any person performing an act which would be an offense against persons or property, were it not for the inherent impossibility of its accomplishment or on account of the employment of inadequate or ineffectual means.',
            summary:
              'Praeter intentionem (beyond the intent): you are liable for the natural consequences of your act even if the result was different from what you intended. Impossible crime: attempting to commit a crime that is inherently impossible (e.g., killing a dead person) is still punishable — demonstrates criminal intent.',
          },
          {
            id: 'rpc-art12',
            number: 'Article 12',
            title: 'Exempting Circumstances',
            content:
              'Circumstances which exempt from criminal liability: (1) An imbecile or an insane person; (2) A person under nine years of age (now raised to 15 by RA 9344); (3) A person over nine years of age and under fifteen, unless he has acted with discernment (now 15–18 under RA 9344); (4) Any person who acts under compulsion of irresistible force; (5) Any person who acts under the impulse of an uncontrollable fear of an equal or greater injury; (6) Any person who fails to perform an act required by law, when prevented by some lawful or insuperable cause.',
            summary:
              'Exempting circumstances negate criminal liability entirely. The accused commits an act but without criminal intent or voluntariness: insanity, minority (now below 15 under RA 9344), compulsion, and fear. Compare with justifying circumstances (Art. 11) — no crime at all; and mitigating circumstances (Art. 13) — crime exists but penalty is reduced.',
          },
          {
            id: 'rpc-art13',
            number: 'Article 13',
            title: 'Mitigating Circumstances',
            content:
              'Mitigating circumstances: (1) Incomplete justification or exemption; (2) Under 18 or over 70; (3) No intention to commit so grave a wrong (praeter intentionem); (4) Provocation or threat from offended party; (5) Immediate vindication of grave offense; (6) Passion and obfuscation; (7) Voluntary surrender; (8) Deaf-mute or blind; (9) Illness; (10) Analogous circumstances.',
            summary:
              'Mitigating circumstances reduce the penalty within the prescribed range (e.g., from the maximum to the minimum of the prescribed period). Privileged mitigating circumstances (incomplete justification) lower the penalty by one or two degrees. Ordinary mitigating circumstances are offset by aggravating circumstances.',
          },
          {
            id: 'rpc-art14',
            number: 'Article 14',
            title: 'Aggravating Circumstances',
            content:
              'Aggravating circumstances: (1) Taking advantage of public position; (2) In contempt of or with insult to public authority; (3) Acting with disrespect on account of rank, age, or sex; (4) Abuse of confidence; (5) Commission in the palace or in the presence of the Chief Executive; (6) Nighttime, uninhabited place, or band; (7) On occasion of calamity or misfortune; (8) With aid of armed men; (9) Recidivism; (10) Reiteracion; (11) Price, reward, or promise; (12) By inundation, fire, etc.; (13) By evident premeditation; (14) With craft, fraud, or disguise; (15) Superior strength or weapons; (16) Treachery; (17) Ignominy; (18) Unlawful entry; (19) Breaking wall or window; (20) With the aid of persons under 15 or by means of motor vehicle; (21) Cruelty.',
            summary:
              'Aggravating circumstances increase the penalty to the maximum of the prescribed period (qualifying aggravating circumstances like treachery in murder change the nature of the crime). Generic aggravating circumstances are neutralized by mitigating circumstances. Qualifying circumstances cannot be offset.',
          },
        ],
      },
      {
        id: 'rpc-crimes-persons',
        title: 'Book Two — Crimes Against Persons',
        sections: [
          {
            id: 'rpc-art246',
            number: 'Article 246',
            title: 'Parricide',
            content:
              'Any person who shall kill his father, mother, or child, whether legitimate or illegitimate, or any of his ascendants, or descendants, or his spouse, shall be guilty of parricide and shall be punished by the penalty of reclusion perpetua to death.',
            summary:
              'Parricide is the killing of specific family members: parents, children (legitimate or illegitimate), other ascendants/descendants, or spouse. Penalty: reclusion perpetua to death. The key element is the relationship between the killer and the victim — this makes it distinct from murder or homicide.',
          },
          {
            id: 'rpc-art248',
            number: 'Article 248',
            title: 'Murder',
            content:
              'Any person who, not falling within the provisions of Article 246, shall kill another, shall be guilty of murder and shall be punished by reclusion perpetua, to death, if committed with any of the following attendant circumstances: (1) With treachery, taking advantage of superior strength, or with the aid of armed men, or employing means to weaken the defense; (2) In consideration of a price, reward, or promise; (3) By means of inundation, fire, poison, explosion, or other means involving great waste or ruin; (4) On occasion of any of the calamities or on the occasion of an earthquake, eruption of a volcano, destructive cyclone, epidemic, or other public calamity; (5) With evident premeditation; (6) With cruelty, by deliberately and inhumanly augmenting the suffering of the victim, or outraging or scoffing at his person or corpse.',
            summary:
              'Murder is unlawful killing with qualifying circumstances (treachery, price/reward, calamity, evident premeditation, or cruelty). Penalty: reclusion perpetua to death. Treachery (alevosia) is the most common qualifying circumstance — it means the attack was sudden and unexpected, ensuring the victim had no chance to defend himself.',
          },
          {
            id: 'rpc-art249',
            number: 'Article 249',
            title: 'Homicide',
            content:
              'Any person who, not falling within the provisions of Articles 246-248, shall kill another without the attendance of any of the circumstances enumerated in the next preceding article, shall be deemed guilty of homicide and be punished by reclusion temporal.',
            summary:
              'Homicide is the unlawful killing of a person without the qualifying circumstances of murder or parricide. Penalty: reclusion temporal (12 years and 1 day to 20 years). The only element is that the accused killed the victim without justification and without any qualifying circumstance that would elevate it to murder.',
          },
          {
            id: 'rpc-art263',
            number: 'Articles 263-266',
            title: 'Physical Injuries',
            content:
              'Serious physical injuries (Art. 263): Causing blindness, loss of limb, incapacity for work for 90+ days — reclusion temporal to arresto mayor. Less serious physical injuries (Art. 265): Incapacity for 10-30 days — arresto mayor. Slight physical injuries (Art. 266): Incapacity for 1-9 days or no incapacity but there was physical violence — arresto menor.',
            summary:
              'Physical injuries are classified by severity: (1) Serious — permanent injury, loss of limb/faculty, deformity, or 90+ days incapacity; (2) Less serious — 10-30 days incapacity or medical attendance; (3) Slight — 1-9 days incapacity or no incapacity but physical violence was inflicted.',
          },
        ],
      },
      {
        id: 'rpc-property-crimes',
        title: 'Book Two — Crimes Against Property',
        sections: [
          {
            id: 'rpc-art308',
            number: 'Articles 308-310',
            title: 'Theft',
            content:
              'Article 308: Who are liable for theft: (1) Those who take personal property of another without the latter\'s consent; (2) Those who find lost property and fail to deliver the same to the local authorities. The penalties are based on the value of the thing stolen — from arresto menor for things worth under P5 to reclusion temporal for things worth over P22,000.',
            summary:
              'Theft is taking personal property belonging to another, without consent, with intent to gain, without violence or intimidation. Qualified theft (Art. 310) — committed with grave abuse of confidence (e.g., by a servant against their employer) — is punished two degrees higher than ordinary theft.',
          },
          {
            id: 'rpc-art293',
            number: 'Articles 293-302',
            title: 'Robbery',
            content:
              'Article 293: Any person who, with intent to gain, shall take any personal property belonging to another, by means of violence against or intimidation of any person, or using force upon anything shall be guilty of robbery.',
            summary:
              'Robbery differs from theft in the means used: robbery involves violence, intimidation, or force upon things. Robbery with violence/intimidation (Art. 294) — highest penalty when homicide, rape, or intentional mutilation occurs (reclusion perpetua to death). Robbery with force upon things (Arts. 299-302) covers breaking into buildings.',
          },
          {
            id: 'rpc-art315',
            number: 'Article 315',
            title: 'Estafa (Swindling)',
            content:
              'Article 315: Any person who shall defraud another by any of the means mentioned herein shall be punished by: (1) Unfaithfulness or abuse of confidence; (2) By means of false pretenses or fraudulent acts; (3) Through fraudulent means. Penalty depends on the amount defrauded.',
            summary:
              'Estafa is fraud or swindling through deceit or abuse of confidence. Three modes: (1) Abuse of confidence — misappropriating entrusted property; (2) False pretenses — using fake documents, identity, or transactions; (3) Fraudulent means — other forms of deception. Key element: damage to the offended party caused by deceit.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. DATA PRIVACY ACT OF 2012 (Republic Act No. 10173)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'dpa',
    title: 'Data Privacy Act of 2012',
    shortTitle: 'Data Privacy Act',
    category: 'Special Law',
    icon: 'Lock',
    year: '2012 (RA 10173)',
    description:
      'Protects individual personal information in information and communications systems in the government and private sector. Creates the National Privacy Commission (NPC) as the enforcement body.',
    color: { light: '#eff6ff', dark: '#1e40af', badge: '#3b82f6' },
    chapters: [
      {
        id: 'dpa-general',
        title: 'Chapter I — General Provisions',
        sections: [
          {
            id: 'dpa-sec2',
            number: 'Section 2',
            title: 'Declaration of Policy',
            content:
              'It is the policy of the State to protect the fundamental human right of privacy, of communication while ensuring free flow of information to promote innovation and growth. The State recognizes the vital role of information and communications technology in nation-building and its inherent obligation to ensure that personal information in information and communications systems in the government and in the private sector are secured and protected.',
            summary:
              'The DPA balances two interests: (1) individual privacy as a fundamental human right; and (2) the free flow of information necessary for innovation and economic growth. This balance is reflected throughout the law — not all personal data processing is prohibited, only unauthorized or negligent processing.',
          },
          {
            id: 'dpa-sec3',
            number: 'Section 3',
            title: 'Key Definitions',
            content:
              'Personal information — any information from which the identity of an individual can be reasonably and directly ascertained, or when put together with other information would directly and certainly identify an individual. Sensitive personal information — personal information about race, ethnic origin, marital status, age, color, and religious, philosophical, or political affiliations; health, education, genetic or sexual life, or any proceeding for any offense. Personal information controller (PIC) — one who controls the collection, holding, processing, or use of personal information. Personal information processor (PIP) — any natural or juridical person processing personal information on behalf of a PIC.',
            summary:
              'Key definitional distinctions: Personal information = identifiable data. Sensitive personal information = requires stricter protection (religious beliefs, health data, political views, sexual life). PIC = decides WHY and HOW data is processed (liable). PIP = processes on behalf of PIC (also liable). Data subject = the natural person whose data is being processed.',
          },
        ],
      },
      {
        id: 'dpa-principles',
        title: 'Chapter IV — Data Privacy Principles',
        sections: [
          {
            id: 'dpa-sec11',
            number: 'Section 11',
            title: 'General Data Privacy Principles',
            content:
              'The processing of personal information shall be allowed, subject to compliance with the requirements of this Act and other laws allowing disclosure of information to the public and adherence to the principles of transparency, legitimate purpose, and proportionality. Personal information must be: (a) Collected for specified and legitimate purposes and not further processed in a way incompatible with such purposes; (b) Adequate, relevant, suitable, necessary, and not excessive in relation to the purpose; (c) Accurate and where necessary kept up to date; (d) Retained only as long as necessary; (e) Kept to allow identification of data subjects only for as long as necessary; (f) Processed fairly and lawfully.',
            summary:
              'The three core principles: (1) Transparency — data subjects must know what data is collected and why; (2) Legitimate purpose — processing must have a valid legal basis; (3) Proportionality — only collect what is necessary for the stated purpose (data minimization). These are tested by the NPC in every case.',
          },
          {
            id: 'dpa-sec12',
            number: 'Section 12',
            title: 'Criteria for Lawful Processing',
            content:
              'The processing of personal information shall be permitted only if: (a) The data subject has given his or her consent; (b) The processing of personal information is necessary for the fulfillment of a contract; (c) The processing is necessary for compliance with a legal obligation; (d) The processing is necessary to protect vitally important interests including life and health; (e) The processing is necessary for the performance of a task carried out in the public interest; (f) The processing is necessary for the purposes of the legitimate interests pursued by the PIC or third party or parties to whom the data is disclosed.',
            summary:
              'Any of these six grounds makes processing lawful — consent is only ONE of them. Consent must be freely given, specific, and informed. It can be withdrawn. For sensitive personal information, higher standards apply under Section 13.',
          },
          {
            id: 'dpa-sec13',
            number: 'Section 13',
            title: 'Sensitive Personal Information',
            content:
              'The processing of sensitive personal information and privileged information shall be prohibited, except in the following cases: (a) The data subject has given his or her explicit consent; (b) The processing of the same is provided for by existing laws and regulations; (c) The processing is necessary to protect the life and health of the data subject; (d) The processing is necessary for medical treatment; (e) The processing concerns such personal information as is necessary for the protection of lawful rights and interests of natural or legal persons in court proceedings; (f) The processing is necessary for scientific or statistical research.',
            summary:
              'Sensitive personal information (SPI) — health data, religious beliefs, sexual life, political opinions, etc. — has higher protection. Processing SPI requires explicit consent or one of the enumerated legal exceptions. "Explicit consent" means specific, affirmative, and informed consent — it cannot be implied.',
          },
          {
            id: 'dpa-sec16',
            number: 'Section 16',
            title: 'Rights of the Data Subject',
            content:
              'The data subject is entitled to: (a) Right to be informed; (b) Right to object; (c) Right to access — upon demand, to reasonable access to personal data being processed; (d) Right to rectification; (e) Right to erasure or blocking; (f) Right to damages — the right to be indemnified for any damages sustained due to unauthorized or unlawful processing; (g) Right to data portability; (h) Right to file a complaint with the NPC.',
            summary:
              'Data subjects have eight rights: (1) to be informed before processing; (2) to object to processing; (3) to access their own data; (4) to correct inaccurate data; (5) to have data erased or blocked; (6) to sue for damages; (7) to receive their data in portable format; (8) to complain to the NPC. PICs must have mechanisms to respond to these rights.',
          },
        ],
      },
      {
        id: 'dpa-penalties',
        title: 'Chapter VIII — Penalties',
        sections: [
          {
            id: 'dpa-sec25',
            number: 'Sections 25–33',
            title: 'Criminal Penalties Overview',
            content:
              'Unauthorized Processing — 1 to 3 years and fine P500K to P2M. Unauthorized Processing of SPI — 3 to 6 years and fine P500K to P4M. Accessing Personal Information Due to Negligence — 1 to 3 years and fine P500K to P2M. Improper Disposal — 6 months to 2 years and fine P100K to P500K. Processing for Unauthorized Purposes — 1 year 6 months to 5 years and fine P500K to P1M. Unauthorized Access or Intentional Breach — 1 to 3 years and fine P500K to P2M. Concealment of Security Breaches — 1 year 6 months to 5 years and fine P500K to P1M.',
            summary:
              'Penalties range from 6 months to 7 years of imprisonment plus fines. Note: (1) SPI violations carry heavier penalties; (2) Corporate/organizational liability — officers and directors who consented to or tolerated violations are personally liable; (3) Government employees face heavier penalties. The NPC can also impose administrative fines.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. CYBERCRIME PREVENTION ACT (Republic Act No. 10175)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'cybercrime',
    title: 'Cybercrime Prevention Act of 2012',
    shortTitle: 'Cybercrime Act',
    category: 'Special Law',
    icon: 'Monitor',
    year: '2012 (RA 10175)',
    description:
      'Addresses legal issues concerning online interactions and the internet in the Philippines. Criminalizes illegal access, data interference, cyberlibel, cybersex, and other offenses committed through information and communications technology.',
    color: { light: '#faf5ff', dark: '#6b21a8', badge: '#9333ea' },
    chapters: [
      {
        id: 'cyber-general',
        title: 'Chapter I — General Provisions',
        sections: [
          {
            id: 'cyber-sec3',
            number: 'Section 3',
            title: 'Key Definitions',
            content:
              'Computer system — any device or group of interconnected or related devices, one or more of which follows instructions to perform automatic processing of data. Computer data — any representation of facts, information, or concepts in a form suitable for processing. Electronic document — information or the representation of information, data, figures, symbols, or other modes of written expression described or however represented. Service provider — any public or private entity that provides users the ability to communicate by means of a computer system. Traffic data — any computer data referring to a communication\'s origin, destination, route, format, date, time, duration, or size.',
            summary:
              'Key terms: Computer system — broadly defined to include PCs, smartphones, servers, and networks. Computer data — any digital information. Service providers include ISPs, social media platforms, and website hosts — they have obligations to preserve and disclose traffic data upon lawful order.',
          },
        ],
      },
      {
        id: 'cyber-offenses',
        title: 'Chapter II — Cybercrime Offenses',
        sections: [
          {
            id: 'cyber-sec4a',
            number: 'Section 4(a)',
            title: 'Offenses Against Confidentiality, Integrity, and Availability',
            content:
              '(1) Illegal Access — accessing a computer system without right. (2) Illegal Interception — intercepting transmission of data without authorization. (3) Data Interference — intentional alteration, damaging, deletion, deterioration, suppression, or modification of computer data without right. (4) System Interference — intentional hindering or interference with the functioning of a computer system by inputting, transmitting, damaging, deleting, deteriorating, altering, or suppressing computer data or program. (5) Misuse of Devices — use, production, sale, or distribution of tools for the commission of cybercrimes. (6) Cyber-squatting — acquiring domain names similar to known brands or individuals in bad faith.',
            summary:
              'These are the "pure" computer crimes: (1) Hacking (illegal access); (2) Wiretapping online (illegal interception); (3) Corrupting files (data interference); (4) DDoS attacks (system interference); (5) Creating/selling hacking tools (misuse of devices); (6) Domain squatting. All require being "without right" — authorized access for legitimate purposes is not a crime.',
          },
          {
            id: 'cyber-sec4b',
            number: 'Section 4(b)',
            title: 'Computer-Related Offenses',
            content:
              '(1) Computer-related Forgery — inputting, altering, or deleting any computer data to create inauthentic data with the intent it be considered as authentic, and with damage to another. (2) Computer-related Fraud — unauthorized input, alteration, or deletion of computer data or computer program causing damage. (3) Computer-related Identity Theft — intentional acquisition, use, misuse, transfer, possession, alteration, or deletion of identifying information belonging to another, whether natural or juridical, without right.',
            summary:
              'Computer-related identity theft is one of the most prosecuted offenses under RA 10175. It covers: using someone else\'s username/password, creating fake online accounts using real people\'s information, and accessing another\'s accounts without authorization. The "identity" includes not just physical ID but digital credentials.',
          },
          {
            id: 'cyber-sec4c',
            number: 'Section 4(c)',
            title: 'Content-Related Offenses',
            content:
              '(1) Cybersex — engaging in sexual activities through a computer system for favor or consideration. (2) Child Pornography — unlawful or prohibited acts defined in RA 9775 committed through a computer system. (3) Unsolicited Commercial Communications — transmitting commercial electronic communications with use of computer resource which seek to advertise, sell, or offer for sale products and services without express permission of the recipient. (4) Libel — the unlawful or prohibited acts of libel as defined in Article 355 of the Revised Penal Code, committed through a computer system.',
            summary:
              'Cyberlibel (the most controversial provision): online libel through computers is penalized. The SC in Disini v. Secretary of Justice (2014) upheld cyberlibel but struck down the provision on liability for those who simply receive and react to libelous content. Cyberlibel has a 12-year prescriptive period (vs. 1 year for print libel) — this has been affirmed by the SC.',
          },
          {
            id: 'cyber-sec6',
            number: 'Section 6',
            title: 'All Crimes Committed Online — Penalty Enhancement',
            content:
              'All crimes defined and penalized by the Revised Penal Code, as amended, and special laws, if committed by, through, and with the use of information and communications technologies shall be covered by the relevant provisions of this Act: Provided, That the penalty to be imposed shall be one degree higher than that provided for by the Revised Penal Code, as amended, and special laws, as the case may be.',
            summary:
              'This is the "penalty enhancement" provision — committing any existing RPC crime through computers/ICT elevates the penalty by one degree. Example: ordinary estafa → compute online estafa is one degree higher. This makes cybercrime a serious matter for all digital transactions and communications.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. E-COMMERCE ACT (Republic Act No. 8792)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'ecommerce',
    title: 'Electronic Commerce Act of 2000',
    shortTitle: 'E-Commerce Act',
    category: 'Special Law',
    icon: 'ShoppingCart',
    year: '2000 (RA 8792)',
    description:
      'Facilitates domestic and international dealings, transactions, arrangements, agreements, contracts, and exchanges and storage of information through the utilization of electronic, optical, and similar medium. The first major ICT law in the Philippines.',
    color: { light: '#f0fdf4', dark: '#065f46', badge: '#10b981' },
    chapters: [
      {
        id: 'ecom-general',
        title: 'Chapter I — General Provisions',
        sections: [
          {
            id: 'ecom-sec5',
            number: 'Section 5',
            title: 'Legal Recognition of Electronic Documents',
            content:
              'Electronic documents shall have the legal effect, validity or enforceability as any other document or legal writing, and: (a) Where the law requires a document to be in writing, that requirement is met by an electronic document if the said electronic document maintains its integrity and reliability and can be authenticated so as to be usable for subsequent reference, in that: i. The electronic document has remained complete and unaltered, apart from the addition of any endorsement and any authorized change; or ii. The electronic document is reliable in the light of the purpose for which it was generated and in the light of all relevant circumstances.',
            summary:
              'Electronic documents have the same legal standing as paper documents. An electronic document satisfies a legal "writing" requirement if it maintains integrity (unaltered) and can be authenticated. This is the foundation of e-contracts and electronic filing with government agencies.',
          },
          {
            id: 'ecom-sec6',
            number: 'Section 6',
            title: 'Legal Recognition of Electronic Signatures',
            content:
              'An electronic signature on the electronic document shall be equivalent to the signature of a person on a written document if that signature is proved by showing that a prescribed procedure, not alterable by the parties interested in the electronic document, existed under which: (a) A method is used to identify the party sought to be bound and to indicate said party\'s access to the electronic document necessary for his consent or approval through the electronic signature; (b) Said method is reliable and appropriate for the purpose for which the electronic document was generated; (c) It is necessary for the party sought to be bound, in order to proceed further with the transaction, to have executed or provided the electronic signature; (d) The other party is authorized and enabled to verify the electronic signature and to make the decision to proceed with the transaction authenticated by the same.',
            summary:
              'An electronic signature (including digital signatures, PINs, scanned signatures, biometric data) is legally equivalent to a handwritten signature if it meets the reliability and authentication standards under this Act. The law is technology-neutral — it does not require a specific type of electronic signature.',
          },
          {
            id: 'ecom-sec13',
            number: 'Section 13',
            title: 'Formation and Validity of Electronic Contracts',
            content:
              'Except as otherwise agreed by the parties, an offer, the acceptance of an offer, and such other elements required under existing laws for the formation of contracts may be expressed in, demonstrated and proved by means of electronic data messages or electronic documents and no contract shall be denied validity or enforceability on the sole ground that it is in the form of an electronic data message or electronic document, or that any or all of the elements required under existing laws for the formation of contracts is expressed, demonstrated, and proved by means of electronic data messages or electronic documents.',
            summary:
              'Electronic contracts are fully valid and enforceable. The offer, acceptance, and all contractual elements can be expressed through electronic data messages (email, website clicks, online forms). No contract can be invalidated solely because it was formed electronically. This legalizes everyday online transactions: e-commerce purchases, app agreements, digital signatures on contracts.',
          },
          {
            id: 'ecom-sec33',
            number: 'Section 33',
            title: 'Computer-Related Crimes (Hacker\'s Law)',
            content:
              'Hacking or cracking — refers to unauthorized access including the introduction of computer viruses and similar programs. Piracy — unauthorized copying, reproduction, dissemination, or distribution, importation, use, removal, alteration, substitution, modification, storage, uploading, downloading, communication, making available to the public, or broadcasting of protected material. Violations involving any public officer shall be punished with a penalty of one degree higher.',
            summary:
              'RA 8792 was the first Philippine law to criminalize hacking and software piracy. These provisions were later supplemented and superseded in some ways by RA 10175 (Cybercrime Prevention Act). Hacking under RA 8792 carries imprisonment of 6 months to 3 years. Piracy carries 6 months to 3 years plus fines. Government officials face one degree higher penalties.',
          },
        ],
      },
    ],
  },
];

export default LAWS;
