import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Rocket, Brain, ArrowRight, MapPin, Clock, Calendar, CheckCircle, Code, Bot, Palette, Layers } from 'lucide-react';

const CareersPage: React.FC = () => {
  const roles = [
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: "ROS 2 Developer",
      description: "Involved in the development and deployment of robotic applications using Robot Operating System 2 (ROS 2).",
      skills: ["ROS 2", "Python/C++", "Linux", "Robotics"]
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Robotics Mentor",
      description: "Contribute to training programs and workshops by mentoring junior students in robotics and automation.",
      skills: ["Teaching", "Robotics", "Communication", "Leadership"]
    },
    {
      icon: <Layers className="h-8 w-8 text-green-500" />,
      title: "Full Stack Developer",
      description: "Develop web-based applications and internal tools to support robotic platforms and operations.",
      skills: ["React", "Node.js", "Database", "API Development"]
    },
    {
      icon: <Palette className="h-8 w-8 text-green-500" />,
      title: "Blender Animator",
      description: "Create 3D models, animations, and simulations for robotics content, training material, and product visualization.",
      skills: ["Blender", "3D Modeling", "Animation", "Creative Design"]
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

  const timeline = [
    {
      date: "16th July 2025",
      event: "Last Date to Apply",
      status: "deadline"
    },
    {
      date: "19th July 2025",
      event: "Shortlisting & Screening",
      status: "process"
    },
    {
      date: "22nd - 25th July 2025",
      event: "General HR Interview",
      status: "process"
    },
    {
      date: "28th - 30th July 2025",
      event: "Technical HR Interview (Final Round)",
      status: "final"
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

          {/* Internship Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-black text-white rounded-2xl p-8 relative overflow-hidden mb-16"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Bot className="w-full h-full" />
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-green-500">3-Month Internship</span> Program
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Pammal, Chennai – 600075</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-gray-300">3 Months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-500" />
                  <div>
                    <p className="font-semibold">Mode</p>
                    <p className="text-gray-300">Offline (Hybrid possible)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8">
                Gain hands-on experience in real-world projects alongside experienced mentors in the field of Robotics and AI.
                Open to any college student from any year or department with a strong interest in the respective domain.
              </p>

              <a
                href="https://forms.gle/HFuLpPmjuNnpPHoR9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 group"
              >
                Apply Now
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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

      {/* Selection Process Timeline */}
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
              Selection <span className="text-green-500">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important dates and selection timeline for the internship program
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="h-5 w-5 text-green-500" />
                          <span className="font-semibold text-green-500">{item.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold">{item.event}</h3>
                      </div>
                    </div>
                    
                    {/* Timeline marker */}
                    <div className="hidden md:flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Important Notes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-700">Eligibility Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Open to any college student from any year or department</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Strong interest in the respective domain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Committed and enthusiastic attitude</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Willing to work in a dynamic startup environment</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Important Notes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Stipend:</strong> Unpaid during internship. Performance-based paid opportunity may follow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Work Mode:</strong> Offline, with flexibility for hybrid or online participation based on mentor's approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Contact:</strong> Shortlisted candidates will be contacted via email or phone after registration closes</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-green-500">Robotics Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us and gain valuable experience in the exciting field of robotics and AI
            </p>
            <a
              href="https://forms.gle/HFuLpPmjuNnpPHoR9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-semibold py-4 px-8 rounded-md transition-all duration-300 group text-lg"
            >
              Apply for Internship
              <ArrowRight className="h-6 w-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;