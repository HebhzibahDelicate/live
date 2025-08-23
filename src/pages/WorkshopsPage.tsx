import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, MapPin, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';

interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: string;
  description: string;
  level: string;
  price?: string;
  image: string;
  registerLink?: string;
  status: 'completed' | 'upcoming';
  participants?: number;
  duration?: string;
}

const WorkshopsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'previous' | 'upcoming'>('upcoming');

  const workshops: Workshop[] = [
    // Previous Workshop
 {
  id: 'robotics-basics-1hour',
  title: '1-Hour Robotics Workshop',
  date: 'April 15, 2025',
  time: '2:00 PM - 3:00 PM',
  mode: 'Online',
  description: 'Join us for a 1-hour virtual fest on Robotics basics and programming! Perfect for beginners and enthusiasts. Dive into the world of robotics with hands-on demos and valuable insights.',
  level: 'Beginner',
  price: '₹49',
  image: '/assets/workshops/online/workshop1.jpg',
  status: 'completed',
  duration: '1 hour'
},
{
  id: 'ros2-basics-simulations',
  title: 'ROS 2: Basics & Simulations',
  date: 'March 30, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  description: 'Join our interactive 2-hour virtual workshop on ROS2 Basics & Simulations! Designed for beginners and enthusiasts, this session will introduce you to the world of robotics with hands-on ROS2 demos and practical simulation insights.',
  level: 'Beginner',
  price: '₹160',
  image: '/assets/workshops/online/workshop2.jpg',
  status: 'completed',
  duration: '2 hours'
},
{
  id: 'ros2-urdf-control-slam',
  title: 'ROS 2: URDF, Control Systems & SLAM',
  date: 'May 21, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  description: 'Join our interactive 2-hour virtual workshop on creating robot URDFs, control systems, and SLAM with ROS2! This hands-on session will guide you through developing robot models with URDF, implementing effective control architectures, and setting up Simultaneous Localization and Mapping for autonomous navigation.',
  level: 'Intermediate',
  price: '₹99',
  image: '/assets/workshops/online/workshop3.jpg',
  status: 'completed',
  duration: '2 hours'
},
{
  id: 'ros2-basics-simulations-advanced',
  title: 'ROS 2: Basics & Simulations',
  date: 'January 26, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  description: 'Join us for an engaging 2-hour virtual workshop on ROS2 Basics & Simulations. Perfect for beginners and enthusiasts. This session will introduce you to the exciting world of robotics through hands-on ROS2 demos and practical simulation insights.',
  level: 'Beginner',
  price: '₹99',
  image: '/assets/workshops/online/workshop4.jpg',
  status: 'completed',
  duration: '2 hours'
},
{
  id: 'ros2-roadmap-mastery',
  title: 'ROS 2: Complete Roadmap to Mastery',
  date: 'June 29, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  description: 'This hands-on session is designed to help you kickstart your journey into ROS 2 by covering the fundamental concepts, tools, and workflows every beginner needs to know. From understanding ROS 2 architecture and workspaces to building your first nodes and exploring real-world applications, this workshop provides a clear roadmap to mastering ROS 2.',
  level: 'Beginner to Advanced',
  price: '₹150',
  image: '/assets/workshops/online/workshop5.jpg',
  status: 'completed',
  duration: '2 hours'
},
{
  id: 'ros2-robot-simulation-gazebo',
  title: 'ROS 2: Build Robot Simulation in Gazebo',
  date: 'August 31, 2025',
  time: '10:00 AM - 12:00 PM',
  mode: 'Online',
  description: 'This interactive 2-hour virtual workshop is designed to help you kickstart your journey into ROS 2 through hands-on learning. You\'ll explore the essential concepts, tools, and workflows every beginner needs, including ROS 2 architecture, workspaces, and node creation. By the end of the session, you won\'t just understand ROS 2—you\'ll also build and simulate your own robot in Gazebo.',
  level: 'Beginner',
  price: '₹159',
  image: '/assets/workshops/online/workshop6.jpg',
  registerLink: 'https://unstop.com/workshops-webinars/ros-2-lets-build-a-robot-karthikesh-robotics-private-limited-1544315',
  status: 'upcoming',
  duration: '2 hours'
}
  ];

  const previousWorkshops = workshops.filter(w => w.status === 'completed');
  const upcomingWorkshops = workshops.filter(w => w.status === 'upcoming');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm mx-auto"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      {/* Portrait Image Container */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={workshop.image}
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {workshop.status === 'completed' && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed
          </div>
        )}
        {workshop.status === 'upcoming' && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Upcoming
          </div>
        )}
        {workshop.price && (
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-lg font-bold">
            {workshop.price}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-500 rounded-full text-sm font-medium">
            {workshop.level}
          </span>
          {workshop.status === 'completed' && workshop.participants && (
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Users className="h-4 w-4" />
              {workshop.participants}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-3 group-hover:text-green-500 transition-colors leading-tight">
          {workshop.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{workshop.description}</p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Calendar className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="truncate">{workshop.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Clock className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="truncate">{workshop.time}</span>
            {workshop.duration && (
              <span className="text-xs text-gray-500">({workshop.duration})</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Globe className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>{workshop.mode}</span>
          </div>
        </div>

        {workshop.status === 'upcoming' && workshop.registerLink ? (
          <a
            href={workshop.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-900 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
          >
            Register Now
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="w-full bg-gray-100 text-gray-500 font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4" />
            Workshop Completed
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-500">Workshops</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our hands-on workshops and master the latest in robotics technology.
            Learn from industry experts and build real-world projects.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'upcoming'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Upcoming Workshops
            </button>
            <button
              onClick={() => setActiveTab('previous')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'previous'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-500'
              }`}
            >
              Previous Workshops
            </button>
          </div>
        </div>

        {/* Workshop Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
        >
          {activeTab === 'upcoming' && (
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center"
                variants={itemVariants}
              >
                Upcoming Workshops
              </motion.h2>
              {upcomingWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                  {upcomingWorkshops.map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  variants={itemVariants}
                >
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Upcoming Workshops</h3>
                  <p className="text-gray-600">Stay tuned for exciting new workshops coming soon!</p>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'previous' && (
            <div>
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center"
                variants={itemVariants}
              >
                Previous Workshops
              </motion.h2>
              {previousWorkshops.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                  {previousWorkshops.map((workshop) => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  variants={itemVariants}
                >
                  <CheckCircle className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Previous Workshops</h3>
                  <p className="text-gray-600">Our workshop history will appear here.</p>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-black text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Want to Host a <span className="text-green-500">Workshop?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in organizing a robotics workshop at your institution? 
            We provide customized training programs tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkshopsPage;