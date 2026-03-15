export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: "AI" | "Tech Trends" | "Case Study";
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How AI Automations are Redefining Modern Workflows",
    slug: "ai-automations-modern-workflows",
    date: "March 12, 2026",
    category: "AI",
    excerpt: "Discover how intelligent agents and neural triggers are eliminating repetitive tasks and boosting enterprise efficiency by 40%.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    author: "Quantifyre Lab",
    readTime: "6 min",
  },
  {
    title: "The Rise of Next-Gen Web Architectures",
    slug: "next-gen-web-architectures",
    date: "March 5, 2026",
    category: "Tech Trends",
    excerpt: "From edge computing to serverless neural engines, explore the technologies shaping the future of high-performance websites.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    author: "Tech Team",
    readTime: "4 min",
  },
  {
    title: "Case Study: Scaling a FinTech Start-up with Custom AI",
    slug: "fintech-startup-case-study",
    date: "February 28, 2026",
    category: "Case Study",
    excerpt: "How we implemented a custom RAG system to help a leading FinTech startup automate 90% of their customer support queries.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: "Solutions Architect",
    readTime: "8 min",
  },
];
