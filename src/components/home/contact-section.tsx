import { CONTACT_LINKS } from "@/components/home/home-data";
import { Mono } from "@/components/home/mono";
import { Section } from "@/components/home/section";

export function ContactSection() {
  return (
    <Section id="contact" label="04" title="Contact" minScreen={false}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 lg:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-fade)" }}
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Let&apos;s build something.
            </h3>
            <p className="mt-3 max-w-md text-[15px] text-muted-foreground">
              Open to interesting product work, SDK collaborations, and
              conversations about the craft.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {CONTACT_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="group flex min-w-0 flex-col gap-1 rounded-lg border border-border bg-background/40 px-4 py-3 transition-colors hover:border-[color:var(--ember)]/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <Mono className="text-muted-foreground">
                  {item.label.toLowerCase()}
                </Mono>
                <span className="min-w-0 break-all text-[14px] transition-colors group-hover:text-[color:var(--ember)] sm:text-right">
                  {item.value} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
