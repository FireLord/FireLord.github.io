import { STATUS } from "@/components/home/home-data";
import { Section } from "@/components/home/section";

export function AboutSection() {
  return (
    <Section id="about" label="01" title="About" centerContent>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-16">
        <div className="max-w-2xl space-y-6 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            I&apos;ve been writing code since I was a teenager flashing custom
            ROMs onto Android phones at 2am. That curiosity, taking things apart
            to understand them, has shaped every chapter since.
          </p>
          <p>
            From <span className="text-foreground">AOSP</span> and custom
            kernels, I drifted into open source on{" "}
            <span className="text-foreground">XDA</span> and GitHub. That led to
            building real apps in Flutter, then a deep dive into{" "}
            <span className="text-foreground">SwiftUI</span> and Apple
            platforms.
          </p>
          <p>
            These days I design and ship full products: iOS apps, the SDKs that
            power them, backend systems with Postgres &amp; Redis, and AI-native
            workflows that make all of it move faster.
          </p>
        </div>
        <div className="grid w-full max-w-2xl grid-cols-2 gap-3 justify-self-stretch max-[340px]:grid-cols-1 lg:max-w-sm lg:justify-self-end">
          {STATUS.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-xl border border-border bg-surface/60 p-4 transition-colors hover:border-foreground/20 hover:bg-surface"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="mt-3 min-w-0 text-[13px] leading-snug font-medium break-words">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
