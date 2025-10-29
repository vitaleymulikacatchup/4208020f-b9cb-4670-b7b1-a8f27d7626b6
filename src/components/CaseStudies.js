import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl overflow-hidden card-shadow">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Dias</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    A comprehensive digital platform that revolutionizes how businesses manage their operations. 
                    Built with cutting-edge technology and AI-powered features.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">React</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">AI/ML</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div>
                      <div className="text-2xl font-bold">$2,500</div>
                      <div className="text-blue-100 text-sm">Project Value</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">12w</div>
                      <div className="text-blue-100 text-sm">Delivery Time</div>
                    </div>
                  </div>
                </div>

                <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-full max-w-sm card-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">Dashboard Overview</h4>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-purple-500 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;