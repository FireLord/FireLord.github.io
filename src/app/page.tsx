import type { ReactNode } from "react";

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

const RESUME_URL = "/AmanKumar-iOS-Resume.pdf";

const LINKS = {
  github: "https://github.com/FireLord",
  linkedin: "https://www.linkedin.com/in/amankumar035",
  email: "mailto:amankumarmicro@gmail.com",
};

const WORK = [
  {
    name: "CapCap",
    tag: "iOS · Caption Engine",
    desc: "A precision caption editor for short-form video. Custom CALayer rendering pipeline, frame-accurate timing, and a UI that gets out of the way.",
    tech: ["swift", "swiftui", "calayer", "avfoundation"],
    href: "https://capcap.in/",
  },
  {
    name: "HeapChat",
    tag: "Realtime · Multilingual",
    desc: "Real-time messaging with on-the-fly translation across 30+ languages. Built end-to-end: iOS client, websockets, queue workers, infra.",
    tech: ["swift", "node", "postgres", "redis", "ws"],
    href: "https://www.heap.chat/",
  },
  {
    name: "EasilyTranslate",
    tag: "SDK · Cross-platform",
    desc: "A drop-in translation SDK shipping on iOS, Android and Web. Single API surface, careful versioning, XCFrameworks and AARs published from one source.",
    tech: ["xcframework", "kmp", "typescript"],
    href: "https://apps.apple.com/in/app/easily-translate-strings/id6740238083",
  },
  {
    name: "Slide News",
    tag: "iOS · AI Summaries",
    desc: "A news reader that distills stories into swipeable cards. AI summarization pipeline tuned for tone, brevity and source faithfulness.",
    tech: ["swiftui", "openai", "node"],
    href: "https://github.com/firelord/slidenews",
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "amankumarmicro@gmail.com",
    href: LINKS.email,
  },
  {
    label: "GitHub",
    value: "github.com/FireLord",
    href: LINKS.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amankumar035",
    href: LINKS.linkedin,
    external: true,
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
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl items-center justify-center px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <Mono className="text-muted-foreground">
              <span className="text-[color:var(--ember)]">●</span> available ·
              founding engineer @ inspire dev studio
            </Mono>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Aman Kumar.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Software Engineer building mobile products, SDKs and AI-powered
              tools. Currently Founding Engineer at{" "}
              <span className="text-foreground">Inspire Dev Studio</span>.
              Started with Android ROMs and open source, and eventually found my
              way into iOS, backend systems, SDKs and AI-native products.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-[13px] font-medium hover:opacity-90 transition"
              >
                Resume
                <span className="font-mono text-[11px] opacity-60">.pdf</span>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
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
            <div className="mt-12 flex flex-wrap justify-center gap-2">
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
        </div>
      </section>

      {/* About */}
      <Section id="about" label="01" title="About" centerContent>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-16">
          <div className="max-w-2xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
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
          <div className="grid w-full max-w-sm grid-cols-2 gap-3 justify-self-start lg:justify-self-end">
            {STATUS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-surface/60 p-4 transition-colors hover:border-foreground/20 hover:bg-surface"
              >
                <div className="text-2xl">{s.icon}</div>
                <div className="mt-3 text-[13px] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Work */}
      <Section id="work" label="02" title="Featured Work">
        <div className="grid md:grid-cols-2 gap-5">
          {WORK.map((w) => (
            <a
              key={w.name}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-[color:var(--ember)]/30"
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
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">
                      {w.name}
                    </div>
                    <Mono className="text-muted-foreground">{w.tag}</Mono>
                  </div>
                  <span className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                    ↗
                  </span>
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
            </a>
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
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
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
  centerContent = false,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  minScreen?: boolean;
  centerContent?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-16 ${minScreen ? "min-h-[calc(100svh-4rem)]" : ""}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 py-16 lg:py-20 ${
          centerContent && minScreen
            ? "flex min-h-[calc(100svh-4rem)] flex-col justify-center"
            : ""
        }`}
      >
        <SectionLabel index={label}>{title}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
