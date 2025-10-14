import React, { Suspense, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { Zap, Search, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

// Sample blog posts data
const SAMPLE_POSTS = [
  {
    id: "1",
    slug: "linkedin-ads-optimization-guide",
    title: "The Complete Guide to LinkedIn Ads Optimization in 2025",
    excerpt: "Learn how to reduce wasted ad spend by 40% with smart scheduling, frequency controls, and audience targeting strategies.",
    coverImage: "/media/feature-share-smart.png",
    tags: ["LinkedIn Ads", "Optimization"],
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
      role: "VP of Marketing"
    },
    publishDate: "2025-01-15",
    readTime: 8,
    featured: true,
    isNew: true
  },
  {
    id: "2",
    slug: "b2b-attribution-best-practices",
    title: "Multi-Touch Attribution: Best Practices for B2B Teams",
    excerpt: "Discover how to track the full customer journey and measure true marketing ROI across all channels.",
    coverImage: "/media/audience-tuning.webp",
    tags: ["Attribution", "Analytics"],
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80",
      role: "Director of Demand Generation"
    },
    publishDate: "2025-01-12",
    readTime: 6,
    featured: false,
    isNew: true
  },
  {
    id: "3",
    slug: "website-visitor-identification",
    title: "How to Identify Anonymous Website Visitors",
    excerpt: "Turn anonymous traffic into actionable leads with visitor identification and intent data.",
    coverImage: "/media/frequency-cap.png",
    tags: ["Visitor Tracking", "Lead Gen"],
    author: {
      name: "Jennifer Park",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
      role: "Chief Revenue Officer"
    },
    publishDate: "2025-01-10",
    readTime: 5,
    featured: false,
    isNew: false
  },
  {
    id: "4",
    slug: "ad-frequency-management",
    title: "Preventing Ad Fatigue: A Guide to Frequency Management",
    excerpt: "Stop wasting budget on overexposed audiences. Learn how to set optimal frequency caps.",
    coverImage: "/media/ads-scheduling.webp",
    tags: ["LinkedIn Ads", "Best Practices"],
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
      role: "VP of Marketing"
    },
    publishDate: "2025-01-08",
    readTime: 7,
    featured: false,
    isNew: false
  },
  {
    id: "5",
    slug: "b2b-marketing-metrics",
    title: "The Only B2B Marketing Metrics That Actually Matter",
    excerpt: "Cut through the noise and focus on metrics that drive revenue, not vanity numbers.",
    coverImage: "/media/card3.png",
    tags: ["Analytics", "Strategy"],
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80",
      role: "Director of Demand Generation"
    },
    publishDate: "2025-01-05",
    readTime: 9,
    featured: false,
    isNew: false
  },
  {
    id: "6",
    slug: "audience-segmentation-strategies",
    title: "Advanced Audience Segmentation for B2B Marketers",
    excerpt: "Build high-performing audience segments based on firmographic data and behavioral signals.",
    coverImage: "/media/card4.png",
    tags: ["Audience Intelligence", "Strategy"],
    author: {
      name: "Jennifer Park",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
      role: "Chief Revenue Officer"
    },
    publishDate: "2025-01-03",
    readTime: 6,
    featured: false,
    isNew: false
  }
];

const ALL_TAGS = ["LinkedIn Ads", "Attribution", "Analytics", "Visitor Tracking", "Lead Gen", "Best Practices", "Audience Intelligence", "Strategy", "Optimization"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");

  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  const featuredPost = SAMPLE_POSTS.find(post => post.featured);
  const regularPosts = SAMPLE_POSTS.filter(post => !post.featured);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let filtered = regularPosts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Tag filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => selectedTags.includes(tag))
      );
    }

    // Sort
    if (sortBy === "latest") {
      filtered = [...filtered].sort((a, b) => 
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
    }

    return filtered;
  }, [regularPosts, searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-16">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-blue-100">
              <Zap className="h-4 w-4" />
              Blog
            </div>

            <h1
              className={cn(
                "text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Insights
              </span>{" "}
              & Resources
            </h1>

            <p
              className={cn(
                "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
            >
              Expert strategies, case studies, and best practices for B2B marketing teams.
            </p>

            {/* Top category pills */}
            <div
              className={cn(
                "flex items-center justify-center gap-2 mt-8 flex-wrap transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: heroInView ? "400ms" : "0ms" }}
            >
              {["LinkedIn Ads", "Attribution", "Analytics"].map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200",
                    selectedTags.includes(tag)
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="w-full bg-white px-8 md:px-[112px] pb-16">
            <div className="max-w-5xl mx-auto">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group block rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative overflow-hidden aspect-video lg:aspect-auto">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center bg-gray-900 text-white px-2.5 py-1 rounded-full text-xs font-semibold mb-4">
                        Featured
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                        {featuredPost.title}
                      </h2>

                      <p className="text-lg text-gray-600 leading-relaxed line-clamp-2">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            {featuredPost.author.name}
                          </span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">
                          {formatDate(featuredPost.publishDate)}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">
                          {featuredPost.readTime} min read
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mb-6">
                        {featuredPost.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        Read article
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Filter Bar */}
        <section className="sticky top-20 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 md:px-[112px] py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 pl-10 rounded-lg border-gray-200"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSortBy("latest")}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  sortBy === "latest"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                Latest
              </button>
              <button
                onClick={() => setSortBy("popular")}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  sortBy === "popular"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                Popular
              </button>
            </div>
          </div>

          {/* Active filters */}
          {selectedTags.length > 0 && (
            <div className="max-w-7xl mx-auto mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Filters:</span>
              {selectedTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                >
                  {tag}
                  <span className="text-blue-500">×</span>
                </button>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline ml-2"
              >
                Clear all
              </button>
            </div>
          )}
        </section>

        {/* Posts Grid */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
                  >
                    {/* Cover Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.isNew && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          NEW
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex gap-2 mb-3">
                        {post.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{post.author.name}</span>
                        <span>•</span>
                        <span>{formatDate(post.publishDate)}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-24">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms.
                </p>
                <Button
                  onClick={clearFilters}
                  className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16">
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
                Stay ahead of the curve
              </h2>
              <p className="text-gray-600 mb-6">
                Get expert insights and strategies delivered to your inbox weekly.
              </p>
              <div className="flex gap-3 w-full max-w-md">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 h-11 rounded-lg border-gray-200"
                />
                <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Footer Blurb */}
        <section className="w-full bg-white px-8 md:px-[112px] py-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Our blog covers the latest in B2B marketing, from LinkedIn advertising strategies to revenue attribution best practices. Whether you're a demand gen leader or a marketing ops professional, you'll find actionable insights to drive measurable growth.
            </p>
          </div>
        </section>
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Blog;