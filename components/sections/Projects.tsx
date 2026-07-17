import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ToolIcon from "@/components/ui/ToolIcon";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of projects demonstrating how I approach analytical problems, transform data into insights, and communicate findings through data visualization."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              hover
              className="flex h-full flex-col"
            >
              {/* Header */}
              <div>
                <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400">
                  {project.subtitle}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {project.overview}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 border-t border-zinc-800 pt-8">
                <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Key Highlights
                </h4>

                <div className="space-y-6">
                  {project.highlights.map((item) => (
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
                  {project.technologies.map((tool) => (
                    <ToolIcon
                      key={tool.name}
                      name={tool.name}
                      icon={tool.icon}
                    />
                  ))}
                </div>

                {(project.links.presentation || project.links.github) && (
                  <>
                    <h4 className="mt-8 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Resources
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {project.links.presentation && (
                        <Link
                          href={project.links.presentation}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-sky-500 hover:text-white"
                        >
                          <FileText size={16} />
                          Presentation
                          <ArrowUpRight size={14} />
                        </Link>
                      )}

                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-sky-500 hover:text-white"
                        >
                          <FaGithub size={16} />
                          GitHub
                          <ArrowUpRight size={14} />
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}