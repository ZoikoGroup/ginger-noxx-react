import Header from "@/components/Header";
import BlogHero from "@/components/blog/BlogHero";
import BlogNavigation from "@/components/blog/BlogNavigation";
import FeaturedPost from "@/components/blog/FeaturedPost";
import PostGrid from "@/components/blog/PostGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export default function Blog() {
  return (
    <div className="w-full flex justify-center bg-orange-50 overflow-hidden">
      <div style={{ width: '1440px', height: '2350px' }} className="relative bg-orange-50">
        <Header />
        <BlogHero />
        <BlogNavigation />
        <FeaturedPost />
        <PostGrid />
        <BlogNewsletter />
      </div>
    </div>
  );
}

