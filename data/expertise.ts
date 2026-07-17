import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";

export const expertise = [
  {
    title: "Sales Analytics",
    description:
      "Analyze sales performance, identify trends, and monitor business KPIs across retail and marketplace channels.",
    icon: BarChart3,
    tools: ["Python", "Looker Studio", "Excel", "Google Sheets"],
  },
  {
    title: "Inventory Analytics",
    description:
      "Monitor stock movement, sell-through rate, inventory aging, and product availability to support operational planning.",
    icon: Boxes,
    tools: ["Excel", "Looker Studio", "Google Sheets", "Python"],
  },
  {
    title: "Dashboard Development",
    description:
      "Design interactive dashboards that help stakeholders monitor performance and make faster decisions.",
    icon: LayoutDashboard,
    tools: ["Looker Studio", "Power BI", "Tableau"],
  },
  {
    title: "Data Validation & Reporting",
    description:
      "Validate, reconcile, and prepare reliable business data to improve reporting quality and consistency.",
    icon: ShieldCheck,
    tools: ["Python", "Excel", "Google Sheets"],
  },
];