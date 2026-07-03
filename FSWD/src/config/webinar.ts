// All page copy and settings live here, mirroring the parent project's pattern.
// NOTE: verify every stat/quote in `receipts` against current sources before launch —
// this page's credibility rests on the numbers being real.

// One CTA, used everywhere. Change it here and it changes across the whole page —
// consistent wording reinforces a single action instead of reading like different offers.
const CTA = "Grab my free seat";

// Public URL of the deployed page. Set NEXT_PUBLIC_SITE_URL in production.
// Used for canonical URLs, Open Graph/Twitter image URLs, and JSON-LD structured data.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeforindia.com"
).replace(/\/$/, "");

export const WEBINAR_CONFIG = {
  cta: CTA,
  siteUrl: SITE_URL,

  meta: {
    title: "The AI Boomerang: Free Live Webinar | Code for India Foundation",
    description:
      "They fired thousands for AI. Now they're rehiring. A free 1-hour live session by Code for India Foundation on what IBM, Ford and Klarna hire for now, and how you get there from zero.",
    keywords: [
      "AI jobs webinar",
      "software engineering careers India",
      "AI rehiring",
      "junior developer jobs AI",
      "full stack developer roadmap",
      "free coding webinar",
      "Code for India Foundation",
      "AI boomerang hiring",
      "entry level tech jobs 2026",
    ],
    ogImageAlt:
      "The AI Boomerang — free live webinar by Code for India. They fired thousands for AI. Now they're rehiring.",
  },

  brand: {
    name: "The AI Boomerang",
    shortName: "FSWD Webinar",
    org: "Code for India",
    orgUrl: "https://codeforindia.com",
    logo: "/cfi-logo.png",
  },

  hero: {
    presents: "Code for India Foundation presents",
    titleTop: "The AI",
    titleBottom: "Boomerang",
    punch: "They fired thousands for AI. Now they're rehiring.",
    invite:
      "A free, live, one-hour broadcast on the biggest plot twist in tech hiring, and exactly how you ride it in. No recording-only fluff. You, us, and the receipts.",
    ctaText: CTA,
    scrollCue: "See the receipts",
    chips: [
      { logo: "ibm", top: "Cut 8,000 jobs for AI", punch: "Hiring went UP" },
      { logo: "ford", top: "“Half of white-collar work,” CEO", punch: "Still hiring engineers" },
      { logo: "klarna", top: "Went AI-first on support", punch: "Rehiring humans" },
    ],
  },

  // who's behind this — split out of the hero into its own beat
  about: {
    kicker: "Who's behind this",
    titlePre: "Building India's",
    titleGradient: "Next Generation of Developers",
    body: "We're Code for India Foundation, a non-profit making quality tech education accessible to everyone. Whether you're starting from scratch or changing careers, we help you build practical software development skills. No paywalls. No fine print. This webinar is one of the free ways we support learners.",
    stats: [
      { value: "1,000+", label: "Learners empowered across India" },
      { value: "₹0", label: "Webinar is free. No hidden fees." },
      { value: "1,000+", label: "Students guided into tech careers" },
    ],
  },

  receipts: {
    title: "The receipts",
    subtitle: "No Predictions. Only Results.",
    cards: [
      {
        company: "IBM",
        logo: "ibm",
        source: "CEO Arvind Krishna, on the record · 2025",
        stat: 94,
        suffix: "%",
        headline: "of routine HR work automated. Total employment went UP.",
        body: "AskHR absorbed the routine work of ~8,000 roles. Then IBM's CEO said the quiet part out loud: they ended up hiring MORE people (specifically engineers and salespeople), not fewer.",
      },
      {
        company: "Ford",
        logo: "ford",
        source: "CEO Jim Farley, Aspen Ideas Festival · 2025",
        stat: 50,
        suffix: "%",
        headline: "of white-collar work at risk (his words, not ours).",
        body: "Farley forecast AI replacing “literally half” of white-collar workers in the U.S. Meanwhile Ford keeps hiring the engineers who can check the machine's work.",
      },
      {
        company: "Klarna",
        logo: "klarna",
        source: "CEO Sebastian Siemiatkowski · 2024–25",
        stat: 55,
        suffix: "%",
        headline: "of employers regret AI-driven layoffs. Klarna said it first.",
        body: "Klarna went AI-first on support, watched quality drop, and publicly resumed human hiring. CBA reversed chatbot layoffs. The rehiring wave wants people who can fix what AI ships.",
      },
    ],
    ticker: [
      "Klarna: resumed human hiring after AI-first support backfired",
      "CBA: reversed chatbot layoffs",
      "Salesforce: rebalanced support roles after Agentforce",
      "Duolingo: walked back “AI-first” messaging",
      "IBM: headcount up post-automation",
    ],
  },

  reframe: {
    kicker: "Read that again.",
    quote: "AI didn't kill junior jobs. It killed weak fundamentals.",
    underlined: "Be the one they can't automate around.",
  },

  takeaways: {
    kicker: "One hour. Live.",
    title: "You walk out with",
    subtitle: "This is an info session, not a course. No homework. Just the map.",
    items: [
      { text: "Exactly which skills the boomerang companies are paying for right now" },
      { text: "Why AI code breaks in production, and how you catch it in seconds" },
      { text: "The full-stack map: what actually happens between a click and a database" },
      { text: "A 90-day zero-to-interview roadmap you can start tonight" },
      { text: "Live Q&A: bring your panic, leave with a plan" },
    ],
    codeDemo: {
      caption:
        "Real example we'll break down live. The AI version runs fine, until the numbers matter.",
      before: {
        label: "AI-generated",
        code: `// "Sort prices, find the cheapest"
const prices = [5, 25, 100, 9];
prices.sort();
const cheapest = prices[0];
// cheapest = 100  ← wait, what?`,
      },
      after: {
        label: "Fixed with fundamentals",
        code: `// .sort() compares as strings.
// "100" < "25" < "5" < "9"
const prices = [5, 25, 100, 9];
prices.sort((a, b) => a - b);
const cheapest = prices[0]; // 5 ✓`,
      },
    },
    ctaText: CTA,
  },

  speaker: {
    kicker: "Your host",
    sectionTitle: "The person walking you through it",
    name: "Omer Ahmed Quadri",
    role: "Full Stack Engineer · Code for India Foundation",
    photoUrl: "/instructor-photo.png",
    badge: "Live host",
    bio: "Omer has spent 5+ years shipping production code and reviewing AI-generated pull requests. He's seen exactly where they break. This isn't a lecture. He's walking you through what the rehiring pattern means for someone starting out right now, with receipts from real codebases.",
    credentials: [
      "5+ years professional full-stack experience",
      "Mentored 1,000+ people breaking into tech",
      "Govt. of Telangana accredited course architect",
    ],
    ctaText: CTA,
  },

  agenda: {
    title: "The hour, minute by minute",
    items: [
      { time: "6:00", title: "The boomerang, decoded", detail: "IBM, Ford, Klarna: what actually happened, and what it signals." },
      { time: "6:10", title: "What AI genuinely can't do", detail: "Where models fail in real codebases, with examples." },
      { time: "6:20", title: "The fundamentals stack", detail: "The mental model that separates prompt-typers from engineers." },
      { time: "6:35", title: "Live: fixing AI's code", detail: "We debug a real AI-generated snippet, step by step." },
      { time: "6:48", title: "Your 90-day plan", detail: "What to learn first, in what order, and how to prove it." },
      { time: "6:55", title: "Q&A", detail: "Your questions, straight answers." },
    ],
  },

  details: {
    dateLabel: "Wednesday, 8 July",
    timeLabel: "6:00 – 7:00 PM IST",
    countdownDateStr: "2026-07-08T18:00:00+05:30",
    endDateStr: "2026-07-08T19:00:00+05:30",
    platform: "Live interactive broadcast (link sent on registration)",
  },

  form: {
    title: "Lock your seat",
    subtitle: "Free. Live. The recording goes only to registrants.",
    fields: {
      name: "Full name",
      email: "Email",
      phone: "WhatsApp number (for the join link)",
    },
    submitText: CTA,
    successTitle: "You're in.",
    successBody: "Check your email: your join link and calendar invite are on the way.",
  },

  faq: {
    title: "Questions you probably have",
    items: [
      {
        q: "Is this actually free?",
        a: "Yes. No card, no trial, no upsell mid-session. At the end we'll mention our full course for those who want to go deeper: that part takes two minutes and skipping it costs you nothing.",
      },
      {
        q: "I've never written code. Will I be lost?",
        a: "No. The session is built for students and early-career folks. The live debugging segment is explained line by line. The point is to show you what fundamentals look like, not to test you on them.",
      },
      {
        q: "Will there be a recording?",
        a: "Yes, sent to everyone who registers, even if you can't attend live. But the Q&A only works if you're in the room.",
      },
      {
        q: "Is the 'AI is rehiring' thing real, or a hook?",
        a: "Both, honestly. It's a hook because it's real: IBM's CEO publicly confirmed hiring went up after automation, and Klarna reversed course on AI-first support. We cite sources on-screen during the session.",
      },
      {
        q: "What if I already know some coding?",
        a: "The fundamentals segment and the 90-day roadmap assume zero experience, but the live debugging and 'what AI can't do' segments land harder the more you already know.",
      },
    ],
  },

  closing: {
    quote: "Everyone can prompt. Companies pay for the person who knows when the AI is wrong.",
    ctaText: CTA,
  },
};

export const WEBINAR_DATE = new Date(WEBINAR_CONFIG.details.countdownDateStr);
