import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ToolIcon from "@/components/ui/ToolIcon";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A journey of turning business data into actionable insights through analytics, reporting, and business intelligence."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              hover
              className="flex h-full flex-col"
            >
              {/* Header */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg font-medium text-sky-400">
                  {experience.company}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  {experience.period} • {experience.location}
                </p>

                <p className="mt-6 leading-8 text-zinc-400">
                  {experience.overview}
                </p>
              </div>

              {/* Key Focus Areas */}
              <div className="mt-8 border-t border-zinc-800 pt-8">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Key Focus Areas
                </h4>

                <div className="space-y-6">
                  {experience.work.map((item) => (
                    <div key={item.title}>
                      <h5 className="text-base font-semibold text-white">
                        {item.title}
                      </h5>

                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-auto border-t border-zinc-800 pt-8">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Tools & Technologies  
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {experience.tools.map((tool) => (
                    <ToolIcon
                      key={tool.name}
                      name={tool.name}
                      icon={tool.icon}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}