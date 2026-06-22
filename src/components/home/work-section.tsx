"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { WORK } from "@/components/home/home-data";
import { Mono } from "@/components/home/mono";
import { Section } from "@/components/home/section";

function WorkCard({ item }: { item: (typeof WORK)[number] }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-[246px] snap-start flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-[color:var(--ember)]/30"
    >
      <div className="relative h-24 shrink-0 overflow-hidden bg-surface-2 md:h-28">
        <div
          className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, oklch(0.705 0.175 48 / 0.25), transparent 60%), linear-gradient(135deg, var(--surface-2), var(--surface))",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2 sm:right-4 sm:bottom-4 sm:left-4 md:right-5 md:left-5">
          <div className="min-w-0">
            <div className="break-words text-lg leading-none font-semibold tracking-tight sm:text-2xl md:text-3xl">
              {item.name}
            </div>
            <Mono className="mt-1 block truncate text-muted-foreground">
              {item.tag}
            </Mono>
          </div>
          <span className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
            ↗
          </span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-3 md:p-4">
        <p
          className="overflow-hidden text-[13px] leading-snug text-ellipsis text-muted-foreground md:text-[13.5px]"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {item.desc}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground md:text-[10.5px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function WorkSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    setCanScrollLeft(scroller.scrollLeft > 2);
    setCanScrollRight(
      scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2,
    );
  }, []);

  const scrollByPage = useCallback((direction: "left" | "right") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const grid = scroller.firstElementChild;
    const gap =
      grid instanceof HTMLElement
        ? Number.parseFloat(getComputedStyle(grid).columnGap) || 0
        : 0;
    const pageWidth = scroller.clientWidth + gap;

    scroller.scrollBy({
      left: direction === "left" ? -pageWidth : pageWidth,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return (
    <Section
      id="work"
      label="02"
      title="Featured Work"
      centerContent
      action={
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Scroll projects left"
            disabled={!canScrollLeft}
            onClick={() => scrollByPage("left")}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-[color:var(--ember)]/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll projects right"
            disabled={!canScrollRight}
            onClick={() => scrollByPage("right")}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-[color:var(--ember)]/40 hover:text-foreground disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      }
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2"
      >
        <div className="grid auto-cols-[100%] grid-flow-col grid-rows-2 gap-3 md:auto-cols-[calc((100%_-_1.25rem)_/_2)] md:gap-5">
          {WORK.map((item) => (
            <WorkCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
