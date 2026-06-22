import Image from "next/image";

import { CatGlyph } from "@/components/cat-glyph";
import { LINKS, RESUME_URL, STACK } from "@/components/home/home-data";
import { Mono } from "@/components/home/mono";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100svh-4rem)] scroll-mt-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 45% at 50% 0%, oklch(0.705 0.175 48 / 0.12), oklch(0.705 0.175 48 / 0.045) 38%, transparent 74%)",
        }}
      />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-16">
        <div className="text-center lg:text-left">
          <Mono className="text-muted-foreground">
            founding engineer @{" "}
            <a
              href={LINKS.inspire}
              target="_blank"
              rel="noreferrer"
              className="text-foreground transition-colors hover:text-[color:var(--ember)]"
            >
              inspire dev studio
            </a>
          </Mono>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Aman Kumar<span className="text-[color:var(--ember)]">.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground lg:mx-0">
            Software Engineer building mobile products, SDKs and AI-powered
            tools. Currently Founding Engineer at{" "}
            <a
              href={LINKS.inspire}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 transition-colors hover:text-[color:var(--ember)] hover:underline"
            >
              Inspire Dev Studio
            </a>
            . Started with Android ROMs and open source, and eventually found my
            way into iOS, backend systems, SDKs and AI-native products.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition hover:opacity-90"
            >
              Resume
              <span className="font-mono text-[11px] opacity-60">.pdf</span>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] transition hover:border-foreground/30 hover:bg-surface"
            >
              GitHub ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-[13px] transition hover:border-[color:var(--ember)]/50 hover:text-[color:var(--ember)]"
            >
              Contact
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2 lg:justify-start">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-surface/40 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-border bg-surface/60 p-3 shadow-[var(--shadow-card)]">
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.705 0.175 48 / 0.15), transparent 40%)",
                mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                WebkitMask:
                  "linear-gradient(black, black) content-box, linear-gradient(black, black)",
              }}
            />
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/aman-avatar-orange-cat.png"
                alt="3D cartoon avatar of Aman Kumar wearing specs with light stubble and holding an orange cat with white paws"
                width={1023}
                height={1537}
                priority
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-medium">Aman Kumar</div>
                    <Mono className="text-muted-foreground">/FireLord</Mono>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between px-2 pb-1">
              <Mono className="text-muted-foreground">india · ist</Mono>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <CatGlyph className="h-3.5 w-3.5 text-[color:var(--ember)]" />
                <Mono>approved</Mono>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
