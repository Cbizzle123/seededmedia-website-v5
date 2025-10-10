import React from 'react';
import { Bot, Workflow, FileText, Share2, Mail, Search, Globe, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that handles customer inquiries 24/7, improving response times and customer satisfaction.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training']
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and optimize business processes with smart automation solutions.',
      features: ['Process Optimization', 'Integration Setup', 'Performance Monitoring']
    },
    {
      icon: FileText,
      title: 'Content Marketing',
      description: 'Content creation with marketing strategy that scale your outreach and growth.',
      features: ['Content Generation', 'Content Scheduling', 'Performance Analytics']
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategy and management to build your brand presence.',
      features: ['Content Planning', 'Community Management', 'Analytics & Reporting']
    },
    {
      icon: Mail,
      title: 'Email Outreach/Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions with personalized messaging.',
      features: ['Campaign Design', 'Automation Sequences', 'A/B Testing']
    },
    {
      icon: Search,
      title: 'SEO Optimisation',
      description: 'Improve your search rankings and organic visibility with data-driven SEO strategies.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimisation']
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites built for performance, user experience, and conversions.',
      features: ['Custom Design', 'Mobile Optimization', 'Speed Optimization']
    },
    {
      icon: Settings,
      title: 'Website Maintenance',
      description: 'Ongoing website support, updates, and optimization to keep your site running smoothly.',
      features: ['Security Updates', 'Performance Monitoring', '24/7 Support']
    }
  ];

  return (
    <section id="services" className="pt-0 pb-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to save you time and money
            through intelligent automation and strategic marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;