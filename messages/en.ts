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
    title: "Qeema — Qatari tender eligibility and bid drafting",
    description:
      "Qeema reads your Qatari tender, drafts the response from bids you already won, and tells you what you are entitled to claim. Run one tender, free.",
    ogTitle: "Qeema — Qatari tender eligibility and bid drafting",
    ogDescription:
      "Reads the tender. Drafts the response. Tells you what you can claim.",
  },

  // 0 · nav
  n1: "How it works",
  n2: "What it covers",
  n4: "FAQ",
  n3: "Get started",
  cta: "Run one tender",
  cta2: "See what it reads",

  // 1 · hero
  h1Rich: "Bid in <em>an afternoon</em>. Compliant before you submit.",
  hsub: "Qeema drafts your response from bids you already won, then checks it against Qatar's local-content rules.",
  rev: "One tender. No integration. No credit card.",

  // app frame · step rail, shared by all four screens
  f1: "Upload",
  f2: "Extract",
  f3: "Draft",
  f4: "Position",

  // screen A · dropzone
  c1: "New tender",
  dz1: "Drop the tender document",
  dz2: "Arabic or English. Straight off the portal.",
  dzFile: "RFP-2026-0148-Ashghal.pdf",
  dzMeta: "2.4 MB · 87 pages · العربية",

  // 2 · coverage strip
  s2lb: "Reads against",
  s2a: "Tawteen ICV",
  s2ai: "QatarEnergy, energy sector",
  s2b: "Cabinet Resolution 11 of 2022",
  s2bi: "Ministry of Finance, government-wide",
  s2c: "Law 24 of 2015",
  s2ci: "Executive Regulations, as amended",
  s2d: "Classification grades",
  s2di: "Entry gates by tender value",

  // 3 · what it pulls out
  s3eb: "The ceiling",
  s3h: "One person, part-time, three tenders a year.",
  s3p: "That is not a preference. It is how long it takes to read 87 pages, find every question buried in the annexes, and work out which ones you have answered before.",
  s3l1Rich:
    "<b>Every question, extracted.</b> Including the ones in appendix schedules that get missed.",
  s3l2Rich: "<b>Arabic read natively.</b> Not translated first, then read.",
  s3l3Rich:
    "<b>Local-content weighting detected.</b> On every tender, whether or not you hold a certificate.",

  // screen B · checklist
  cl1: "Questions found",
  cl2: "Mandatory documents",
  cl3: "Submission deadline",
  cl4: "Classification grade required",
  cl5: "Local-content weighting",
  c3: "RFP-2026-0148 · 87 pp",
  cl1v: "64",
  cl2v: "11",
  cl3v: "18 Sep",
  cl4v: "C",
  cl5v: "20%",

  // 4 · drafting
  s4eb: "The drafting",
  s4h: "A week becomes an afternoon.",
  s4p: "Answers are drafted from submissions you have already made. Every sentence carries the bid it came from, so review is checking, not writing.",
  s4l1Rich:
    "<b>Nothing is invented.</b> If there is no source, the field stays empty and says so.",
  s4l2Rich:
    "<b>Every answer names its source.</b> The bid it came from, the section, and the date it was submitted.",
  s4l3Rich:
    "<b>Your knowledge base grows.</b> Every submitted bid becomes source material for the next one.",

  // screen D · drafted answers
  c4: "Drafted · 61 of 64",
  q1: "Describe your HSE management system and incident record.",
  a1: "Al Rayyan operates an ISO 45001 certified HSE system audited annually by Bureau Veritas. Zero lost-time incidents across 412,000 site hours since 2023.",
  ci1: "Ashghal RFP-2025-0092",
  sr1: "Source: section 4.2, submitted 11 Mar 2025, awarded.",
  q3: "Provide your ICV certificate number and issuing body.",
  a3: "No source found. Qeema will not fill this. Answer it yourself or attach the certificate.",
  ci3: "No citation",

  // 5 · verdict
  s5eb: "The position",
  s5h: "Find out before you spend the week, not after.",
  s5p: "Most firms learn a tender was closed to them by losing it. Qeema resolves your standing against the tender on the day it lands, and says so plainly when the answer is no.",

  // screen C · verdict toggle
  c5: "Position",
  vt1: "No certificate",
  vt2: "Certified",
  v1h: "Not eligible to bid",
  v1p: "This tender requires a valid Tawteen ICV certificate at submission. You do not hold one.",
  v2h: "Two open tenders you can bid",
  tr1: "Ashghal road maintenance, Al Wakrah",
  tr1d: "Closes 24 Sep",
  tg1: "No cert",
  tr2: "Ministry of Municipality landscaping",
  tr2d: "Closes 2 Oct",
  tg2: "SME set-aside",
  v3h: "Eligible, and above the weighting threshold",
  v3p: "Local content carries 20% of the award score here. Your current position clears it with margin.",
  g1: "Claimable on this bid",
  g2: "Price preference on Qatari-content goods in your BOQ",
  g3: "Performance guarantee relief available to firms your size",
  g4: "Reduced classification fee at renewal",
  g5: "Each has to be asserted in the submission. Qeema writes the clause that asserts it.",

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
    "<b>Yes.</b> Non-energy bidders sit inside Cabinet Resolution 11 of 2022, administered by the Ministry of Finance, rather than the Tawteen ICV regime run by QatarEnergy. That is a different regime, not an exemption.",
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
  fp: "Take a document you already lost or already won. Qeema will tell you what it found, what it would have drafted, and what you were entitled to.",
  fcta2: "Talk about bid volume",

  // footer
  fn1: "Coverage",
  fn5: "Confidentiality",
  fn2: "Get started",
  fn4: "Privacy",
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
