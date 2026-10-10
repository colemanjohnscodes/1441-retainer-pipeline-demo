export const TABLE_COLUMNS = [
  { key: "name", label: "Brands", className: "justify-start" },
  { key: "segment", label: "Category & Retainer Stage", className: "justify-start" },
  { key: "owner", label: "Talent", className: "justify-start" },
  {
    key: "openDeals",
    label: "Deliverables / mo",
    className: "justify-end tabular-nums",
  },
  {
    key: "pipelineValue",
    label: "Monthly Retainer",
    className: "justify-end tabular-nums",
  },
  {
    key: "winProbability",
    label: "Renewal Likelihood",
    className: "justify-end tabular-nums",
  },
  {
    key: "renewalDate",
    label: "Renewal Date",
    className: "justify-start tabular-nums",
  },
  { key: "trend", label: "Content Cadence", className: "justify-center" },
  {
    key: "lastInteraction",
    label: "Last Touchpoint",
    className: "justify-start",
  },
  { key: "action", label: "Action", className: "justify-center" },
] as const;

export type TableColumnKey = (typeof TABLE_COLUMNS)[number]["key"];

export const TABLE_GRID_CLASS =
  "grid min-w-max grid-cols-[repeat(10,max-content)] justify-between";

export const TABLE_ROW_CLASS = "col-span-full grid grid-cols-subgrid";

export const TABLE_CELL_CLASS = "flex items-center";

export function columnClass(key: TableColumnKey) {
  return TABLE_COLUMNS.find((column) => column.key === key)?.className ?? "";
}
