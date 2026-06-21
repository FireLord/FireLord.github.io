"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

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
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-[13px] text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
