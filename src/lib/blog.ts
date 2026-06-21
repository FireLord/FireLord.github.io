import { loader } from "fumadocs-core/source";
import { blog } from "collections/server";

export const blogSource = loader({
  baseUrl: "/blog",
  source: blog.toFumadocsSource(),
});

export const BLOG_PAGE_SIZE = 5;

export function getBlogPosts() {
  return blogSource
    .getPages()
    .sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function getPaginatedBlogPosts(page: number, pageSize = BLOG_PAGE_SIZE) {
  const posts = getBlogPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    posts: posts.slice(start, end),
    totalPosts: posts.length,
    totalPages,
    pageSize,
    start: posts.length === 0 ? 0 : start + 1,
    end: Math.min(end, posts.length),
  };
}
