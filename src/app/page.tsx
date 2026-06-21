import Image from "next/image";
import type { ReactNode } from "react";

import { CatGlyph } from "@/components/cat-glyph";
import { BLOG_PAGE_SIZE, getBlogPosts } from "@/lib/blog";

/* --------------------------------- data ---------------------------------- */

const STACK = [
  "SwiftUI",
  "UIKit",
  "Node.js",
  "PostgreSQL",
  "AI-Assisted Development",
];

const STATUS = [
  { icon: "📱", label: "Apple Platforms" },
  { icon: "⚡", label: "SDK Development" },
  { icon: "🤖", label: "AI Native Workflow" },
  { icon: "🌍", label: "Full Stack Product" },
];

const WORK = [
  {
    name: "CapCap",
    tag: "iOS · Caption Engine",
    desc: "A precision caption editor for short-form video. Custom CALayer rendering pipeline, frame-accurate timing, and a UI that gets out of the way.",
    tech: ["swift", "swiftui", "calayer", "avfoundation"],
  },
  {
    name: "HeapChat",
    tag: "Realtime · Multilingual",
    desc: "Real-time messaging with on-the-fly translation across 30+ languages. Built end-to-end: iOS client, websockets, queue workers, infra.",
    tech: ["swift", "node", "postgres", "redis", "ws"],
  },
  {
    name: "EasilyTranslate",
    tag: "SDK · Cross-platform",
    desc: "A drop-in translation SDK shipping on iOS, Android and Web. Single API surface, careful versioning, XCFrameworks and AARs published from one source.",
    tech: ["xcframework", "kmp", "typescript"],
  },
  {
    name: "Slide News",
    tag: "iOS · AI Summaries",
    desc: "A news reader that distills stories into swipeable cards. AI summarization pipeline tuned for tone, brevity and source faithfulness.",
    tech: ["swiftui", "openai", "node"],
  },
];

const JOURNEY = [
  {
    year: "2017",
    title: "Android ROM Development",
    note: "First taste of systems: flashing, breaking, fixing.",
  },
  {
    year: "2018",
    title: "Kernel Development",
    note: "Custom kernels, device trees, low-level performance work.",
  },
  {
    year: "2020",
    title: "Open Source Contributions",
    note: "XDA, GitHub, contributing back to the communities I learned from.",
  },
  {
    year: "2021",
    title: "Android & Flutter Apps",
    note: "From the kernel up to the UI: shipping real apps.",
  },
  {
    year: "2023",
    title: "SwiftUI & Apple Platforms",
    note: "Deep dive into Apple's stack: iOS, iPadOS, design-led engineering.",
  },
  {
    year: "2024",
    title: "Founding Engineer",
    note: "Joined Inspire Dev Studio. Owning architecture end-to-end.",
  },
  {
    year: "Today",
    title: "AI-powered products & SDKs",
    note: "Shipping AI-native tools and the SDKs that power them.",
  },
];

/* ------------------------------- components ------------------------------ */

