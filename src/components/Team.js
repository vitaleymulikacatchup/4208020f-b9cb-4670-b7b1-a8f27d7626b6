import React from 'react';

const Team = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Team Member</h4>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;