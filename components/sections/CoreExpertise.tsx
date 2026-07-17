import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { expertise } from "@/data/expertise";

export default function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Core Expertise"
          title="What I Do Best"
          description="The areas where I create the most value through data, combining business understanding with technical skills to deliver reliable reporting, actionable analysis, and decision support."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                hover
                className="flex h-full flex-col"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                  <Icon
                    size={24}
                    className="text-blue-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-grow leading-7 text-zinc-400">
                  {item.description}
                </p>

                {/* Tools */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <Badge key={tool}>
                      {tool}
                    </Badge>
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