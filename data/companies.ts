// EXAMPLE DATA ONLY. Every brand, talent name, amount and date in this file is
// fictional and invented for a demo. None of it is a real 1441 Collective
// brand, creator, retainer amount or contract.

export const SEGMENTS = [
  "Beauty",
  "Fashion",
  "Wellness",
  "Food & Bev",
  "Lifestyle",
] as const;

export const STAGES = [
  "Prospect",
  "Proposal",
  "Active retainer",
  "Renewal due",
  "Churned",
] as const;

export type Segment = (typeof SEGMENTS)[number];
export type Stage = (typeof STAGES)[number];
export type Tag = Segment | Stage;

export type TagTone =
  | "blue"
  | "purple"
  | "green"
  | "moss"
  | "red"
  | "orange"
  | "amber"
  | "teal"
  | "yellow"
  | "neutral";

export const TAG_TONES: Record<Tag, TagTone> = {
  Beauty: "teal",
  Fashion: "orange",
  Wellness: "moss",
  "Food & Bev": "yellow",
  Lifestyle: "neutral",
  Prospect: "blue",
  Proposal: "purple",
  "Active retainer": "green",
  "Renewal due": "amber",
  Churned: "red",
};

export type Owner = {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  role: string;
};

const AVATARS = Array.from(
  { length: 10 },
  (_, i) => `/assets/images/_common/avatars/avatar-${i + 1}.png`,
);

// Fictional talent roster (example names only).
const OWNER_NAMES = [
  "Rowan Vale",
  "Juno Carrow",
  "Mika Solis",
  "Theo Lark",
  "Ivy Marlowe",
  "Dez Okafor",
  "Sage Whitlock",
  "Nico Arden",
  "Wren Castillo",
];

export const OWNERS: Owner[] = OWNER_NAMES.map((name, i) => ({
  name,
  avatar: AVATARS[i % AVATARS.length],
  email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
  phone: `+1 (555) 01${String(i).padStart(2, "0")}`,
  role:
    i % 3 === 0
      ? "Lifestyle creator"
      : i % 3 === 1
        ? "Beauty creator"
        : "Fitness creator",
}));

export const CURRENT_USER: Owner = {
  name: "Demo Manager",
  avatar: "/assets/images/_common/avatars/avatar-10.png",
  email: "demo.manager@example.com",
  phone: "+1 (555) 0199",
  role: "Brand partnerships (demo)",
};

export function ownerByName(name: string): Owner {
  return OWNERS.find((owner) => owner.name === name) ?? OWNERS[0];
}

export function profileByName(name: string): Owner {
  return name === CURRENT_USER.name ? CURRENT_USER : ownerByName(name);
}

export type Company = {
  id: string;
  name: string;
  tags: Tag[];
  owner: string;
  openDeals: number;
  pipelineValue: number;
  winProbability: number;
  trend: number[];
  lastInteraction: { date: string; label: string };
  renewalDate: string;
  activityDays: number;
  logo?: string;
};

export const TREND_PATTERN = [
  false,
  true,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
];

export const DEFAULT_TREND = [4, 4, 5, 5, 2, 7, 11, 7, 5, 7, 5, 3, 7, 14];

const TREND_A = [4, 4, 10, 3, 2, 4, 7, 4, 11, 4, 11, 7, 4, 14];
const TREND_B = [4, 4, 5, 5, 2, 7, 11, 7, 5, 7, 5, 3, 7, 14];
const TREND_C = [4, 4, 10, 5, 2, 7, 11, 7, 11, 7, 11, 7, 7, 14];
const TREND_D = [4, 4, 5, 12, 5, 7, 11, 3, 11, 3, 11, 3, 7, 14];

