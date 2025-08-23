import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Calendar, Users, ArrowRight, Globe } from 'lucide-react';

interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: string;
  description: string;
  level: string;
  price: string;
  image: string;
  registerLink: string;
}

const WorkshopPopup: React.FC = () => {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(true);
=======
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 4f10db866962d072ee3d256457b7e3f077bf6815
  const [hasShown, setHasShown] = useState(false);

  // Workshop data - you can move this to a separate file or fetch from API
  const currentWorkshop: Workshop = {
<<<<<<< HEAD
    id: 'ros2-robot-simulation-gazebo',
    title: 'ROS 2: Basics, Roadmap to Pro',
    date: 'August 31, 2025',
    time: '10:00 AM - 12:00 PM',
    mode: 'Online',
    description: 'This interactive 2-hour virtual workshop is designed to help you kickstart your journey into ROS 2 through hands-on learning. You\'ll explore the essential concepts, tools, and workflows every beginner needs, including ROS 2 architecture, workspaces, and node creation. By the end of the session, you won\'t just understand ROS 2—you\'ll also build and simulate your own robot in Gazebo.',
   
    level: 'Intermediate',
    price: '₹159',
    image: '/assets/workshops/online/workshop6.jpg',
    registerLink: 'https://unstop.com/workshops-webinars/ros-2-lets-build-a-robot-karthikesh-robotics-private-limited-1544315'
=======
    id: 'ros2-basics-roadmap',
    title: 'ROS 2: Basics, Roadmap to Pro',
    date: 'June 29, 2025',
    time: '9:30 AM - 12:00 PM',
    mode: 'Online',
    description: 'Dive into ROS2 Basics and Complete Road map for ROS2 Beginner to Pro',
    level: 'Intermediate',
    price: '₹150',
    image: '/assets/workshop.png',
    registerLink: 'https://unstop.com/o/frM5Agm?utm_medium=Share&utm_source=shortUrl'
>>>>>>> 4f10db866962d072ee3d256457b7e3f077bf6815
  };

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('workshopPopupShown');
    
    if (!popupShown && !hasShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('workshopPopupShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    window.open(currentWorkshop.registerLink, '_blank');
    closePopup();
  };

  // Don't render if no workshop or already shown
  if (!currentWorkshop || hasShown) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className="relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Workshop Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={currentWorkshop.image}
                  alt={currentWorkshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {currentWorkshop.level}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-500">
                  {currentWorkshop.price}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  Limited Seats!
                </span>
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {currentWorkshop.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {currentWorkshop.description}
              </p>

              {/* Workshop Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span>{currentWorkshop.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>{currentWorkshop.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="h-5 w-5 text-green-500" />
                  <span>{currentWorkshop.mode}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleRegister}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Register Now
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={closePopup}
                  className="px-6 py-3 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Later
                </button>
              </div>

              {/* Additional Info */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🎯 Early bird offer • 🔥 Limited time only
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkshopPopup;