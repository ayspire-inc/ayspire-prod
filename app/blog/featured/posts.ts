// Featured blog posts for homepage display
export interface FeaturedBlogPost {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const featuredBlogPosts: FeaturedBlogPost[] = [
  {
    title: "AI in the Modern Enterprise",
    description:
      "How artificial intelligence is transforming business operations, decision-making and customer engagement.",
    href: "/blog/ai-in-enterprise",
    image: "/images/blogs/1.jpg",
  },
  {
    title: "Building a Data-Driven Culture",
    description:
      "Unlocking business value by fostering a culture that embraces data, analytics and evidence-based decision making.",
    href: "/blog/data-driven-culture",
    image: "/images/blogs/2.jpg",
  },
  {
    title: "Design Thinking for Business Transformation",
    description:
      "Driving innovation and growth by solving complex problems through collaboration and user-centered design.",
    href: "/blog/better-decision-with-analytics",
    image: "/images/blogs/3.jpg",
  },
];