const COMPANY_RECORDS: Company[] = [
  {
    id: "lumen-pine",
    name: "Lumen & Pine Skincare",
    tags: ["Beauty", "Active retainer"],
    owner: "Rowan Vale",
    openDeals: 6,
    pipelineValue: 18500,
    winProbability: 82,
    trend: TREND_A,
    lastInteraction: { date: "2026-10-02", label: "Monthly recap" },
    renewalDate: "2027-03-01",
    activityDays: 8,
  },
  {
    id: "copperleaf",
    name: "Copperleaf Coffee Co.",
    tags: ["Food & Bev", "Renewal due"],
    owner: "Juno Carrow",
    openDeals: 4,
    pipelineValue: 9200,
    winProbability: 64,
    trend: TREND_B,
    lastInteraction: { date: "2026-09-28", label: "Renewal call" },
    renewalDate: "2026-10-31",
    activityDays: 12,
  },
  {
    id: "velvet-atlas",
    name: "Velvet Atlas Swim",
    tags: ["Fashion", "Proposal"],
    owner: "Mika Solis",
    openDeals: 5,
    pipelineValue: 14000,
    winProbability: 48,
    trend: TREND_C,
    lastInteraction: { date: "2026-10-06", label: "Pitch deck" },
    renewalDate: "2026-12-15",
    activityDays: 4,
  },
  {
    id: "brightfern",
    name: "Brightfern Wellness",
    tags: ["Wellness", "Active retainer"],
    owner: "Theo Lark",
    openDeals: 8,
    pipelineValue: 22000,
    winProbability: 88,
    trend: TREND_C,
    lastInteraction: { date: "2026-10-08", label: "Content review" },
    renewalDate: "2027-05-20",
    activityDays: 2,
  },
  {
    id: "harbor-lane",
    name: "Harbor Lane Denim",
    tags: ["Fashion", "Renewal due"],
    owner: "Ivy Marlowe",
    openDeals: 3,
    pipelineValue: 7800,
    winProbability: 41,
    trend: TREND_D,
    lastInteraction: { date: "2026-09-21", label: "Renewal call" },
    renewalDate: "2026-11-07",
    activityDays: 19,
  },
  {
    id: "saltmeadow",
    name: "Saltmeadow Candles",
    tags: ["Lifestyle", "Prospect"],
    owner: "Dez Okafor",
    openDeals: 2,
    pipelineValue: 4500,
    winProbability: 22,
    trend: TREND_B,
    lastInteraction: { date: "2026-10-01", label: "Discovery call" },
    renewalDate: "2027-01-10",
    activityDays: 9,
  },
  {
    id: "tidewater",
    name: "Tidewater Tonic",
    tags: ["Food & Bev", "Active retainer"],
    owner: "Sage Whitlock",
    openDeals: 5,
    pipelineValue: 11500,
    winProbability: 76,
    trend: TREND_A,
    lastInteraction: { date: "2026-10-05", label: "Campaign live" },
    renewalDate: "2027-02-14",
    activityDays: 5,
  },
  {
    id: "juniper-row",
    name: "Juniper Row Haircare",
    tags: ["Beauty", "Proposal"],
    owner: "Nico Arden",
    openDeals: 4,
    pipelineValue: 12750,
    winProbability: 55,
    trend: TREND_C,
    lastInteraction: { date: "2026-09-30", label: "Rate card" },
    renewalDate: "2026-12-01",
    activityDays: 10,
  },
  {
    id: "ember-oak",
    name: "Ember & Oak Grills",
    tags: ["Lifestyle", "Churned"],
    owner: "Wren Castillo",
    openDeals: 0,
    pipelineValue: 0,
    winProbability: 8,
    trend: TREND_D,
    lastInteraction: { date: "2026-08-12", label: "Wrap call" },
    renewalDate: "2026-08-31",
    activityDays: 59,
  },
  {
    id: "cloudberry",
    name: "Cloudberry Kids",
    tags: ["Lifestyle", "Active retainer"],
    owner: "Rowan Vale",
    openDeals: 3,
    pipelineValue: 6400,
    winProbability: 71,
    trend: TREND_B,
    lastInteraction: { date: "2026-10-03", label: "Monthly recap" },
    renewalDate: "2027-04-01",
    activityDays: 7,
  },
  {
    id: "marigold-mesa",
    name: "Marigold Mesa Jewelry",
    tags: ["Fashion", "Renewal due"],
    owner: "Juno Carrow",
    openDeals: 4,
    pipelineValue: 10300,
    winProbability: 58,
    trend: TREND_C,
    lastInteraction: { date: "2026-09-25", label: "QBR" },
    renewalDate: "2026-11-20",
    activityDays: 15,
  },
  {
    id: "quartzline",
    name: "Quartzline Fitness",
    tags: ["Wellness", "Prospect"],
    owner: "Mika Solis",
    openDeals: 3,
    pipelineValue: 8000,
    winProbability: 30,
    trend: TREND_B,
    lastInteraction: { date: "2026-10-07", label: "Discovery call" },
    renewalDate: "2027-01-31",
    activityDays: 3,
  },
  {
    id: "nimbus",
    name: "Nimbus Hydration",
    tags: ["Wellness", "Active retainer"],
    owner: "Theo Lark",
    openDeals: 6,
    pipelineValue: 16800,
    winProbability: 79,
    trend: TREND_C,
    lastInteraction: { date: "2026-10-09", label: "Content review" },
    renewalDate: "2027-06-30",
    activityDays: 1,
  },
  {
    id: "sundial",
    name: "Sundial Sneakers",
    tags: ["Fashion", "Proposal"],
    owner: "Ivy Marlowe",
    openDeals: 5,
    pipelineValue: 13200,
    winProbability: 44,
    trend: TREND_D,
    lastInteraction: { date: "2026-09-18", label: "Contract" },
    renewalDate: "2026-12-20",
    activityDays: 22,
  },
  {
    id: "wildcrest",
    name: "Wildcrest Outdoors",
    tags: ["Lifestyle", "Renewal due"],
    owner: "Sage Whitlock",
    openDeals: 4,
    pipelineValue: 9900,
    winProbability: 67,
    trend: TREND_A,
    lastInteraction: { date: "2026-09-29", label: "Renewal call" },
    renewalDate: "2026-10-24",
    activityDays: 11,
  },
  {
    id: "glasshouse",
    name: "Glasshouse Tea",
    tags: ["Food & Bev", "Churned"],
    owner: "Nico Arden",
    openDeals: 0,
    pipelineValue: 0,
    winProbability: 12,
    trend: TREND_B,
    lastInteraction: { date: "2026-07-20", label: "Wrap call" },
    renewalDate: "2026-07-31",
    activityDays: 82,
  },
  {
    id: "petalwork",
    name: "Petalwork Cosmetics",
    tags: ["Beauty", "Active retainer"],
    owner: "Dez Okafor",
    openDeals: 7,
    pipelineValue: 19400,
    winProbability: 84,
    trend: TREND_C,
    lastInteraction: { date: "2026-10-04", label: "Campaign live" },
    renewalDate: "2027-03-15",
    activityDays: 6,
  },
];

