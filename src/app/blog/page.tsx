import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPaginatedBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · Aman Kumar",
  description:
    "Engineering notes from Aman Kumar on iOS, SDKs, backend systems, and AI workflows.",
};

type BlogPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

function getPageParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value;

  if (!raw) {
    return 1;
  }

  const page = Number(raw);
  return Number.isInteger(page) && page > 0 ? page : null;
}

function getBlogPageHref(page: number) {
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const requestedPage = getPageParam(params?.page);

  if (!requestedPage) {
    notFound();
  }

  const { posts, totalPosts, totalPages, start, end } =
    getPaginatedBlogPosts(requestedPage);

  if (requestedPage > totalPages) {
    notFound();
  }

  const hasPrevious = requestedPage > 1;
  const hasNext = requestedPage < totalPages;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <Link
          href="/#blog"
          className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Home
        </Link>

        <div className="mt-12 text-center">
          <p className="font-mono text-[12px] uppercase tracking-tight text-[color:var(--ember)]">
            Blog
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
            Notes from the build.
          </h1>
          <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
            Focused engineering notes on mobile products, SDKs, backend systems,
            and AI-assisted workflows.
          </p>
          <p className="mt-4 font-mono text-[12px] text-muted-foreground">
            Showing {start}-{end} of {totalPosts}
          </p>
        </div>

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {posts.map((post, index) => (
            <li key={post.url}>
              <Link
                href={post.url}
                className="group flex items-start justify-between gap-6 py-6 transition-colors hover:text-[color:var(--ember)]"
              >
                <div className="flex min-w-0 gap-6">
                  <span className="w-10 shrink-0 font-mono text-[12px] tracking-tight text-[color:var(--ember)]">
                    {String(start + index).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-[12px] text-muted-foreground">
                        {post.data.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span className="font-mono text-[12px] text-muted-foreground">
                        {post.data.read}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-medium tracking-tight">
                      {post.data.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-6 text-muted-foreground">
                      {post.data.description}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <nav className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="order-1 flex flex-wrap items-center justify-center gap-2 sm:order-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const active = page === requestedPage;

              return (
                <Link
                  key={page}
                  href={getBlogPageHref(page)}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-9 w-9 items-center justify-center rounded-md border font-mono text-[12px] transition-colors ${
                    active
                      ? "border-[color:var(--ember)] bg-[color:var(--ember)] text-background"
                      : "border-border bg-surface/60 text-muted-foreground hover:border-[color:var(--ember)]/40 hover:text-[color:var(--ember)]"
                  }`}
                >
                  {page}
                </Link>
              );
            })}
          </div>

          <div className="order-2 grid grid-cols-2 gap-3 sm:contents">
            {hasPrevious ? (
              <Link
                href={getBlogPageHref(requestedPage - 1)}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] transition-colors hover:border-[color:var(--ember)]/40 hover:text-[color:var(--ember)] sm:order-1 sm:w-fit"
              >
                ← Previous
              </Link>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/30 px-4 py-2.5 text-[13px] text-muted-foreground opacity-50 sm:order-1 sm:w-fit">
                ← Previous
              </span>
            )}

            {hasNext ? (
              <Link
                href={getBlogPageHref(requestedPage + 1)}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] transition-colors hover:border-[color:var(--ember)]/40 hover:text-[color:var(--ember)] sm:order-3 sm:w-fit sm:justify-self-end"
              >
                Next →
              </Link>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/30 px-4 py-2.5 text-[13px] text-muted-foreground opacity-50 sm:order-3 sm:w-fit sm:justify-self-end">
                Next →
              </span>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
