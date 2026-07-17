import Image from "next/image";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Robith
              <br />
              Naufal
              <br />
              Razzak
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Turning data into meaningful business decisions through analytics, business intelligence, and continuous improvement.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/resume.pdf">
                Resume
              </Button>

              <Button
                href="#projects"
                variant="secondary"
              >
                Projects
              </Button>
            </div>
        </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
              <Image
                src="/profile/profile.jpg"
                alt="Robith Naufal"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}