// No logos: fictional brands render as initials.
export const COMPANIES: Company[] = COMPANY_RECORDS;

export const SORT_OPTIONS = [
  { value: "pipelineValue", label: "Monthly Retainer" },
  { value: "renewalDate", label: "Renewal Date" },
  { value: "winProbability", label: "Renewal Likelihood" },
  { value: "openDeals", label: "Deliverables / mo" },
  { value: "lastInteraction", label: "Last Touchpoint" },
  { value: "name", label: "Brand Name" },
] as const;

export type SortKey = (typeof SORT_OPTIONS)[number]["value"];

export const INTERACTION_TYPES = [
  "Discovery call",
  "Pitch deck",
  "Rate card",
  "Contract",
  "Content review",
  "Campaign live",
  "Monthly recap",
  "QBR",
  "Renewal call",
  "Wrap call",
] as const;

export const ACTIVITY_WINDOWS = [7, 30, 60, 90] as const;

export type ActivityWindow = (typeof ACTIVITY_WINDOWS)[number];

export const TREND_WINDOWS = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

export type ScoreCard = {
  title: string;
  description: string;
  reviewer: string;
  reviewerAvatar: string;
  updated: string;
  verdict: string;
  stars: number;
};

export const SCORE_CARDS: ScoreCard[] = [
  {
    title: "Brand fit",
    description:
      "How well the brand's audience and values line up with the assigned talent.",
    reviewer: "Juno Carrow",
    reviewerAvatar: "/assets/images/_common/avatars/detail-2.png",
    updated: "Updated 2h ago",
    verdict: "Strong fit",
    stars: 4,
  },
  {
    title: "Content performance",
    description:
      "Engagement on retainer deliverables versus the agreed targets (example metrics).",
    reviewer: "Theo Lark",
    reviewerAvatar: "/assets/images/_common/avatars/detail-3.png",
    updated: "Updated 1d ago",
    verdict: "On track",
    stars: 4,
  },
  {
    title: "Renewal readiness",
    description:
      "Contract terms, payment history and a brand-side champion for the next term.",
    reviewer: "Ivy Marlowe",
    reviewerAvatar: "/assets/images/_common/avatars/detail-1.png",
    updated: "Updated 3d ago",
    verdict: "Needs a QBR",
    stars: 3,
  },
];
