export const en = {
  locale: "en",
  meta: {
    defaultTitle: "Integritas Vu Legal",
    homeTitle: "Home | Integritas Vu Legal",
    aboutTitle: "About Us | Integritas Vu Legal",
    expertiseTitle: "Expertise | Integritas Vu Legal",
    peopleTitle: "People | Integritas Vu Legal",
    insightsTitle: "Insights | Integritas Vu Legal",
    careersTitle: "Careers | Integritas Vu Legal",
    contactTitle: "Contact | Integritas Vu Legal",
    experienceTitle: "Experience | Integritas Vu Legal",
    termsTitle: "Terms of Use | Integritas Vu Legal",
    privacyTitle: "Privacy Policy | Integritas Vu Legal",
    legalDisclaimerTitle: "Legal Disclaimer | Integritas Vu Legal",
  },
  brand: {
    name: "Integritas Vu Legal",
    logoAlt: "Integritas Vu Legal",
    // TODO(client): unused since the Client asked for the full name everywhere; kept
    // only in case a short mark is wanted later. Nothing renders it.
    monogram: "IVL",
  },
  navigation: {
    label: "Navigation",
    home: "Home",
    about: "About Us",
    expertise: "Expertise",
    people: "People",
    insights: "Insights",
    careers: "Careers",
    contact: "Contact",
  },
  home: {
    hero: {
      eyebrow: "Integritas Vu Legal",
      title: "Strategic Counsel. Resolute Advocacy.",
      // Replaced by the Client in the 26-10 feedback.
      paragraphs: [
        "Integritas Vu Legal LLC (Integritas Vu Legal) is an independent boutique law firm in Vietnam, providing strategic legal advice and representation to businesses, investors, and private Clients.",
        "With a strong focus on dispute resolution and a comprehensive approach to corporate and commercial matters and White-Collar Crimes, we deliver tailored legal solutions that address our Clients' priorities, anticipate risks, and protect their interests.",
      ],
      expertiseCta: "EXPLORE OUR EXPERTISE",
      peopleCta: "MEET OUR LAWYERS",
    },
    // Section renamed "OUR PERSPECTIVE" and rewritten by the Client in the 26-10 feedback.
    introduction: {
      eyebrow: "OUR PERSPECTIVE",
      titleLines: [
        "Beyond Legal Advice.",
        "Towards Strategic Solutions.",
      ],
      paragraphs: [
        "Effective legal counsel requires more than an understanding of the law. It demands sound judgment, commercial awareness and the ability to navigate complex legal challenges with clarity and precision.",
        "At Integritas Vu Legal, we look beyond immediate legal questions to understand the broader implications of every decision. Whether advising on a transaction, managing legal exposure or resolving a dispute, we develop strategies tailored to each Client's circumstances and objectives.",
        "Our commitment is straightforward: to provide independent advice, thoughtful solutions and dedicated representation at every critical stage.",
      ],
      // TODO(client): the Client gave the label but not the destination. It keeps the
      // destination of the CTA it replaces (About Us); confirm, or point it at Contact.
      cta: "DISCUSS OUR FIRM",
    },
    approach: {
      eyebrow: "THE INTEGRITAS VU LEGAL APPROACH",
      title: "Integrity — Strategy — Precision — Results",
      statement: "Principled in judgment. Strategic in approach. Precise in execution. Focused on results.",
      cta: "DISCOVER HOW INTEGRITAS VU LEGAL WORKS",
    },
    // Rewritten by the Client in the 26-10 feedback: an introduction, seven practice
    // areas that each open on the plus sign to show a short description, and a CTA. It
    // replaces the four category tiles and the eight Vietnamese-only items, which closes
    // the earlier TODO(client) about their English wording.
    expertise: {
      heading: "Our Expertise",
      intro: "We advise and represent Clients across a range of contentious and non-contentious matters, combining rigorous legal analysis with a practical understanding of business and individual needs.",
      areas: [
        {
          name: "Dispute Resolution & Arbitration",
          summary: "Strategic representation in complex civil, corporate and commercial disputes, from negotiation and litigation to arbitration and enforcement.",
        },
        {
          name: "Corporate & Commercial",
          summary: "Practical legal counsel on corporate governance, commercial transactions, contractual arrangements and business-related legal risks.",
        },
        {
          name: "White-Collar Crimes",
          summary: "We combine legal analysis with a practical understanding of business operations and evidentiary issues to develop a clear strategy, protect our Clients’ legitimate interests and manage risks throughout each stage of the matter.",
        },
        {
          name: "Mergers, Acquisitions & Investment",
          summary: "Tailored advice on investment structures, acquisitions, transactions and regulatory matters involving domestic and foreign investors.",
        },
        {
          name: "Real Estate & Construction",
          summary: "Legal support for property transactions, construction projects, contractual arrangements and related disputes.",
        },
        {
          name: "Employment",
          summary: "Strategic advice on employment relationships, workplace compliance, executive matters and labour disputes.",
        },
        {
          name: "Private Clients",
          summary: "Discreet and considered legal representation in significant personal, civil, property and inheritance matters.",
        },
      ],
      cta: "VIEW ALL PRACTICE AREAS",
    },
    insights: {
      heading: "Featured Insights",
      // The introduction under the heading, supplied by the Client in the 26-10 feedback.
      intro: {
        title: "Legal Perspectives. Practical Implications.",
        paragraphs: [
          "Explore our perspectives on legal developments, emerging risks and issues affecting businesses, investors and individuals in Vietnam.",
          "Through our legal insights, we aim to make complex legal matters more accessible while offering practical considerations to support informed decision-making.",
        ],
      },
      cards: [
        // TODO(client): Supply the article title and URL.
        { category: "LEGAL UPDATE", title: "[Article title]", linkLabel: "Read More" },
        // TODO(client): Supply the article title and URL.
        { category: "LEGAL INSIGHT", title: "[Article title]", linkLabel: "Read More" },
        // TODO(client): Supply the article title and URL.
        { category: "CASE NOTE", title: "[Article title]", linkLabel: "Read More" },
        // TODO(client): Supply the article title and URL.
        { category: "PRACTICAL GUIDE", title: "[Article title]", linkLabel: "Read More" },
      ],
      cta: "EXPLORE INTEGRITAS VU LEGAL INSIGHTS",
    },
    people: {
      heading: "Our People",
      // Introduction supplied by the Client in the 26-10 feedback.
      intro: {
        title: "Personal Commitment. Professional Judgment.",
        paragraphs: [
          "At Integritas Vu Legal, we believe that the quality of legal representation begins with the people entrusted with each matter.",
          "Our boutique structure enables direct lawyer involvement, close Client communication and an approach shaped by the specific circumstances of every engagement.",
          "We value the trust placed in us and approach each matter with independence, diligence and a clear sense of professional responsibility.",
        ],
      },
      // The Client changed the nickname on the Homepage to "Victor Nguyen" (26-10). The
      // People and Contact pages still say "Vu Nguyen": flagged for the Client. The part
      // in brackets is drawn on its own line.
      name: "NGUYEN HA THANH VU (VICTOR NGUYEN)",
      role: "Founder | Managing Lawyer",
      profileCta: "VIEW PROFILE",
      peopleCta: "MEET OUR PEOPLE",
      // TODO(client): Supply the photograph of Mr. Vũ.
      portraitAlt: "Portrait placeholder",
    },
  },
  // Every About section was rewritten by the Client in the 26-10 feedback.
  about: {
    title: "About Us",
    openingTitle: "About Integritas Vu Legal",
    opening: [
      "Integritas Vu Legal is an independent boutique law firm based in Ho Chi Minh City, Vietnam, providing legal advisory and representation services to domestic and international businesses, investors and private Clients.",
      "Our practice encompasses dispute resolution, litigation, arbitration, white-collar crimes, corporate and commercial law, mergers and acquisitions, foreign investment, real estate, construction and other significant legal matters.",
      "We believe that effective legal representation requires more than technical expertise. It calls for independent judgment, strategic foresight and a thorough understanding of the Client's circumstances, priorities and long-term interests.",
      "With this philosophy at the core of our practice, we strive to deliver legal services that are precise in execution, practical in application and tailored to the complexities of each matter.",
    ],
    firm: {
      heading: "Our firm",
      lead: "A Boutique Practice. A Distinctive Approach.",
      paragraphs: [
        "Integritas Vu Legal was established with a clear vision: to build a focused legal practice where professional judgment, personal commitment and the quality of legal services take precedence.",
        "We recognise that no two Clients face precisely the same legal challenges. A commercially sound solution for one business may not be appropriate for another. Likewise, a dispute cannot be effectively addressed without understanding the underlying relationship, available evidence, legal exposure and practical consequences.",
        "Our approach is therefore deliberately tailored rather than standardised.",
        "In advisory matters, we work to identify potential legal exposure, strengthen contractual protections and help Clients make informed decisions before risks materialise.",
        "In contentious matters, we examine the legal and evidentiary foundations of each case, assess available remedies and develop strategies directed towards protecting our Clients' legitimate rights and interests.",
        "Our boutique structure allows us to maintain direct lawyer involvement, responsive communication and close attention to the matters entrusted to us.",
        "We seek to be more than a provider of legal opinions. We aim to be a trusted legal adviser when decisions matter and a committed advocate when interests must be defended.",
      ],
    },
    philosophy: {
      heading: "Our Philosophy",
      title: "Integrity — Strategy — Precision — Results",
      items: [
        {
          term: "INTEGRITY",
          descriptor: "Independent Judgment. Principled Advice.",
          paragraphs: [
            "Integrity is the foundation of our practice. We provide candid legal assessments, exercise independent professional judgment and uphold the principles of honesty, confidentiality and professional responsibility.",
            "We believe that Clients are best served by advice that is objective, transparent and grounded in the law, even when that advice involves difficult considerations.",
          ],
        },
        {
          term: "STRATEGY",
          descriptor: "Beyond Legal Questions. Towards Informed Decisions.",
          paragraphs: [
            "Legal challenges rarely exist in isolation. They often involve commercial relationships, financial consequences, reputational considerations and competing priorities.",
            "We approach each matter strategically, evaluating not only what the law permits but also how different legal options may affect the Client's broader interests.",
          ],
        },
        {
          term: "PRECISION",
          descriptor: "Rigorous Analysis. Disciplined Execution.",
          paragraphs: [
            "Precision is essential to effective legal practice.",
            "From legal research and contractual drafting to evidence assessment, negotiation and advocacy, we place careful analysis and attention to detail at the centre of our work.",
            "Our objective is to ensure that legal strategies are supported by sound reasoning and implemented with diligence.",
          ],
        },
        {
          term: "RESULTS",
          descriptor: "Purposeful Action. Meaningful Outcomes.",
          paragraphs: [
            "We measure the value of our work by its relevance to the Client's objectives and the practical outcomes it seeks to achieve.",
            "Whether preventing a dispute, completing a transaction, protecting an investment or pursuing a legal remedy, we remain focused on solutions that are legally sound, commercially sensible and realistically achievable.",
          ],
        },
      ],
    },
    approach: {
      heading: "Our approach",
      title: "Every Matter Deserves Its Own Strategy.",
      paragraphs: [
        "There is no universal solution to a complex legal problem. Each engagement requires an understanding of the facts, the applicable legal framework and the interests at stake.",
        "Our approach follows four essential stages.",
      ],
      steps: [
        {
          label: "01 — UNDERSTAND",
          name: "Understanding the Matter and the Client.",
          body: "We begin by examining the relevant facts, circumstances and legal relationships while identifying the Client's concerns, expectations and desired outcomes.",
        },
        {
          label: "02 — ASSESS",
          name: "Evaluating the Legal Position and Risks.",
          body: "We analyse the applicable law, available evidence, potential liabilities and legal remedies. We also consider the commercial, financial and practical implications of each available option.",
        },
        {
          label: "03 — DEVELOP",
          name: "Formulating a Tailored Legal Strategy.",
          body: "Drawing on our assessment, we develop a course of action aligned with the Client's priorities, taking into account legal feasibility, potential exposure, timing, costs and enforceability.",
        },
        {
          label: "04 — EXECUTE",
          name: "Implementing the Strategy with Precision.",
          body: "We carry out the agreed strategy with diligence, maintain clear communication and reassess our approach as circumstances evolve.",
        },
      ],
    },
    values: {
      heading: "Our values",
      intro: "The team at Integritas Vu Legal always places core principles at the heart of the case-handling process.",
      items: [
        { name: "INDEPENDENCE", body: "We exercise professional judgment based on the law, the facts and the legitimate interests of our Clients." },
        { name: "CONFIDENTIALITY", body: "We recognise the sensitivity of the information entrusted to us and uphold our professional obligations to protect Client confidentiality." },
        { name: "RESPONSIBILITY", body: "We approach every engagement with diligence, accountability and a commitment to the responsibilities entrusted to us." },
        { name: "PROFESSIONAL EXCELLENCE", body: "We pursue high standards of legal analysis, preparation, communication and execution in every matter." },
        { name: "CLIENT COMMITMENT", body: "We value long-term professional relationships built on trust, responsiveness and a clear understanding of our Clients' needs." },
      ],
    },
  },
  expertisePage: {
    intro: "Integritas Vu Legal advises and represents businesses, investors and private Clients in transactions, disputes and significant legal matters. Each matter is approached with the Client's objectives, relevant risks and the practical viability of available options in mind.",
    areasTitle: "Our Core Practice Areas:",
    lawyersCta: "SPEAK WITH OUR LAWYERS",
    servicesTitle: "OUR SERVICES",
    areaCta: "DISCUSS YOUR DISPUTE WITH INTEGRITAS VU LEGAL",
    areas: [
      {
        id: "dispute-resolution",
        name: "Dispute Resolution",
        paragraphs: [
          "Integritas Vu Legal advises and represents Clients in civil, business and commercial disputes before Vietnamese courts, as well as in negotiations and other forms of dispute resolution.",
          "Our focus is to define the Client's legal position, manage risk and develop a strategy aligned with the Client's practical objectives.",
        ],
        services: [
          "Contract and commercial disputes",
          "Corporate and shareholder/member disputes",
          "Investment and transactional disputes",
          "Real estate and construction disputes",
          "Civil and property disputes",
          "Interim measures",
          "Negotiation and mediation",
          "Court representation",
          "Judgment enforcement and asset recovery",
        ],
      },
      {
        id: "white-collar-crimes",
        name: "White-Collar Crimes",
        paragraphs: [
          "White-Collar Crimes matters can expose businesses and individuals to significant legal, financial, and reputational risks. Integritas Vu Legal advises and represents Clients in sensitive and complex matters involving alleged economic and corporate misconduct, from early-stage risk assessment and internal investigations to proceedings before competent authorities and courts.",
          "We combine legal analysis with a practical understanding of business operations and evidentiary issues to develop a clear strategy, protect our clients’ legitimate interests and manage risks throughout each stage of the matter.",
        ],
        // The Client replaced the one-paragraph description with this list (26-10 feedback).
        services: [
          "Criminal law consultancy",
          "Early participation in legal proceedings",
          "Defending the accused and defendants",
          "Protecting the legitimate rights and interests of other involved parties",
          "Other legal support services",
        ],
      },
      {
        id: "arbitration",
        name: "Arbitration",
        paragraphs: [
          "Integritas Vu Legal advises Clients in domestic and international commercial arbitration, from pre-dispute assessment through recognition and enforcement of arbitral awards.",
        ],
        services: [
          "Arbitration clause advice and drafting",
          "Pre-dispute assessment",
          "Contract and corporate disputes",
          "Construction and investment disputes",
          "Interim measures",
        ],
      },
      {
        id: "enforcement-asset-recovery",
        name: "Enforcement & Asset Recovery",
        paragraphs: [
          "Obtaining a favourable judgment or award is not always the end of a dispute. Integritas Vu Legal assists Clients in developing and implementing enforcement strategies, from assessing recoverability to pursuing the necessary legal procedures.",
        ],
        services: [
          "Enforcement of Court Judgments and Decisions and Arbitration Award",
          "Enforcement and recoverability assessment",
          "Asset identification for enforcement purposes",
          "Enforcement against shares, equity interests and corporate assets",
          "Enforcement-related proceedings",
          "Debt and asset recovery",
        ],
      },
      {
        id: "corporate-commercial",
        name: "Corporate & Commercial",
        paragraphs: [
          "Integritas Vu Legal advises companies, business owners and investors throughout the corporate lifecycle, from establishment and governance to commercial transactions, restructuring and issues arising among stakeholders.",
          "Our objective is to help Clients identify legal risks early and establish appropriate structures before those risks develop into disputes.",
        ],
        services: [
          "Company establishment and corporate structuring",
          "Corporate governance",
          "Shareholder and member rights",
          "Commercial contracts",
          "Shareholders' and members' agreements",
          "Related-party transactions",
          "Corporate changes and restructuring",
          "General corporate advisory",
          "Legal risk management",
        ],
      },
      {
        id: "m-and-a-investment",
        name: "M&A & Investment",
        paragraphs: [
          "Integritas Vu Legal advises companies, investors and business owners on acquisitions, disposals and investments in Vietnam, from initial structuring and due diligence through negotiation, documentation and completion.",
        ],
        services: [
          "Transaction structuring",
          "Legal due diligence",
          "Share and equity acquisitions",
          "Asset and project transfers",
          "Transaction documents and negotiations",
          "Shareholders' agreements",
          "Conditions precedent and completion",
          "Investment approvals and procedures",
          "Foreign investment in Vietnam",
          "Post-transaction legal matters",
        ],
      },
      {
        id: "real-estate-construction",
        name: "Real Estate & Construction",
        paragraphs: [
          "Integritas Vu Legal advises owners, investors, businesses and other stakeholders on transactions, project development and disputes involving real estate and construction.",
        ],
        services: [
          "Real estate and project due diligence",
          "Real estate transactions",
          "Project transfers",
          "Construction contracts",
          "Sale, lease and deposit arrangements",
          "Land use rights and property matters",
          "Real estate disputes",
          "Construction disputes",
          "Payment, delay and variation claims",
        ],
      },
      {
        id: "employment",
        name: "Employment",
        paragraphs: [
          "Employment decisions can carry significant legal consequences if they are not properly structured and implemented.",
          "Integritas Vu Legal advises employers on matters arising throughout the employment relationship, from contracts and internal policies to disciplinary action, termination and disputes.",
        ],
        services: [
          "Employment contracts",
          "Internal labour rules and policies",
          "Compensation, benefits and employment obligations",
          "Disciplinary matters",
          "Employment termination",
          "Restructuring and redundancy",
          "Management and senior executive employment",
          "Confidentiality and post-employment obligations",
          "Employment disputes",
          "Employment litigation",
        ],
      },
      {
        id: "private-clients",
        name: "Private Clients",
        paragraphs: [
          "Integritas Vu Legal advises and represents private Clients in complex civil and property matters with a discreet, considered and solution-oriented approach.",
        ],
        services: [
          "Property disputes",
          "Ownership and property rights",
          "Inheritance and estate matters",
          "Division of assets",
          "Matrimonial property",
          "Property-related liabilities and debts",
          "Civil contract disputes",
          "Negotiation and mediation",
          "Court representation",
          "Prenuptial Agreement",
          "Will",
        ],
      },
    ],
    closing: "Every matter involves its own legal, commercial and practical considerations. Integritas Vu Legal helps Clients identify the issues that matter, assess their options and develop a course of action aligned with their objectives.",
    // The Client wrote this CTA without an article before "LAWYER"; kept verbatim.
    closingCta: "DISCUSS YOUR MATTER WITH LAWYER",
    insightsCta: "EXPLORE INTEGRITAS VU LEGAL INSIGHTS",
  },
  peoplePage: {
    paragraphs: [
      "At Integritas Vu Legal, we believe the quality of legal advice depends not only on knowledge of the law, but also on the judgment, strategic thinking and professional responsibility of the lawyers providing it.",
      "Each matter is approached with an understanding of the Client's objectives, independence of judgment and careful consideration at every stage.",
      // The Client wrote "Our lawyer work" (singular noun, plural verb); kept verbatim.
      "Our lawyer work directly with Clients, communicate clearly and remain accountable throughout the course of each matter.",
    ],
    // Portraits supplied by the Client (public/images). `alt` names the person because
    // the Client named them; ivl-legal-guardrails rule 11 only forbids naming someone
    // they have not identified.
    portraitAlt: "Portrait placeholder",
    // The Client gave no label for this link; reuse their own "VIEW PROFILE" from Phase 1.
    viewProfile: "VIEW PROFILE",
    backToPeople: "MEET OUR PEOPLE",
    members: [
      {
        // The Client writes this name without diacritics on this page, and with
        // diacritics on the Homepage. AGENTS.md rule 8: do not normalise either form.
        slug: "nguyen-ha-thanh-vu",
        photo: "/images/nguyen-ha-thanh-vu.png",
        photoAlt: "Nguyen Ha Thanh Vu",
        name: "NGUYEN HA THANH VU",
        // Rendered on its own line under the name.
        nameAlt: "(VU NGUYEN)",
        role: "Founder | Managing Lawyer",
        // `shortRole` is what the People index shows; `role` is the full title on the
        // profile page. The Client asked for a short line on the index only.
        shortRole: "Founder | Managing Lawyer",
        initials: "NV",
        biography: [
          "Nguyen Ha Thanh Vu (Vu Nguyen) is the Founder and Managing Lawyer of Integritas Vu Legal, a Vietnam-based law firm built on the belief that legal advice should be rigorous, commercially grounded and focused on achieving meaningful outcomes for Clients.",
          "Vu advises and represents domestic and international Clients in a broad range of contentious and non-contentious matters, with particular experience in commercial disputes, arbitration, judgment enforcement, white-collar crime, corporate and investment matters.",
          "He has represented businesses and individuals in complex proceedings before courts, arbitral tribunals and competent authorities, while also advising foreign-invested enterprises and investors on corporate, restructuring and investment matters in Vietnam. His work combines in-depth legal analysis with a practical understanding of Clients' commercial objectives, operational realities and risk exposure.",
          "As the founder of Integritas Vu Legal, Vu leads the firm's strategic direction and is closely involved in the delivery of its legal services. He is committed to building a modern, responsive and results-oriented practice that provides Clients with clear advice, effective representation and commercially sensible solutions in complex legal matters.",
          "Before founding Integritas Vu Legal, Vu practised at a top-tier Vietnamese law firm, where he developed substantial experience in complex disputes and other significant legal matters.",
          "Vu holds a Master of Civil Law from Université Paris 1 Panthéon-Sorbonne, a leading university in France and Europe, and he is a member of the Ho Chi Minh City Bar Association and the Vietnam Bar Federation.",
        ],
      },
      {
        // Not in the Client's sitemap; slug follows the same convention.
        slug: "truc-nguyen",
        photo: "/images/truc-nguyen.png",
        photoAlt: "Dr. Truc Nguyen",
        name: "DR. TRUC NGUYEN",
        nameAlt: "",
        // "Co Founder" is unhyphenated in the Client's text; kept verbatim.
        role: "Co Founder | Ethics, Organisation, Management & Leadership Advisor",
        shortRole: "Special Advisor",
        initials: "TN",
        biography: [
          "Dr Truc Nguyen is an ethics, organisation, management and leadership advisor with extensive academic and professional experience across Vietnam and the UK. She has held academic positions at universities in both countries. She holds a PhD in Management from the University of Kent, an MBA from RMIT University Vietnam, and a Bachelor's degree in Business Management from Finland.",
          "Her expertise covers business ethics, organisational management, leadership, institutional logics and cross-cultural management. Through her research, she has worked extensively with managerial leaders in multinational corporations (MNCs), gaining deep insights into how business leaders think, make decisions and navigate ethical, organisational and legal considerations in Vietnam.",
          "For Clients, Dr. Truc Nguyen has advised organisations on complex organisational and business matters, including internal employment and workplace issues, workforce restructuring and layoff decisions, overtime practices, employee treatment, organisational compliance and environmental sustainability. Through this work, she has helped organisations address the ethical dimensions of business decisions, balancing business objectives, legal requirements, employee wellbeing, fairness, stakeholder interests and organisational responsibility, while taking into account the cultural and organisational context of Vietnam.",
          "Her approach is grounded in Tâm—conscience, moral awareness and responsibility—while respecting legal requirements and international standards. Within the firm, Dr. Truc Nguyen plays a key role in building an ethical organisational culture and climate, supporting responsible management and people-focused practices. These principles also shape the firm's approach to Clients: understanding each Client's circumstances, respecting their individual needs and values, and providing professional advice grounded in integrity, empathy and respect.",
        ],
      },
    ],
  },
  contactPage: {
    heading: "LET’S START WITH INTEGRITAS VU LEGAL BY A CONVERSATION",
    paragraphs: [
      "Every legal matter has its own context and objectives. If you would like to discuss a transaction, dispute or specific legal issue, please contact our lawyer directly or submit your enquiry through the form below.",
      "The initial information will help us understand the nature of your matter before speaking with you.",
    ],
    lawyerName: "Vu Nguyen",
    lawyerRole: "Managing Lawyer",
    directLabel: "Direct:",
    emailLabel: "Email:",
    linkedinLabel: "LinkedIn:",
    // The firm's switchboard and inbox, used here at the site owner's direction.
    // The Client's document still lists these as Mr Vu's own [Telephone] and
    // [Professional Email]; confirm the attribution at sign-off.
    direct: "0938 170 130",
    // Supplied by the Client, 2026-09-28: his own address, replacing the general inbox.
    email: "vu.nguyen@integritasvulegal.com",
    // TODO(client): Supply the LinkedIn profile URL.
    linkedin: "[LinkedIn Profile]",
    profileCta: "VIEW LAWYER PROFILE",
    form: {
      heading: "HOW CAN WE ASSIST?",
      intro: "Please provide some initial information below. Integritas Vu Legal will review your enquiry and contact you to discuss the appropriate next step.",
      detailsTitle: "CONTACT DETAILS",
      enquiryTitle: "YOUR ENQUIRY",
      fullName: "Full Name",
      email: "Email",
      telephone: "Telephone",
      company: "Company / Organisation",
      area: "Area of Assistance",
      description: "Brief description of your matter",
      areaOptions: [
        "Dispute Resolution",
        "Arbitration",
        "Enforcement & Asset Recovery",
        "Corporate & Commercial",
        "M&A & Investment",
        "Real Estate & Construction",
        "Employment",
        "Private Clients",
        "Other",
      ],
      noticeTitle: "BEFORE YOU SUBMIT",
      // Legal microcopy. "lawyer-client relationship" and "with the client" keep the
      // Client's lower case: they are terms of art, not the ordinary noun.
      notice: [
        "Submitting this form or otherwise contacting Integritas Vu Legal does not by itself create a lawyer-client relationship.",
        "Integritas Vu Legal can only accept and act on a matter after completing the necessary intake process, including assessing whether we are able to accept the matter, conducting an appropriate conflict check where required, and agreeing the scope of our engagement with the client.",
        "You should therefore not submit original documents or particularly sensitive information through this form before Integritas Vu Legal confirms that the matter has been accepted.",
        "At this stage, please provide only a general description of your matter. You should not submit confidential or sensitive documents or information through this initial enquiry form.",
      ],
      submit: "SUBMIT ENQUIRY",
      submitting: "SUBMITTING…",
      success: "Your enquiry has been submitted.",
      error: "Your enquiry could not be submitted. Please try again.",
    },
  },
  careersPage: {
    heading: "BUILD YOUR PRACTICE WITH US",
    opportunitiesTitle: "OPPORTUNITIES",
    opportunities: ["Legal Assistants", "Legal Interns"],
    joinTitle: "JOIN INTEGRITAS VU LEGAL",
    joinBody: "If you are interested in joining Integritas Vu Legal, please send your CV and a brief introduction to:",
    // The general inbox, used for applications at the site owner's direction;
    // the Client's document leaves this as [Career Email].
    careerEmail: "contact@integritasvulegal.com",
  },
  insightsPage: {
    heading: "Insights",
    readMore: "Read More",
    // Shown in place of articles until the Client publishes any, wording supplied by them.
    comingSoonTitle: "Insights Coming Soon",
    comingSoonBody: [
      "Our Insights section is currently being developed. We will soon share legal updates, practical perspectives, and analysis on key developments relevant to businesses and individuals.",
      "Please check back soon for our latest insights.",
    ],
    cards: [
      // TODO(client): Supply the article title and URL.
      { category: "LEGAL UPDATE", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "LEGAL INSIGHT", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "CASE NOTE", title: "[Article title]" },
      // TODO(client): Supply the article title and URL.
      { category: "PRACTICAL GUIDE", title: "[Article title]" },
    ],
  },
  pages: {
    expertise: "Expertise",
    people: "People",
    insights: "Insights",
    careers: "Careers",
    contact: "Contact",
    experience: "Experience",
    // TODO(client): Supply the Terms of Use text.
    terms: "Terms of Use",
    // TODO(client): Supply the Privacy Policy text.
    privacy: "Privacy Policy",
    // TODO(client): Supply the Legal Disclaimer page text.
    legalDisclaimer: "Legal Disclaimer",
  },
  footer: {
    navigationTitle: "Navigation",
    navigationLinks: ["About", "Expertise", "People", "Insights", "Experience", "Careers", "Contact"],
    expertiseTitle: "Key Expertise",
    expertiseLinks: [
      "Dispute Resolution",
      "White-Collar Crimes",
      "Arbitration",
      "Enforcement",
      "Corporate & Commercial",
      "Mergers & Acquisitions",
      "Foreign Investment",
      "Real Estate & Construction",
      "Employment",
    ],
    // The Client asked (15-10) for the English footer and Contact to read "INTEGRITAS VU
    // LEGAL LLC". The Vietnamese locale keeps the legal entity name with its diacritics.
    entityName: "INTEGRITAS VU LEGAL LLC",
    officeAddress: "37/16 (GF) Tran Dinh Xu Street, Cau Ong Lanh Ward, Ho Chi Minh City, Vietnam",
    telephone: "0938 170 130",
    email: "contact@integritasvulegal.com",
    legalTitle: "Legal",
    legalLinks: ["Terms of Use", "Privacy Policy", "Legal Disclaimer"],
    disclaimerTitle: "Disclaimer",
    disclaimerBody: "The content on the Integritas Vu Legal website is provided for general informational purposes only and does not constitute legal advice or solutions for any specific matter. Accessing the website or contacting Integritas Vu Legal does not automatically establish an attorney-client relationship.",
    copyright: "© 2026 Integritas Vu Legal. All rights reserved.",
  },
} as const;

export type EnglishDictionary = typeof en;
