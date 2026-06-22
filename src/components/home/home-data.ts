export const STACK = [
  "SwiftUI",
  "UIKit",
  "Node.js",
  "PostgreSQL",
  "AI-Assisted Development",
];

export const HOME_BLOG_PREVIEW_SIZE = 3;

export const STATUS = [
  { icon: "📱", label: "Apple Platforms" },
  { icon: "⚡", label: "SDK Development" },
  { icon: "🤖", label: "AI Native Workflow" },
  { icon: "🌍", label: "Full Stack Product" },
];

export const RESUME_URL = "/AmanKumar-iOS-Resume.pdf";

export const LINKS = {
  github: "https://github.com/FireLord",
  linkedin: "https://www.linkedin.com/in/amankumar035",
  email: "mailto:amankumarmicro@gmail.com",
  inspire: "https://www.inspiredevstudio.com/",
};

export const WORK = [
  {
    name: "CapCap",
    tag: "iOS · Caption Engine",
    desc: "A precision caption editor for short-form video. Custom CALayer rendering pipeline, frame-accurate timing, and a UI that gets out of the way.",
    tech: ["swift", "swiftui", "calayer", "avfoundation"],
    href: "https://capcap.in/",
  },
  {
    name: "HeapChat",
    tag: "Realtime · Multilingual",
    desc: "Real-time messaging with on-the-fly translation across 30+ languages. Built end-to-end: iOS client, websockets, queue workers, infra.",
    tech: ["swift", "node", "postgres", "redis", "ws"],
    href: "https://www.heap.chat/",
  },
  {
    name: "EasilyTranslate",
    tag: "SDK · Cross-platform",
    desc: "A drop-in translation SDK shipping on iOS, Android and Web. Single API surface, careful versioning, XCFrameworks and AARs published from one source.",
    tech: ["xcframework", "kmp", "typescript"],
    href: "https://apps.apple.com/in/app/easily-translate-strings/id6740238083",
  },
  {
    name: "Slide News",
    tag: "iOS · AI Summaries",
    desc: "A news reader that distills stories into swipeable cards. AI summarization pipeline tuned for tone, brevity and source faithfulness.",
    tech: ["swiftui", "openai", "node"],
    href: "https://github.com/firelord/slidenews",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "amankumarmicro@gmail.com",
    href: LINKS.email,
  },
  {
    label: "GitHub",
    value: "github.com/FireLord",
    href: LINKS.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amankumar035",
    href: LINKS.linkedin,
    external: true,
  },
];
