import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Rocket, Brain, ArrowRight, MapPin, Clock, Calendar, CheckCircle, Code, Bot, Palette, Layers, Mail } from 'lucide-react';

const CareersPage: React.FC = () => {
  const roles = [
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: "ROS 2 Developer",
      description: "Develop and deploy robotic applications using Robot Operating System 2 (ROS 2)."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Robotics Mentor",
      description: "Mentor students in robotics and automation through training programs and workshops."
    },
    {
      icon: <Bot className="h-8 w-8 text-green-500" />,
      title: "Robotics Engineer",
      description: "Design and develop robotic systems and automation solutions for various applications."
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Collaborative Environment",
      description: "Work with passionate experts in robotics and AI in a dynamic startup environment"
    },
    {
      icon: <Rocket className="h-12 w-12 text-green-500" />,
      title: "Innovation Focus",
      description: "Push the boundaries of what's possible in robotics and gain hands-on experience"
    },
    {
      icon: <Brain className="h-12 w-12 text-green-500" />,
      title: "Learning & Growth",
      description: "Continuous learning and development opportunities with experienced mentors"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-green-500" />,
      title: "Career Opportunities",
      description: "Performance-based paid opportunities may follow after successful internship completion"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our <span className="text-green-500">Team</span>
            </h1>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of the future of robotics and help shape the next generation of autonomous systems
            </p>
          </motion.div>

        </div>
      </section>

      {/* Available Roles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available <span className="text-green-500">Roles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are hiring for the following roles in our internship program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-500"
              >
                <div className="mb-6">{role.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
                <p className="text-gray-600 mb-6">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join <span className="text-green-500">Our Team?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Joining <span className="text-green-500">Our Team?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              If you're passionate about robotics and want to be part of our innovative team, we'd love to hear from you.
            </p>
            <a
              href="mailto:karthikeshrobotics@gmail.com"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-8 rounded-md transition-all duration-300 group text-lg"
            >
              <Mail className="h-6 w-6 mr-2" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;