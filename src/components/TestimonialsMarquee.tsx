import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const TestimonialsMarquee: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      company: 'Department of Robotics, IIT Chennai',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'Karthikesh Robotics delivered an exceptional ROS2 workshop for our students. Their practical approach and deep technical knowledge made complex concepts accessible. Highly recommended!',
      rating: 5
    },
    {
      id: '2',
      name: 'Priya Sharma',
      designation: 'Robotics Engineer',
      company: 'Tech Innovations Pvt Ltd',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'The autonomous mobile robot they developed for our warehouse has increased our efficiency by 40%. Outstanding work and professional service throughout the project.',
      rating: 5
    },
    {
      id: '3',
      name: 'Arjun Patel',
      designation: 'Research Scholar',
      company: 'Anna University',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'Their mentorship in ROS2 development was invaluable for my research project. The team is knowledgeable, patient, and always ready to help solve complex problems.',
      rating: 5
    },
    {
      id: '4',
      name: 'Meera Nair',
      designation: 'Lab Coordinator',
      company: 'VIT University',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'The robotics lab setup they provided is world-class. From equipment selection to installation and training, everything was handled professionally.',
      rating: 5
    },
    {
      id: '5',
      name: 'Vikram Singh',
      designation: 'Startup Founder',
      company: 'RoboTech Solutions',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'Working with Karthikesh Robotics was a game-changer for our startup. Their custom robotics solutions helped us launch our product successfully in the market.',
      rating: 5
    },
    {
      id: '6',
      name: 'Anitha Reddy',
      designation: 'Workshop Participant',
      company: 'Final Year Student, SRM University',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'The hands-on robotics workshop was incredibly engaging. I learned more in 3 days than I did in an entire semester. Thank you for the amazing experience!',
      rating: 5
    },
    {
      id: '7',
      name: 'Suresh Babu',
      designation: 'Industry Consultant',
      company: 'Automation Excellence',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'Their expertise in industrial automation is remarkable. The AMR solution they developed has transformed our manufacturing process completely.',
      rating: 5
    },
    {
      id: '8',
      name: 'Kavitha Krishnan',
      designation: 'Research Director',
      company: 'AI Research Institute',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      testimonial: 'The integration of AI with robotics in their solutions is impressive. They understand both theoretical concepts and practical implementation very well.',
      rating: 5
    }
  ];

  // Triple the testimonials for seamless infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <motion.div
      className="flex-shrink-0 w-80 mx-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
      style={{
        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.1))'
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="h-8 w-8 text-green-500 opacity-60" />
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.testimonial}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-green-600 font-medium">{testimonial.designation}</p>
          <p className="text-xs text-gray-500">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-green-500">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with us
          </p>
        </motion.div>
      </div>

      {/* Single Row Scrolling Testimonials */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Row */}
        <motion.div
          className="flex"
          animate={{
            x: [0, -100 * testimonials.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 mb-6">
          Ready to join our satisfied clients?
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.a>
      </motion.div>
    </section>
  );
};

export default TestimonialsMarquee;