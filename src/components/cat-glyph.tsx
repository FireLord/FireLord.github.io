export function CatGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M8 6l8 10c4-2 8-3 12-3s8 1 12 3l8-10v22c0 8-6 14-14 14h-12c-8 0-14-6-14-14V6zm14 18a2 2 0 100-4 2 2 0 000 4zm20 0a2 2 0 100-4 2 2 0 000 4zm-10 6c-2 0-3 1-3 2s1 2 3 2 3-1 3-2-1-2-3-2z"
      />
    </svg>
  );
}
