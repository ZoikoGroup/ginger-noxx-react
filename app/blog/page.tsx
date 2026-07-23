import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/app/blog/components/BlogHero";
import BlogNavigation from "@/app/blog/components/BlogNavigation";
import FeaturedPost from "@/app/blog/components/FeaturedPost";
import PostGrid from "@/app/blog/components/PostGrid";
import BlogNewsletter from "@/app/blog/components/BlogNewsletter";

export default function Blog() {
  return (
    <div className="w-full min-h-screen bg-[#FAF3EA] flex flex-col">
      <Header />
      <main className="w-full flex-1">
        <BlogHero />
        <BlogNavigation />
        <FeaturedPost />
        <PostGrid />
        <BlogNewsletter />
      </main>
      <Footer />
    </div>
  );
}
