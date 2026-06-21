import { MobileNav } from "@/components/mobile-nav";
import { SiteNav } from "@/components/site-nav";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/#top" className="group flex items-baseline gap-2">
          <span className="text-[15px] font-semibold tracking-tight">
            Aman Kumar
          </span>
        </a>
        <SiteNav items={NAV} />
        <MobileNav items={NAV} />
      </div>
    </header>
  );
}
