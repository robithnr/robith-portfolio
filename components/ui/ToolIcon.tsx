import {
  BarChart3,
  Boxes,
  Brain,
  Database,
  FileCode2,
  Megaphone,
  Sheet,
  Table2,
  ChartColumn,
} from "lucide-react";

type Props = {
  name: string;
  icon: string;
};

export default function ToolIcon({
  name,
  icon,
}: Props) {
  const iconMap = {
    python: FileCode2,
    sql: FileCode2,
    excel: Table2,
    looker: BarChart3,
    sheets: Sheet,
    tiktok: Megaphone,
    jubelio: Boxes,

    pandas: Table2,
    numpy: FileCode2,
    tensorflow: Brain,
    fasttext: FileCode2,
    sklearn: Brain,
    tableau: ChartColumn,
    powerbi: BarChart3,
    colab: FileCode2,
    bigquery: Database,
    mysql: Database,
  };

  const Icon =
    iconMap[icon as keyof typeof iconMap] ??
    FileCode2;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 transition-all duration-200 hover:border-blue-500/40 hover:bg-zinc-900">
      <Icon className="h-5 w-5 text-sky-400" />

      <span className="text-sm font-medium text-zinc-300">
        {name}
      </span>
    </div>
  );
}