import React from 'react';
import { Book, Shield, Heart, Brain, Users, Clock } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Personal Safety Guide",
      description: "Comprehensive guide covering personal safety tips, self-defense techniques, and emergency protocols.",
      link: "#safety-guide"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Expert advice on women's health, nutrition, and preventive care measures.",
      link: "#health"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Mental Health Resources",
      description: "Support resources for mental health, stress management, and emotional well-being.",
      link: "#mental-health"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Connect with support groups and community resources in your area.",
      link: "#community"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Educational Materials",
      description: "Educational resources on women's rights, legal information, and advocacy.",
      link: "#education"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Emergency Planning",
      description: "Guidelines for creating emergency plans and safety protocols.",
      link: "#emergency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:border-primary/50 group"
            >
              <div className="text-primary group-hover:text-secondary transition-colors">
                {resource.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}