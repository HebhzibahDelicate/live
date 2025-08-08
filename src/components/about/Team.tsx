import React, { useState } from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const Team: React.FC = () => {
  const teamValues = [
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Collaborative Excellence",
      description: "Our diverse team of experts works together to deliver innovative robotics solutions."
    },
    {
      icon: <Award className="h-12 w-12 text-green-500" />,
      title: "Technical Expertise",
      description: "Deep knowledge in robotics, AI, and automation with years of industry experience."
    },
    {
      icon: <Target className="h-12 w-12 text-green-500" />,
      title: "Mission Driven",
      description: "Committed to advancing robotics technology and making it accessible to everyone."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-green-500" />,
      title: "Innovation Focus",
      description: "Constantly pushing boundaries to create cutting-edge robotic solutions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Our Team
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A passionate group of robotics engineers, AI specialists, and innovators working together to shape the future of autonomous systems.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamValues.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              <div className="mb-6 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Our <span className="text-green-500">Growing Team</span>
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our passion for robotics and innovation.
            </p>
            <a
              href="/careers"
              className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