function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono text-[12px] tracking-tight ${className}`}>
      {children}
    </span>
  );
}

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <Mono className="text-[color:var(--ember)]">{index}</Mono>
      <div className="h-px flex-1 max-w-12 bg-border" />
      <Mono className="text-muted-foreground uppercase">{children}</Mono>
    </div>
  );
}

/* ---------------------------------- page --------------------------------- */

export default function Home() {
  const blogPosts = getBlogPosts();
  const visibleBlogPosts = blogPosts.slice(0, BLOG_PAGE_SIZE);
  const remainingBlogPosts = blogPosts.length - visibleBlogPosts.length;

  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[calc(100svh-4rem)] scroll-mt-16 overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
        <div
          className="absolute inset-x-0 -top-40 h-[480px] pointer-events-none"
          style={{ background: "var(--gradient-fade)" }}
        />
        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <Mono className="text-muted-foreground">
              <span className="text-[color:var(--ember)]">●</span> available ·
              founding engineer @ inspire dev studio
            </Mono>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Aman Kumar.
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Software Engineer building mobile products, SDKs and AI-powered
              tools. Currently Founding Engineer at{" "}
              <span className="text-foreground">Inspire Dev Studio</span>.
              Started with Android ROMs and open source, and eventually found my
              way into iOS, backend systems, SDKs and AI-native products.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-[13px] font-medium hover:opacity-90 transition"
              >
                Resume
                <span className="font-mono text-[11px] opacity-60">.pdf</span>
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] hover:border-foreground/30 hover:bg-surface transition"
              >
                GitHub ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-[13px] hover:border-[color:var(--ember)]/50 hover:text-[color:var(--ember)] transition"
              >
                Contact
              </a>
            </div>

            {/* stack */}
            <div className="mt-12 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2 py-1 bg-surface/40 hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* profile card */}
          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-surface/60 p-3 shadow-[var(--shadow-card)]">
              <div
                className="absolute -inset-px rounded-2xl pointer-events-none opacity-60"
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
                  src="/aman-portrait.jpg"
                  alt="Aman Kumar at his desk with a cat"
                  width={896}
                  height={1152}
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
                {/* meta strip */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[13px] font-medium">Aman Kumar</div>
                      <Mono className="text-muted-foreground">/amankumar</Mono>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ember)] shadow-[0_0_12px_var(--ember)]" />
                      <Mono className="text-muted-foreground">building</Mono>
                    </div>
                  </div>
                </div>
              </div>

              {/* card footer */}
              <div className="mt-3 flex items-center justify-between px-2 pb-1">
                <Mono className="text-muted-foreground">india · ist</Mono>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <CatGlyph className="h-3.5 w-3.5 text-[color:var(--ember)]" />
                  <Mono>+1 supervisor</Mono>
                </div>
              </div>
            </div>

            {/* peeking cat */}
            <div className="absolute -right-3 -top-3 hidden sm:flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 shadow-[var(--shadow-card)]">
              <CatGlyph className="h-4 w-4 text-[color:var(--ember)]" />
              <Mono className="text-muted-foreground">approved</Mono>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="01" title="About">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground max-w-2xl">
            <p>
              I&apos;ve been writing code since I was a teenager flashing custom
              ROMs onto Android phones at 2am. That curiosity, taking things
              apart to understand them, has shaped every chapter since.
            </p>
            <p>
              From <span className="text-foreground">AOSP</span> and custom
              kernels, I drifted into open source on{" "}
              <span className="text-foreground">XDA</span> and GitHub. That led
              to building real apps in Flutter, then a deep dive into{" "}
              <span className="text-foreground">SwiftUI</span> and Apple
              platforms.
            </p>
            <p>
              These days I design and ship full products: iOS apps, the SDKs
              that power them, backend systems with Postgres &amp; Redis, and
              AI-native workflows that make all of it move faster.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 content-start">
            {STATUS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-surface/60 p-4 hover:border-foreground/20 hover:bg-surface transition-colors"
              >
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 text-[13px] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-12">
            Journey
          </h3>
          <ol className="relative border-l border-border ml-3">
            {JOURNEY.map((j, index) => (
              <li key={j.year} className="relative pl-8 pb-5 last:pb-0 group">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-background border border-border group-hover:border-[color:var(--ember)] group-hover:shadow-[0_0_14px_var(--ember)] transition-all" />
                <div className="rounded-lg border border-border bg-surface/40 p-5 transition-colors hover:border-[color:var(--ember)]/35 hover:bg-surface/70">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <Mono className="text-[color:var(--ember)] w-16 shrink-0">
                        {j.year}
                      </Mono>
                      <h4 className="text-[17px] font-medium tracking-tight">
                        {j.title}
                      </h4>
                    </div>
                    <Mono className="text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </Mono>
                  </div>
                  <p className="mt-2 text-[14px] text-muted-foreground max-w-2xl">
                    {j.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Featured Work */}
      <Section id="work" label="02" title="Featured Work">
        <div className="grid md:grid-cols-2 gap-5">
          {WORK.map((w) => (
            <article
              key={w.name}
              className="group relative rounded-2xl border border-border bg-surface/60 overflow-hidden hover:border-[color:var(--ember)]/30 transition-colors"
            >
              <div className="relative h-44 overflow-hidden bg-surface-2">
                <div
                  className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, oklch(0.705 0.175 48 / 0.25), transparent 60%), linear-gradient(135deg, var(--surface-2), var(--surface))",
                  }}
                />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute left-5 bottom-4">
                  <div className="text-3xl font-semibold tracking-tight">
                    {w.name}
                  </div>
                  <Mono className="text-muted-foreground">{w.tag}</Mono>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10.5px] text-muted-foreground border border-border rounded px-1.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog" label="03" title="Blog">
        <ul className="divide-y divide-border border-y border-border">
          {visibleBlogPosts.map((post, i) => (
            <li key={post.url}>
              <a
                href={post.url}
                className="group flex items-start justify-between gap-6 py-5 transition-colors hover:text-[color:var(--ember)]"
              >
                <div className="flex min-w-0 gap-6">
                  <Mono className="w-10 shrink-0 text-[color:var(--ember)]">
                    {String(i + 1).padStart(2, "0")}
                  </Mono>
                  <div>
                    <h3 className="text-[15px] font-medium tracking-tight">
                      {post.data.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
                      {post.data.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <Mono className="text-muted-foreground">
                        {post.data.date}
                      </Mono>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <Mono className="text-muted-foreground">
                        {post.data.read}
                      </Mono>
                    </div>
                  </div>
                </div>
                <span className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        {remainingBlogPosts > 0 ? (
          <div className="mt-8 flex justify-center">
            <a
              href="/blog?page=2"
              className="group inline-flex items-center gap-3 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] transition-colors hover:border-[color:var(--ember)]/40 hover:text-[color:var(--ember)]"
            >
              Load more
              <Mono className="text-muted-foreground transition-colors group-hover:text-[color:var(--ember)]">
                {remainingBlogPosts} more
              </Mono>
              <span className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                →
              </span>
            </a>
          </div>
        ) : null}
      </Section>

      {/* Contact */}
      <Section id="contact" label="04" title="Contact" minScreen={false}>
        <div className="rounded-2xl border border-border bg-surface/60 p-8 lg:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{ background: "var(--gradient-fade)" }}
          />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">
                Let&apos;s build something.
              </h3>
              <p className="mt-3 text-[15px] text-muted-foreground max-w-md">
                Open to interesting product work, SDK collaborations, and
                conversations about the craft.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Email", value: "aman@example.com" },
                { label: "GitHub", value: "github.com/amankumar" },
                { label: "LinkedIn", value: "linkedin.com/in/amankumar" },
              ].map((c) => (
                <a
                  key={c.label}
                  href="#"
                  className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 hover:border-[color:var(--ember)]/40 transition-colors"
                >
                  <Mono className="text-muted-foreground">
                    {c.label.toLowerCase()}
                  </Mono>
                  <span className="text-[14px] group-hover:text-[color:var(--ember)] transition-colors">
                    {c.value} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Section({
  id,
  label,
  title,
  children,
  minScreen = true,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  minScreen?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 ${minScreen ? "min-h-[calc(100svh-4rem)]" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <SectionLabel index={label}>{title}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
