import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Spline 3D Animation */}
        <spline-viewer 
          url="https://prod.spline.design/PBx-mrQP6suIxaZD/scene.splinecode"
          className="absolute inset-0 w-full h-full opacity-60"
        ></spline-viewer>
        
        {/* White overlay for text readability */}
        <div className="absolute inset-0 bg-white/50 to bg-white/70"></div>
      </div>
      
      {/* Subtle background elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-green-100/20 to-green-200/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-green-50/15 to-green-100/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight text-shadow-lg">
            Scale Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800 block mt-2 relative">
              Smart Automation
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full"></div>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium text-shadow">
            Transform your digital presence with AI-driven chatbots, intelligent workflow automation, 
            and data-driven marketing solutions that scale with your ambitions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#contact" className="group relative bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a href="/portfolio" className="group flex items-center text-gray-700 hover:text-green-600 font-semibold text-lg transition-all duration-300">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-full flex items-center justify-center mr-4 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                <Play className="w-5 h-5 text-green-600 ml-0.5" />
              </div>
              <span className="border-b-2 border-transparent group-hover:border-green-600 transition-all duration-300">
                View Our Work
              </span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">150+</div>
              <div className="text-sm text-gray-600 font-medium">Projects</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">80+</div>
              <div className="text-sm text-gray-600 font-medium">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 text-shadow">5+</div>
              <div className="text-sm text-gray-600 font-medium">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;