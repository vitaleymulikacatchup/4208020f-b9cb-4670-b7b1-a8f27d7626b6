import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-8"></div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/web-development-illustration.png" 
                alt="Web Development" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Mobile Development */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MOBILE DEVELOPMENT</h3>
              <div className="w-16 h-1 bg-primary-600 mx-auto mb-8"></div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/mobile-development-illustration.png" 
                alt="Mobile Development" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center card-shadow">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Get the same high-quality service for a smaller task
            </h3>
            <button className="btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;