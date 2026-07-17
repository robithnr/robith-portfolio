import {
  Brain,
  ChartColumn,
  Code2,
  LucideIcon,
  Wrench,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ToolIcon from "@/components/ui/ToolIcon";

import {
  CategoryIcon,
  skillCategories,
} from "@/data/skills";

const iconMap: Record<CategoryIcon, LucideIcon> = {
  code: Code2,
  chart: ChartColumn,
  brain: Brain,
  tool: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies, tools, and platforms I use to analyze data, build dashboards, and deliver data-driven solutions."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <Card
                key={category.title}
                hover
                className="flex h-full flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                    <Icon className="h-5 w-5 text-sky-400" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <ToolIcon
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}