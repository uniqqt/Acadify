const NURSING_TOPICS = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. FUNDAMENTALS OF NURSING
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-fundamentals',
    title: 'Fundamentals of Nursing',
    shortTitle: 'Nursing Fundamentals',
    category: 'Fundamentals',
    icon: 'Stethoscope',
    year: 'Core',
    description:
      'The foundation of professional nursing practice, covering nursing history, theories, the nursing process (ADPIE), safety principles, and infection control. These concepts underpin every clinical encounter and are heavily tested on the Philippine Nurse Licensure Examination (NLE).',
    color: { light: '#dbeafe', dark: '#1e3a5f', badge: '#3b82f6' },
    chapters: [
      {
        id: 'nf-ch1',
        title: 'History, Theories & Professional Standards',
        sections: [
          {
            id: 'nf-ch1-s1',
            number: 'Section 1',
            title: 'Florence Nightingale & Nursing History',
            content:
              'Florence Nightingale (1820–1910) is considered the founder of modern nursing. During the Crimean War she reduced mortality at Scutari Barracks from 42% to 2% through environmental sanitation, handwashing, and organized nursing care. Her Environmental Theory holds that manipulating the patient\'s environment — fresh air, light, warmth, cleanliness, and quiet — promotes healing. She established the first formal school of nursing at St. Thomas\' Hospital, London, in 1860. In the Philippines, formal nursing education began in 1906 with the establishment of the Philippine General Hospital School of Nursing. The Republic Act 9173 (Philippine Nursing Act of 2002) governs nursing practice in the Philippines today, updated by RA 11501. The Board of Nursing under the Professional Regulation Commission (PRC) administers the NLE twice a year.',
            summary:
              '• Florence Nightingale: "Lady with the Lamp," Crimean War (1854), mortality 42% → 2%\n• Environmental Theory: air, light, warmth, cleanliness, quiet, punctuality, diet\n• First nursing school: St. Thomas\' Hospital, London, 1860\n• Philippines: PGH School of Nursing est. 1906\n• Governing law: RA 9173 (Nursing Act of 2002), amended by RA 11501\n• NLE administered by Board of Nursing under PRC\n• Mnemonic for Nightingale\'s environment: "A Lovely Warm Clean Quiet Place" (Air, Light, Warmth, Cleanliness, Quiet, Punctuality)',
          },
          {
            id: 'nf-ch1-s2',
            number: 'Section 2',
            title: 'Major Nursing Theories',
            content:
              'Several grand and middle-range theories guide nursing practice. Hildegard Peplau\'s Interpersonal Theory (1952) defines nursing as a therapeutic relationship with four phases: orientation, identification, exploitation, and resolution — making her the "Mother of Psychiatric Nursing." Virginia Henderson\'s Definition of Nursing describes 14 basic human needs and emphasizes that the nurse helps patients achieve independence. Jean Watson\'s Theory of Human Caring centers on 10 carative factors, viewing caring as the moral ideal of nursing. Dorothea Orem\'s Self-Care Deficit Theory identifies three nursing systems: wholly compensatory, partly compensatory, and supportive-educative. Martha Rogers\' Science of Unitary Human Beings views the person as an energy field coextensive with the environment. Callista Roy\'s Adaptation Model sees the patient as an adaptive system responding to stimuli through physiological, self-concept, role function, and interdependence modes.',
            summary:
              '• Peplau: Interpersonal Theory — O-I-E-R (Orientation, Identification, Exploitation, Resolution); "Mother of Psych Nursing"\n• Henderson: 14 basic needs; nurse helps toward independence\n• Watson: 10 carative factors; caring as moral ideal\n• Orem: Self-Care Deficit — 3 systems (wholly, partly compensatory; supportive-educative)\n• Rogers: Unitary Human Beings — energy field\n• Roy: Adaptation Model — 4 adaptive modes (physiological, self-concept, role function, interdependence)\n• Nightingale = Environment | Peplau = Relationship | Orem = Self-care | Roy = Adaptation',
          },
          {
            id: 'nf-ch1-s3',
            number: 'Section 3',
            title: 'Nursing Roles & Standards of Practice',
            content:
              'The registered nurse fulfills multiple roles: caregiver (direct hands-on care), educator (patient teaching), counselor (emotional support and guidance), manager/coordinator (organizing care), advocate (protecting patient rights), researcher, and collaborator. The American Nurses Association (ANA) Standards of Practice outline six steps aligned with the nursing process: assessment, diagnosis, outcomes identification, planning, implementation, and evaluation. The Philippine Nursing Act RA 9173 defines the scope of nursing practice and mandates continuing professional development. Legal considerations include negligence (failure to meet the standard of care), malpractice (professional negligence), and the four elements required to prove malpractice: duty, breach, causation, and damages. Informed consent requires that the patient receive full disclosure, comprehend the information, and voluntarily agree. The nurse\'s primary role in informed consent is ensuring the patient understands — the physician obtains consent.',
            summary:
              '• Roles: caregiver, educator, counselor, manager, advocate, researcher, collaborator\n• ANA 6 standards align with nursing process steps\n• Malpractice elements: Duty, Breach, Causation, Damages (mnemonic: "Don\'t Be Careless, Dear")\n• Informed consent: full disclosure + comprehension + voluntary agreement\n• Nurse\'s role in consent = ensure understanding; physician = obtain consent\n• RA 9173: governs scope of practice + CPD requirement',
          },
        ],
      },
      {
        id: 'nf-ch2',
        title: 'The Nursing Process (ADPIE)',
        sections: [
          {
            id: 'nf-ch2-s1',
            number: 'Section 1',
            title: 'Assessment',
            content:
              'Assessment is the first step of the nursing process and involves the systematic collection of subjective and objective data. Subjective data is what the patient reports (symptoms, pain, feelings) and is documented in quotation marks. Objective data is measurable and observable by the nurse (vital signs, lab values, physical findings). Assessment includes a health history (biographical data, chief complaint, past medical history, family history, review of systems) and a physical examination using inspection, palpation, percussion, and auscultation (IPPA). For abdominal assessment, the order changes to inspection, auscultation, percussion, palpation (IAPP) to avoid altering bowel sounds. Gordon\'s Functional Health Patterns provide a framework for organizing assessment data into 11 categories. The initial (admission) assessment is the most comprehensive; focused assessments are done for specific problems.',
            summary:
              '• Subjective = patient reports (symptoms); Objective = nurse measures/observes (signs)\n• IPPA sequence: Inspection, Palpation, Percussion, Auscultation\n• Abdomen exception: IAPP (Auscultation before Palpation/Percussion)\n• Gordon\'s 11 Functional Health Patterns organize assessment data\n• Types: initial/comprehensive, focused, emergency, time-lapsed\n• Primary source = patient; Secondary = family, records, other HCPs',
          },
          {
            id: 'nf-ch2-s2',
            number: 'Section 2',
            title: 'Nursing Diagnosis & PES Format',
            content:
              'The nursing diagnosis is the second step of the nursing process and is a clinical judgment about a patient\'s response to actual or potential health problems. It differs from a medical diagnosis in that it focuses on the patient\'s response rather than the disease itself. NANDA-I classifies nursing diagnoses into actual, risk, health promotion, and syndrome types. Actual nursing diagnoses use the three-part PES format: Problem (the diagnostic label) + Etiology ("related to" or r/t) + Signs and Symptoms ("as evidenced by" or AEB). Risk diagnoses use a two-part format (P + E) because the problem has not yet occurred and there are no signs and symptoms. Prioritization of nursing diagnoses follows Maslow\'s Hierarchy of Needs: physiological needs first, then safety, love/belonging, esteem, and self-actualization. Among physiological diagnoses, airway always takes highest priority.',
            summary:
              '• Nursing Dx focuses on patient RESPONSE; Medical Dx focuses on DISEASE\n• NANDA types: Actual, Risk, Health Promotion, Syndrome\n• PES format (Actual): Problem r/t Etiology AEB Signs & Symptoms\n• Risk format: Problem r/t Risk Factors (NO AEB — problem not yet present)\n• Maslow priority order: Physiological → Safety → Love → Esteem → Self-Actualization\n• Airway = ALWAYS #1 physiological priority\n• "AEB" only used for ACTUAL diagnoses',
          },
          {
            id: 'nf-ch2-s3',
            number: 'Section 3',
            title: 'Planning, Implementation & Evaluation',
            content:
              'Planning involves setting priorities, establishing patient-centered outcomes, and selecting nursing interventions. Outcomes should be SMART: Specific, Measurable, Attainable, Realistic, and Time-bound. Outcomes must be patient-centered (subject is the patient, not the nurse) and written in observable, measurable terms using action verbs. Implementation is the action phase where the nurse carries out planned interventions: independent (within scope without physician order), dependent (require physician order), and interdependent/collaborative (carried out with other health team members). Evaluation is the final step and determines whether patient outcomes have been achieved. The nurse compares actual outcomes with expected outcomes and decides whether to continue, modify, or terminate the plan of care. Evaluation is ongoing and cyclical, not a one-time event. Documentation (charting) is a legal record of care and follows the principle: "If it wasn\'t charted, it wasn\'t done."',
            summary:
              '• SMART outcomes: Specific, Measurable, Attainable, Realistic, Time-bound\n• Outcomes are PATIENT-centered (patient as subject, measurable action verb)\n• Interventions: Independent (nurse alone), Dependent (MD order), Collaborative\n• Evaluation: compare actual vs. expected outcomes → continue/modify/terminate\n• "If it wasn\'t charted, it wasn\'t done" — documentation is a legal record\n• Nursing process is CYCLICAL and ongoing\n• NIC = Nursing Interventions Classification; NOC = Nursing Outcomes Classification',
          },
        ],
      },
      {
        id: 'nf-ch3',
        title: 'Safety & Infection Control',
        sections: [
          {
            id: 'nf-ch3-s1',
            number: 'Section 1',
            title: 'Standard & Transmission-Based Precautions',
            content:
              'Standard precautions (formerly Universal Precautions) apply to ALL patients regardless of diagnosis and include handwashing, gloves for contact with body fluids, masks and eye protection when splashing is anticipated, gowns, and safe disposal of sharps. The CDC recommends hand hygiene with soap and water for Clostridioides difficile (C. diff) and alcohol-based hand rub for most other organisms. Transmission-based precautions are used in addition to standard precautions for specific pathogens. Contact precautions (gown + gloves) are used for MRSA, VRE, C. diff, RSV, and wound infections. Droplet precautions (surgical mask within 3 feet, private room) are used for influenza, meningitis, pertussis, mumps, and rubella. Airborne precautions (N95 respirator, negative-pressure room) are used for TB, measles (rubeola), varicella/chickenpox, and herpes zoster (disseminated). The mnemonic "My Chicken Has TB" helps remember airborne diseases: Measles, Chickenpox, Herpes zoster, TB.',
            summary:
              '• Standard precautions = ALL patients, ALL body fluids\n• C. diff → soap & water (NOT alcohol gel — spores resist alcohol)\n• Contact (gown + gloves): MRSA, VRE, C. diff, RSV — "MR. C\'s VRE"\n• Droplet (surgical mask): flu, meningitis, pertussis, mumps, rubella — within 3 feet\n• Airborne (N95 + negative pressure room): "My Chicken Has TB" — Measles, Chickenpox/Varicella, Herpes zoster (disseminated), TB\n• Order of PPE donning: gown → mask → goggles → gloves\n• Order of PPE removal (doffing): gloves → goggles → gown → mask',
          },
          {
            id: 'nf-ch3-s2',
            number: 'Section 2',
            title: 'Medication Administration: The 9 Rights',
            content:
              'Safe medication administration requires verifying the 9 Rights: Right patient (2 identifiers — name + birthdate/ID), Right medication, Right dose, Right route, Right time, Right documentation, Right reason/indication, Right to refuse, and Right assessment. The nurse must check the medication against the Medication Administration Record (MAR) three times: when retrieving the medication, when preparing the medication, and before administering. Oral medications should not be crushed if they are enteric-coated (EC), sustained-release (SR/XL), or sublingual. Injection sites: intramuscular (IM) — vastus lateralis preferred in infants/toddlers (deltoid in adults for small volumes), subcutaneous (SubQ) — abdomen, upper arm, thigh. The Z-track method is used for IM injections of irritating medications (iron dextran) to prevent track staining. Insulin is always measured in units using an insulin syringe and should not be shaken.',
            summary:
              '• 9 Rights: Patient, Medication, Dose, Route, Time, Documentation, Reason, Refuse, Assessment\n• 2 patient identifiers: name + DOB or ID number (NOT room number)\n• Check MAR 3 times: retrieve → prepare → administer\n• Do NOT crush: enteric-coated (EC), sustained-release (SR, XL, LA), sublingual tablets\n• IM site: vastus lateralis (infants); deltoid (adults, ≤1 mL)\n• Z-track: pull skin laterally, inject, hold 10 sec, release — for irritating meds\n• Insulin: use insulin syringe, roll (don\'t shake), units not mL\n• SubQ: 45° angle (thin patient) or 90° (adequate tissue); 5/8–1 inch needle',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. MEDICAL-SURGICAL NURSING
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-medsurg',
    title: 'Medical-Surgical Nursing',
    shortTitle: 'Med-Surg',
    category: 'Clinical Nursing',
    icon: 'Heart',
    year: 'Core',
    description:
      'Covers the nursing care of adult patients undergoing surgical procedures and those with common medical conditions including respiratory and cardiovascular disorders. Medical-surgical nursing is the largest component of the Philippine NLE.',
    color: { light: '#fce7f3', dark: '#831843', badge: '#ec4899' },
    chapters: [
      {
        id: 'ms-ch1',
        title: 'Perioperative Nursing',
        sections: [
          {
            id: 'ms-ch1-s1',
            number: 'Section 1',
            title: 'Preoperative Phase',
            content:
              'The preoperative phase begins when the decision for surgery is made and ends when the patient is transferred to the operating room. Key nursing responsibilities include conducting a preoperative assessment (baseline vital signs, allergies, current medications, history), ensuring informed consent is signed, and completing the preoperative checklist. Patient teaching covers deep breathing and coughing exercises, leg exercises to prevent DVT, splinting incision, and early ambulation. NPO (nothing by mouth) status: adults — solids/heavy meals NPO for 8 hours; light meals/non-human milk NPO 6 hours; breast milk NPO 4 hours; clear liquids NPO 2 hours (per ASA 2017 guidelines). Preoperative medications may include anxiolytics (midazolam), anticholinergics (atropine to reduce secretions), and analgesics. The nurse removes jewelry, dentures, nail polish, hearing aids, and contact lenses before surgery. Consent must be obtained while the patient is alert, competent, and not medicated with opioids or sedatives.',
            summary:
              '• Preop phase: decision for surgery → OR transfer\n• NPO guidelines: solids 8h, light meal 6h, breast milk 4h, clear liquids 2h\n• Consent: must be signed BEFORE preop sedation; nurse witnesses (does not obtain)\n• Remove: jewelry, dentures, nail polish, contacts, hearing aids\n• Teach preop: TCDB (Turn, Cough, Deep Breathe), leg exercises, splinting\n• Atropine preop: reduces oral secretions (anticholinergic)\n• Midazolam: preop anxiolytic (benzodiazepine)',
          },
          {
            id: 'ms-ch1-s2',
            number: 'Section 2',
            title: 'Intraoperative & Postoperative / PACU Care',
            content:
              'The intraoperative phase spans from OR entry to transfer to PACU (Post-Anesthesia Care Unit). The scrub nurse is sterile — handles sterile field and instruments. The circulating nurse is non-sterile — manages the environment, documents, and assists the scrub nurse. General anesthesia stages: induction, maintenance, and emergence. Regional anesthesia (spinal, epidural) affects a specific area and requires monitoring for hypotension and headache (post-dural puncture headache with spinal). The postoperative (PACU) phase focuses on airway management, cardiovascular monitoring, pain control, and preventing complications. The Aldrete Score assesses readiness for discharge from PACU using five parameters: activity, respiration, circulation, consciousness, and oxygen saturation (score ≥9 for discharge). Common postop complications: atelectasis (most common, 24–48h), pneumonia, DVT/PE, wound infection (3–5 days), and wound dehiscence/evisceration. Position for evisceration: supine, knees flexed, cover wound with sterile saline-moistened gauze, call surgeon.',
            summary:
              '• Scrub nurse = STERILE field; Circulating nurse = NON-sterile, documents\n• Aldrete Score ≥9 = safe for PACU discharge (Activity, Respiration, Circulation, Consciousness, SpO2)\n• Most common postop complication: ATELECTASIS (24–48h postop)\n• Wound infection typically appears: day 3–5 postop\n• Evisceration: cover with sterile NS-moistened gauze, supine with knees flexed, NPO, call surgeon\n• Malignant hyperthermia: temp rise + rigidity during anesthesia → Dantrolene (PRIORITY)\n• Spinal anesthesia headache: lie flat, hydration, blood patch if persistent',
          },
        ],
      },
      {
        id: 'ms-ch2',
        title: 'Respiratory Disorders',
        sections: [
          {
            id: 'ms-ch2-s1',
            number: 'Section 1',
            title: 'COPD: Blue Bloater vs. Pink Puffer',
            content:
              'Chronic Obstructive Pulmonary Disease (COPD) is characterized by persistent, progressive airflow limitation and includes chronic bronchitis and emphysema. Chronic bronchitis ("Blue Bloater") is defined clinically as productive cough for 3 months in 2 consecutive years. Patients are cyanotic (blue), edematous (bloated), have elevated CO2 (hypercapnia) and hypoxemia, and rely on hypoxic drive (low O2 as breathing stimulus) because CO2 receptors are blunted. Emphysema ("Pink Puffer") involves destruction of alveolar walls leading to air trapping; patients are pink (maintain oxygenation by pursed-lip breathing), barrel-chested, and have prolonged expiration. Critical nursing point: administer O2 at low flow rates (1–2 L/min via nasal cannula) in COPD to avoid suppressing the hypoxic drive, which can cause respiratory arrest. Pursed-lip breathing increases PEEP, slows expiration, and prevents airway collapse. Position: high Fowler\'s or orthopneic (leaning forward over bedside table).',
            summary:
              '• Blue Bloater (Chronic Bronchitis): cyanosis, edema, productive cough, hypercapnia, cor pulmonale\n• Pink Puffer (Emphysema): barrel chest, pursed lips, hyperresonance, no cyanosis\n• Hypoxic drive: in COPD, breathing stimulus is LOW O2 (not high CO2)\n• O2 for COPD: 1–2 L/min (low flow) — high O2 suppresses drive → apnea\n• Pursed-lip breathing: increases expiratory pressure, prevents airway collapse\n• Position: high Fowler\'s or orthopneic (tripod position)\n• Chronic bronchitis definition: productive cough 3 months × 2 consecutive years',
          },
          {
            id: 'ms-ch2-s2',
            number: 'Section 2',
            title: 'Pneumonia & Tuberculosis (DOTS/RIPE)',
            content:
              'Pneumonia is an infection of the lung parenchyma most commonly caused by Streptococcus pneumoniae (community-acquired) or Pseudomonas aeruginosa (hospital-acquired). Classic signs: fever, productive cough, pleuritic chest pain, dullness on percussion, bronchial breath sounds, and increased tactile fremitus over consolidation. Nursing care: high Fowler\'s position, increased fluid intake, incentive spirometry, and culture-before-antibiotic principle. Tuberculosis (TB) is caused by Mycobacterium tuberculosis, transmitted via airborne droplet nuclei. Diagnosis uses Mantoux test (≥10 mm induration = positive in general population, ≥5 mm in HIV/immunocompromised), chest X-ray, and sputum AFB smear (3 specimens on 3 consecutive days). Treatment follows the DOTS (Directly Observed Treatment, Short-course) strategy with the RIPE regimen: Rifampicin (red-orange urine — expected), Isoniazid (pyridoxine/Vit B6 to prevent peripheral neuropathy), Pyrazinamide (hyperuricemia/gout), and Ethambutol (optic neuritis — check visual acuity). Intensive phase: 2 months (RIPE); continuation phase: 4 months (RI).',
            summary:
              '• Pneumonia: dullness on percussion, bronchial breath sounds, increased fremitus\n• Most common CAP organism: Streptococcus pneumoniae\n• TB transmission: airborne (droplet nuclei) → N95 + negative pressure room\n• Mantoux PPD: ≥10 mm positive (general); ≥5 mm in HIV/immunosuppressed\n• RIPE regimen (DOTS): Rifampicin + Isoniazid + Pyrazinamide + Ethambutol\n• Rifampicin: red/orange urine — EXPECTED, reassure patient\n• Isoniazid: give Vitamin B6 (pyridoxine) to prevent peripheral neuropathy\n• Ethambutol: monitor vision (optic neuritis)\n• DOTS phases: 2 months RIPE → 4 months RI (total 6 months)',
          },
        ],
      },
      {
        id: 'ms-ch3',
        title: 'Cardiovascular Disorders',
        sections: [
          {
            id: 'ms-ch3-s1',
            number: 'Section 1',
            title: 'Heart Failure: Left vs. Right Sided',
            content:
              'Heart failure (HF) occurs when the heart cannot pump sufficient blood to meet the body\'s metabolic demands. Left-sided heart failure causes backup of fluid into the pulmonary circulation, producing pulmonary signs: dyspnea, orthopnea, paroxysmal nocturnal dyspnea (PND), crackles at lung bases, pink frothy sputum (pulmonary edema), and S3 gallop. The classic mnemonic is "Left = Lungs." Right-sided heart failure (often caused by left-sided HF or pulmonary hypertension) causes backup into systemic circulation, producing systemic signs: jugular venous distension (JVD), dependent pitting edema (ankles), hepatomegaly, ascites, and weight gain. Mnemonic: "Right = Rest of Body." Diagnostic markers include BNP (brain natriuretic peptide) >100 pg/mL. Treatment includes diuretics (furosemide — monitor K+), ACE inhibitors, beta-blockers, digoxin. Digoxin toxicity signs: bradycardia, yellow-green halos, nausea/vomiting; antidote: Digibind (digoxin immune Fab); therapeutic level 0.5–2.0 ng/mL.',
            summary:
              '• Left HF = LUNGS: dyspnea, orthopnea, PND, crackles, pink frothy sputum, S3\n• Right HF = REST OF BODY: JVD, pitting edema, hepatomegaly, ascites\n• BNP >100 pg/mL = heart failure marker\n• Furosemide: monitor potassium (hypokalemia risk)\n• Digoxin therapeutic level: 0.5–2.0 ng/mL\n• Digoxin toxicity: bradycardia, yellow-green halos, N&V → Digibind antidote\n• Low-sodium diet, daily weight (report gain >2 lbs/day or >5 lbs/week)',
          },
          {
            id: 'ms-ch3-s2',
            number: 'Section 2',
            title: 'Myocardial Infarction (MI)',
            content:
              'Myocardial infarction (MI, "heart attack") is the irreversible necrosis of myocardial tissue due to prolonged ischemia, most commonly caused by coronary artery occlusion from a ruptured atherosclerotic plaque with thrombus formation. Classic presentation: crushing substernal chest pain radiating to the left arm, jaw, or shoulder; diaphoresis; nausea; dyspnea. Women, diabetics, and elderly may present atypically (fatigue, indigestion, jaw pain). The most important diagnostic biomarker is troponin I or T, which rises within 3–6 hours, peaks at 12–24 hours, and remains elevated for 7–10 days. CK-MB rises in 3–6 hours and returns to normal in 3 days (useful for re-infarction detection). Emergency treatment follows MONA: Morphine (pain relief, vasodilation), Oxygen (if SpO2 <90%), Nitroglycerin (vasodilation, avoid if BP <90 mmHg or Viagra use within 24–48h), Aspirin (antiplatelet, 325 mg chewed). Primary PCI (percutaneous coronary intervention) is the preferred reperfusion therapy within 90 minutes of arrival ("door-to-balloon time"). Thrombolytics (tPA, streptokinase) are used when PCI is not available within 120 minutes.',
            summary:
              '• Classic MI symptoms: crushing chest pain + radiation to left arm/jaw + diaphoresis\n• MONA: Morphine, Oxygen (SpO2 <90%), Nitroglycerin, Aspirin (325 mg chewed)\n• Nitroglycerin contraindicated: SBP <90 mmHg, sildenafil (Viagra) use in 24–48h\n• Troponin: rises 3–6h, peaks 12–24h, elevated 7–10 days — MOST SPECIFIC marker\n• CK-MB: rises 3–6h, normalizes in 3 days — useful for re-infarction\n• Door-to-balloon time goal: ≤90 minutes for primary PCI\n• Post-MI position: semi-Fowler\'s; bedrest initially\n• Aspirin: chewed (not swallowed) for fastest absorption',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. MATERNAL & CHILD HEALTH NURSING
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-maternal',
    title: 'Maternal & Child Health Nursing',
    shortTitle: 'Maternal-Child',
    category: 'Maternal-Child',
    icon: 'Baby',
    year: 'Core',
    description:
      'Encompasses nursing care during the prenatal, intrapartum, and postpartum periods as well as pediatric nursing. Key Philippine NLE topics include normal pregnancy changes, obstetric complications, stages of labor, and postpartum assessment using BUBBLE-HE.',
    color: { light: '#dcfce7', dark: '#166534', badge: '#22c55e' },
    chapters: [
      {
        id: 'mch-ch1',
        title: 'Prenatal Care',
        sections: [
          {
            id: 'mch-ch1-s1',
            number: 'Section 1',
            title: 'Normal Pregnancy & Key Obstetric Calculations',
            content:
              'Normal pregnancy (gestation) lasts approximately 40 weeks (280 days) from the first day of the last menstrual period (LMP) to delivery, divided into three trimesters of approximately 13 weeks each. Naegele\'s Rule calculates the estimated date of delivery (EDD): add 7 days to the first day of LMP, subtract 3 months, and add 1 year. For example, LMP = January 1 → EDD = October 8 of the same year. Fundal height in centimeters approximates gestational age in weeks between 20–36 weeks (McDonald\'s rule). At 12 weeks the fundus is at the symphysis pubis; at 20 weeks at the umbilicus; at 36 weeks at the xiphoid process. The normal range for fetal heart rate (FHR) is 110–160 bpm. Fetal movements (quickening) are felt at 16–20 weeks in primigravida and 14–18 weeks in multigravida. Presumptive signs of pregnancy are subjective (amenorrhea, nausea, breast tenderness); probable signs are objective signs in the uterus (Hegar\'s sign, Chadwick\'s sign, Goodell\'s sign, positive urine hCG); positive signs are definitive (fetal heartbeat, ultrasound visualization of fetus, fetal movement felt by examiner).',
            summary:
              '• Naegele\'s Rule: LMP + 7 days − 3 months + 1 year = EDD\n• Fundal height ≈ gestational age (weeks) between 20–36 weeks\n• Fundus landmarks: 12 wks = pubic symphysis; 20 wks = umbilicus; 36 wks = xiphoid\n• FHR normal: 110–160 bpm\n• Quickening: 16–20 wks (primigravida); 14–18 wks (multigravida)\n• Presumptive: subjective (amenorrhea, N&V, breast changes)\n• Probable: objective uterine (Hegar\'s, Chadwick\'s blue cervix, Goodell\'s softening)\n• Positive: fetal heartbeat, US fetal image, fetal movement felt by examiner',
          },
          {
            id: 'mch-ch1-s2',
            number: 'Section 2',
            title: 'PIH, Preeclampsia, MgSO4 & Eclampsia',
            content:
              'Pregnancy-Induced Hypertension (PIH) encompasses gestational hypertension and preeclampsia-eclampsia. Preeclampsia is characterized by the triad: hypertension (BP ≥140/90 mmHg on two occasions 4 hours apart), proteinuria (≥300 mg in 24h or urine dipstick ≥1+), and edema — occurring after 20 weeks of gestation. Severe preeclampsia criteria include BP ≥160/110 mmHg, severe proteinuria, oliguria, visual disturbances, headache, and epigastric pain (HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets). The drug of choice for seizure prophylaxis and treatment in preeclampsia-eclampsia is Magnesium Sulfate (MgSO4). Therapeutic level: 4–7 mEq/L. Toxic signs of MgSO4: loss of patellar reflex (earliest sign, occurs at 7–10 mEq/L), respiratory depression (>10 mEq/L), and cardiac arrest (>15 mEq/L). Antidote: Calcium gluconate (keep at bedside). Eclampsia is the occurrence of seizures in a preeclamptic patient. Nursing management: quiet dark room, padded side rails, left lateral position, IV MgSO4, oxygen.',
            summary:
              '• Preeclampsia triad: HTN (≥140/90) + Proteinuria + Edema after 20 weeks\n• Severe preeclampsia: BP ≥160/110, HELLP (Hemolysis, Elevated LFTs, Low Platelets)\n• MgSO4 therapeutic level: 4–7 mEq/L\n• MgSO4 toxicity signs (in order): loss of patellar reflex → respiratory depression → cardiac arrest\n• MgSO4 antidote: CALCIUM GLUCONATE (keep at bedside)\n• Eclampsia = preeclampsia + seizures\n• Nursing: quiet dark room, padded rails, left lateral, O2, MgSO4 IV\n• Antihypertensive of choice in pregnancy: Hydralazine or Labetalol',
          },
        ],
      },
      {
        id: 'mch-ch2',
        title: 'Labor & Delivery',
        sections: [
          {
            id: 'mch-ch2-s1',
            number: 'Section 1',
            title: 'Stages of Labor',
            content:
              'Labor is divided into four stages. Stage 1 (dilation) has three phases: latent (0–3 cm dilation, mild irregular contractions, longest), active (4–7 cm, contractions every 3–5 min lasting 45–60 sec), and transition (8–10 cm, most intense, contractions every 1.5–2 min). Stage 2 (expulsion) begins at full dilation (10 cm) and ends with delivery of the baby. The pushing/bearing-down urge occurs here. Stage 3 (placental) begins after delivery of the baby and ends with delivery of the placenta (normally within 5–30 minutes). Signs of placental separation: Calkin\'s sign (uterus rises and becomes globular), sudden gush of blood, and lengthening of the cord. Stage 4 (recovery) lasts 1–4 hours postpartum and is the most critical for hemorrhage monitoring. Normal contraction pattern is assessed using frequency (beginning to beginning), duration (beginning to end of one contraction), and intensity. Tetanic contractions (>90 seconds, no rest period) can cause uterine rupture and fetal distress.',
            summary:
              '• Stage 1: dilation — Latent (0–3 cm), Active (4–7 cm), Transition (8–10 cm)\n• Active phase progress: ≥1 cm/hour primipara; ≥1.5 cm/hour multipara\n• Stage 2: full dilation → delivery of baby (push!)\n• Stage 3: delivery of baby → delivery of placenta (5–30 min)\n• Stage 4: 1–4 hours postpartum — highest hemorrhage risk\n• Contraction: frequency = start to start; duration = start to end\n• Tetanic contraction (>90 sec): uterine rupture risk → notify provider\n• Signs of placental separation: globular uterus, gush of blood, cord lengthening',
          },
          {
            id: 'mch-ch2-s2',
            number: 'Section 2',
            title: 'FHR Monitoring & Decelerations',
            content:
              'Fetal heart rate (FHR) monitoring assesses fetal well-being during labor. Normal FHR is 110–160 bpm with moderate variability (6–25 bpm fluctuation). Accelerations (FHR rising ≥15 bpm above baseline for ≥15 seconds) are reassuring signs of fetal well-being. Decelerations are classified by their timing relative to contractions. Early decelerations mirror the contraction (start and end with the contraction) and are caused by fetal head compression — benign, no intervention needed. Variable decelerations are abrupt drops in FHR that vary in onset, depth, and duration, caused by umbilical cord compression. Intervention: change maternal position (side-lying), oxygen, and check for cord prolapse. Late decelerations begin after the contraction peaks and return to baseline after it ends; they are caused by uteroplacental insufficiency and are ALWAYS non-reassuring. Intervention (STOP): Stop oxytocin, Turn to left lateral, Oxygen (8–10 L/min non-rebreather), Push IV fluids, Prepare for delivery.',
            summary:
              '• Normal FHR: 110–160 bpm; moderate variability 6–25 bpm\n• Accelerations: ≥15 bpm for ≥15 sec = REASSURING\n• Early decelerations: mirror contraction = head compression = BENIGN\n• Variable decelerations: abrupt drop = cord compression → reposition, O2\n• Late decelerations: after contraction peak = uteroplacental insufficiency = ALWAYS NON-REASSURING\n• Late decel STOP mnemonic: Stop oxytocin, Turn left lateral, Oxygen, Push fluids\n• Cord prolapse: knee-chest position or Trendelenburg + push presenting part up + emergency delivery',
          },
        ],
      },
      {
        id: 'mch-ch3',
        title: 'Postpartum Care',
        sections: [
          {
            id: 'mch-ch3-s1',
            number: 'Section 1',
            title: 'Postpartum Assessment: BUBBLE-HE',
            content:
              'Systematic postpartum assessment uses the BUBBLE-HE mnemonic: Breasts (engorgement, nipple condition, milk production — colostrum day 1–3, transitional milk day 3–10, mature milk after day 10), Uterus (fundal height, position, consistency — should be firm, midline, descends 1 cm/day; boggy uterus indicates uterine atony, massage fundus), Bowel (bowel function returns by day 2–3; stool softeners encouraged), Bladder (diuresis occurs 12–24h postpartum; monitor for urinary retention — distended bladder displaces uterus to right), Lochia (vaginal discharge), Episiotomy/laceration (REEDA: Redness, Edema, Ecchymosis, Discharge, Approximation), Homans sign (calf pain on dorsiflexion — DVT screening, though limited sensitivity), Emotions (postpartum blues day 1–3 resolves spontaneously; postpartum depression >2 weeks requires treatment; postpartum psychosis is an emergency). Assessment is performed every 15 minutes in the first hour, then every 30 minutes for the next hour, then hourly.',
            summary:
              '• BUBBLE-HE: Breasts, Uterus, Bowel, Bladder, Lochia, Episiotomy, Homans, Emotions\n• Uterus: firm + midline + descends 1 cm/day; boggy = atony → massage\n• Boggy uterus deviated to RIGHT = full bladder (catheterize first)\n• Lochia progression: Rubra (red, 1–3d) → Serosa (pink/brown, 4–10d) → Alba (yellow/white, 11d–6wks)\n• REEDA: Redness, Edema, Ecchymosis, Discharge, Approximation (episiotomy assessment)\n• Postpartum blues: 1–3 days, self-limiting; PPD: >2 weeks → treatment needed\n• Breastfeeding: colostrum (1–3d) → transitional (3–10d) → mature milk (>10d)',
          },
          {
            id: 'mch-ch3-s2',
            number: 'Section 2',
            title: 'Postpartum Hemorrhage (PPH) & the 4 Ts',
            content:
              'Postpartum hemorrhage (PPH) is defined as blood loss >500 mL after vaginal delivery or >1000 mL after cesarean section, or any blood loss causing hemodynamic instability. PPH is the leading cause of maternal mortality worldwide. The 4 Ts mnemonic identifies the four etiologies: Tone (uterine atony — most common cause, 80%), Trauma (lacerations, hematomas, uterine inversion, rupture), Tissue (retained placental fragments), and Thrombin (coagulopathy, including DIC). Uterine atony management: fundal massage, bimanual compression, oxytocin (first-line), methylergonovine (Methergine — contraindicated in hypertension), carboprost (Hemabate — contraindicated in asthma), misoprostol. Nursing interventions: establish large-bore IV access, administer IV fluids/blood products, monitor vital signs every 5–15 minutes, output, and level of consciousness. Risk factors for PPH: grand multiparity, multiple gestation, prolonged labor, macrosomia, and magnesium sulfate use.',
            summary:
              '• PPH definition: >500 mL (vaginal) or >1000 mL (C/S) blood loss\n• 4 Ts: TONE (atony, 80%), TRAUMA, TISSUE (retained placenta), THROMBIN (coagulopathy)\n• Uterine atony: massage fundus → oxytocin (1st line) → Methergine → Hemabate\n• Methergine (methylergonovine): CONTRAINDICATED in hypertension\n• Hemabate (carboprost): CONTRAINDICATED in asthma\n• Nursing: 2 large-bore IVs, VS q5–15 min, I&O, blood products\n• Retained placenta: manual extraction or D&C\n• Leading cause of maternal mortality worldwide',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. PHARMACOLOGY FOR NURSES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-pharmacology',
    title: 'Pharmacology for Nurses',
    shortTitle: 'Pharmacology',
    category: 'Pharmacology',
    icon: 'Activity',
    year: 'Core',
    description:
      'Covers the principles of pharmacokinetics and pharmacodynamics, drug interactions, and the nursing implications of major drug groups including antihypertensives, anticoagulants, antimicrobials, analgesics, and psychiatric medications. A high-yield NLE subject.',
    color: { light: '#fef3c7', dark: '#92400e', badge: '#f59e0b' },
    chapters: [
      {
        id: 'ph-ch1',
        title: 'Pharmacokinetics: ADME',
        sections: [
          {
            id: 'ph-ch1-s1',
            number: 'Section 1',
            title: 'Absorption, Distribution, Metabolism & Excretion',
            content:
              'Pharmacokinetics describes what the body does to a drug, summarized by the ADME model. Absorption is the movement of a drug from the site of administration into the bloodstream; factors affecting absorption include route (IV = fastest, 100% bioavailability), pH, first-pass effect (oral drugs metabolized by the liver before reaching systemic circulation — reduces bioavailability), and formulation. Distribution is the movement of drug from blood to tissues, affected by protein binding (highly protein-bound drugs have a smaller free/active fraction; acidic drugs bind albumin), lipid solubility, and blood-brain barrier. Metabolism (biotransformation) primarily occurs in the liver via cytochrome P450 enzymes; hepatic impairment reduces metabolism increasing drug toxicity risk. Excretion primarily occurs via the kidneys; renal impairment reduces excretion increasing toxicity. Creatinine clearance (CrCl) is used to dose-adjust renally cleared drugs. Half-life (t½) is the time for the plasma drug concentration to decrease by 50%; it takes approximately 4–5 half-lives to reach steady state and to fully eliminate a drug.',
            summary:
              '• ADME: Absorption, Distribution, Metabolism, Excretion\n• IV route = 100% bioavailability; oral = reduced by first-pass effect\n• First-pass effect: liver metabolizes oral drug before systemic circulation → lower blood levels\n• Protein binding: highly bound = less free (active) drug; albumin binds acidic drugs\n• Metabolism: primarily liver (CYP450); liver failure → toxicity risk\n• Excretion: primarily kidney; renal failure → drug accumulation → toxicity\n• Use CrCl to adjust dose for renally excreted drugs (aminoglycosides, digoxin, metformin)\n• Steady state reached in 4–5 half-lives',
          },
          {
            id: 'ph-ch1-s2',
            number: 'Section 2',
            title: 'Drug Interactions & Anaphylaxis',
            content:
              'Drug interactions can be pharmacokinetic (affecting ADME) or pharmacodynamic (affecting drug effects). CYP450 inducers (rifampin, phenytoin, carbamazepine, St. John\'s Wort) increase metabolism of other drugs, reducing their effect. CYP450 inhibitors (ketoconazole, erythromycin, grapefruit juice, cimetidine) decrease metabolism, increasing drug levels and toxicity risk. Synergistic interactions produce a combined effect greater than the sum of individual effects (e.g., alcohol + benzodiazepines = respiratory depression). Anaphylaxis is a severe, life-threatening allergic reaction (Type I hypersensitivity) involving IgE-mediated release of histamine. Signs: urticaria, angioedema, bronchospasm (wheezing), hypotension, tachycardia. Priority nursing action: Epinephrine 1:1000 IM into the lateral thigh (anterolateral thigh) is the FIRST and most important treatment. Secondary treatments: antihistamines (diphenhydramine), corticosteroids (hydrocortisone), oxygen, IV fluids. Latex allergy patients should be placed in a latex-free environment; cross-reactive foods include bananas, avocados, and kiwi.',
            summary:
              '• CYP450 Inducers (↑ metabolism → ↓ drug levels): Rifampin, Phenytoin, Carbamazepine, St. John\'s Wort — "RPCS"\n• CYP450 Inhibitors (↓ metabolism → ↑ toxicity): Ketoconazole, Erythromycin, Grapefruit juice, Cimetidine\n• Anaphylaxis = IgE-mediated Type I hypersensitivity\n• Signs: urticaria, angioedema, wheezing, hypotension, tachycardia\n• FIRST treatment: Epinephrine 1:1000 IM (lateral thigh) — NOT antihistamine\n• Secondary: diphenhydramine, hydrocortisone, O2, IV fluids\n• Latex cross-reactive foods: Bananas, Avocados, Kiwi — "BAK"',
          },
        ],
      },
      {
        id: 'ph-ch2',
        title: 'Common Drug Groups',
        sections: [
          {
            id: 'ph-ch2-s1',
            number: 'Section 1',
            title: 'Antihypertensives & Anticoagulants',
            content:
              'ACE inhibitors (captopril, enalapril, lisinopril ending in "-pril") block conversion of angiotensin I to II, reducing vasoconstriction; hallmark side effect is a dry, persistent cough (due to bradykinin accumulation); serious adverse effect is angioedema (discontinue immediately). ARBs (losartan, valsartan ending in "-sartan") block angiotensin II receptors; no cough. Beta-blockers (propranolol, metoprolol, atenolol ending in "-olol") reduce heart rate and BP; contraindicated in asthma/COPD and bradycardia; mask hypoglycemia signs in diabetics. Calcium channel blockers (amlodipine, nifedipine, verapamil): cause peripheral edema and constipation. Heparin is an anticoagulant monitored using aPTT (therapeutic: 1.5–2.5× control, approximately 60–100 seconds); antidote is Protamine sulfate. Warfarin (Coumadin) is monitored using PT/INR (therapeutic INR 2–3 for most indications, 2.5–3.5 for mechanical heart valves); antidote is Vitamin K (phytonadione); interact with many foods (Vitamin K-rich foods like leafy greens decrease INR). Both heparin and warfarin increase bleeding risk; patient teaching: use soft toothbrush, electric razor, report unusual bleeding.',
            summary:
              '• ACE inhibitors (-pril): dry cough (bradykinin), angioedema → STOP drug\n• ARBs (-sartan): same as ACE inhibitors but NO cough\n• Beta-blockers (-olol): contraindicated in asthma; mask hypoglycemia in diabetics\n• CCBs (amlodipine, nifedipine): peripheral edema; verapamil = constipation\n• Heparin → monitor aPTT (60–100 sec); antidote = Protamine sulfate\n• Warfarin → monitor PT/INR (goal 2–3); antidote = Vitamin K\n• Warfarin + Vitamin K foods (leafy greens) = ↓ INR (less anticoagulation)\n• Both: soft toothbrush, electric razor, report bleeding',
          },
          {
            id: 'ph-ch2-s2',
            number: 'Section 2',
            title: 'Antimicrobials, Opioids, NSAIDs & Acetaminophen',
            content:
              'Aminoglycosides (gentamicin, tobramycin) are bactericidal antibiotics with serious adverse effects of ototoxicity (hearing loss, tinnitus) and nephrotoxicity; monitor peak and trough levels and renal function. Penicillin allergy cross-reactivity with cephalosporins is approximately 1–2%; use with caution. Opioid analgesics (morphine, codeine, oxycodone, fentanyl) activate mu receptors producing analgesia, euphoria, respiratory depression, constipation, and miosis; antidote is Naloxone (Narcan). Constipation from opioids does NOT develop tolerance — always prescribe a bowel regimen. The nurse\'s priority assessment before opioid administration is respiratory rate (hold if RR <12 breaths/min). NSAIDs (ibuprofen, ketorolac, naproxen) inhibit COX enzymes reducing prostaglandin synthesis; adverse effects include GI bleeding (give with food), renal impairment, and platelet inhibition. Contraindicated in patients with peptic ulcer disease, renal failure, and third trimester of pregnancy. Acetaminophen (paracetamol) is an analgesic/antipyretic with hepatotoxicity as the primary adverse effect; maximum daily dose 4 g/day in healthy adults (2 g/day in liver disease/alcoholism); antidote for overdose is N-acetylcysteine (NAC).',
            summary:
              '• Aminoglycosides: oto- and nephrotoxicity → monitor peak/trough, BUN/Cr\n• Opioid side effects: respiratory depression, constipation, miosis (pinpoint pupils)\n• Opioid antidote: NALOXONE (Narcan)\n• Hold opioid if RR <12 breaths/min\n• Constipation from opioids = NO tolerance → always give bowel regimen\n• NSAIDs: GI bleed, renal impairment, platelet inhibition → give with food\n• NSAIDs contraindicated: PUD, renal failure, pregnancy 3rd trimester\n• Acetaminophen max: 4 g/day (healthy); 2 g/day (liver disease)\n• Acetaminophen overdose antidote: N-acetylcysteine (NAC)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. PSYCHIATRIC-MENTAL HEALTH NURSING
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-psychiatric',
    title: 'Psychiatric-Mental Health Nursing',
    shortTitle: 'Psych Nursing',
    category: 'Mental Health',
    icon: 'Brain',
    year: 'Core',
    description:
      'Focuses on therapeutic nurse-patient relationships, communication techniques, and the nursing care of patients with mental health disorders including mood disorders, schizophrenia, and anxiety disorders. Peplau\'s interpersonal theory is foundational.',
    color: { light: '#ede9fe', dark: '#4c1d95', badge: '#8b5cf6' },
    chapters: [
      {
        id: 'psych-ch1',
        title: 'Therapeutic Communication & Peplau\'s Theory',
        sections: [
          {
            id: 'psych-ch1-s1',
            number: 'Section 1',
            title: 'Therapeutic vs. Non-Therapeutic Techniques',
            content:
              'Therapeutic communication establishes a helping relationship and facilitates the patient\'s expression of feelings and problem-solving. Key therapeutic techniques include: using open-ended questions ("Tell me more about that"), offering general leads ("Go on"), restating/reflecting (echo the patient\'s words to encourage elaboration), clarifying ("I\'m not sure I understand — could you explain?"), focusing (redirecting to the key issue), summarizing, and silence (allowing time for reflection). Non-therapeutic communication blocks the therapeutic relationship. Examples include: giving false reassurance ("Everything will be fine"), giving advice ("You should..."), offering personal opinion ("I think you should..."), changing the subject, closed questions (yes/no), using medical jargon, challenging, and minimizing feelings ("At least you have..."). When a patient makes a suicidal statement, the nurse should always take it seriously, maintain a calm tone, stay with the patient, ask directly about intent and plan, and remove lethal means from the environment. The priority nursing diagnosis for a suicidal patient is Risk for Self-Directed Violence.',
            summary:
              '• Therapeutic: open-ended questions, silence, reflection, clarification, focusing\n• Non-therapeutic: false reassurance, advice-giving, changing subject, minimizing feelings\n• "Everything will be OK" = FALSE REASSURANCE (blocks communication)\n• Suicidal statement: ALWAYS take seriously, ask directly ("Are you thinking of hurting yourself?")\n• Priority Dx for suicidal patient: Risk for Self-Directed Violence\n• Nurse should stay with suicidal patient — do NOT leave alone\n• Remove all potential lethal means from environment',
          },
          {
            id: 'psych-ch1-s2',
            number: 'Section 2',
            title: 'Peplau\'s 4 Phases of Therapeutic Relationship',
            content:
              'Hildegard Peplau\'s Interpersonal Theory (1952) describes nursing as a significant therapeutic interpersonal process. The therapeutic nurse-patient relationship unfolds in four sequential phases. Orientation phase: the patient identifies a problem and seeks help; the nurse establishes rapport, clarifies roles, and sets expectations; a therapeutic contract (purpose, time, place, goals) is established. Identification phase: the patient begins to identify with the nurse; tests the relationship; the nurse clarifies perceptions. Exploitation phase: the patient fully uses the services and resources available; the nurse helps the patient maximize benefits; the patient begins to become more independent. Resolution phase: the patient\'s needs have been met; roles end; the patient develops independence; therapeutic relationship terminates. The nurse also takes on multiple roles throughout the relationship: stranger, resource person, teacher, leader, surrogate, and counselor. Peplau is known as the "Mother of Psychiatric Nursing" and her theory is the foundation for the one-to-one nurse-patient relationship.',
            summary:
              '• Peplau 4 phases: Orientation → Identification → Exploitation → Resolution (O-I-E-R)\n• Orientation: establish rapport, clarify roles, set therapeutic contract\n• Identification: patient tests relationship, clarify perceptions\n• Exploitation: patient uses resources, moves toward independence\n• Resolution: needs met, relationship ends, patient independent\n• Nurse roles: stranger, resource, teacher, leader, surrogate, counselor\n• Peplau = "Mother of Psychiatric Nursing"\n• Therapeutic contract: purpose, time, place, goals — established in ORIENTATION phase',
          },
        ],
      },
      {
        id: 'psych-ch2',
        title: 'Mental Health Disorders',
        sections: [
          {
            id: 'psych-ch2-s1',
            number: 'Section 1',
            title: 'Depression, Bipolar Disorder & Medications',
            content:
              'Major Depressive Disorder (MDD) is characterized by persistent depressed mood and/or anhedonia (loss of interest) for ≥2 weeks plus at least 5 symptoms summarized by the mnemonic SIG-ECAPS: Sleep disturbance, Interest loss, Guilt (worthlessness), Energy loss, Concentration difficulty, Appetite change, Psychomotor retardation or agitation, Suicidal ideation. Suicide risk is highest during early recovery (when energy returns before mood improves — the patient now has energy to act). First-line pharmacological treatment: SSRIs (fluoxetine, sertraline, escitalopram); therapeutic effect takes 2–4 weeks; common side effects include sexual dysfunction and GI upset; serotonin syndrome (hyperthermia, agitation, clonus, tachycardia) is a rare emergency when combined with MAOIs. MAOIs (phenelzine, tranylcypromine) require a tyramine-free diet (avoid aged cheese, wine, processed meats, soy) to prevent hypertensive crisis. Bipolar disorder involves cycling between mania and depression. Lithium is the mood stabilizer of choice; therapeutic level 0.6–1.2 mEq/L (maintenance), 1.0–1.5 mEq/L (acute mania); toxic signs at >1.5 mEq/L: coarse tremor, polyuria, confusion, arrhythmias; antidote is hydration and sodium replenishment (lithium competes with sodium).',
            summary:
              '• MDD: ≥5 symptoms ≥2 weeks including depressed mood or anhedonia\n• SIG-ECAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation\n• Suicide risk HIGHEST: early recovery phase (energy returns before mood lifts)\n• SSRIs: first-line; takes 2–4 weeks; risk of serotonin syndrome with MAOIs\n• MAOIs: avoid tyramine foods (aged cheese, wine, processed meats) → hypertensive crisis\n• Lithium (bipolar): therapeutic 0.6–1.2 mEq/L; toxic >1.5 mEq/L\n• Lithium toxicity: coarse tremor, polyuria, confusion; maintain Na+ and fluid intake\n• Early lithium sign of toxicity: FINE hand tremor',
          },
          {
            id: 'psych-ch2-s2',
            number: 'Section 2',
            title: 'Schizophrenia, Antipsychotics, EPS & NMS',
            content:
              'Schizophrenia is a psychotic disorder characterized by positive symptoms (hallucinations, delusions, disorganized speech/behavior, thought insertion, paranoia) and negative symptoms (flat affect, alogia/poverty of speech, avolition, anhedonia, social withdrawal). The most common type of hallucination in schizophrenia is auditory. Nursing intervention for a patient with hallucinations: do NOT reinforce or argue with hallucinations; acknowledge the patient\'s experience ("I understand you hear voices"), maintain reality orientation, and minimize environmental stimuli. First-generation (typical) antipsychotics (haloperidol, chlorpromazine) block D2 receptors; main adverse effects are extrapyramidal symptoms (EPS). EPS types: Acute dystonia (involuntary muscle spasm, earliest, within hours–days; treat with benztropine or diphenhydramine IM), Akathisia (motor restlessness, inability to sit still), Tardive dyskinesia (involuntary repetitive movements — tongue, lips, face; late complication after years; largely irreversible), Pseudo-parkinsonism (shuffling gait, tremor, pill-rolling). Second-generation (atypical) antipsychotics (clozapine, risperidone, olanzapine) have fewer EPS but risk metabolic syndrome and agranulocytosis (clozapine — requires weekly WBC monitoring). Neuroleptic Malignant Syndrome (NMS) is a life-threatening emergency from antipsychotics: hyperthermia + muscle rigidity + altered consciousness + autonomic instability; treat with discontinue drug + Dantrolene + bromocriptine.',
            summary:
              '• Positive symptoms (excess): hallucinations, delusions, disorganized speech\n• Negative symptoms (deficit): flat affect, alogia, avolition, withdrawal\n• Most common hallucination in schizophrenia: AUDITORY\n• Hallucination nursing: do NOT reinforce, maintain reality, minimize stimuli\n• EPS types: Acute dystonia (earliest, hours–days) → Akathisia → Pseudo-parkinsonism → Tardive dyskinesia (late, irreversible)\n• Dystonia antidote: Benztropine (Cogentin) or Diphenhydramine IM\n• Clozapine: agranulocytosis risk → weekly WBC/ANC monitoring\n• NMS: hyperthermia + rigidity + AMS → STOP antipsychotic + Dantrolene + bromocriptine\n• Atypicals: metabolic syndrome (weight gain, hyperglycemia, dyslipidemia)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. COMMUNITY HEALTH NURSING
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'nursing-community',
    title: 'Community Health Nursing',
    shortTitle: 'Community Health',
    category: 'Community Health',
    icon: 'Users',
    year: 'Core',
    description:
      'Covers the principles of public health nursing, primary health care, epidemiology, and the Philippine Expanded Program on Immunization (EPI). Community health nursing focuses on population-level interventions and is closely tied to Philippine health policies.',
    color: { light: '#ccfbf1', dark: '#134e4a', badge: '#14b8a6' },
    chapters: [
      {
        id: 'ch-ch1',
        title: 'Primary Health Care & Epidemiology',
        sections: [
          {
            id: 'ch-ch1-s1',
            number: 'Section 1',
            title: 'Alma-Ata 1978, 8 Elements & Philippine UHC',
            content:
              'Primary Health Care (PHC) was declared as the global health strategy at the International Conference on Primary Health Care held in Alma-Ata, USSR (now Almaty, Kazakhstan) in 1978, under the theme "Health for All by the Year 2000." The Declaration of Alma-Ata identified 8 essential elements of PHC summarized by the mnemonic "MEHANCE-P" or the more popular "ESCUDERO": Education for health, Social problems / Maternal & child health, Communicable disease control, Use of essential drugs, Dental health, Expanded Program on Immunization, Rehabilitation (mental health), and Nutrition + Safe water and sanitation. In the Philippines, PHC is implemented through the devolved health system under Local Government Units (LGUs) as mandated by the Local Government Code of 1991 (RA 7160). The Universal Health Care (UHC) Act, RA 11223, signed in 2019, automatically enrolls all Filipinos in the National Health Insurance Program (PhilHealth) and aims to achieve universal health coverage. The levels of health care facilities in the Philippines: Level 1 (Barangay Health Centers / RHUs), Level 2 (District/Provincial Hospitals), Level 3 (Regional/Medical Centers).',
            summary:
              '• Alma-Ata 1978: "Health for All by 2000" — PHC as global strategy\n• 8 PHC Elements (mnemonic ESCUDERO): Education, Social/MCH, Communicable disease control, Use of essential drugs, Dental, EPI, Rehabilitation, Nutrition/water/sanitation\n• Philippine UHC: RA 11223 (2019) — automatic PhilHealth enrollment for all Filipinos\n• Health devolution: RA 7160 (Local Government Code 1991) — LGUs manage health\n• Level 1 = BHC/RHU; Level 2 = District/Provincial Hospital; Level 3 = Regional/Medical Center\n• PHC principles: accessible, affordable, acceptable, available (4 As)',
          },
          {
            id: 'ch-ch1-s2',
            number: 'Section 2',
            title: 'Levels of Prevention, Epidemiologic Triad & Chain of Infection',
            content:
              'Leavell and Clark\'s levels of prevention categorize health interventions into three levels. Primary prevention prevents disease before it occurs — examples: immunization, health education, lifestyle modification, sanitation. Secondary prevention involves early detection and treatment — examples: screening programs (pap smear, mammography, BP screening), treatment of early disease. Tertiary prevention minimizes disability and promotes rehabilitation after disease has occurred — examples: physical therapy, vocational rehabilitation, halfway houses. The Epidemiologic Triad (Ecological Triad) models infectious disease as the interaction among Host, Agent (pathogen), and Environment. Disrupting any one component breaks the chain of disease. The Chain of Infection has 6 links: Infectious agent → Reservoir → Portal of exit → Mode of transmission (contact, airborne, vehicle, vector, droplet) → Portal of entry → Susceptible host. Breaking any link interrupts transmission. Most effective public health measure: handwashing breaks the chain at mode of transmission. Incidence rate measures new cases of a disease in a specified period; prevalence measures all existing cases at a point in time.',
            summary:
              '• Primary prevention: prevents disease — immunization, health education, sanitation\n• Secondary prevention: early detection — screening tests (pap smear, mammography)\n• Tertiary prevention: rehabilitation — PT, vocational rehab\n• Epidemiologic Triad: Host + Agent + Environment\n• Chain of Infection (6 links): Agent → Reservoir → Exit → Transmission → Entry → Susceptible Host\n• Break chain = prevent disease; HANDWASHING most effective intervention\n• Incidence = NEW cases / at-risk population × time period\n• Prevalence = ALL existing cases / total population (point in time)\n• Endemic: usual level; Epidemic: unusual increase; Pandemic: worldwide spread',
          },
        ],
      },
      {
        id: 'ch-ch2',
        title: 'Philippine Expanded Program on Immunization (EPI)',
        sections: [
          {
            id: 'ch-ch2-s1',
            number: 'Section 1',
            title: 'Immunization Schedule & Key Vaccines',
            content:
              'The Philippine Expanded Program on Immunization (EPI), established in 1976, provides free vaccines to all Filipino children and selected adults. The updated 2019 EPI schedule includes: BCG (Bacillus Calmette-Guérin) — given at birth (or within 1 year), protects against tuberculosis meningitis and miliary TB; single dose intradermally in the right deltoid region. Hepatitis B — first dose at birth (within 24 hours), then at 6, 10, and 14 weeks as part of Pentavalent vaccine. Pentavalent vaccine (DPT-HepB-Hib) — given at 6, 10, and 14 weeks of age; protects against diphtheria, pertussis, tetanus, hepatitis B, and Haemophilus influenzae type b. Oral Polio Vaccine (OPV) and Inactivated Polio Vaccine (IPV) — OPV at 6, 10, 14 weeks; IPV at 14 weeks. Pneumococcal Conjugate Vaccine (PCV) — at 6, 10, 14 weeks. MMR (Measles, Mumps, Rubella) — first dose at 9 months (12 months per updated schedule), second dose at 12–15 months. For cold chain management: vaccines must be stored at +2 to +8°C (refrigerator temperature); the cold chain is the system of storing and transporting vaccines at required temperature from manufacturer to recipient.',
            summary:
              '• BCG: birth → right deltoid, intradermal; protects against TB meningitis/miliary TB\n• HepB: birth (within 24h) → 6, 10, 14 weeks (as Pentavalent)\n• Pentavalent (DPT-HepB-Hib): 6, 10, 14 weeks\n• OPV: 6, 10, 14 weeks (oral); IPV: 14 weeks (injectable)\n• PCV: 6, 10, 14 weeks\n• MMR: 9 months (1st dose); 12–15 months (2nd dose)\n• Cold chain: +2°C to +8°C (vaccine refrigerator temperature)\n• Vaccines damaged by freezing: DPT, TT, HepB, Hib, PCV (DO NOT freeze)\n• Vaccines that tolerate freezing: OPV (stored frozen at −15 to −25°C)',
          },
          {
            id: 'ch-ch2-s2',
            number: 'Section 2',
            title: 'Cold Chain Management & Nursing Responsibilities',
            content:
              'Cold chain management is critical for vaccine potency; temperature deviations can render vaccines ineffective. The cold chain system in the Philippines uses a tiered system from the national level (National Vaccine Store) to regional, provincial, and municipal/barangay levels. Vaccines sensitive to freezing (freeze-sensitive): DPT, TT (tetanus toxoid), HepB, Hib, PCV, and IPV — these are damaged by freezing and should be discarded if frozen. Vaccines sensitive to heat (heat-sensitive): all vaccines are damaged by heat; once the cold chain is broken, potency cannot be restored. OPV is the most heat-sensitive vaccine. The Vaccine Vial Monitor (VVM) is a heat-sensitive label on vaccines — if the inner square is lighter than the outer circle, the vaccine is still usable; if equal or darker, discard. Shake test is used to detect freeze damage in DPT, HepB, and other freeze-sensitive vaccines. Nursing responsibilities in EPI include: conducting immunization sessions, educating parents on schedules and common side effects (fever, local soreness), managing minor reactions (paracetamol for fever, cold compress for soreness), identifying and referring cases of Adverse Events Following Immunization (AEFI), and maintaining immunization records.',
            summary:
              '• Freeze-sensitive vaccines: DPT, TT, HepB, Hib, PCV, IPV — discard if frozen\n• Most heat-sensitive: OPV (stored frozen −15 to −25°C)\n• VVM: inner square LIGHTER than outer circle = OK to use; EQUAL or DARKER = discard\n• Shake test: detects freeze damage in DPT, HepB, other freeze-sensitive vaccines\n• Cold chain tiers: National → Regional → Provincial → Municipal → Barangay\n• Common post-immunization reactions: fever, local soreness → paracetamol + cold compress\n• AEFI: Adverse Events Following Immunization — report and refer\n• OPV contraindication: immunocompromised patients → use IPV instead',
          },
        ],
      },
    ],
  },
];

export default NURSING_TOPICS;
