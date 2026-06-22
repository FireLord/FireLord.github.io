import type { getBlogPosts } from "@/lib/blog";

import { HOME_BLOG_PREVIEW_SIZE } from "@/components/home/home-data";
import { Mono } from "@/components/home/mono";
import { Section } from "@/components/home/section";

type BlogPost = ReturnType<typeof getBlogPosts>[number];

export function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
  const visiblePosts = posts.slice(0, HOME_BLOG_PREVIEW_SIZE);
  const remainingPosts = posts.length - visiblePosts.length;

  return (
    <Section id="blog" label="03" title="Blog">
      <ul className="divide-y divide-border border-y border-border">
        {visiblePosts.map((post, index) => (
          <li key={post.url}>
            <a
              href={post.url}
              className="group flex items-start justify-between gap-6 py-5 transition-colors hover:text-[color:var(--ember)]"
            >
              <div className="flex min-w-0 gap-6">
                <Mono className="w-10 shrink-0 text-[color:var(--ember)]">
                  {String(index + 1).padStart(2, "0")}
                </Mono>
                <div>
                  <h3 className="text-[15px] font-medium tracking-tight">
                    {post.data.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
                    {post.data.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <Mono className="text-muted-foreground">
                      {post.data.date}
                    </Mono>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <Mono className="text-muted-foreground">
                      {post.data.read}
                    </Mono>
                  </div>
                </div>
              </div>
              <span className="shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
      {remainingPosts > 0 ? (
        <div className="mt-8 flex justify-center">
          <a
            href="/blog"
            className="group inline-flex items-center gap-3 rounded-md border border-border bg-surface/60 px-4 py-2.5 text-[13px] transition-colors hover:border-[color:var(--ember)]/40 hover:text-[color:var(--ember)]"
          >
            Load more
            <Mono className="text-muted-foreground transition-colors group-hover:text-[color:var(--ember)]">
              {remainingPosts} more
            </Mono>
            <span className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[color:var(--ember)]">
              →
            </span>
          </a>
        </div>
      ) : null}
    </Section>
  );
}
