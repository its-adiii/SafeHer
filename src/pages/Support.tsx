import React from 'react';
import { Phone, MessageSquare, Video, Calendar } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">24/7 Support Services</h1>
          <p className="text-xl text-gray-600">We're here to help you whenever you need us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
            <h2 className="text-2xl font-bold mb-6">Emergency Support</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <span className="font-semibold">Emergency Hotline</span>
                </div>
                <span className="text-red-600">911</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  <span className="font-semibold">Crisis Helpline</span>
                </div>
                <span className="text-primary">1-800-SAFE</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
            <h2 className="text-2xl font-bold mb-6">Support Options</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold">Chat Support</span>
              </button>
              <button className="w-full flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Video className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold">Video Consultation</span>
              </button>
              <button className="w-full flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Calendar className="h-6 w-6 text-primary mr-3" />
                <span className="font-semibold">Schedule Appointment</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Important Information</h2>
          <div className="prose max-w-none">
            <ul className="list-disc pl-5 space-y-2">
              <li>All calls are confidential and handled by trained professionals</li>
              <li>Support is available in multiple languages</li>
              <li>Free counseling services are available</li>
              <li>We can connect you with local support groups and resources</li>
              <li>Emergency response teams are available 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}