import { WORK } from "@/components/home/home-data";
import { Mono } from "@/components/home/mono";
import { Section } from "@/components/home/section";

export function WorkSection() {
  return (
    <Section id="work" label="02" title="Featured Work">
      <div className="grid gap-5 md:grid-cols-2">
        {WORK.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-[color:var(--ember)]/30"
          >
            <div className="relative h-44 overflow-hidden bg-surface-2">
              <div
                className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, oklch(0.705 0.175 48 / 0.25), transparent 60%), linear-gradient(135deg, var(--surface-2), var(--surface))",
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute right-5 bottom-4 left-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-3xl font-semibold tracking-tight">
                    {item.name}
                  </div>
                  <Mono className="text-muted-foreground">{item.tag}</Mono>
                </div>
                <span className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                  ↗
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
