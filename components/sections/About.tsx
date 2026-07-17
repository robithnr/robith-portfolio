import { CheckCircle2 } from "lucide-react";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="My Approach"
          description="Beyond dashboards and reports, this is how I approach analytical work and problem-solving."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <Card hover className="h-full">
            <div className="space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-8 text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Right */}
          <Card hover className="h-full">
            <h3 className="text-xl font-semibold text-white">
              Guiding Principles
            </h3>

            <div className="mt-8 space-y-8">
              {about.principles.map((principle, index) => (
                <div key={principle.title}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-400" />

                    <div>
                      <h4 className="font-semibold text-white">
                        {principle.title}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  {index !== about.principles.length - 1 && (
                    <div className="mt-8 border-b border-zinc-800" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}