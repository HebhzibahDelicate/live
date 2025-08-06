import React, { useState, useEffect } from 'react';
import { X, MapPin, Clock, Calendar, Users } from 'lucide-react';

const WorkshopPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden animate-in zoom-in-95 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white/80 rounded-full p-1"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image container for portrait image */}
            <div className="h-80 bg-gray-100">
              <img
                src="/assets/offline.jpg"
                alt="Internship Program"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                We are Hiring !
              </h3>
              <p className="text-gray-600 mb-4">
                Join our comprehensive internship program in Robotics, AI, and Software Development
              </p>
              
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full bg-green-500 hover:bg-green-600 text-black text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Learn More & Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkshopPopup;