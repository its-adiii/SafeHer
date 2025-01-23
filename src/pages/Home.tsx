import React from 'react';
import { Shield, Heart, Phone, Bell, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Empowering Women's
              <span className="text-primary"> Safety & Health</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your trusted companion for safety resources, health information, and emergency assistance.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link 
                to="/support"
                className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl md:py-4 md:text-lg md:px-10"
              >
                Get Help Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:border-primary/50">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety Resources</h3>
              <p className="text-gray-600">Access comprehensive safety guides and emergency protocols.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:border-primary/50">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Information</h3>
              <p className="text-gray-600">Expert advice on women's health and wellness topics.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 hover:border-primary/50">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Immediate assistance and support whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bell className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <h3 className="font-semibold">Police Emergency</h3>
                <p className="text-xl">911</p>
              </button>
              <button className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <h3 className="font-semibold">Women's Helpline</h3>
                <p className="text-xl">1-800-SAFE</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/resources" className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:border-primary/50">
              <Info className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">Personal Safety Guide</h3>
              <p className="text-gray-600 mb-4">Learn essential safety tips and strategies for various situations.</p>
              <span className="text-primary hover:text-secondary flex items-center">
                Read More <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
            <Link to="/resources" className="border rounded-lg p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:border-primary/50">
              <Heart className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-xl font-semibold mb-2">Health & Wellness Tips</h3>
              <p className="text-gray-600 mb-4">Expert advice on maintaining physical and mental well-being.</p>
              <span className="text-primary hover:text-secondary flex items-center">
                Read More <ChevronRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}