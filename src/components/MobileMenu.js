import React from 'react';
import { X, ChevronDown } from 'lucide-react';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 mobile-menu-overlay"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Contacts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Mobile Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 block">Support and Maintenance</a></li>
              </ul>
            </div>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Feel free to drop us a note:</p>
            <p className="font-medium text-gray-900">contact@sargas.io</p>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">G</span>
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">L</span>
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">C</span>
              </div>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">Up</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;