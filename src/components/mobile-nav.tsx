"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { type NavItem, useActiveHref } from "@/components/site-nav";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const activeHref = useActiveHref(items);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface/60 text-foreground transition-colors hover:border-[color:var(--ember)]/40 hover:bg-surface"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {open ? (
        <nav
          id="mobile-navigation"
          className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border border-border bg-background/95 p-2 shadow-[var(--shadow-card)] backdrop-blur-xl"
        >
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] transition-colors hover:bg-surface hover:text-foreground ${
                  isActive
                    ? "bg-surface text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`size-1.5 rounded-full bg-[color:var(--ember)] transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
