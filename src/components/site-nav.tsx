"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

function getHashId(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? null : href.slice(hashIndex + 1);
}

export function useActiveHref(items: NavItem[]) {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string | null>(null);

  const sectionItems = useMemo(
    () =>
      items
        .map((item) => ({ ...item, id: getHashId(item.href) }))
        .filter((item): item is NavItem & { id: string } => Boolean(item.id)),
    [items],
  );

  useEffect(() => {
    if (pathname.startsWith("/blog")) {
      setActiveHref("/#blog");
      return;
    }

    if (pathname !== "/") {
      setActiveHref(null);
      return;
    }

    let frame = 0;

    function updateActiveSection() {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const anchor = window.scrollY + window.innerHeight * 0.45;
        let nextActive: string | null = null;

        for (const item of sectionItems) {
          const section = document.getElementById(item.id);

          if (section && section.offsetTop <= anchor) {
            nextActive = item.href;
          }
        }

        const distanceToBottom =
          document.documentElement.scrollHeight -
          (window.scrollY + window.innerHeight);

        if (distanceToBottom < 80) {
          nextActive = sectionItems.at(-1)?.href ?? nextActive;
        }

        setActiveHref(nextActive);
      });
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, sectionItems]);

  return activeHref;
}

export function SiteNav({ items }: { items: NavItem[] }) {
  const activeHref = useActiveHref(items);

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative text-[13px] transition-colors after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-[color:var(--ember)] after:transition-opacity ${
              isActive
                ? "text-foreground after:opacity-100"
                : "text-muted-foreground after:opacity-0 hover:text-foreground"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
