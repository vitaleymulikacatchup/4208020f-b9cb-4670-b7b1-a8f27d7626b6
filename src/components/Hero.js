import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'nestjs', color: 'text-red-600' },
    { name: 'mysql', color: 'text-blue-600' },
    { name: 'mongodb', color: 'text-green-600' },
    { name: 'nginx', color: 'text-green-700' },
    { name: 'redis', color: 'text-red-500' },
    { name: 'typescript', color: 'text-blue-500' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-gradient">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-gray-900">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-800 rounded"></div>
                </div>
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-gray-600 font-medium">We use only modern technologies</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tech-badge ${tech.color}`}>
                    #{tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Sphere */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 sphere-3d">
                <img 
                  src="/images/3d-sphere.png" 
                  alt="3D Abstract Sphere" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;