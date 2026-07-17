import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Interested in collaborating or discussing an opportunity? I'd be glad to hear from you."
        />

        <Card className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Left */}
          <div>
            <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white">
              {contact.title}
            </h3>

            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              {contact.description}
            </p>

            <div className="mt-10">
              <Button
                href={`mailto:${contact.email}`}
                icon={Mail}
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </h4>

            <div className="mt-6 space-y-4">
              {contact.socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center justify-between rounded-xl border border-zinc-800 px-5 py-4 transition-all duration-300 hover:border-sky-500 hover:bg-zinc-900"
                >
                  <span className="text-zinc-300 transition group-hover:text-white">
                    {social.name}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-sky-400" />
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}