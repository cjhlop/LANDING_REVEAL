import React, { Suspense, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { Footer } from "@/components/footer";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { cn } from "@/lib/utils";
import { ChevronRight, Mail, Zap, Linkedin, Twitter, Share2, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample post data (in real app, this would come from CMS/API)
const SAMPLE_POST = {
  id: "1",
  slug: "linkedin-ads-optimization-guide",
  title: "The Complete Guide to LinkedIn Ads Optimization in 2025",
  standfirst: "Learn how to reduce wasted ad spend by 40% with smart scheduling, frequency controls, and audience targeting strategies that actually work.",
  coverImage: "/media/feature-share-smart.png",
  tags: ["LinkedIn Ads", "Optimization", "Best Practices"],
  category: "Guides",
  author: {
    name: "Sarah Chen",
    role: "VP of Marketing",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
    bio: "Sarah leads marketing strategy at DemandSense, specializing in B2B demand generation and LinkedIn advertising optimization.",
    profileUrl: "/blog/author/sarah-chen"
  },
  publishDate: "2025-01-15",
  readTime: 8,
  body: `
## Why LinkedIn Ads Waste Your Budget

Most B2B companies are burning thousands of dollars on LinkedIn ads that run 24/7, even when their target audience is offline. Unlike Google Ads or Meta, LinkedIn doesn't offer native scheduling controls, forcing your campaigns to run continuously regardless of when your prospects are actually active.

This creates three major problems:

- **Nighttime waste**: Your ads show at 3 AM when decision-makers are asleep
- **Weekend drain**: B2B buyers don't browse LinkedIn on Saturdays, yet your budget keeps spending
- **Timezone misalignment**: Targeting Europe from the US? Your ads run at midnight in their timezone

### The Real Cost of Always-On Campaigns

Our data shows that the average B2B company wastes 35-40% of their LinkedIn ad budget on low-engagement hours. For a company spending $10,000/month, that's $4,000 going down the drain.

## Smart Scheduling: The Solution

DemandSense gives you the scheduling control LinkedIn should have built. Set precise days, times, and timezones for every campaign.

### Key Features

1. **Day and time targeting**: Choose specific hours and days of the week
2. **Timezone support**: Target audiences in their local time, not yours
3. **Bulk operations**: Apply schedules to hundreds of campaigns at once
4. **Automatic management**: We pause and resume campaigns based on your schedule

> "Just wanted to say that I've been using DemandSense for almost a full week, and the early returns are pretty awesome. CPMs are down between 30-40%." — James Korte, Director of Marketing

## How to Set Up Smart Scheduling

Setting up smart scheduling takes less than 5 minutes:

### Step 1: Connect Your LinkedIn Account

One-click integration syncs all your campaigns automatically. No manual CSV uploads or API configuration needed.

### Step 2: Choose Your Schedule

Select the days and times when your audience is most active. Our AI can suggest optimal schedules based on your industry and target audience.

### Step 3: Apply and Monitor

Apply your schedule to one campaign or bulk-select hundreds. Monitor performance from your dashboard and adjust as needed.

## Advanced Strategies

Once you've mastered basic scheduling, try these advanced tactics:

### Weekend Pause Strategy

Completely pause B2B campaigns on weekends when engagement drops 70%. Redirect that budget to weekday hours for better ROI.

### Timezone Optimization

If you're targeting multiple regions, create separate campaigns for each timezone. This ensures your ads show during business hours in London, New York, and Singapore simultaneously.

### Event-Based Scheduling

Increase ad spend during industry events, conferences, or product launches. Reduce spend during holiday periods when decision-makers are out of office.

## Measuring Success

Track these metrics to measure the impact of smart scheduling:

- **CPM reduction**: Expect 25-40% lower costs per thousand impressions
- **CTR improvement**: Click-through rates typically increase 15-30%
- **Conversion rate**: Better timing leads to higher-quality clicks and conversions
- **Budget efficiency**: More results with the same or lower spend

## Common Mistakes to Avoid

Don't make these scheduling errors:

1. **Over-optimization**: Don't narrow your schedule too much. Test and iterate.
2. **Ignoring data**: Use LinkedIn's analytics to find your best-performing hours.
3. **Set and forget**: Review and adjust schedules monthly based on performance.

## Conclusion

Smart scheduling is the easiest way to improve LinkedIn ad performance without changing your creative, targeting, or budget. By running ads only when your audience is active, you'll reduce waste and improve results across every metric that matters.

Ready to stop wasting ad budget? Start your free trial of DemandSense today.
  `,
  relatedPosts: [
    {
      id: "2",
      slug: "ad-frequency-management",
      title: "Preventing Ad Fatigue: A Guide to Frequency Management",
      coverImage: "/media/ads-scheduling.webp",
      readTime: 7
    },
    {
      id: "3",
      slug: "b2b-attribution-best-practices",
      title: "Multi-Touch Attribution: Best Practices for B2B Teams",
      coverImage: "/media/audience-tuning.webp",
      readTime: 6
    },
    {
      id: "4",
      slug: "audience-segmentation-strategies",
      title: "Advanced Audience Segmentation for B2B Marketers",
      coverImage: "/media/card4.png",
      readTime: 6
    }
  ]
};

const BlogPost = () => {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const [heroRef, heroInView] = useInViewOnce<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
  });

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const post = SAMPLE_POST; // In real app, fetch by slug

  // Extract headings for TOC
  const headings = [
    { id: "why-linkedin-ads-waste", title: "Why LinkedIn Ads Waste Your Budget" },
    { id: "smart-scheduling", title: "Smart Scheduling: The Solution" },
    { id: "how-to-setup", title: "How to Set Up Smart Scheduling" },
    { id: "advanced-strategies", title: "Advanced Strategies" },
    { id: "measuring-success", title: "Measuring Success" },
    { id: "common-mistakes", title: "Common Mistakes to Avoid" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Progress Bar */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-100 linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-white px-8 md:px-[112px] pt-32 pb-16">
          <div ref={heroRef} className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-blue-600">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900">{post.category}</span>
            </nav>

            {/* Title */}
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6 transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
            >
              {post.title}
            </h1>

            {/* Standfirst */}
            <p
              className={cn(
                "text-xl text-gray-600 leading-relaxed mb-8 transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: heroInView ? "150ms" : "0ms" }}
            >
              {post.standfirst}
            </p>

            {/* Meta */}
            <div
              className={cn(
                "flex items-center justify-center gap-4 mb-6 transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                  <div className="text-xs text-gray-600">{post.author.role}</div>
                </div>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishDate)}
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </div>
            </div>

            {/* Tags */}
            <div
              className={cn(
                "flex gap-2 justify-center mb-12 transition-opacity duration-700",
                heroInView ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: heroInView ? "450ms" : "0ms" }}
            >
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div
                className={cn(
                  "rounded-2xl shadow-lg overflow-hidden transition-opacity duration-700",
                  heroInView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: heroInView ? "600ms" : "0ms" }}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Body + TOC */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
            {/* TOC Sidebar (Desktop) */}
            <aside className="col-span-3 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {headings.map(heading => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={cn(
                        "block text-sm transition-colors duration-200 py-1",
                        activeSection === heading.id
                          ? "text-blue-600 font-medium border-l-2 border-blue-600 pl-3"
                          : "text-gray-600 hover:text-blue-600 pl-3"
                      )}
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <article className="col-span-12 lg:col-span-9 prose prose-lg max-w-3xl">
              <div className="text-base leading-relaxed text-gray-700 space-y-6">
                {/* Render markdown-like content */}
                {post.body.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-semibold tracking-tight text-gray-900 mt-12 mb-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-semibold tracking-tight text-gray-900 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-blue-600 pl-6 italic text-lg text-gray-700 my-8">
                        {paragraph.replace('> ', '')}
                      </blockquote>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 text-gray-700">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\. /)) {
                    const items = paragraph.split('\n').filter(line => line.match(/^\d+\. /));
                    return (
                      <ol key={index} className="list-decimal pl-6 space-y-2 text-gray-700">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p key={index} className="mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Inline CTA */}
              <div className="my-12 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                      See DemandSense in action
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Book a personalized demo and discover how we can transform your B2B marketing.
                    </p>
                    <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      Schedule demo
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Share Icons (Floating) */}
        <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
          <div className="flex flex-col gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 flex items-center justify-center transition-colors duration-200">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gray-50 border border-gray-200 p-8">
            <div className="flex items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full ring-2 ring-white shadow-sm flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{post.author.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">{post.author.bio}</p>
                <Link
                  to={post.author.profileUrl}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all articles by {post.author.name} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="w-full bg-white px-8 md:px-[112px] py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedPosts.map(related => (
                <Link
                  key={related.id}
                  to={`/blog/${related.slug}`}
                  className="group block rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600">{related.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Prev/Next Navigation */}
        <section className="w-full bg-white px-8 md:px-[112px] py-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto flex justify-between gap-8">
            <Link to="/blog/previous-post" className="group flex-1 text-left">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Previous</p>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-200">
                Previous Article Title Goes Here
              </h4>
            </Link>
            <Link to="/blog/next-post" className="group flex-1 text-right">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Next</p>
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2 transition-colors duration-200">
                Next Article Title Goes Here
              </h4>
            </Link>
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
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 h-11 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default BlogPost;