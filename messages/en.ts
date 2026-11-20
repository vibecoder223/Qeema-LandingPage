/**
 * English copy deck. Lifted verbatim from qeema-landing-page.html.
 * Keys keep the original data-i names so the two decks stay diffable
 * against the source file.
 *
 * Values ending in `Rich` carry inline <b>/<em> and are rendered through
 * <Rich>, which sets innerHTML. Author-controlled static strings only —
 * nothing here comes from user input.
 */
const en = {
  meta: {
    title: "Qeema — Tender drafting for Qatari bid teams",
    description:
      "Qeema reads your Qatari tender, drafts the response from your previous bids, and checks that you meet its ICV requirement. Run one tender, free.",
    ogTitle: "Qeema — Tender drafting for Qatari bid teams",
    ogDescription:
      "Reads the tender. Drafts the response. Checks you meet the ICV requirement.",
  },

  // 0 · nav
  n1: "How it works",
  n2: "ICV advisor",
  n4: "FAQ",
  n3: "Get started",
  cta: "Run one tender",
  cta2: "See what it reads",

  // 1 · hero
  h1Rich: "Your proposal, done in <em>3 hours</em>, not 3 weeks.",
  hsub: "Every answer drafted from your previous bids and reviewed by your team, plus a check that you meet the ICV requirement.",
  rev: "One tender. No integration. No credit card.",

  // app frame · step rail, shared by all four screens
  f1: "Upload",
  f2: "Extract",
  f3: "Draft",
  f4: "Position",

  // screen A · dropzone
  c1: "New tender",
  dz1: "Drop the tender document",
  dz2: "PDF, Word or text · Arabic or English · native or scanned",
  dzFile: "QE-LNG-RFP-2026-0148.pdf",
  dzMeta: "2.4 MB · 87 pages · العربية",

  // 2 · process strip
  s2lb: "How it works",
  p1h: "Upload the tender",
  p1p: "The PDF from the portal, Arabic or English.",
  p2h: "Every question listed",
  p2p: "Including the ones buried in the annexes.",
  p3h: "Answers drafted",
  p3p: "From your past bids, with the source shown.",
  p4h: "Review and submit",
  p4p: "Owners, sign-off and an ICV check before export.",

  // 3 · what it pulls out
  s3eb: "The ceiling",
  s3h: "One person, part-time, three tenders a year.",
  s3p: "That is not a preference. It is how long it takes to read 87 pages, find every question buried in the annexes, and work out which ones you have answered before.",
  s3l1Rich:
    "<b>Every question, extracted.</b> Including the ones in appendix schedules that get missed.",
  s3l2Rich: "<b>Arabic or English, native or scanned.</b> Straight from the tender pack.",
  s3l3Rich: "<b>Every fact shows its page.</b> A person confirms the details before anything is decided.",

  // screen B · checklist
  cl1: "Reference",
  cl2: "Buyer",
  cl3: "Submission deadline",
  cl4: "Questions found",
  c3: "Found so far · 87 pages",
  cl1v: "RFP-2026-0148",
  cl2v: "QatarEnergy LNG",
  cl3v: "18 Sep 2026",
  cl4v: "64",

  // 4 · drafting
  s4eb: "The drafting",
  s4h: "A week becomes an afternoon.",
  s4p: "Answers are drafted from submissions you have already made. Every sentence carries the bid it came from, so review is checking, not writing.",
  s4l1Rich:
    "<b>Nothing is invented.</b> If there is no source, the field stays empty and says so.",
  s4l2Rich:
    "<b>Every answer names its source.</b> The bid it came from, the section, and the date it was submitted.",
  s4l3Rich: "<b>Every answer is approved.</b> Each question has an owner, and a reviewer approves it or sends it back.",

  // screen D · drafted answers
  c4: "Questions · 12 of 64 approved",
  q1: "Describe your HSE management system and incident record.",
  a1: "Al Rayyan operates an ISO 45001 certified HSE system audited annually by Bureau Veritas. Zero lost-time incidents across 412,000 site hours since 2023.",
  ci1: "Ashghal RFP-2025-0092",
  sr1: "Source: section 4.2, submitted 11 Mar 2025, awarded.",
  q3: "Provide your ICV certificate number and issuing body.",
  a3: "No source in your library for this question. Qeema leaves it empty.",
  ci3: "No source, yours to write",

  // 5 · verdict
  s5eb: "The position",
  s5h: "Find out before you spend the week, not after.",
  s5p: "Qeema checks the tender against your company profile as of the deadline, and says plainly when the answer is likely no. Then your Bid Lead decides whether to bid.",

  // screen C · verdict toggle
  c5: "Details · Can you bid?",
  vt1: "No certificate",
  vt2: "Certified",
  vq: "Can you bid on this tender?",
  v1f: "“Likely not eligible” is a flag, not a ruling. The buyer decides compliance.",
  ev: "Evidence",
  evE: "Energy sector",
  evEv: "Yes",
  evC: "Your ICV certificate",
  evC0: "None",
  evC1: "34% · valid to 31 Mar 2027",
  dq0: "Bid anyway?",
  dNo: "Don't bid",
  dYes: "Bid anyway",
  dq1: "Nothing stops you bidding.",
  dStart: "Start the bid",
  v1h: "Likely not eligible, unconfirmed",
  v1p: "No ICV certificate on file.",
  v3h: "ICV requirement met",
  v3p: "Your certificate is valid to 31 Mar 2027, past the deadline. The tender states no minimum score.",

  // 5b · ICV advisor
  s6eb: "ICV advisor",
  s6h: "See your likely ICV score, and what would raise it.",
  s6p: "Enter what you spend and Qeema estimates your score with Tawteen's published formula.",
  s6cRich: "<b>From the beginning of 2027, you will need an ICV certificate to bid on government tenders.</b> Qeema helps you get there: see where your score stands, what would raise it, and the steps to get certified.",
  s6cSrc: "Ministry of Finance notice on Monaqasat. Exact date to be announced.",
  s6l1Rich: "<b>Your numbers, the official formula.</b> Compared with the average for your industry.",
  s6l2Rich: "<b>What would raise it most.</b> Changes ranked by points, the ones that cost nothing extra first.",
  s6l3Rich: "<b>Always an estimate.</b> Your official score comes from your certifier.",

  // screen E · ICV estimate (mirrors IcvSimulator.vue in the app)
  c6: "ICV",
  ie1: "Your likely ICV",
  ie2: "Below the Construction average of 38%. Here is what would close the gap.",
  ieAvg: "Construction avg 38%",
  ieOut: "Outside",
  ieIn: "In Qatar",
  ieOutQ: "Outside Qatar",
  ia: "What would raise it most, for you",
  ad1: "Move QAR 100,000 of imports to a supplier in Qatar",
  ad1s: "Money spent abroad counts for nothing. At a supplier near the industry average, it starts counting.",
  ad1t: "No extra spend",
  ad2: "Spend QAR 100,000 more on training in Qatar",
  ad2s: "New spend counts in full, but it also adds to your total cost.",
  ad2t: "New spend",
  ie3: "Estimate from Tawteen's published formula. Your official score comes from your certifier.",

  // 6b · confidentiality
  cfeb: "Confidentiality",
  cfh: "Your bids are the most sensitive documents you own.",
  cfp: "Pricing, margins, subcontractors, staff records. In a market this size, a leak is not an inconvenience, it is the end of a bidding relationship. So the rules are stated here, not buried in a policy page.",
  g1t: "Nothing you upload trains a model",
  g1dRich:
    "Not ours and not a provider's. Your documents are read to answer your tender and are never added to a training set. <b>This is contractual, not a setting you have to find.</b>",
  g2t: "Your archive is yours alone",
  g2dRich:
    "Drafting only ever reads your organisation's own submissions. No content moves between accounts. A competitor using Qeema cannot surface a sentence you wrote, a price you quoted, or a subcontractor you named.",
  g3t: "Encrypted, and we will tell you where it sits",
  g3dRich:
    "Documents and extracted text are encrypted in transit and at rest. Hosting is not in Qatar today, and we will not claim local residency we do not have. <b>Ask and we will name the provider and the region in writing.</b>",
  g4t: "Access is scoped to your named users",
  g4dRich:
    "Our staff cannot open your documents in the course of ordinary support. Access for a specific incident requires your written approval and is logged against that request.",
  g5t: "Deletion means deleted",
  g5dRich:
    "Delete a tender, or close your account, and the source files and everything derived from them are removed within 30 days, backups included. You can export your archive first.",
  cfn: "We hold no security certification yet and will not imply one. If your procurement team needs a completed security questionnaire or a signed NDA before you upload anything, ask and we will provide both.",

  // 7 · faq
  s7eb: "FAQ",
  s7h: "The questions we get asked first.",
  s7p: "Short answers. The ones that say no are the ones worth reading.",
  fq1: "Does Qeema issue an ICV score?",
  fa1Rich:
    "<b>No.</b> Qeema is not an assessor and holds no delegated authority. Any estimate it shows is labelled unaudited, and the certifying body remains the only source of a real score.",
  fq2: "We are not in the energy sector. Does local content apply to us?",
  fa2Rich:
    "<b>Yes, from 2027.</b> According to the Ministry of Finance, from the beginning of 2027 you need an ICV certificate to bid on government tenders, whatever your sector. Without one you can still bid on private tenders. Qeema shows where your score stands and the steps to get certified.",
  fq3: "Where do the drafted answers come from?",
  fa3Rich:
    "From your own previous submissions. Every drafted sentence names the bid it came from, the section, and the date. Where there is no source, Qeema leaves the field empty and says so.",
  fq4: "Do you publish the thresholds and preference rates?",
  fa4Rich:
    "They are stated per tender inside the product, read from the tender document and the instrument that governs it. We do not publish figures here that we have not verified against the gazetted text.",
  fq5: "Which markets does Qeema work in?",
  fa5Rich:
    "Reading a tender and drafting from your own archive is not country-specific, and works on any tender document in Arabic or English. <b>The local-content layer is built out for Qatar first,</b> because the instruments, the classification grades and the portals differ by market and a shallow reading is worse than none. Tell us where you bid and we will say plainly what is covered there today.",

  // 8 · final
  fh: "Put one tender through it.",
  fp: "Take a tender you already submitted. Qeema shows you what it found and what it would have drafted.",
  fcta2: "Talk about bid volume",

  // footer
  fn1: "How it works",
  fn5: "Confidentiality",
  fn2: "Get started",
  city: "Doha, Qatar",

  // a11y — never rendered as visible text
  a11yHeroShot:
    "Qeema app: a tender document being dropped in for analysis",
  a11yExtract:
    "Qeema app: extraction checklist running over a tender document",
  a11yDraft:
    "Qeema app: drafted tender answers with citations back to previous bids",
  a11yLang: "Switch to Arabic",
} as const;

export type Messages = {
  -readonly [K in keyof typeof en]: K extends "meta"
    ? { -readonly [M in keyof (typeof en)["meta"]]: string }
    : string;
};

export default en;
