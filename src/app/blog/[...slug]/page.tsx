import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getMDXComponents } from "@/components/mdx";
import { blogSource } from "@/lib/blog";

type BlogPostProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogSource.getPage(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.data.title} · Aman Kumar`,
    description: post.data.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogSource.getPage(slug);

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <Link
          href="/blog"
          className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Blog
        </Link>

        <header className="mt-12 border-b border-border pb-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-mono text-[12px] text-[color:var(--ember)]">
              {post.data.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="font-mono text-[12px] text-muted-foreground">
              {post.data.read}
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            {post.data.title}
          </h1>
          <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
            {post.data.description}
          </p>
        </header>

        <div className="py-10">
          <MDX components={getMDXComponents()} />
        </div>
      </article>
    </main>
  );
}
