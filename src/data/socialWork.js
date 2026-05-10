const SOCIAL_WORK_TOPICS = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. SOCIAL WORK PRACTICE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-practice',
    title: 'Social Work Practice',
    shortTitle: 'SW Practice',
    category: 'Social Work',
    icon: 'Users',
    year: 'SWLE Core',
    description:
      'Covers the fundamental methods, values, and processes of social work practice in the Philippine context. Includes generalist practice, case management, group work, community organizing, and crisis intervention — the most heavily tested domain in the Philippine Social Work Licensure Examination.',
    color: { light: '#dcfce7', dark: '#166534', badge: '#22c55e' },
    chapters: [
      {
        id: 'swprac-generalist',
        title: 'Generalist Practice',
        sections: [
          {
            id: 'swprac-gen-definition',
            number: 'Topic 1.1',
            title: 'Definition, Scope & Social Work Values',
            content:
              'Social work is a practice-based profession and academic discipline that promotes social change and development, social cohesion, and the empowerment and liberation of people. The NASW defines social work as the professional activity of helping individuals, families, groups, organizations, and communities to enhance or restore their capacity for social functioning and to create societal conditions favorable to their goals. In the Philippines, Republic Act 10847 defines the practice of social work as the professional activity of helping individuals, groups, and communities through social work methods such as social casework, group work, community work, social action, social welfare administration, and social work research. The core values of social work include service (the primary goal is to help people in need), social justice (challenging injustice), dignity and worth of the person, importance of human relationships, integrity, and competence. Social work operates at micro (individual/family), mezzo (groups/organizations), and macro (community/policy) levels.',
            summary:
              '• NASW definition: helping individuals, families, groups, organizations, and communities\n• RA 10847 (Philippine Social Work Act 2016): primary law governing Philippine social work practice\n• Core values (NASW): Service, Social Justice, Dignity and Worth, Human Relationships, Integrity, Competence\n• Levels of practice: Micro (individual/family), Mezzo (groups/organizations), Macro (community/policy)\n• Social work methods: casework, group work, community organizing, social action, research, administration',
          },
          {
            id: 'swprac-gen-case',
            number: 'Topic 1.2',
            title: 'Case Management & Individualization',
            content:
              'Case management in social work is a collaborative process that assesses, plans, implements, coordinates, monitors, and evaluates the options and services required to meet a client\'s health and human service needs. The principle of individualization recognizes that each client is a unique individual with distinct needs, strengths, and circumstances, and must be treated as such rather than as a member of a category or stereotype. The case management process follows the social casework process: (1) Intake and engagement — establishing rapport and defining the helping relationship; (2) Assessment — gathering and analyzing information about the client\'s situation; (3) Planning — developing a service plan with the client; (4) Intervention/implementation — connecting clients to resources and services; (5) Monitoring and evaluation — tracking progress toward goals; (6) Termination — planned conclusion of the helping relationship. The biopsychosocial assessment framework examines biological, psychological, and social factors affecting the client.',
            summary:
              '• Case management: assess, plan, implement, coordinate, monitor, evaluate\n• Individualization: treat each client as a unique person with specific needs\n• Casework process stages: Intake → Assessment → Planning → Intervention → Evaluation → Termination\n• Biopsychosocial model: biological, psychological, and social dimensions\n• Rapport and therapeutic relationship are foundational to effective practice\n• Documentation is a core case management responsibility',
          },
          {
            id: 'swprac-gen-strengths',
            number: 'Topic 1.3',
            title: 'Strengths-Based Perspective & Empowerment',
            content:
              'The strengths-based perspective, developed by Dennis Saleebey, shifts focus from client deficits and pathologies to client strengths, capacities, and resources. It operates on the belief that all individuals, families, groups, and communities have strengths that can be mobilized to address challenges. Key principles include: every person has strengths; trauma and adversity can be sources of challenge and opportunity; assume the client knows what is best; avoid diagnosing through the lens of pathology; and the environment is full of resources. Empowerment practice, closely related to the strengths perspective, aims to increase the personal, interpersonal, or political power of individuals and communities so they can take action to improve their situations. Solomon (1976) originally applied empowerment to Black communities; it has since expanded to all marginalized groups. In the Philippine context, empowerment is central to DSWD programs and community development frameworks.',
            summary:
              '• Strengths-based perspective (Saleebey): focus on client strengths, not deficits\n• Key principle: every person has strengths and the capacity for change\n• Empowerment: increasing personal, interpersonal, and political power of clients\n• Solomon (1976): originator of empowerment practice in social work\n• Opposite of deficit/pathology model (medical model)\n• Aligned with: person-in-environment, ecological perspective, narrative therapy',
          },
        ],
      },
      {
        id: 'swprac-intervention',
        title: 'Intervention Methods',
        sections: [
          {
            id: 'swprac-casework',
            number: 'Topic 2.1',
            title: 'Casework & Group Work',
            content:
              'Social casework is a method of social work used to help individuals and families solve personal and social problems. Mary Richmond (1917) pioneered social casework with her book "Social Diagnosis," establishing the systematic collection and analysis of social evidence. The casework process involves relationship, study, diagnosis, treatment, and evaluation. Gordon Hamilton further developed casework theory emphasizing the person-in-situation. Group work as a social work method helps individuals through the group experience. Gisela Konopka defined group work as a method of social work that utilizes the group experience to enhance the social functioning of individuals. Types of social work groups include: (1) Task groups (committees, teams); (2) Treatment groups (therapy, support, self-help); (3) Educational groups; (4) Socialization groups. Group development stages by Tuckman: Forming, Storming, Norming, Performing, and Adjourning. Northern & Kurland identified pre-group, beginning, middle, and ending stages specific to social work groups.',
            summary:
              '• Social casework: Mary Richmond "Social Diagnosis" (1917) — first systematic casework text\n• Casework process: Engagement → Study → Diagnosis → Treatment → Evaluation\n• Group work definition: Gisela Konopka — using group experience to enhance social functioning\n• Tuckman\'s stages: Forming, Storming, Norming, Performing, Adjourning\n• Types of groups: task, treatment (therapy, support, self-help), educational, socialization\n• Group work in Philippines: used in residential care, community centers, DSWD programs',
          },
          {
            id: 'swprac-co',
            number: 'Topic 2.2',
            title: 'Community Organizing & the CO Process in the Philippines',
            content:
              'Community organizing (CO) is the process of bringing together community members to address social problems and achieve collective goals through collective action. In the Philippines, CO has deep roots in the people power tradition and is a core method in social development work. The Philippine community organizing process typically follows these stages: (1) Community entry/social preparation — building trust with the community; (2) Community study/social investigation — participatory assessment of community needs, strengths, and issues; (3) Community diagnosis/reflection — analyzing root causes of problems; (4) Formation of people\'s organizations (POs) — organizing community members into collective structures; (5) Leadership development — training local leaders; (6) Planning and action — developing and implementing community plans; (7) Evaluation and documentation. Paulo Freire\'s conscientization (consciousness-raising) is foundational to Philippine CO, emphasizing critical awareness of oppressive structures. DSWD and NGOs use participatory approaches such as Participatory Rural Appraisal (PRA) and Participatory Action Research (PAR).',
            summary:
              '• CO in Philippines: participatory, people-centered, rooted in Freire\'s conscientization\n• CO stages: Entry → Community Study → Diagnosis → Formation of POs → Leadership Dev → Action → Evaluation\n• People\'s Organizations (POs): key outcome of community organizing\n• Paulo Freire: "Pedagogy of the Oppressed," conscientization, praxis (action + reflection)\n• PRA (Participatory Rural Appraisal): community-based needs assessment tool\n• DSWD uses CO in Kalahi-CIDSS and other community-driven development programs',
          },
        ],
      },
      {
        id: 'swprac-crisis',
        title: 'Crisis Intervention',
        sections: [
          {
            id: 'swprac-crisis-theory',
            number: 'Topic 3.1',
            title: 'Crisis Theory, Roberts 7-Stage Model & Types of Crisis',
            content:
              'Crisis theory was developed by Gerald Caplan in the 1960s, who defined a crisis as a state of disequilibrium resulting when a person faces an obstacle to important life goals and their usual coping methods fail. A crisis is time-limited (usually 4–6 weeks), and the person is open to change and intervention during this period. Crisis intervention aims to restore the person to at least their pre-crisis level of functioning. Types of crises: (1) Developmental/maturational crises — normal life transitions (adolescence, marriage, retirement); (2) Situational crises — unexpected, hazardous events (accidents, job loss, divorce, death); (3) Adventitious/social crises — disasters, violence, social upheaval. Albert Roberts\' Seven-Stage Crisis Intervention Model (ACT Model): (1) Plan and conduct crisis assessment; (2) Establish rapport and a collaborative relationship; (3) Identify major problems; (4) Deal with feelings and provide support; (5) Explore possible alternatives; (6) Formulate an action plan; (7) Provide follow-up to check progress.',
            summary:
              '• Caplan (1960s): crisis = state of disequilibrium when usual coping fails\n• Crisis is time-limited (4–6 weeks); period of vulnerability but also opportunity\n• Goal: restore to at least pre-crisis functioning (homeostasis)\n• Types: Developmental (maturational), Situational (unexpected events), Adventitious (disasters)\n• Roberts 7-Stage Model: Assess → Rapport → Identify Problems → Support feelings → Alternatives → Action plan → Follow-up\n• Crisis intervention ≠ therapy; it is brief, focused, and action-oriented',
          },
          {
            id: 'swprac-crisis-suicide',
            number: 'Topic 3.2',
            title: 'Suicide Assessment & Intervention',
            content:
              'Suicide is a major public health concern and a critical area of competence for social workers. Risk assessment involves evaluating ideation (thoughts), plan (specific method), means (access to method), intent (determination to act), and protective factors (reasons for living, social support). The SAD PERSONS scale assesses: Sex, Age, Depression, Previous attempt, Ethanol/substance use, Rational thinking loss, Social supports lacking, Organized plan, No spouse/partner, Sickness. The Columbia Suicide Severity Rating Scale (C-SSRS) is a widely used standardized tool. Protective factors include strong social support, religious beliefs, responsibility for children, and positive coping skills. Intervention principles: always take suicidal statements seriously; establish a safe environment; remove or secure lethal means; engage the person in collaborative safety planning; involve family or support systems when appropriate; refer to psychiatric services when needed. In the Philippines, RA 11036 (Mental Health Act of 2018) mandates mental health services and suicide prevention programs.',
            summary:
              '• Suicide risk assessment: Ideation, Plan, Means, Intent, Protective factors\n• SAD PERSONS scale: Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social supports, Organized plan, No spouse, Sickness\n• Always take suicidal statements seriously — never dismiss or challenge\n• Safety planning: collaborative plan to manage crisis moments\n• Means restriction: securing or removing access to lethal means\n• RA 11036 (Mental Health Act 2018): legal basis for mental health and suicide prevention in Philippines',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. HUMAN BEHAVIOR & SOCIAL ENVIRONMENT (HBSE)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-hbse',
    title: 'Human Behavior & Social Environment',
    shortTitle: 'HBSE',
    category: 'Social Work',
    icon: 'User',
    year: 'SWLE Core',
    description:
      'Examines how individuals develop and function across the lifespan within their social environments. Covers developmental theories, systems theory, and ecological perspectives that inform social work assessment and intervention.',
    color: { light: '#e0f2fe', dark: '#0c4a6e', badge: '#0284c7' },
    chapters: [
      {
        id: 'swhbse-lifespan',
        title: 'Lifespan Development',
        sections: [
          {
            id: 'swhbse-erikson',
            number: 'Topic 1.1',
            title: 'Erikson\'s Psychosocial Stages & Piaget\'s Cognitive Development',
            content:
              'Erik Erikson\'s theory of psychosocial development proposes eight stages across the lifespan, each characterized by a developmental crisis or conflict: (1) Trust vs. Mistrust (0–18 months) — hope; (2) Autonomy vs. Shame and Doubt (18 months–3 years) — will; (3) Initiative vs. Guilt (3–6 years) — purpose; (4) Industry vs. Inferiority (6–12 years) — competence; (5) Identity vs. Role Confusion (12–18 years) — fidelity; (6) Intimacy vs. Isolation (young adulthood) — love; (7) Generativity vs. Stagnation (middle adulthood) — care; (8) Ego Integrity vs. Despair (late adulthood) — wisdom. Jean Piaget\'s four stages of cognitive development: (1) Sensorimotor (0–2 years) — learning through senses and movement; (2) Preoperational (2–7 years) — symbolic thinking, egocentrism; (3) Concrete Operational (7–11 years) — logical thinking, conservation; (4) Formal Operational (12+ years) — abstract reasoning. Piaget\'s key concepts: schemas, assimilation, accommodation, and equilibration.',
            summary:
              '• Erikson Stage 5 (Identity vs. Role Confusion): adolescence — most tested in SWLE\n• Erikson Stage 8 (Ego Integrity vs. Despair): late adulthood — important for elderly social work\n• Piaget Preoperational: egocentrism, animism, lack of conservation (2–7 years)\n• Piaget Concrete Operational: conservation, reversibility, classification (7–11 years)\n• Piaget Formal Operational: hypothetical-deductive reasoning (12+ years)\n• Object permanence: developed in sensorimotor stage',
          },
          {
            id: 'swhbse-bronfenbrenner',
            number: 'Topic 1.2',
            title: 'Bronfenbrenner\'s Ecological Model',
            content:
              'Urie Bronfenbrenner\'s Ecological Systems Theory describes human development as occurring within nested environmental systems. The model identifies five systems: (1) Microsystem — the immediate environment containing the developing person (family, school, peers, church); (2) Mesosystem — the interconnections between microsystems (parent-teacher relationship); (3) Exosystem — systems that indirectly affect the child (parent\'s workplace, community services); (4) Macrosystem — broader cultural, economic, and political contexts (laws, cultural values, social norms); (5) Chronosystem — the dimension of time and how environments change over time (historical events, transitions). Bronfenbrenner later revised his theory to emphasize proximal processes — sustained, reciprocal interactions between the developing person and the environment. This ecological model is highly relevant in Philippine social work for understanding how poverty, policy, culture, and family dynamics interact to affect clients.',
            summary:
              '• Microsystem: direct/immediate environment (family, school, peers)\n• Mesosystem: linkages between microsystems (parent-teacher interaction)\n• Exosystem: indirect environmental influences (parent\'s work, LGU policies)\n• Macrosystem: cultural context, laws, values, socioeconomic systems\n• Chronosystem: changes over time (historical events, life transitions)\n• Key concept: proximal processes — sustained interactions drive development',
          },
        ],
      },
      {
        id: 'swhbse-systems',
        title: 'Systems & Theories',
        sections: [
          {
            id: 'swhbse-systems-theory',
            number: 'Topic 2.1',
            title: 'Systems Theory & Social Systems',
            content:
              'Systems theory, originating in biology (Ludwig von Bertalanffy) and adapted for social work by Gordon Hearn, views the individual, family, group, organization, and community as interconnected systems. Key concepts: (1) System — an organized whole consisting of interacting parts; (2) Boundaries — define what is inside and outside the system (open vs. closed); (3) Homeostasis — the system\'s tendency to maintain a steady state; (4) Feedback — information returned to the system that influences future behavior (positive feedback = amplification; negative feedback = stabilization); (5) Entropy — tendency toward disorder in closed systems; (6) Equifinality — different starting points can lead to the same outcome; (7) Multifinality — same starting point can lead to different outcomes. Systems theory emphasizes that problems are not solely within individuals but emerge from interactions between person and environment. The Unitary Model (Pincus and Minahan) applies systems theory directly to social work practice, identifying four systems: change agent system, client system, target system, and action system.',
            summary:
              '• Systems theory: social problems are systemic, not just individual\n• Open systems: exchange with environment; Closed systems: self-contained\n• Homeostasis: tendency to maintain equilibrium\n• Equifinality: different paths → same outcome; Multifinality: same path → different outcomes\n• Pincus & Minahan: change agent, client, target, and action systems\n• Feedback loops: negative = stabilizing; positive = amplifying change',
          },
          {
            id: 'swhbse-maslow',
            number: 'Topic 2.2',
            title: 'Ecological Perspective, Person-in-Environment & Maslow\'s Hierarchy',
            content:
              'The ecological perspective in social work (Germain and Gitterman\'s Life Model) applies ecological concepts like adaptation, niche, habitat, and life stressors to human behavior. Person-in-Environment (PIE) is a foundational social work concept emphasizing that individuals must be understood in the context of their social and physical environments. The PIE classification system developed by Karls and Wandrei (1994) is used to describe social functioning problems, environmental factors, mental health, and physical health. Abraham Maslow\'s Hierarchy of Needs organizes human motivations into five levels: (1) Physiological needs (food, water, shelter, air); (2) Safety and security needs; (3) Love and belonging needs (social relationships); (4) Esteem needs (self-esteem, achievement); (5) Self-actualization (realizing one\'s full potential). Maslow proposed that lower-level needs must be sufficiently met before higher-level needs become motivating. In social work, Maslow\'s hierarchy guides needs assessment and service prioritization.',
            summary:
              '• Ecological perspective: Germain & Gitterman "Life Model" — adaptation, habitat, niche\n• PIE (Person-in-Environment): assess client within their social context\n• PIE Classification System (Karls & Wandrei, 1994): social role problems, environment, mental health, physical health\n• Maslow\'s hierarchy: Physiological → Safety → Love/Belonging → Esteem → Self-actualization\n• Deficiency needs (D-needs): physiological, safety, love, esteem\n• Growth need (B-need): self-actualization — motivation after lower needs are met',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. SOCIAL WELFARE POLICY & SERVICES
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-policy',
    title: 'Social Welfare Policy & Services',
    shortTitle: 'SW Policy',
    category: 'Social Work',
    icon: 'Globe',
    year: 'SWLE Core',
    description:
      'Examines the history, development, and current structure of social welfare policy and services in the Philippines. Covers landmark Philippine social welfare legislation and the role of DSWD and other agencies in delivering social protection programs.',
    color: { light: '#fef9c3', dark: '#713f12', badge: '#ca8a04' },
    chapters: [
      {
        id: 'swpol-history',
        title: 'Philippine Social Welfare History',
        sections: [
          {
            id: 'swpol-hist-spanish',
            number: 'Topic 1.1',
            title: 'Spanish Era to American Period',
            content:
              'During the Spanish colonial period (1565–1898), social welfare in the Philippines was primarily provided by the Catholic Church through charitable institutions. The Church established hospices (hospitals for the sick poor), orphanages, and schools for the indigent. Religious orders such as the Jesuits, Franciscans, and Augustinians operated these institutions. The first hospital in the Philippines, Hospital Real de Manila, was established by the Spanish in 1578. Social welfare during this era was driven by religious charity (caridad) rather than state obligation. The American colonial period (1898–1946) introduced a more systematic approach to social welfare. The American administration established the Bureau of Public Welfare in 1915, the first government social welfare agency in the Philippines. The Public Welfare Board was established in 1921 to coordinate welfare activities. The Americans also established juvenile courts, reformatories, and the Welfareville complex (now known as Tahanan ng Batang Walang Tahanan). This period saw the professionalization of social work with the establishment of the Philippine Association of Social Workers (1947).',
            summary:
              '• Spanish era: Church-led charity through hospices, orphanages, and schools\n• First hospital: Hospital Real de Manila (1578), managed by religious orders\n• American period: introduced systematic government welfare\n• Bureau of Public Welfare (1915): first government social welfare agency\n• Public Welfare Board (1921): coordinated welfare activities\n• Welfareville complex: established by Americans for dependent and delinquent children\n• PASW (Philippine Association of Social Workers): established 1947',
          },
          {
            id: 'swpol-hist-post',
            number: 'Topic 1.2',
            title: 'Post-Independence: DSWD Establishment & Development',
            content:
              'After Philippine independence in 1946, the government assumed primary responsibility for social welfare. The Social Welfare Commission was created in 1947, which was later reorganized into the Department of Social Welfare (DSW) in 1968 under President Ferdinand Marcos. In 1976, the mandate was expanded to include development, and the agency was renamed the Department of Social Welfare and Development (DSWD). The DSWD is the primary government agency responsible for the development, implementation, and coordination of social protection and assistance programs, services, and interventions. Major DSWD programs include: Pantawid Pamilyang Pilipino Program (4Ps), Sustainable Livelihood Program (SLP), Assistance to Individuals in Crisis Situations (AICS), Supplemental Feeding Program, and Supplementary Feeding Program. The social welfare and development framework rests on the Social Reform and Poverty Alleviation Act (RA 8425) which created the National Anti-Poverty Commission (NAPC) and institutionalized sector representation in policy-making.',
            summary:
              '• Social Welfare Commission (1947): post-independence social welfare body\n• DSW (1968): renamed under Marcos administration\n• DSWD (1976): current name, mandate expanded to include development\n• Key DSWD programs: 4Ps, SLP, AICS, Supplemental Feeding\n• RA 8425 (Social Reform Act): established NAPC, sectoral representation\n• DSWD mandate: social protection, social welfare services, community development\n• Partner agencies: LGUs, NGOs, POs, civil society organizations',
          },
        ],
      },
      {
        id: 'swpol-laws',
        title: 'Philippine Social Welfare Laws',
        sections: [
          {
            id: 'swpol-4ps',
            number: 'Topic 2.1',
            title: 'RA 11310 (4Ps), RA 9262 (VAWC) & RA 7610 (Child Abuse)',
            content:
              'Republic Act 11310, the Pantawid Pamilyang Pilipino Program (4Ps) Act of 2019, institutionalizes the 4Ps as a permanent poverty alleviation program. The program provides conditional cash transfers (CCT) to extremely poor households with conditions including: children must attend school 85% of the time, family members must attend family development sessions, and pregnant women and children must receive regular health check-ups. Republic Act 9262, the Anti-Violence Against Women and Their Children (VAWC) Act of 2004, defines violence as any act or series of acts against women and their children — physical, sexual, psychological violence, and economic abuse. Penalties range from 1 month to 20 years imprisonment. The law provides for Barangay Protection Orders (BPO), Temporary Protection Orders (TPO), and Permanent Protection Orders (PPO). Republic Act 7610, the Special Protection of Children Against Abuse, Exploitation, and Discrimination Act of 1992, protects children from all forms of abuse, neglect, cruelty, and exploitation. A child under RA 7610 is a person below 18 years of age.',
            summary:
              '• RA 11310 (4Ps Act, 2019): institutionalized conditional cash transfer program\n• 4Ps conditions: school attendance ≥85%, health visits, Family Development Sessions\n• RA 9262 (VAWC, 2004): physical, sexual, psychological, economic violence against women and children\n• RA 9262 protection orders: BPO (Barangay), TPO (Temporary), PPO (Permanent)\n• RA 7610 (Child Abuse Act, 1992): child = person below 18 years\n• RA 7610 offenses: child abuse, child labor, child trafficking, child prostitution',
          },
          {
            id: 'swpol-ra10821',
            number: 'Topic 2.2',
            title: 'RA 10821 (Children in Emergencies) & Solo Parent Welfare Act',
            content:
              'Republic Act 10821, the Children\'s Emergency Relief and Protection Act (2016), establishes standards for the protection and care of children in emergency and disaster situations. It mandates the provision of education, psychological support, and protection from exploitation and abuse in evacuation centers and other emergency settings. The law requires child-friendly spaces in evacuation centers and designates DSWD as the lead agency for child protection in emergencies, with DEPED for emergency education and DOH for health. Republic Act 8972, the Solo Parents\' Welfare Act of 2000, provides for benefits and privileges to solo parents, defined as any individual who falls under the following: parent left due to death, abandonment, incarceration, or legal separation; a single parent. Benefits include flexible work schedule, parental leave of 7 working days, educational assistance, housing priority, medical assistance, and psychological services. DSWD certificates are required for solo parent ID. The law was amended by RA 11861 (2022) to expand coverage and benefits.',
            summary:
              '• RA 10821 (2016): children\'s rights in emergencies and disasters\n• RA 10821: child-friendly spaces in evacuation centers; DSWD as lead child protection agency\n• Solo Parents Welfare Act (RA 8972, 2000): benefits for single parents\n• Solo parent: parent due to death, abandonment, incarceration, legal separation of spouse\n• Benefits: 7 days parental leave, flexible work, educational assistance, DSWD ID\n• RA 11861 (2022): expanded Solo Parent Welfare Act coverage\n• All laws align with UN Convention on the Rights of the Child (UNCRC)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. SOCIAL WORK RESEARCH METHODS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-research',
    title: 'Social Work Research Methods',
    shortTitle: 'SW Research',
    category: 'Social Work',
    icon: 'Search',
    year: 'SWLE Core',
    description:
      'Covers the research methods used to generate knowledge for social work practice and policy. Includes quantitative and qualitative approaches, research design, sampling, data collection, analysis, and ethical considerations — required competency for the Philippine Social Work Licensure Examination.',
    color: { light: '#ede9fe', dark: '#4c1d95', badge: '#8b5cf6' },
    chapters: [
      {
        id: 'swres-design',
        title: 'Research Design',
        sections: [
          {
            id: 'swres-quant-qual',
            number: 'Topic 1.1',
            title: 'Quantitative vs Qualitative Research & Study Designs',
            content:
              'Quantitative research uses numerical data and statistical methods to test hypotheses and establish generalizable findings. It is associated with positivist epistemology, objectivity, and deductive reasoning. Common quantitative designs in social work include: experimental (random assignment to treatment and control groups — highest internal validity), quasi-experimental (no random assignment — natural experiments, pre-post designs), correlational (examines relationships between variables without manipulation), and descriptive/survey (describes characteristics of a population). Qualitative research seeks to understand the meaning, experiences, and perspectives of people through text, narrative, and interpretation. It is associated with interpretive/constructivist epistemology, subjectivity, and inductive reasoning. Common qualitative designs: phenomenology (lived experience), grounded theory (theory generation from data), ethnography (culture and context), case study (in-depth single unit), and narrative inquiry (stories). Mixed methods research combines both approaches to leverage complementary strengths.',
            summary:
              '• Quantitative: numerical, deductive, positivist; tests hypotheses\n• Qualitative: narrative, inductive, interpretivist; generates meaning\n• Experimental design: random assignment → highest internal validity\n• Quasi-experimental: no random assignment; common in social work evaluation\n• Phenomenology: lived experience; Grounded theory: builds theory from data\n• Ethnography: cultural study; Case study: in-depth single unit analysis\n• Mixed methods: combines quantitative and qualitative approaches',
          },
          {
            id: 'swres-sampling',
            number: 'Topic 1.2',
            title: 'Sampling Methods',
            content:
              'Sampling is the process of selecting a subset of individuals from a population to represent the whole. Probability sampling methods ensure every member of the population has a known chance of selection, enabling generalization: (1) Simple random sampling — each member has an equal chance; (2) Stratified random sampling — population divided into strata, then randomly sampled within each; (3) Cluster sampling — population divided into clusters, then clusters are randomly selected; (4) Systematic sampling — selecting every kth element after a random start. Non-probability sampling methods do not ensure representativeness but are practical for qualitative research and hard-to-reach populations: (1) Purposive sampling — selecting information-rich cases deliberately; (2) Snowball sampling — participants recruit other participants (useful for hidden populations); (3) Convenience sampling — selecting readily available participants; (4) Quota sampling — ensuring proportional representation without randomization. Sample size in quantitative research is determined by desired confidence level, acceptable margin of error, and population size (Slovin\'s formula: n = N/(1+Ne²)).',
            summary:
              '• Probability sampling: allows generalization; requires sampling frame\n• Simple random sampling: each member has equal probability of selection\n• Stratified: ensures representation of subgroups\n• Cluster: practical for geographically dispersed populations\n• Purposive: select information-rich cases (qualitative research)\n• Snowball: chain-referral; used for hard-to-reach or hidden populations\n• Slovin\'s formula: n = N/(1+Ne²) for determining sample size',
          },
        ],
      },
      {
        id: 'swres-data',
        title: 'Data Collection & Analysis',
        sections: [
          {
            id: 'swres-collect',
            number: 'Topic 2.1',
            title: 'Interviews, Observation, FGD & Qualitative Analysis',
            content:
              'Interviews are the most common data collection method in social work research. Types: structured (fixed questions, standardized), semi-structured (flexible within a framework), and unstructured (open and exploratory). Key skills: probing, paraphrasing, active listening, and managing difficult emotions. Observation methods: participant observation (researcher immerses in setting), non-participant observation (external, detached), overt (participants know they are being observed), and covert (participants are unaware). Focus Group Discussions (FGDs) involve 6–12 participants discussing a focused topic under a skilled moderator. They are useful for exploring attitudes, beliefs, and community norms. Qualitative data analysis involves coding: open coding (identifying concepts from data), axial coding (linking categories), and selective coding (identifying the core category — used in grounded theory). Thematic analysis (Braun and Clarke) identifies patterns of meaning (themes) across qualitative data through six phases: familiarization, generating codes, searching for themes, reviewing themes, defining themes, and writing up.',
            summary:
              '• Structured interview: fixed questions; good for surveys\n• Semi-structured: flexible; most common in social work research\n• FGD: 6–12 participants; moderator-facilitated group discussion\n• Participant observation: researcher as active community member\n• Grounded theory coding: open → axial → selective coding\n• Thematic analysis (Braun & Clarke): 6-phase process to identify themes\n• Data saturation: point at which no new themes emerge from additional data',
          },
          {
            id: 'swres-ethics',
            number: 'Topic 2.2',
            title: 'Research Ethics & Statistical Tests',
            content:
              'Research ethics in social work requires adherence to fundamental principles: (1) Autonomy and informed consent — participants must voluntarily agree after full disclosure; (2) Beneficence — research must benefit participants or society; (3) Non-maleficence — minimize harm to participants; (4) Justice — fair distribution of research benefits and burdens. Institutional Review Boards (IRBs) or Ethics Review Committees (ERCs) review research proposals involving human subjects. Confidentiality and anonymity protect participant privacy. In the Philippines, the Philippine Health Research Ethics Board (PHREB) and DOST-PCHRD oversee research ethics. Basic statistical tests in social work research: descriptive statistics (mean, median, mode, standard deviation); inferential tests include chi-square (χ²) test for independence between categorical variables, t-test for comparing means of two groups, ANOVA for comparing means of three or more groups, Pearson\'s r for correlation between continuous variables, and Spearman\'s rho for non-parametric correlation. Statistical significance is typically set at p < 0.05.',
            summary:
              '• Research ethics principles: Autonomy, Beneficence, Non-maleficence, Justice\n• Informed consent: voluntary, informed, competent, ongoing\n• IRB/ERC: reviews research proposals involving human subjects\n• Chi-square (χ²): tests association between categorical variables\n• t-test: compares means of two groups\n• ANOVA: compares means of three or more groups\n• Pearson r: correlation between continuous variables; p < 0.05 = statistically significant',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. SOCIAL WORK LAWS & ETHICS
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-laws',
    title: 'Social Work Laws & Ethics',
    shortTitle: 'SW Laws & Ethics',
    category: 'Social Work',
    icon: 'FileText',
    year: 'SWLE Core',
    description:
      'Covers the legal framework governing the social work profession in the Philippines and the ethical standards that guide practice. Includes RA 4373, RA 10847, the NASW Code of Ethics, and Philippine ethical guidelines — essential for the Social Work Licensure Examination.',
    color: { light: '#fce7f3', dark: '#831843', badge: '#db2777' },
    chapters: [
      {
        id: 'swlaws-ph',
        title: 'Philippine Social Work Laws',
        sections: [
          {
            id: 'swlaws-ra4373',
            number: 'Topic 1.1',
            title: 'RA 4373 & RA 10847 — Social Work Acts',
            content:
              'Republic Act 4373 (1965) was the original Social Work Practice Act in the Philippines, which first regulated and licensed the social work profession. It established the Board of Examiners for Social Workers. Republic Act 10847 (2016), the Social Work Act of 2016, repealed and replaced RA 4373. Key provisions of RA 10847: (1) Educational requirements — a Bachelor of Science in Social Work (BSSW) is the minimum educational qualification for practice; (2) Licensure — passing the Philippine Social Work Licensure Examination administered by PRC is required to practice as a Registered Social Worker (RSW); (3) Board of Social Work (BOSWe) — established under the Professional Regulation Commission (PRC) to supervise the social work profession; the Board consists of a chairman and two members; (4) Scope of practice — social work methods including casework, group work, community organizing, social welfare administration, social work research, and social action; (5) Continuing Professional Development (CPD) — required for license renewal. The BOSWe administers the SWLE twice per year.',
            summary:
              '• RA 4373 (1965): original Social Work Practice Act; established Board of Examiners\n• RA 10847 (2016): current Social Work Act, replaced RA 4373\n• Minimum qualification: BSSW (Bachelor of Science in Social Work)\n• Licensure body: Board of Social Work (BOSWe) under PRC\n• BOSWe: 1 chairman + 2 members\n• Title: Registered Social Worker (RSW) upon passing SWLE\n• CPD: required for license renewal',
          },
          {
            id: 'swlaws-revocation',
            number: 'Topic 1.2',
            title: 'Grounds for Revocation of License',
            content:
              'Under RA 10847, the Board of Social Work may revoke or suspend the Certificate of Registration and Professional Identification Card or cancel special/temporary permit for grounds including: (1) Conviction of any criminal offense involving moral turpitude; (2) Immoral or dishonorable conduct; (3) Insanity or mental incapacity; (4) Gross negligence, incompetence, or ignorance in the practice of social work resulting in damage or injury to the public; (5) False representation or fraudulent declaration in obtaining the Certificate of Registration; (6) Violation of the Code of Ethics for Registered Social Workers; (7) Engaging in the practice of social work under a false or fictitious name; (8) Unprofessional or unethical conduct. The Board follows due process — the respondent must be given notice and an opportunity to be heard before action is taken. Appeals may be filed with the PRC and ultimately with the courts. The PRC has the authority to reinstate revoked licenses upon application and showing of good cause.',
            summary:
              '• Grounds for revocation: moral turpitude, immoral conduct, insanity, gross negligence\n• Also: false representations, Code of Ethics violations, false name, unethical conduct\n• Due process required: notice and hearing before revocation\n• Appeals: PRC → Court of Appeals → Supreme Court\n• BOSWe may also impose suspension as a lesser sanction\n• Reinstatement: possible upon showing of good cause and rehabilitation\n• Code of Ethics violations: most common basis for disciplinary proceedings',
          },
        ],
      },
      {
        id: 'swlaws-ethics',
        title: 'Social Work Ethics',
        sections: [
          {
            id: 'swlaws-nasw',
            number: 'Topic 2.1',
            title: 'NASW Code of Ethics — 6 Core Values',
            content:
              'The National Association of Social Workers (NASW) Code of Ethics is the primary ethical guide for the social work profession worldwide, including in the Philippines. It identifies six core values and corresponding ethical principles: (1) Service — the primary goal is to help people in need and address social problems; social workers elevate service above self-interest; (2) Social Justice — social workers challenge social injustice and pursue change toward equality of opportunity; (3) Dignity and Worth of the Person — social workers treat each person with care and respect, mindful of individual differences and cultural diversity; (4) Importance of Human Relationships — social workers recognize that relationships are the vehicle for change; (5) Integrity — social workers behave in a trustworthy manner, practicing consistently with the profession\'s mission, values, and ethical principles; (6) Competence — social workers practice within their areas of competence and develop and enhance their professional expertise. The Code addresses: social workers\' ethical responsibilities to clients, to colleagues, in practice settings, as professionals, to the social work profession, and to the broader society.',
            summary:
              '• 6 NASW Core Values (mnemonic: "SSDII C" or "Service Social Dignity Importance Integrity Competence")\n• Service: primary goal is to help people in need\n• Social Justice: challenge injustice and oppression\n• Dignity and Worth: respect each person regardless of differences\n• Importance of Human Relationships: relationships are the vehicle for change\n• Integrity: behave in trustworthy manner\n• Competence: practice within areas of expertise; pursue ongoing learning',
          },
          {
            id: 'swlaws-ethical-decision',
            number: 'Topic 2.2',
            title: 'Ethical Decision-Making & Dual Relationships',
            content:
              'Ethical decision-making in social work involves systematically addressing ethical dilemmas — situations where ethical principles conflict. Common frameworks include: (1) Loewenberg and Dolgoff\'s Ethical Principles Screen (EPS), which ranks ethical principles: Protection of life > Self-determination > Protection of confidentiality > Least harm > Quality of life > Privacy > Truthfulness; (2) Congress\'s ETHIC Model: Examine personal, agency, client, and professional values; Think about codes and laws; Hypothesize consequences; Identify who benefits; Consult with supervisor. Confidentiality is a core ethical obligation — social workers must keep client information private. Exceptions to confidentiality include: imminent danger to the client or others, court orders, mandatory reporting of abuse, and when client gives consent. Dual relationships (boundary violations) occur when social workers engage in non-professional relationships with clients — sexual, financial, or social. Sexual dual relationships with current clients are absolutely prohibited and constitute grounds for license revocation. Social workers must maintain clear professional boundaries at all times.',
            summary:
              '• Loewenberg & Dolgoff EPS: Life > Self-determination > Confidentiality > Least Harm > Quality of Life > Privacy > Truthfulness\n• Congress ETHIC model: Examine, Think, Hypothesize, Identify, Consult\n• Confidentiality exceptions: danger to self/others, court orders, mandatory reporting, client consent\n• Dual relationships: avoid non-professional relationships with clients\n• Sexual relationship with current client: absolutely prohibited; grounds for revocation\n• Informed consent: client must understand and voluntarily agree to services\n• Mandatory reporting: child abuse, elder abuse — overrides confidentiality',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. SPECIAL FIELDS OF SOCIAL WORK
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'sw-fields',
    title: 'Special Fields of Social Work',
    shortTitle: 'SW Special Fields',
    category: 'Social Work',
    icon: 'Briefcase',
    year: 'SWLE Core',
    description:
      'Covers specialized areas of social work practice including medical social work, school social work, child welfare, and family services. Emphasizes practice in Philippine settings, relevant legislation, and the role of DSWD in delivering specialized social services.',
    color: { light: '#f0fdf4', dark: '#15803d', badge: '#16a34a' },
    chapters: [
      {
        id: 'swfields-medical',
        title: 'Medical & School Social Work',
        sections: [
          {
            id: 'swfields-medical-roles',
            number: 'Topic 1.1',
            title: 'Medical Social Work & Biopsychosocial Assessment',
            content:
              'Medical social work is the practice of social work within health care settings such as hospitals, clinics, and rehabilitation centers. The medical social worker (MSW) serves as a bridge between the health care system and the patient\'s social environment. Core roles of the medical social worker include: (1) Psychosocial assessment — assessing the impact of illness on the patient and family; (2) Discharge planning — coordinating community resources for safe discharge; (3) Crisis intervention — addressing emotional and social crises triggered by illness or hospitalization; (4) Counseling and support — providing emotional support to patients and families; (5) Advocacy — ensuring patients receive needed services; (6) Coordination with interdisciplinary team — collaborating with physicians, nurses, physical therapists, and other professionals. The biopsychosocial model (Engel, 1977) guides medical social work assessment, examining biological factors (diagnosis, prognosis, medications), psychological factors (emotional responses, mental health, coping), and social factors (family, finances, housing, employment). The social history is the primary assessment tool used by medical social workers.',
            summary:
              '• Medical social worker: bridges health care system and patient\'s social world\n• Biopsychosocial model (Engel, 1977): biological + psychological + social factors\n• Key roles: psychosocial assessment, discharge planning, crisis intervention, advocacy\n• Social history: comprehensive assessment tool used in medical settings\n• Discharge planning: collaborative, begins at admission, ensures safe transition home\n• Interdisciplinary team: physicians, nurses, PT/OT, dietitian, chaplain, MSW\n• Philippine context: DOH hospitals require social work services',
          },
          {
            id: 'swfields-school-sw',
            number: 'Topic 1.2',
            title: 'School Social Work & Student Support Services',
            content:
              'School social work addresses the social, emotional, and environmental factors that affect students\' educational functioning. The school social worker serves as a liaison between the school, family, and community. Key roles include: identification of at-risk students, early intervention, truancy reduction, child abuse reporting, crisis response, individual and group counseling for students, parent consultation, and collaboration with teachers and school administrators. In the Philippines, DepEd Order No. 8 (2007) mandated student welfare services including guidance and counseling. The Guidance and Counseling Act (RA 9258, 2004) regulates guidance and counseling practice, which overlaps with school social work. The Revised Basic Education Act (RA 10533, 2013 K–12 Law) provides for student services including guidance and counseling, health services, and library services. School social workers often handle cases of bullying under RA 10627 (Anti-Bullying Act, 2013), cases of child abuse under RA 7610, and out-of-school youth referrals.',
            summary:
              '• School social worker: liaison between school, family, and community\n• Roles: early intervention, truancy, crisis response, counseling, advocacy, reporting\n• RA 9258 (Guidance & Counseling Act, 2004): regulates related profession\n• RA 10627 (Anti-Bullying Act, 2013): school social workers involved in prevention and response\n• RA 7610: mandatory reporters — school staff must report suspected child abuse\n• K–12 Law (RA 10533): provides for student welfare and support services\n• Truancy and dropping out: key concerns for school social workers in Philippines',
          },
        ],
      },
      {
        id: 'swfields-child',
        title: 'Child & Family Services',
        sections: [
          {
            id: 'swfields-child-welfare',
            number: 'Topic 2.1',
            title: 'Child Welfare System & DSWD',
            content:
              'The child welfare system in the Philippines is anchored in the Child and Youth Welfare Code (Presidential Decree 603, 1974), which defines children\'s rights and the responsibilities of parents, the State, and other institutions. DSWD is the primary government agency for child welfare, operating through regional offices and accredited child-caring agencies. The continuum of child welfare services ranges from preventive services (family support, parenting education) to supportive services (counseling, day care) to substitute care (foster care, residential care, adoption). The principle of "best interest of the child" (from the UN Convention on the Rights of the Child) guides all child welfare decisions — legal, administrative, and social work decisions must prioritize what is best for the child. Family preservation and reunification is preferred over removal; removal is a last resort. DSWD\'s Alternative Family Care (AFC) program provides placement of children who cannot remain with their families in foster homes, group homes, or residential care institutions. DSWD accreditation is required for all child-caring and child-placing agencies.',
            summary:
              '• PD 603 (Child and Youth Welfare Code, 1974): foundational child welfare legislation\n• Best interest of the child: primary consideration in all decisions\n• Child welfare services continuum: preventive → supportive → substitute care\n• Family preservation: preferred over removal; reunification goal when child is removed\n• DSWD Alternative Family Care (AFC): foster care, group homes, residential care\n• UNCRC: incorporated into Philippine law through RA 7610 and other statutes\n• DSWD accreditation: required for child-caring and child-placing agencies',
          },
          {
            id: 'swfields-adoption',
            number: 'Topic 2.2',
            title: 'Foster Care & Adoption in the Philippines (RA 8552 & RA 11222)',
            content:
              'Republic Act 8552, the Domestic Adoption Act of 1998, governs domestic adoption in the Philippines. Key provisions: adoption legally severs the biological parent-child relationship and establishes a new legal parent-child relationship; the adoptee acquires the surname of the adopter and is entitled to all legal rights of a legitimate child; consent of the biological parent is required unless parental authority has been terminated; adopters must be at least 27 years old, at least 16 years older than the adoptee (with exceptions), of good moral character, and capable of supporting the child. Inter-Country Adoption is governed by RA 8043 (1995) and the Hague Convention; the Inter-Country Adoption Board (ICAB) processes inter-country adoptions. Republic Act 11222 (Simulated Birth Rectification Act, 2019) allows rectification of birth certificates for children with simulated births, providing a pathway to legal adoption. Foster care is a temporary care arrangement supervised by DSWD or accredited agencies. Foster parents undergo training and accreditation. The goal of foster care is family reunification or permanent placement (adoption) when reunification is not possible.',
            summary:
              '• RA 8552 (Domestic Adoption Act, 1998): legal process for domestic adoption\n• Adopter requirements: ≥27 years old, ≥16 years older than adoptee, good moral character\n• Adoption effects: legal parent-child relationship, new surname, legitimate rights\n• RA 8043 (Inter-Country Adoption, 1995): governed by ICAB and Hague Convention\n• RA 11222 (2019): Simulated Birth Rectification Act\n• Foster care: temporary, supervised by DSWD, goal is reunification or adoption\n• Foster parents: trained and accredited by DSWD',
          },
        ],
      },
    ],
  },
];

export default SOCIAL_WORK_TOPICS;
