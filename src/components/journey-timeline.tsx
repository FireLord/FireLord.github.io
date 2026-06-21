"use client";

import { useEffect, useRef, useState } from "react";

type JourneyItem = {
  year: string;
  title: string;
  note: string;
};

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function JourneyTimeline({ items }: { items: JourneyItem[] }) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      const element = timelineRef.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.58;
      const current = viewportAnchor - rect.top;

      setProgress(clamp(current / rect.height));
    }

    function onScroll() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={timelineRef} className="relative ml-3">
      <span
        aria-hidden
        className="absolute left-px top-1 bottom-1 w-px bg-border"
      />
      <span
        aria-hidden
        className="absolute left-px top-1 w-px bg-[color:var(--ember)]/60 transition-[height] duration-150 ease-out"
        style={{ height: `calc((100% - 0.5rem) * ${progress})` }}
      />

      {items.map((item, index) => {
        const threshold =
          items.length === 1 ? 0 : index / Math.max(1, items.length - 1);
        const active = progress >= threshold;

        return (
          <li key={item.year} className="group relative pb-5 pl-8 last:pb-0">
            <span
              className={`absolute -left-1 top-1 h-3 w-3 rounded-full border transition-all duration-300 ${
                active
                  ? "border-[color:var(--ember)]/70 bg-surface shadow-[inset_0_0_0_3px_oklch(0.705_0.175_48_/_0.45)]"
                  : "border-border bg-background group-hover:border-[color:var(--ember)]"
              }`}
            />
            <div
              className={`rounded-lg border bg-surface/40 p-5 transition-colors hover:bg-surface/70 ${
                active
                  ? "border-[color:var(--ember)]/35"
                  : "border-border hover:border-[color:var(--ember)]/35"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex flex-wrap items-baseline gap-4">
                  <span className="w-16 shrink-0 font-mono text-[12px] tracking-tight text-[color:var(--ember)]">
                    {item.year}
                  </span>
                  <h4 className="text-[17px] font-medium tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <span className="font-mono text-[12px] tracking-tight text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-[14px] text-muted-foreground">
                {item.note}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
