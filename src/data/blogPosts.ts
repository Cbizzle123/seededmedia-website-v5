import { BlogPost } from '../types/blog';

// Template blog posts - replace with your actual content
export const blogPosts: BlogPost[] = [
  // Add your blog posts here following this structure:
  // {
  //   id: '1',
  //   title: 'How AI Chatbots Can Transform Your Customer Service',
  //   slug: 'ai-chatbots-transform-customer-service',
  //   excerpt: 'Discover how implementing AI chatbots can revolutionize your customer support, reduce response times, and increase customer satisfaction.',
  //   content: 'Full blog post content goes here...',
  //   author: 'Seeded Media Team',
  //   publishedAt: '2024-01-15',
  //   readTime: 5,
  //   category: 'AI Automation',
  //   tags: ['AI', 'Chatbots', 'Customer Service', 'Automation'],
  //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  //   featured: true
  // }
];

export const blogCategories = [
  { id: '1', name: 'AI Automation', slug: 'ai-automation', description: 'Latest insights on AI and automation', count: 0 },
  { id: '2', name: 'Digital Marketing', slug: 'digital-marketing', description: 'Marketing strategies and tips', count: 0 },
  { id: '3', name: 'SEO', slug: 'seo', description: 'Search engine optimization guides', count: 0 },
  { id: '4', name: 'Social Media', slug: 'social-media', description: 'Social media marketing insights', count: 0 },
  { id: '5', name: 'Web Development', slug: 'web-development', description: 'Website development tips', count: 0 },
  { id: '6', name: 'Email Marketing', slug: 'email-marketing', description: 'Email campaign strategies', count: 0 }
];