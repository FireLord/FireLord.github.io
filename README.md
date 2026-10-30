# firelord-portfolio

Personal site and blog of Aman Kumar, an iOS-focused software engineer.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and Fumadocs MDX. Uses [Bun](https://bun.sh) as the package manager and runtime for scripts.

## Getting started

Requires Bun 1.3 or newer.

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Scripts

| Command          | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `bun run dev`    | Start the dev server                           |
| `bun run build`  | Production build (also generates blog sources) |
| `bun run start`  | Serve the production build                     |
| `bun run lint`   | Run ESLint                                     |
| `bun run format` | Format everything with Prettier                |

## Project structure

```
src/app/              routes (home, blog list, blog post, 404)
src/components/home/  home page sections and their content (home-data.ts)
src/components/ui/    shadcn/ui primitives
src/lib/blog.ts       blog loader and pagination
content/blog/         MDX blog posts
public/               static assets and the resume PDF
```

## Common edits

- **Projects, links, stack:** `src/components/home/home-data.ts`
- **Resume:** replace `public/aman_kumar_resume.pdf` (keep the filename)
- **New blog post:** add an `.mdx` file in `content/blog/` with `title`, `description`, `date` and `read` frontmatter
- **Theme colors:** CSS variables at the top of `src/app/globals.css`

## Deployment

Deployed on Vercel. Analytics and Speed Insights are enabled in `src/app/layout.tsx`.

## Working with AI agents

`AGENTS.md` holds the repo rules for coding agents (Claude Code, Codex, Cursor and others). `CLAUDE.md` imports it.
