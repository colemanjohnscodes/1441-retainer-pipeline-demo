export type NotificationKind =
  | "mention"
  | "stage"
  | "alert"
  | "update"
  | "invite";

export type Notification = {
  id: string;
  kind: NotificationKind;
  actor?: string;
  companyId: string;
  message: string;
  quote?: string;
  time: string;
  unread: boolean;
};

// EXAMPLE notifications about fictional brands.
export const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    kind: "mention",
    actor: "Juno Carrow",
    companyId: "copperleaf",
    message: "mentioned you on Copperleaf Coffee Co.",
    quote:
      "Renewal is up Oct 31. Can we send the recap deck before the renewal call?",
    time: "2m ago",
    unread: true,
  },
  {
    id: "n2",
    kind: "stage",
    actor: "Ivy Marlowe",
    companyId: "harbor-lane",
    message: "moved Harbor Lane Denim to Renewal due",
    time: "18m ago",
    unread: true,
  },
  {
    id: "n3",
    kind: "alert",
    companyId: "wildcrest",
    message: "Wildcrest Outdoors renews in 14 days",
    time: "1h ago",
    unread: true,
  },
  {
    id: "n4",
    kind: "update",
    actor: "Theo Lark",
    companyId: "brightfern",
    message: "posted 2 retainer deliverables for Brightfern Wellness",
    time: "3h ago",
    unread: false,
  },
  {
    id: "n5",
    kind: "update",
    actor: "Mika Solis",
    companyId: "velvet-atlas",
    message: "sent a proposal to Velvet Atlas Swim",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "n6",
    kind: "alert",
    companyId: "nimbus",
    message: "Monthly retainer for Nimbus Hydration set to $16,800 (example)",
    time: "2d ago",
    unread: false,
  },
  {
    id: "n7",
    kind: "invite",
    actor: "Dez Okafor",
    companyId: "petalwork",
    message: "added you to the Petalwork Cosmetics talent team",
    time: "3d ago",
    unread: false,
  },
];
