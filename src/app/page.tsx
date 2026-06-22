import { AboutSection } from "@/components/home/about-section";
import { BlogPreviewSection } from "@/components/home/blog-preview-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { WorkSection } from "@/components/home/work-section";
import { getBlogPosts } from "@/lib/blog";

export default function Home() {
  const blogPosts = getBlogPosts();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <BlogPreviewSection posts={blogPosts} />
      <ContactSection />
    </>
  );
}
