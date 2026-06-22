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
  {
    name: "Soundscape",
    tag: "Wellness · Music",
    desc: "A sleep and meditation app with soothing playback, podcasts and guided wellness flows. Built the iOS app from scratch in SwiftUI.",
    tech: ["swiftui", "mvvm", "media"],
    href: "https://apps.apple.com/in/app/soundscape-sleep-meditate/id6480345644",
  },
  {
    name: "Trakeat",
    tag: "Health · Android",
    desc: "Health tracking app for water logging, exercise and calories. Built with Compose, Firebase, Room, Koin and Retrofit.",
    tech: ["compose", "firebase", "room"],
    href: "https://play.google.com/store/apps/details?id=com.health.trakeat",
  },
  {
    name: "JotDown",
    tag: "KMP · Notes",
    desc: "Cross-platform notes app with Android in Jetpack Compose, iOS in SwiftUI and shared persistence through SQLDelight.",
    tech: ["kmp", "swiftui", "sqldelight"],
    href: "https://github.com/FireLord/JotDown",
  },
  {
    name: "Exyte Chat",
    tag: "OSS · SwiftUI",
    desc: "Contributed Kingfisher-backed image caching and stability improvements to Exyte's SwiftUI chat library.",
    tech: ["swiftui", "oss", "kingfisher"],
    href: "https://github.com/exyte/Chat/pull/215",
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
