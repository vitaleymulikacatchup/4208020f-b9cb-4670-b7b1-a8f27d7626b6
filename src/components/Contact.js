import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How can we help? Let's talk
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 card-shadow">
            <div className="text-center mb-8">
              <MessageCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Let's chat
              </h3>
              <p className="text-gray-600">
                Ready to start your project? Get in touch with our team.
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="w-full btn-primary">
                Start Conversation
              </button>
              <p className="text-center text-sm text-gray-500">
                Feel free to drop us a note: contact@sargas.io
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;