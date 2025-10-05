import React from 'react';
import { ExternalLink, Calendar, Tag, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link?: string;
}

const PortfolioPage = () => {
  const projects: ProjectProps[] = [
    {
      id: '1',
      title: 'The National Fish & Chip Awards 2026',
      category: 'Event Production & Marketing',
      description: 'Prestigious awards ceremony celebrating excellence in the fish and chip industry. Delivered comprehensive event production including staging, lighting, AV systems, and live presentation hosting. Created engaging social media campaigns and magazine features to promote the event and drive ticket sales.',
      image: '/portfolio image (2).png',
      tags: ['Event Production', 'Live Hosting', 'Social Media', 'Magazine Design', 'Stage Design'],
      date: '2026',
    }
  ];

  const FishChipAwardsProject = () => (
    <div className="mb-20">
      {/* Project Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-4 mb-4">
          <span className="text-sm font-semibold text-green-600 bg-green-100 px-4 py-2 rounded-full">
            Event Production & Marketing
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            2026
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The National Fish & Chip Awards 2026
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Prestigious awards ceremony celebrating excellence in the fish and chip industry. Delivered comprehensive event production including staging, lighting, AV systems, and live presentation hosting. Created engaging social media campaigns and magazine features to promote the event and drive ticket sales.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {['Event Production', 'Live Hosting', 'Social Media', 'Magazine Design', 'Stage Design'].map((tag) => (
            <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center font-medium">
              <Tag className="w-4 h-4 mr-2" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="space-y-6">
        {/* Row 1: Large ceremony photo */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          <img
            src="/526_PLL_FISH_N_CHIPS_AWARDS_CEREMONY_WINNERS_1258-min.jpg"
            alt="Fish & Chip Awards Ceremony"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Row 2: Host and Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/_DSF5304-min.jpg"
              alt="Event Host Presentation"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/cam2_284-min.jpg"
              alt="Stage Production Setup"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Row 3: Social Media & Magazine */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group bg-gray-900">
            <img
              src="/2.jpg"
              alt="Social Media - Tickets on Sale"
              className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
              Social Media
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group bg-gray-900">
            <img
              src="/3.jpg"
              alt="Magazine Feature - Officially Open"
              className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
              Magazine Feature
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl group bg-gray-900">
            <img
              src="/Takeaway of the Year - entry.jpg"
              alt="Social Media - Takeaway Award"
              className="w-full h-[500px] object-contain group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-lg backdrop-blur-sm">
              Social Media
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }: { project: ProjectProps }) => {
    return (
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-green-600 text-lg font-medium">Project Image</div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            View Project
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <a 
                href="/"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful AI automation projects, websites, and digital marketing campaigns 
                that have helped businesses grow and scale efficiently.
              </p>
            </div>

            {/* Featured Project: Fish & Chip Awards */}
            <FishChipAwardsProject />

            {/* Other Projects Grid */}
            {projects.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.id !== '1').map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 border-4 border-green-600 border-dashed rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Coming Soon</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-8">
                  We're currently updating our portfolio with our latest projects. 
                  Check back soon to see our amazing work in AI automation and digital marketing.
                </p>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            ) : null}

            {/* Call to Action */}
            {projects.length > 0 && (
              <div className="text-center mt-16">
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss how we can help you achieve similar results with AI automation and digital marketing.
                  </p>
                  <a 
                    href="/#contact"
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;